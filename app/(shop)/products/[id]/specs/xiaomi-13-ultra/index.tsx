import clsx from 'clsx';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Xiaomi13UltraSpecs() {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <div
        className={clsx(
          'flex items-center justify-between',
          styles.section,
          styles.section1
        )}
      >
        <div>
          <Image
            src={
              'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-ultraeyyn4y/specs/4363.png'
            }
            alt={''}
            width={463}
            height={92}
          />
          <div className={styles.features}>
            徕卡光学全焦段四摄
            <br />
            一英寸可变光圈主摄｜75mm 徕卡专业长焦
            <br />
            120mm 徕卡专业超长焦｜122° 徕卡超低畸变广角
            <br />
            专业 2K 超色准屏
            <br />
            第二代骁龙®8移动平台｜动态性能调度 2.0
            <br />
            LPDDR5X 满血版 + UFS 4.0 + FBO 焕新存储
            <br />
            5000mAh 大电量｜小米澎湃电池管理系统
            <br />
            小米澎湃 P2 快充芯片｜小米澎湃 G1 电池管理芯片
            <br />
            Mi IceLoop 小米环形冷泵
            <br />
            90W 小米澎湃有线秒充
            <br />
            50W Pro 小米澎湃无线秒充｜反向充电
            <br />
            立体声双扬声器
            <br />
            康宁大猩猩玻璃 Victus
            <br />
            IP68级防尘防水*
          </div>
        </div>
        <Image
          src={
            'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-ultraeyyn4y/specs/99999.png'
          }
          alt={''}
          width={628}
          height={396}
          style={{ width: 568 }}
        />
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>外观尺寸</div>
        <div className={styles.content}>
          <div className={styles.descriptions}>
            长度：163.18mm
            <br />
            宽度：74.64mm
            <br />
            厚度：9.06mm
            <br />
            重量：227g
            <br />
            <br />
          </div>
          <div className={styles.remark}>
            *以上数据为小米实验室测试数据，依据行业内测量方式不同，实际结果可能略有差异。
          </div>
          <Image
            src={
              'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-ultraeyyn4y/specs/4028.png'
            }
            alt={''}
            width={764}
            height={363}
            style={{ width: 687, marginTop: 40 }}
          />
        </div>
      </div>

      <div className={clsx(styles.section, 'flex justify-between')}>
        <div className={styles.title}>内存容量</div>
        <div className={styles.content}>
          <div className={styles.subtitle}>16GB+1TB 最高可选</div>
          <div className={styles.descriptions}>
            运行内存：12GB / 16GB LPDDR5X 高速内存（8533Mbps）
            <br />
            机身存储：256GB / 512GB / 1TB UFS 4.0 高速存储
            <br />
            <br />
          </div>
          <div className={styles.remark}>
            *
            实际可用容量会由于诸多因素而减少并有所差异：由于操作系统运行占据了部分内存（RAM），实际可用空间小于标识内存容量；由于安装操作系统
            <br />
            &nbsp;&nbsp;和预装的程序占据了部分闪存（ROM），实际可用存储空间小于标识闪存容量。
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>移动平台</div>
        <div className={styles.content}>
          <div className={styles.subtitle}>第二代骁龙®8移动平台</div>
          <div className={styles.descriptions}>
            SoC 工艺：台积电 4nm 工艺制程
            <br />
            CPU 主频：八核处理器，最高主频可达：3.19GHz
            <br />
            GPU ：Adreno™ GPU 图形处理器
            <br />
            AI：高通 AI 引擎
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>屏幕显示</div>
        <div className={styles.content}>
          <Image
            src={
              'https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomi-13-ultraeyyn4y/specs/3935.png'
            }
            alt={''}
            width={468}
            height={219}
            style={{ width: 420, marginBottom: 30 }}
          />
          <div className={styles.subtitle}>6.73 英寸 2K 专业原色屏</div>
          <div className={styles.descriptions}>
            类型：OLED 双曲柔性屏
            <br />
            分辨率： 3200 x 1440
            <br />
            显示帧率：最高 120Hz
            <br />
            触控采样率：最高 240Hz
            <br />
            色域：支持DCI- P3广色域
            <br />
            峰值亮度：2600nit
          </div>
          <div className={styles.descriptions} style={{ marginTop: 40 }}>
            专业原色屏｜LTPO丨12bit丨DCI-P3｜经典护眼 / 纸质护眼｜360°
            感光｜阳光屏｜
            <br />
            自动亮度2.0｜AI 大师画质引擎｜超薄屏下指纹｜暗光解锁｜心率检测
            <br />
            HDR10 | HDR10+ | Dolby Vision
            <br />
            玻璃盖板：康宁® 大猩猩® 玻璃 Victus™
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>续航与充电</div>
        <div className={styles.content}>
          <div className={styles.subtitle}>5000mAh(typ) / 4880mAh(min)</div>
          <div className={styles.descriptions}>
            内置单电芯高能量密度电池，不可拆卸
            <br />
            USB Type-C 双面充电接口
            <br />
            手机支持 QC4 / QC3+ / QC3.0 / QC2.0 / PD3.0 /PD2.0 快充协议 / MI FC
            2.0 快充
            <br />
            90W 小米澎湃有线秒充 / 50W Pro 小米澎湃无线秒充 / 无线反充
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>影像系统</div>
        <div className={styles.content}>
          <div className={styles.subtitle}>徕卡光学全焦段四摄</div>
          <div className={styles.descriptions}>
            一英寸可变光圈主摄：50MP｜Sony&#39;s
            IMX989｜超大感光元件｜f/1.9，f/4.0 两挡可变光圈｜
            <br />
            等效 23mm 焦距｜支持四合一 3.2μm 大像素输出｜HyperOIS 超级光学防抖｜
            <br />
            Octa-PD 相位对焦｜8P 镀膜
            <br />
            <br />
          </div>
          <div className={styles.descriptions}>
            徕卡专业长焦：50MP｜Sony’s IMX858｜f/1.8 光圈｜
            <br />
            等效 75mm 焦距｜支持 OIS 光学防抖｜支持 Zoom EIS 防抖
            <br />
            <br />
          </div>
          <div className={styles.descriptions}>
            徕卡专业超长焦：50MP｜Sony’s IMX858｜f/3.0 光圈｜等效 120mm
            焦距｜支持 OIS 光学防抖｜
            <br />
            支持 Zoom EIS 防抖
            <br />
            <br />
          </div>
          <div className={styles.descriptions}>
            徕卡超广角：50MP｜Sony’s IMX858｜f/1.8 光圈｜等效 12mm 焦距｜122°
            超广视角｜
            <br />
            AF 自动对焦｜5cm 超级微距
            <div
              className={styles.remark}
              style={{ marginTop: 10, lineHeight: '20px' }}
            >
              *
              50MP为传感器物理像素数，实际照片与视频使用像素数因模式不同略有差异，请以实际为准。
              <br />*
              各镜头焦距，为默认模式下等效焦距数字，与物理等效焦距可能存有差异，请以实际为准。
              <br />
              <br />
            </div>
          </div>
          <div className={styles.descriptions}>
            徕卡原生双画质｜杜比视界｜大师镜头包｜万物追焦｜运动抓拍｜
            微电影｜人像模式｜全景模式｜ 萌拍｜
            <br />
            专业模式｜延时摄影｜街拍｜导演模式｜超级夜景
            2.0｜文档模式｜超级月亮｜慢动作拍摄｜AI 水印｜
            <br />
            长曝光｜AI 相机｜电影模式｜人像虚化调节｜AI
            美颜｜身份证影印模式｜语音字幕｜视频滤镜｜视频美颜｜
            <br />
            视频超级防抖｜动态照片｜倒计时拍照｜水平仪｜定时连拍｜面部识别｜HDR｜自定义水印｜声控拍照
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>网络频段</div>
        <div className={styles.content}>
          <div className={styles.subtitle}>双卡5G丨全网通 8.0</div>
          <div className={styles.descriptions}>
            支持 双 Nano 卡槽， 不限运营商均可 5G 驻网①
            <br />
            支持移动 / 联通 / 电信 / 广电② 5G/4G/3G/2G③
            <br />
            支持双卡双通，双卡高清语音④
          </div>
          <div className={styles.remark} style={{ margin: '10px 0' }}>
            注①：是否支持 5G 取决于当地运营商网络
            ；当使用两张电信卡时，非上网卡需要开通高清语音业务，未开通或者当地网络不支持高清语音业务
            <br />
            <span style={{ display: 'inline-block', textIndent: 36 }}>
              则无法使用；
            </span>
            <br />
            注②：广电不支持2G和3G网络；广电不支持彩信业务；
            <br />
            注③：不支持 TD-SCDMA 制式（移动 3G）；不支持CDMA 2000 EVDO
            制式（电信 3G）；
            <br />
            注④：双卡双通仅支持SA模式下5G+5G和5G+4G的部分频段组合，支持移动 /
            联通 / 电信 / 广电的高清语音业务， 实际使用情况取决于运营
            <br />
            <span style={{ display: 'inline-block', textIndent: 36 }}>
              商当地网络和业务部署；
            </span>
          </div>
          <div className={styles.subtitle} style={{ marginTop: 40 }}>
            支持频段
          </div>
          <div className={styles.descriptions}>
            5G：n1 / n3 / n5 / n8 /
            n28a（上行:703MHz-733MHz,下行:758MHz-788MHz） / n38 / n40 / n41 /
            <br />
            n77 / n78 / n79
            <br />
            4G：FDD-LTE：B1 / B3 / B4 / B5 / B7 / B8 / B12 / B17 /B18 / B19 /
            B26
            <br />
            TDD-LTE：B34 / B38 / B39 / B40 / B41 / B42
          </div>
          <div className={styles.remark} style={{ margin: '10px 0' }}>
            注：LTE B41（2496-2690 194MHz）;
          </div>
          <div className={styles.descriptions}>
            3G：WCDMA：B1 / B4 / B5 / B6 / B8 / B19
            <br />
            2G：GSM：B3 / B5 / B8；CDMA 1X：BC0
            <br />
            支持 4×4 MIMO 天线技术 / HPUE / HO RxD
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>数据连接</div>
        <div className={styles.content}>
          <div className={styles.descriptions}>
            WLAN 协议： WiFi 6 增强版，WiFi 5，WiFi 4 以及 802.11a / b / g<br />
            WLAN 频率： 2.4G WiFi | 5G WiFi
            <br />
            支持2x2 MIMO，8x8 Sounding for MU-MIMO，WiFi
            Direct，Miracast，高频并发技术
            <br />
            高通FastConnect 7800
            <br />
            蓝牙：Bluetooth 5.3，Dual-Bluetooth
            <br />
            支持 AAC / LDAC / LHDC 5.0
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>多功能NFC</div>
        <div className={styles.content}>
          <div className={styles.descriptions}>
            在钱包App开通NFC相关服务后，通过双击电源键可使用交通卡、Mi
            Pay、门卡、车钥匙等功能。
            <br />
            <br />
            交通卡：支持 300+ 座城市，支持 40+
            张公交卡免费从旧手机迁移至新手机。（交通卡支持城市由于技术条件、
            <br />
            城市等有所差异，以实际情况为准；刷卡终端可用范围及乘车优惠以当地政府及运营企业发布为准。）
            <br />
            Mi
            Pay：支持线上APP支付，线下刷卡、二维码支付、银联标签碰一碰支付。二维码支付支持银联标准二维码的主扫
            <br />
            及被扫支付，支付宝、微信等标准的收款二维码主扫支付。
            <br />
            门卡：实体门卡、智能门锁、社区门卡、自定义空白卡。（仅能模拟频段为
            13.56MHz 的门卡，有门卡功能
            <br />
            的银行卡和带有储值消费、公交消费等功能的门卡即使模拟成功，这些卡片也不具备银行、公交等功能）
            <br />
            车钥匙：支持手机NFC解闭锁、启动引擎等功能。
            <br />
            <br />
            具体支持的城市数量、城市名称、银行、卡片数量、车钥匙合作车型等，以实际情况为准。
            <br />
            进一步了解请参阅（https://www.mipay.com）
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>导航定位</div>
        <div className={styles.content}>
          <div className={styles.descriptions}>
            北斗: B1I + B1C+ B2a｜GPS: L1 + L5｜Galileo: E1 + E5a
            <br />
            GLONASS: G1｜QZSS: L1 + L5｜NavIC: L5
            <br />
            AGNSS｜数据网络定位丨Wi-Fi 网络定位丨Sensor辅助定位
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>视频音频</div>
        <div className={styles.content}>
          <div className={styles.descriptions}>
            MP3, FLAC, APE, AAC, OGG, WAV, AMR, AWB
            <br />
            Hi-Res & Hi-Res Audio Wireless
            认证丨立体声双扬声器｜杜比全景声丨空间音频丨音频分享丨实时耳返丨
            <br />
            微信/QQ通话录音丨高清录音2.0
            <br />
            MP4，MKV，WEBM，3GP 播放
            <br />
            HDR 10, HDR 10+, Dolby Vision 视频内容时支持高动态范围显示
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>传感器</div>
        <div className={styles.content}>
          <div className={styles.descriptions}>
            距离感应器｜屏下环境光（色温）传感器｜后置环境光（色温）传感器｜加速度传感器｜陀螺仪｜
            <br />
            电子罗盘｜X轴线性马达｜红外线遥控器｜flicker传感器｜激光对焦传感器｜气压计
          </div>
        </div>
      </div>

      <div className={clsx('flex justify-between', styles.section)}>
        <div className={styles.title}>操作系统</div>
        <div className={styles.content}>
          <div className={styles.subtitle}>MIUI 14</div>
        </div>
      </div>

      <div
        className={clsx(styles.section, 'flex justify-between')}
        style={{ borderBottom: 'none' }}
      >
        <div className={styles.title}>包装清单</div>
        <div className={styles.content}>
          <div className={styles.descriptions}>
            手机主机丨电源适配器丨USB Type-C
            数据线丨手机保护壳丨屏幕保护膜（出厂贴在手机上）丨插针丨
            说明书（含三包凭证）｜影像印制服务卡
          </div>
          <div className={styles.remark}>
            *此清单仅针对整机包装进行说明，根据销售套餐不同，整机包装之外所提供的配件套装略有不同，以购买时用户选择为准。
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#111' }}>
        <div className={styles.section}>
          <div className={styles.remark} style={{ color: '#797979' }}>
            特别说明：
            <br />
            <br />
            *内存与容量方面，实际可用容量会由于诸多因素而减少并有所差异：由于操作系统运行占据了部分内存（RAM），实际可用空间小于标识内存容量；由于安装操作系统和预装的程序占据部分闪存（ROM），
            <br />
            实际可用存储空间小于标识闪存容量。
            <br />
            <br />
            *充电方面，速度、时长等数据，均为我司实验室数据，实际情况会因测试软件版本、具体测试环境不同而略有差异。最终以实际使用时长为准。
            <br />
            <br />
            *本网站提供的屏幕图和产品说明展示图，均为参考示意图，实际情况以实物为准。
            <br />
            <br />
            *产品图片以及型号、数据、功能、性能、规格参数、用户界面和其他产品信息等仅供参考，小米有可能对上述内容进行改进，具体信息请参照产品实物、产品说明书。除非经特殊说明，本网站中所涉及的数据
            <br />
            均为小米内部测试结果，涉及的对比均为与小米产品相比较。
            <br />
            <br />
            *Xiaomi 13 Ultra
            可防溅、防水、防尘，在受控实验室条件下经测试，其效果在 IEC 60529
            标准下达到 IP68 级别 (在最深 1.5 米的水下停留时间最长可达 30
            分钟)。防溅、防水、防尘功能并非永久有效，
            <br />
            防护性能可能会因日常磨损而下降。请勿为潮湿状态下的手机充电。由于浸入液体而导致的损坏不在保修范围之内。
            <br />
            <br />
            *页面中所对比的一般手机，均为小米自有手机。产品站非特别指出，均为我司实验室数据、设计技术参数及供应商提供数据，全站数据实际情况会因测试软件版本、具体测试环境、具体版本不同，而略有
            <br />
            差异。全站所展示结构图片，均为功能示意图，并非绝对实际结构，最终以实物为准。
            <br />
            <br />
            *记录位置信息方面。这一信息将在照片文件夹及照片水印中可见，并且保存在照片的属性信息中。可通过设备相机设置关闭这一功能。
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
