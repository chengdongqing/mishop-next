import Image from 'next/image';
import Securities from './securities';

export default function SiteInfo() {
  return (
    <section className={'bg-primary py-[30px]'}>
      <div className={'w-primary flex'}>
        <Image
          src={'/logo.png'}
          alt={'logo'}
          width={192}
          height={192}
          className={'mr-5 h-[56] w-[56]'}
        />
        <div className={'text-xs'}>
          <Navs />
          <Remarks />
          <Securities />
        </div>
      </div>
      <Slogan />
    </section>
  );
}

function Slogan() {
  return (
    <div
      className={
        'mt-[30px] h-[19px] w-full bg-[url("https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/global/slogan2020.png")] bg-center bg-no-repeat'
      }
    />
  );
}

function Remarks() {
  return (
    <p className={'text-[#b0b0b0]'}>
      © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号
      京网文[2023]0169-004号
      <br />
      （京）网械平台备字（2018）第00005号 药品医疗器械网络信息服务备案
      (京)网药械信息备字（2024）第00478号 营业执照 医疗器械质量公告
      <br />
      增值电信业务经营许可证编号：京B2-20180851 网络食品经营备案
      京食药网食备202010048 食品经营许可证 新出发京批字第直220280号
      <br />
      违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉
      本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
    </p>
  );
}

function Navs() {
  return (
    <nav>
      <ul className={'flex flex-wrap items-center'}>
        <NavItem title={'小米商城'} href={'https://www.mi.com/shop'} />
        <Sep />
        <NavItem title={'小米澎湃OS'} href={'https://hyperos.mi.com/'} />
        <Sep />
        <NavItem title={'米家'} href={'https://home.mi.com/index.html'} />
        <Sep />
        <NavItem title={'多看'} href={'https://www.duokan.com/'} />
        <Sep />
        <NavItem title={'游戏'} href={'https://game.xiaomi.com/'} />
        <Sep />
        <NavItem title={'音乐'} href={'https://www.mi.com/music'} />
        <Sep />
        <NavItem
          title={'政企服务'}
          href={'https://b.mi.com/?client_id=180100031058&amp;masid=17409.0358'}
        />
        <Sep />
        <NavItem title={'小米天猫店'} href={'https://xiaomi.tmall.com/'} />
        <Sep />
        <NavItem
          title={'小米集团隐私政策'}
          href={'https://privacy.mi.com/all/zh_CN/'}
        />
        <Sep />
        <NavItem
          title={'小米公司儿童信息保护规则'}
          href={
            'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f516fe9e2c01.html'
          }
        />
        <Sep />
        <NavItem
          title={'小米商城隐私政策'}
          href={'https://m.mi.com/support/module?id=63&amp;headless=1'}
        />
        <Sep />
        <NavItem
          title={'小米商城用户协议'}
          href={'https://www.mi.com/aptitude/list?id=62'}
        />
        <Sep />
        <NavItem title={'问题反馈'} href={'https://static.mi.com/feedback/'} />
        <Sep />
        <NavItem title={'Select Location'} />
        <NavItem
          title={'北京互联网法院法律服务工作站'}
          href={'https://www.mi.com/beihu'}
        />
        <Sep />
        <NavItem title={'中国消费者协会'} href={'https://www.cca.org.cn/'} />
        <Sep />
        <NavItem title={'北京市消费者协会'} href={'https://www.bj315.org/'} />
      </ul>
    </nav>
  );
}

function NavItem({ title, href }: { title: string; href?: string }) {
  return (
    <li>
      <a
        rel={'nofollow'}
        target={'_blank'}
        href={href}
        className={'hover:text-primary cursor-pointer text-[#757575]'}
      >
        {title}
      </a>
    </li>
  );
}

function Sep() {
  return <div className={'mx-1 text-xs text-[#b0b0b0]'}>|</div>;
}
