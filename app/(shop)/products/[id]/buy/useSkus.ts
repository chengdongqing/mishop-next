import { arrayToObject } from '@/app/lib/utils';
import { ProductSku } from '@/app/types/product';
import useSetState from '@/hooks/useSetState';
import { useCallback, useMemo } from 'react';

export default function useSkus(skus: ProductSku[]) {
  const [activeSkus, setActiveSkus] = useSetState(() => {
    return arrayToObject(skus[0].attributes);
  });

  const findSku = useCallback(
    (moreSkus = {}) => {
      const fullSkus = Object.assign({}, activeSkus, moreSkus);
      return skus.find((item) => {
        return item.attributes.every((item1) => {
          return fullSkus[item1.name] === item1.value;
        });
      });
    },
    [activeSkus, skus]
  );

  const categories = useMemo(() => {
    return skus
      .reduce((sum: string[], item) => {
        item.attributes
          .map((item) => item.name)
          .forEach((name) => {
            if (!sum.includes(name)) {
              sum.push(name);
            }
          });
        return sum;
      }, [])
      .map((item, index) => ({
        name: item,
        children: skus
          .reduce((sum: string[], item1) => {
            item1.attributes.forEach((item2) => {
              if (item2.name === item && !sum.includes(item2.value)) {
                sum.push(item2.value);
              }
            });
            return sum;
          }, [])
          .filter((item1) => {
            return (
              index === 0 ||
              findSku({
                [item]: item1
              })
            );
          })
      }))
      .filter((item) => {
        return item.children.length && activeSkus[item.name];
      });
  }, [activeSkus, findSku, skus]);

  const activeSku = useMemo(findSku, [findSku]);

  function switchSku(name: string, value: string) {
    const attrs = skus.find((item) => {
      return item.attributes.some(
        (item3) => item3.name === name && item3.value === value
      );
    })?.attributes;
    if (attrs) {
      if (!findSku({ [name]: value })) {
        const sku = arrayToObject(attrs);
        setActiveSkus(sku, true);
      } else {
        setActiveSkus({
          [name]: value
        });
      }
    }
  }

  return { categories, activeSkus, activeSku, switchSku };
}
