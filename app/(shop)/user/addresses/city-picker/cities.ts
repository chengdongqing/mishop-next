export interface City {
  name: string;
  code: string;
  children?: City[];
}

const cities: City[] = [
  {
    name: '北京',
    code: '110000',
    children: [
      {
        name: '北京市',
        code: '120100',
        children: [
          {
            name: '东城区',
            code: '110101'
          },
          {
            name: '西城区',
            code: '110102'
          },
          {
            name: '朝阳区',
            code: '110105'
          },
          {
            name: '丰台区',
            code: '110106'
          },
          {
            name: '石景山区',
            code: '110107'
          },
          {
            name: '海淀区',
            code: '110108'
          },
          {
            name: '门头沟区',
            code: '110109'
          },
          {
            name: '房山区',
            code: '110111'
          },
          {
            name: '通州区',
            code: '110112'
          },
          {
            name: '顺义区',
            code: '110113'
          },
          {
            name: '昌平区',
            code: '110114'
          },
          {
            name: '大兴区',
            code: '110115'
          },
          {
            name: '怀柔区',
            code: '110116'
          },
          {
            name: '平谷区',
            code: '110117'
          },
          {
            name: '密云区',
            code: '110118'
          },
          {
            name: '延庆区',
            code: '110119'
          }
        ]
      }
    ]
  },
  {
    name: '天津',
    code: '120000',
    children: [
      {
        name: '天津市',
        code: '120100',
        children: [
          {
            name: '和平区',
            code: '120101'
          },
          {
            name: '河东区',
            code: '120102'
          },
          {
            name: '河西区',
            code: '120103'
          },
          {
            name: '南开区',
            code: '120104'
          },
          {
            name: '河北区',
            code: '120105'
          },
          {
            name: '红桥区',
            code: '120106'
          },
          {
            name: '东丽区',
            code: '120110'
          },
          {
            name: '西青区',
            code: '120111'
          },
          {
            name: '津南区',
            code: '120112'
          },
          {
            name: '北辰区',
            code: '120113'
          },
          {
            name: '武清区',
            code: '120114'
          },
          {
            name: '宝坻区',
            code: '120115'
          },
          {
            name: '滨海新区',
            code: '120116'
          },
          {
            name: '宁河区',
            code: '120117'
          },
          {
            name: '静海区',
            code: '120118'
          },
          {
            name: '蓟州区',
            code: '120119'
          }
        ]
      }
    ]
  },
  {
    name: '河北',
    code: '130000',
    children: [
      {
        name: '石家庄市',
        code: '130100',
        children: [
          {
            name: '长安区',
            code: '130102'
          },
          {
            name: '桥西区',
            code: '130104'
          },
          {
            name: '新华区',
            code: '130105'
          },
          {
            name: '井陉矿区',
            code: '130107'
          },
          {
            name: '裕华区',
            code: '130108'
          },
          {
            name: '藁城区',
            code: '130109'
          },
          {
            name: '鹿泉区',
            code: '130110'
          },
          {
            name: '栾城区',
            code: '130111'
          },
          {
            name: '井陉县',
            code: '130121'
          },
          {
            name: '正定县',
            code: '130123'
          },
          {
            name: '行唐县',
            code: '130125'
          },
          {
            name: '灵寿县',
            code: '130126'
          },
          {
            name: '高邑县',
            code: '130127'
          },
          {
            name: '深泽县',
            code: '130128'
          },
          {
            name: '赞皇县',
            code: '130129'
          },
          {
            name: '无极县',
            code: '130130'
          },
          {
            name: '平山县',
            code: '130131'
          },
          {
            name: '元氏县',
            code: '130132'
          },
          {
            name: '赵县',
            code: '130133'
          },
          {
            name: '晋州市',
            code: '130183'
          },
          {
            name: '新乐市',
            code: '130184'
          }
        ]
      },
      {
        name: '唐山市',
        code: '130200',
        children: [
          {
            name: '路南区',
            code: '130202'
          },
          {
            name: '路北区',
            code: '130203'
          },
          {
            name: '古冶区',
            code: '130204'
          },
          {
            name: '开平区',
            code: '130205'
          },
          {
            name: '丰南区',
            code: '130207'
          },
          {
            name: '丰润区',
            code: '130208'
          },
          {
            name: '曹妃甸区',
            code: '130209'
          },
          {
            name: '滦县',
            code: '130223'
          },
          {
            name: '滦南县',
            code: '130224'
          },
          {
            name: '乐亭县',
            code: '130225'
          },
          {
            name: '迁西县',
            code: '130227'
          },
          {
            name: '玉田县',
            code: '130229'
          },
          {
            name: '遵化市',
            code: '130281'
          },
          {
            name: '迁安市',
            code: '130283'
          }
        ]
      },
      {
        name: '秦皇岛市',
        code: '130300',
        children: [
          {
            name: '海港区',
            code: '130302'
          },
          {
            name: '山海关区',
            code: '130303'
          },
          {
            name: '北戴河区',
            code: '130304'
          },
          {
            name: '抚宁区',
            code: '130306'
          },
          {
            name: '青龙满族自治县',
            code: '130321'
          },
          {
            name: '昌黎县',
            code: '130322'
          },
          {
            name: '卢龙县',
            code: '130324'
          }
        ]
      },
      {
        name: '邯郸市',
        code: '130400',
        children: [
          {
            name: '邯山区',
            code: '130402'
          },
          {
            name: '丛台区',
            code: '130403'
          },
          {
            name: '复兴区',
            code: '130404'
          },
          {
            name: '峰峰矿区',
            code: '130406'
          },
          {
            name: '邯郸县',
            code: '130421'
          },
          {
            name: '临漳县',
            code: '130423'
          },
          {
            name: '成安县',
            code: '130424'
          },
          {
            name: '大名县',
            code: '130425'
          },
          {
            name: '涉县',
            code: '130426'
          },
          {
            name: '磁县',
            code: '130427'
          },
          {
            name: '肥乡县',
            code: '130428'
          },
          {
            name: '永年县',
            code: '130429'
          },
          {
            name: '邱县',
            code: '130430'
          },
          {
            name: '鸡泽县',
            code: '130431'
          },
          {
            name: '广平县',
            code: '130432'
          },
          {
            name: '馆陶县',
            code: '130433'
          },
          {
            name: '魏县',
            code: '130434'
          },
          {
            name: '曲周县',
            code: '130435'
          },
          {
            name: '武安市',
            code: '130481'
          }
        ]
      },
      {
        name: '邢台市',
        code: '130500',
        children: [
          {
            name: '桥东区',
            code: '130502'
          },
          {
            name: '桥西区',
            code: '130503'
          },
          {
            name: '邢台县',
            code: '130521'
          },
          {
            name: '临城县',
            code: '130522'
          },
          {
            name: '内丘县',
            code: '130523'
          },
          {
            name: '柏乡县',
            code: '130524'
          },
          {
            name: '隆尧县',
            code: '130525'
          },
          {
            name: '任县',
            code: '130526'
          },
          {
            name: '南和县',
            code: '130527'
          },
          {
            name: '宁晋县',
            code: '130528'
          },
          {
            name: '巨鹿县',
            code: '130529'
          },
          {
            name: '新河县',
            code: '130530'
          },
          {
            name: '广宗县',
            code: '130531'
          },
          {
            name: '平乡县',
            code: '130532'
          },
          {
            name: '威县',
            code: '130533'
          },
          {
            name: '清河县',
            code: '130534'
          },
          {
            name: '临西县',
            code: '130535'
          },
          {
            name: '南宫市',
            code: '130581'
          },
          {
            name: '沙河市',
            code: '130582'
          }
        ]
      },
      {
        name: '保定市',
        code: '130600',
        children: [
          {
            name: '竞秀区',
            code: '130602'
          },
          {
            name: '莲池区',
            code: '130606'
          },
          {
            name: '满城区',
            code: '130607'
          },
          {
            name: '清苑区',
            code: '130608'
          },
          {
            name: '徐水区',
            code: '130609'
          },
          {
            name: '涞水县',
            code: '130623'
          },
          {
            name: '阜平县',
            code: '130624'
          },
          {
            name: '定兴县',
            code: '130626'
          },
          {
            name: '唐县',
            code: '130627'
          },
          {
            name: '高阳县',
            code: '130628'
          },
          {
            name: '容城县',
            code: '130629'
          },
          {
            name: '涞源县',
            code: '130630'
          },
          {
            name: '望都县',
            code: '130631'
          },
          {
            name: '安新县',
            code: '130632'
          },
          {
            name: '易县',
            code: '130633'
          },
          {
            name: '曲阳县',
            code: '130634'
          },
          {
            name: '蠡县',
            code: '130635'
          },
          {
            name: '顺平县',
            code: '130636'
          },
          {
            name: '博野县',
            code: '130637'
          },
          {
            name: '雄县',
            code: '130638'
          },
          {
            name: '涿州市',
            code: '130681'
          },
          {
            name: '安国市',
            code: '130683'
          },
          {
            name: '高碑店市',
            code: '130684'
          }
        ]
      },
      {
        name: '张家口市',
        code: '130700',
        children: [
          {
            name: '桥东区',
            code: '130702'
          },
          {
            name: '桥西区',
            code: '130703'
          },
          {
            name: '宣化区',
            code: '130705'
          },
          {
            name: '下花园区',
            code: '130706'
          },
          {
            name: '万全区',
            code: '130708'
          },
          {
            name: '崇礼区',
            code: '130709'
          },
          {
            name: '张北县',
            code: '130722'
          },
          {
            name: '康保县',
            code: '130723'
          },
          {
            name: '沽源县',
            code: '130724'
          },
          {
            name: '尚义县',
            code: '130725'
          },
          {
            name: '蔚县',
            code: '130726'
          },
          {
            name: '阳原县',
            code: '130727'
          },
          {
            name: '怀安县',
            code: '130728'
          },
          {
            name: '怀来县',
            code: '130730'
          },
          {
            name: '涿鹿县',
            code: '130731'
          },
          {
            name: '赤城县',
            code: '130732'
          }
        ]
      },
      {
        name: '承德市',
        code: '130800',
        children: [
          {
            name: '双桥区',
            code: '130802'
          },
          {
            name: '双滦区',
            code: '130803'
          },
          {
            name: '鹰手营子矿区',
            code: '130804'
          },
          {
            name: '承德县',
            code: '130821'
          },
          {
            name: '兴隆县',
            code: '130822'
          },
          {
            name: '平泉县',
            code: '130823'
          },
          {
            name: '滦平县',
            code: '130824'
          },
          {
            name: '隆化县',
            code: '130825'
          },
          {
            name: '丰宁满族自治县',
            code: '130826'
          },
          {
            name: '宽城满族自治县',
            code: '130827'
          },
          {
            name: '围场满族蒙古族自治县',
            code: '130828'
          }
        ]
      },
      {
        name: '沧州市',
        code: '130900',
        children: [
          {
            name: '新华区',
            code: '130902'
          },
          {
            name: '运河区',
            code: '130903'
          },
          {
            name: '沧县',
            code: '130921'
          },
          {
            name: '青县',
            code: '130922'
          },
          {
            name: '东光县',
            code: '130923'
          },
          {
            name: '海兴县',
            code: '130924'
          },
          {
            name: '盐山县',
            code: '130925'
          },
          {
            name: '肃宁县',
            code: '130926'
          },
          {
            name: '南皮县',
            code: '130927'
          },
          {
            name: '吴桥县',
            code: '130928'
          },
          {
            name: '献县',
            code: '130929'
          },
          {
            name: '孟村回族自治县',
            code: '130930'
          },
          {
            name: '泊头市',
            code: '130981'
          },
          {
            name: '任丘市',
            code: '130982'
          },
          {
            name: '黄骅市',
            code: '130983'
          },
          {
            name: '河间市',
            code: '130984'
          }
        ]
      },
      {
        name: '廊坊市',
        code: '131000',
        children: [
          {
            name: '安次区',
            code: '131002'
          },
          {
            name: '广阳区',
            code: '131003'
          },
          {
            name: '固安县',
            code: '131022'
          },
          {
            name: '永清县',
            code: '131023'
          },
          {
            name: '香河县',
            code: '131024'
          },
          {
            name: '大城县',
            code: '131025'
          },
          {
            name: '文安县',
            code: '131026'
          },
          {
            name: '大厂回族自治县',
            code: '131028'
          },
          {
            name: '霸州市',
            code: '131081'
          },
          {
            name: '三河市',
            code: '131082'
          }
        ]
      },
      {
        name: '衡水市',
        code: '131100',
        children: [
          {
            name: '桃城区',
            code: '131102'
          },
          {
            name: '冀州区',
            code: '131103'
          },
          {
            name: '枣强县',
            code: '131121'
          },
          {
            name: '武邑县',
            code: '131122'
          },
          {
            name: '武强县',
            code: '131123'
          },
          {
            name: '饶阳县',
            code: '131124'
          },
          {
            name: '安平县',
            code: '131125'
          },
          {
            name: '故城县',
            code: '131126'
          },
          {
            name: '景县',
            code: '131127'
          },
          {
            name: '阜城县',
            code: '131128'
          },
          {
            name: '深州市',
            code: '131182'
          }
        ]
      },
      {
        name: '直辖县级行政区划',
        code: '139000',
        children: [
          {
            name: '定州市',
            code: '139001'
          },
          {
            name: '辛集市',
            code: '139002'
          }
        ]
      }
    ]
  },
  {
    name: '山西',
    code: '140000',
    children: [
      {
        name: '太原市',
        code: '140100',
        children: [
          {
            name: '小店区',
            code: '140105'
          },
          {
            name: '迎泽区',
            code: '140106'
          },
          {
            name: '杏花岭区',
            code: '140107'
          },
          {
            name: '尖草坪区',
            code: '140108'
          },
          {
            name: '万柏林区',
            code: '140109'
          },
          {
            name: '晋源区',
            code: '140110'
          },
          {
            name: '清徐县',
            code: '140121'
          },
          {
            name: '阳曲县',
            code: '140122'
          },
          {
            name: '娄烦县',
            code: '140123'
          },
          {
            name: '古交市',
            code: '140181'
          }
        ]
      },
      {
        name: '大同市',
        code: '140200',
        children: [
          {
            name: '城区',
            code: '140202'
          },
          {
            name: '矿区',
            code: '140203'
          },
          {
            name: '南郊区',
            code: '140211'
          },
          {
            name: '新荣区',
            code: '140212'
          },
          {
            name: '阳高县',
            code: '140221'
          },
          {
            name: '天镇县',
            code: '140222'
          },
          {
            name: '广灵县',
            code: '140223'
          },
          {
            name: '灵丘县',
            code: '140224'
          },
          {
            name: '浑源县',
            code: '140225'
          },
          {
            name: '左云县',
            code: '140226'
          },
          {
            name: '大同县',
            code: '140227'
          }
        ]
      },
      {
        name: '阳泉市',
        code: '140300',
        children: [
          {
            name: '城区',
            code: '140302'
          },
          {
            name: '矿区',
            code: '140303'
          },
          {
            name: '郊区',
            code: '140311'
          },
          {
            name: '平定县',
            code: '140321'
          },
          {
            name: '盂县',
            code: '140322'
          }
        ]
      },
      {
        name: '长治市',
        code: '140400',
        children: [
          {
            name: '城区',
            code: '140402'
          },
          {
            name: '郊区',
            code: '140411'
          },
          {
            name: '长治县',
            code: '140421'
          },
          {
            name: '襄垣县',
            code: '140423'
          },
          {
            name: '屯留县',
            code: '140424'
          },
          {
            name: '平顺县',
            code: '140425'
          },
          {
            name: '黎城县',
            code: '140426'
          },
          {
            name: '壶关县',
            code: '140427'
          },
          {
            name: '长子县',
            code: '140428'
          },
          {
            name: '武乡县',
            code: '140429'
          },
          {
            name: '沁县',
            code: '140430'
          },
          {
            name: '沁源县',
            code: '140431'
          },
          {
            name: '潞城市',
            code: '140481'
          }
        ]
      },
      {
        name: '晋城市',
        code: '140500',
        children: [
          {
            name: '城区',
            code: '140502'
          },
          {
            name: '沁水县',
            code: '140521'
          },
          {
            name: '阳城县',
            code: '140522'
          },
          {
            name: '陵川县',
            code: '140524'
          },
          {
            name: '泽州县',
            code: '140525'
          },
          {
            name: '高平市',
            code: '140581'
          }
        ]
      },
      {
        name: '朔州市',
        code: '140600',
        children: [
          {
            name: '朔城区',
            code: '140602'
          },
          {
            name: '平鲁区',
            code: '140603'
          },
          {
            name: '山阴县',
            code: '140621'
          },
          {
            name: '应县',
            code: '140622'
          },
          {
            name: '右玉县',
            code: '140623'
          },
          {
            name: '怀仁县',
            code: '140624'
          }
        ]
      },
      {
        name: '晋中市',
        code: '140700',
        children: [
          {
            name: '榆次区',
            code: '140702'
          },
          {
            name: '榆社县',
            code: '140721'
          },
          {
            name: '左权县',
            code: '140722'
          },
          {
            name: '和顺县',
            code: '140723'
          },
          {
            name: '昔阳县',
            code: '140724'
          },
          {
            name: '寿阳县',
            code: '140725'
          },
          {
            name: '太谷县',
            code: '140726'
          },
          {
            name: '祁县',
            code: '140727'
          },
          {
            name: '平遥县',
            code: '140728'
          },
          {
            name: '灵石县',
            code: '140729'
          },
          {
            name: '介休市',
            code: '140781'
          }
        ]
      },
      {
        name: '运城市',
        code: '140800',
        children: [
          {
            name: '盐湖区',
            code: '140802'
          },
          {
            name: '临猗县',
            code: '140821'
          },
          {
            name: '万荣县',
            code: '140822'
          },
          {
            name: '闻喜县',
            code: '140823'
          },
          {
            name: '稷山县',
            code: '140824'
          },
          {
            name: '新绛县',
            code: '140825'
          },
          {
            name: '绛县',
            code: '140826'
          },
          {
            name: '垣曲县',
            code: '140827'
          },
          {
            name: '夏县',
            code: '140828'
          },
          {
            name: '平陆县',
            code: '140829'
          },
          {
            name: '芮城县',
            code: '140830'
          },
          {
            name: '永济市',
            code: '140881'
          },
          {
            name: '河津市',
            code: '140882'
          }
        ]
      },
      {
        name: '忻州市',
        code: '140900',
        children: [
          {
            name: '忻府区',
            code: '140902'
          },
          {
            name: '定襄县',
            code: '140921'
          },
          {
            name: '五台县',
            code: '140922'
          },
          {
            name: '代县',
            code: '140923'
          },
          {
            name: '繁峙县',
            code: '140924'
          },
          {
            name: '宁武县',
            code: '140925'
          },
          {
            name: '静乐县',
            code: '140926'
          },
          {
            name: '神池县',
            code: '140927'
          },
          {
            name: '五寨县',
            code: '140928'
          },
          {
            name: '岢岚县',
            code: '140929'
          },
          {
            name: '河曲县',
            code: '140930'
          },
          {
            name: '保德县',
            code: '140931'
          },
          {
            name: '偏关县',
            code: '140932'
          },
          {
            name: '原平市',
            code: '140981'
          }
        ]
      },
      {
        name: '临汾市',
        code: '141000',
        children: [
          {
            name: '尧都区',
            code: '141002'
          },
          {
            name: '曲沃县',
            code: '141021'
          },
          {
            name: '翼城县',
            code: '141022'
          },
          {
            name: '襄汾县',
            code: '141023'
          },
          {
            name: '洪洞县',
            code: '141024'
          },
          {
            name: '古县',
            code: '141025'
          },
          {
            name: '安泽县',
            code: '141026'
          },
          {
            name: '浮山县',
            code: '141027'
          },
          {
            name: '吉县',
            code: '141028'
          },
          {
            name: '乡宁县',
            code: '141029'
          },
          {
            name: '大宁县',
            code: '141030'
          },
          {
            name: '隰县',
            code: '141031'
          },
          {
            name: '永和县',
            code: '141032'
          },
          {
            name: '蒲县',
            code: '141033'
          },
          {
            name: '汾西县',
            code: '141034'
          },
          {
            name: '侯马市',
            code: '141081'
          },
          {
            name: '霍州市',
            code: '141082'
          }
        ]
      },
      {
        name: '吕梁市',
        code: '141100',
        children: [
          {
            name: '离石区',
            code: '141102'
          },
          {
            name: '文水县',
            code: '141121'
          },
          {
            name: '交城县',
            code: '141122'
          },
          {
            name: '兴县',
            code: '141123'
          },
          {
            name: '临县',
            code: '141124'
          },
          {
            name: '柳林县',
            code: '141125'
          },
          {
            name: '石楼县',
            code: '141126'
          },
          {
            name: '岚县',
            code: '141127'
          },
          {
            name: '方山县',
            code: '141128'
          },
          {
            name: '中阳县',
            code: '141129'
          },
          {
            name: '交口县',
            code: '141130'
          },
          {
            name: '孝义市',
            code: '141181'
          },
          {
            name: '汾阳市',
            code: '141182'
          }
        ]
      }
    ]
  },
  {
    name: '内蒙古',
    code: '150000',
    children: [
      {
        name: '呼和浩特市',
        code: '150100',
        children: [
          {
            name: '新城区',
            code: '150102'
          },
          {
            name: '回民区',
            code: '150103'
          },
          {
            name: '玉泉区',
            code: '150104'
          },
          {
            name: '赛罕区',
            code: '150105'
          },
          {
            name: '土默特左旗',
            code: '150121'
          },
          {
            name: '托克托县',
            code: '150122'
          },
          {
            name: '和林格尔县',
            code: '150123'
          },
          {
            name: '清水河县',
            code: '150124'
          },
          {
            name: '武川县',
            code: '150125'
          }
        ]
      },
      {
        name: '包头市',
        code: '150200',
        children: [
          {
            name: '东河区',
            code: '150202'
          },
          {
            name: '昆都仑区',
            code: '150203'
          },
          {
            name: '青山区',
            code: '150204'
          },
          {
            name: '石拐区',
            code: '150205'
          },
          {
            name: '白云鄂博矿区',
            code: '150206'
          },
          {
            name: '九原区',
            code: '150207'
          },
          {
            name: '土默特右旗',
            code: '150221'
          },
          {
            name: '固阳县',
            code: '150222'
          },
          {
            name: '达尔罕茂明安联合旗',
            code: '150223'
          }
        ]
      },
      {
        name: '乌海市',
        code: '150300',
        children: [
          {
            name: '海勃湾区',
            code: '150302'
          },
          {
            name: '海南区',
            code: '150303'
          },
          {
            name: '乌达区',
            code: '150304'
          }
        ]
      },
      {
        name: '赤峰市',
        code: '150400',
        children: [
          {
            name: '红山区',
            code: '150402'
          },
          {
            name: '元宝山区',
            code: '150403'
          },
          {
            name: '松山区',
            code: '150404'
          },
          {
            name: '阿鲁科尔沁旗',
            code: '150421'
          },
          {
            name: '巴林左旗',
            code: '150422'
          },
          {
            name: '巴林右旗',
            code: '150423'
          },
          {
            name: '林西县',
            code: '150424'
          },
          {
            name: '克什克腾旗',
            code: '150425'
          },
          {
            name: '翁牛特旗',
            code: '150426'
          },
          {
            name: '喀喇沁旗',
            code: '150428'
          },
          {
            name: '宁城县',
            code: '150429'
          },
          {
            name: '敖汉旗',
            code: '150430'
          }
        ]
      },
      {
        name: '通辽市',
        code: '150500',
        children: [
          {
            name: '科尔沁区',
            code: '150502'
          },
          {
            name: '科尔沁左翼中旗',
            code: '150521'
          },
          {
            name: '科尔沁左翼后旗',
            code: '150522'
          },
          {
            name: '开鲁县',
            code: '150523'
          },
          {
            name: '库伦旗',
            code: '150524'
          },
          {
            name: '奈曼旗',
            code: '150525'
          },
          {
            name: '扎鲁特旗',
            code: '150526'
          },
          {
            name: '霍林郭勒市',
            code: '150581'
          }
        ]
      },
      {
        name: '鄂尔多斯市',
        code: '150600',
        children: [
          {
            name: '东胜区',
            code: '150602'
          },
          {
            name: '康巴什区',
            code: '150603'
          },
          {
            name: '达拉特旗',
            code: '150621'
          },
          {
            name: '准格尔旗',
            code: '150622'
          },
          {
            name: '鄂托克前旗',
            code: '150623'
          },
          {
            name: '鄂托克旗',
            code: '150624'
          },
          {
            name: '杭锦旗',
            code: '150625'
          },
          {
            name: '乌审旗',
            code: '150626'
          },
          {
            name: '伊金霍洛旗',
            code: '150627'
          }
        ]
      },
      {
        name: '呼伦贝尔市',
        code: '150700',
        children: [
          {
            name: '海拉尔区',
            code: '150702'
          },
          {
            name: '扎赉诺尔区',
            code: '150703'
          },
          {
            name: '阿荣旗',
            code: '150721'
          },
          {
            name: '莫力达瓦达斡尔族自治旗',
            code: '150722'
          },
          {
            name: '鄂伦春自治旗',
            code: '150723'
          },
          {
            name: '鄂温克族自治旗',
            code: '150724'
          },
          {
            name: '陈巴尔虎旗',
            code: '150725'
          },
          {
            name: '新巴尔虎左旗',
            code: '150726'
          },
          {
            name: '新巴尔虎右旗',
            code: '150727'
          },
          {
            name: '满洲里市',
            code: '150781'
          },
          {
            name: '牙克石市',
            code: '150782'
          },
          {
            name: '扎兰屯市',
            code: '150783'
          },
          {
            name: '额尔古纳市',
            code: '150784'
          },
          {
            name: '根河市',
            code: '150785'
          }
        ]
      },
      {
        name: '巴彦淖尔市',
        code: '150800',
        children: [
          {
            name: '临河区',
            code: '150802'
          },
          {
            name: '五原县',
            code: '150821'
          },
          {
            name: '磴口县',
            code: '150822'
          },
          {
            name: '乌拉特前旗',
            code: '150823'
          },
          {
            name: '乌拉特中旗',
            code: '150824'
          },
          {
            name: '乌拉特后旗',
            code: '150825'
          },
          {
            name: '杭锦后旗',
            code: '150826'
          }
        ]
      },
      {
        name: '乌兰察布市',
        code: '150900',
        children: [
          {
            name: '集宁区',
            code: '150902'
          },
          {
            name: '卓资县',
            code: '150921'
          },
          {
            name: '化德县',
            code: '150922'
          },
          {
            name: '商都县',
            code: '150923'
          },
          {
            name: '兴和县',
            code: '150924'
          },
          {
            name: '凉城县',
            code: '150925'
          },
          {
            name: '察哈尔右翼前旗',
            code: '150926'
          },
          {
            name: '察哈尔右翼中旗',
            code: '150927'
          },
          {
            name: '察哈尔右翼后旗',
            code: '150928'
          },
          {
            name: '四子王旗',
            code: '150929'
          },
          {
            name: '丰镇市',
            code: '150981'
          }
        ]
      },
      {
        name: '兴安盟',
        code: '152200',
        children: [
          {
            name: '乌兰浩特市',
            code: '152201'
          },
          {
            name: '阿尔山市',
            code: '152202'
          },
          {
            name: '科尔沁右翼前旗',
            code: '152221'
          },
          {
            name: '科尔沁右翼中旗',
            code: '152222'
          },
          {
            name: '扎赉特旗',
            code: '152223'
          },
          {
            name: '突泉县',
            code: '152224'
          }
        ]
      },
      {
        name: '锡林郭勒盟',
        code: '152500',
        children: [
          {
            name: '二连浩特市',
            code: '152501'
          },
          {
            name: '锡林浩特市',
            code: '152502'
          },
          {
            name: '阿巴嘎旗',
            code: '152522'
          },
          {
            name: '苏尼特左旗',
            code: '152523'
          },
          {
            name: '苏尼特右旗',
            code: '152524'
          },
          {
            name: '东乌珠穆沁旗',
            code: '152525'
          },
          {
            name: '西乌珠穆沁旗',
            code: '152526'
          },
          {
            name: '太仆寺旗',
            code: '152527'
          },
          {
            name: '镶黄旗',
            code: '152528'
          },
          {
            name: '正镶白旗',
            code: '152529'
          },
          {
            name: '正蓝旗',
            code: '152530'
          },
          {
            name: '多伦县',
            code: '152531'
          }
        ]
      },
      {
        name: '阿拉善盟',
        code: '152900',
        children: [
          {
            name: '阿拉善左旗',
            code: '152921'
          },
          {
            name: '阿拉善右旗',
            code: '152922'
          },
          {
            name: '额济纳旗',
            code: '152923'
          }
        ]
      }
    ]
  },
  {
    name: '辽宁',
    code: '210000',
    children: [
      {
        name: '沈阳市',
        code: '210100',
        children: [
          {
            name: '和平区',
            code: '210102'
          },
          {
            name: '沈河区',
            code: '210103'
          },
          {
            name: '大东区',
            code: '210104'
          },
          {
            name: '皇姑区',
            code: '210105'
          },
          {
            name: '铁西区',
            code: '210106'
          },
          {
            name: '苏家屯区',
            code: '210111'
          },
          {
            name: '浑南区',
            code: '210112'
          },
          {
            name: '沈北新区',
            code: '210113'
          },
          {
            name: '于洪区',
            code: '210114'
          },
          {
            name: '辽中区',
            code: '210115'
          },
          {
            name: '康平县',
            code: '210123'
          },
          {
            name: '法库县',
            code: '210124'
          },
          {
            name: '新民市',
            code: '210181'
          }
        ]
      },
      {
        name: '大连市',
        code: '210200',
        children: [
          {
            name: '中山区',
            code: '210202'
          },
          {
            name: '西岗区',
            code: '210203'
          },
          {
            name: '沙河口区',
            code: '210204'
          },
          {
            name: '甘井子区',
            code: '210211'
          },
          {
            name: '旅顺口区',
            code: '210212'
          },
          {
            name: '金州区',
            code: '210213'
          },
          {
            name: '普兰店区',
            code: '210214'
          },
          {
            name: '长海县',
            code: '210224'
          },
          {
            name: '瓦房店市',
            code: '210281'
          },
          {
            name: '庄河市',
            code: '210283'
          }
        ]
      },
      {
        name: '鞍山市',
        code: '210300',
        children: [
          {
            name: '铁东区',
            code: '210302'
          },
          {
            name: '铁西区',
            code: '210303'
          },
          {
            name: '立山区',
            code: '210304'
          },
          {
            name: '千山区',
            code: '210311'
          },
          {
            name: '台安县',
            code: '210321'
          },
          {
            name: '岫岩满族自治县',
            code: '210323'
          },
          {
            name: '海城市',
            code: '210381'
          }
        ]
      },
      {
        name: '抚顺市',
        code: '210400',
        children: [
          {
            name: '新抚区',
            code: '210402'
          },
          {
            name: '东洲区',
            code: '210403'
          },
          {
            name: '望花区',
            code: '210404'
          },
          {
            name: '顺城区',
            code: '210411'
          },
          {
            name: '抚顺县',
            code: '210421'
          },
          {
            name: '新宾满族自治县',
            code: '210422'
          },
          {
            name: '清原满族自治县',
            code: '210423'
          }
        ]
      },
      {
        name: '本溪市',
        code: '210500',
        children: [
          {
            name: '平山区',
            code: '210502'
          },
          {
            name: '溪湖区',
            code: '210503'
          },
          {
            name: '明山区',
            code: '210504'
          },
          {
            name: '南芬区',
            code: '210505'
          },
          {
            name: '本溪满族自治县',
            code: '210521'
          },
          {
            name: '桓仁满族自治县',
            code: '210522'
          }
        ]
      },
      {
        name: '丹东市',
        code: '210600',
        children: [
          {
            name: '元宝区',
            code: '210602'
          },
          {
            name: '振兴区',
            code: '210603'
          },
          {
            name: '振安区',
            code: '210604'
          },
          {
            name: '宽甸满族自治县',
            code: '210624'
          },
          {
            name: '东港市',
            code: '210681'
          },
          {
            name: '凤城市',
            code: '210682'
          }
        ]
      },
      {
        name: '锦州市',
        code: '210700',
        children: [
          {
            name: '古塔区',
            code: '210702'
          },
          {
            name: '凌河区',
            code: '210703'
          },
          {
            name: '太和区',
            code: '210711'
          },
          {
            name: '黑山县',
            code: '210726'
          },
          {
            name: '义县',
            code: '210727'
          },
          {
            name: '凌海市',
            code: '210781'
          },
          {
            name: '北镇市',
            code: '210782'
          }
        ]
      },
      {
        name: '营口市',
        code: '210800',
        children: [
          {
            name: '站前区',
            code: '210802'
          },
          {
            name: '西市区',
            code: '210803'
          },
          {
            name: '鲅鱼圈区',
            code: '210804'
          },
          {
            name: '老边区',
            code: '210811'
          },
          {
            name: '盖州市',
            code: '210881'
          },
          {
            name: '大石桥市',
            code: '210882'
          }
        ]
      },
      {
        name: '阜新市',
        code: '210900',
        children: [
          {
            name: '海州区',
            code: '210902'
          },
          {
            name: '新邱区',
            code: '210903'
          },
          {
            name: '太平区',
            code: '210904'
          },
          {
            name: '清河门区',
            code: '210905'
          },
          {
            name: '细河区',
            code: '210911'
          },
          {
            name: '阜新蒙古族自治县',
            code: '210921'
          },
          {
            name: '彰武县',
            code: '210922'
          }
        ]
      },
      {
        name: '辽阳市',
        code: '211000',
        children: [
          {
            name: '白塔区',
            code: '211002'
          },
          {
            name: '文圣区',
            code: '211003'
          },
          {
            name: '宏伟区',
            code: '211004'
          },
          {
            name: '弓长岭区',
            code: '211005'
          },
          {
            name: '太子河区',
            code: '211011'
          },
          {
            name: '辽阳县',
            code: '211021'
          },
          {
            name: '灯塔市',
            code: '211081'
          }
        ]
      },
      {
        name: '盘锦市',
        code: '211100',
        children: [
          {
            name: '双台子区',
            code: '211102'
          },
          {
            name: '兴隆台区',
            code: '211103'
          },
          {
            name: '大洼区',
            code: '211104'
          },
          {
            name: '盘山县',
            code: '211122'
          }
        ]
      },
      {
        name: '铁岭市',
        code: '211200',
        children: [
          {
            name: '银州区',
            code: '211202'
          },
          {
            name: '清河区',
            code: '211204'
          },
          {
            name: '铁岭县',
            code: '211221'
          },
          {
            name: '西丰县',
            code: '211223'
          },
          {
            name: '昌图县',
            code: '211224'
          },
          {
            name: '调兵山市',
            code: '211281'
          },
          {
            name: '开原市',
            code: '211282'
          }
        ]
      },
      {
        name: '朝阳市',
        code: '211300',
        children: [
          {
            name: '双塔区',
            code: '211302'
          },
          {
            name: '龙城区',
            code: '211303'
          },
          {
            name: '朝阳县',
            code: '211321'
          },
          {
            name: '建平县',
            code: '211322'
          },
          {
            name: '喀喇沁左翼蒙古族自治县',
            code: '211324'
          },
          {
            name: '北票市',
            code: '211381'
          },
          {
            name: '凌源市',
            code: '211382'
          }
        ]
      },
      {
        name: '葫芦岛市',
        code: '211400',
        children: [
          {
            name: '连山区',
            code: '211402'
          },
          {
            name: '龙港区',
            code: '211403'
          },
          {
            name: '南票区',
            code: '211404'
          },
          {
            name: '绥中县',
            code: '211421'
          },
          {
            name: '建昌县',
            code: '211422'
          },
          {
            name: '兴城市',
            code: '211481'
          }
        ]
      }
    ]
  },
  {
    name: '吉林',
    code: '220000',
    children: [
      {
        name: '长春市',
        code: '220100',
        children: [
          {
            name: '南关区',
            code: '220102'
          },
          {
            name: '宽城区',
            code: '220103'
          },
          {
            name: '朝阳区',
            code: '220104'
          },
          {
            name: '二道区',
            code: '220105'
          },
          {
            name: '绿园区',
            code: '220106'
          },
          {
            name: '双阳区',
            code: '220112'
          },
          {
            name: '九台区',
            code: '220113'
          },
          {
            name: '农安县',
            code: '220122'
          },
          {
            name: '榆树市',
            code: '220182'
          },
          {
            name: '德惠市',
            code: '220183'
          }
        ]
      },
      {
        name: '吉林市',
        code: '220200',
        children: [
          {
            name: '昌邑区',
            code: '220202'
          },
          {
            name: '龙潭区',
            code: '220203'
          },
          {
            name: '船营区',
            code: '220204'
          },
          {
            name: '丰满区',
            code: '220211'
          },
          {
            name: '永吉县',
            code: '220221'
          },
          {
            name: '蛟河市',
            code: '220281'
          },
          {
            name: '桦甸市',
            code: '220282'
          },
          {
            name: '舒兰市',
            code: '220283'
          },
          {
            name: '磐石市',
            code: '220284'
          }
        ]
      },
      {
        name: '四平市',
        code: '220300',
        children: [
          {
            name: '铁西区',
            code: '220302'
          },
          {
            name: '铁东区',
            code: '220303'
          },
          {
            name: '梨树县',
            code: '220322'
          },
          {
            name: '伊通满族自治县',
            code: '220323'
          },
          {
            name: '公主岭市',
            code: '220381'
          },
          {
            name: '双辽市',
            code: '220382'
          }
        ]
      },
      {
        name: '辽源市',
        code: '220400',
        children: [
          {
            name: '龙山区',
            code: '220402'
          },
          {
            name: '西安区',
            code: '220403'
          },
          {
            name: '东丰县',
            code: '220421'
          },
          {
            name: '东辽县',
            code: '220422'
          }
        ]
      },
      {
        name: '通化市',
        code: '220500',
        children: [
          {
            name: '东昌区',
            code: '220502'
          },
          {
            name: '二道江区',
            code: '220503'
          },
          {
            name: '通化县',
            code: '220521'
          },
          {
            name: '辉南县',
            code: '220523'
          },
          {
            name: '柳河县',
            code: '220524'
          },
          {
            name: '梅河口市',
            code: '220581'
          },
          {
            name: '集安市',
            code: '220582'
          }
        ]
      },
      {
        name: '白山市',
        code: '220600',
        children: [
          {
            name: '浑江区',
            code: '220602'
          },
          {
            name: '江源区',
            code: '220605'
          },
          {
            name: '抚松县',
            code: '220621'
          },
          {
            name: '靖宇县',
            code: '220622'
          },
          {
            name: '长白朝鲜族自治县',
            code: '220623'
          },
          {
            name: '临江市',
            code: '220681'
          }
        ]
      },
      {
        name: '松原市',
        code: '220700',
        children: [
          {
            name: '宁江区',
            code: '220702'
          },
          {
            name: '前郭尔罗斯蒙古族自治县',
            code: '220721'
          },
          {
            name: '长岭县',
            code: '220722'
          },
          {
            name: '乾安县',
            code: '220723'
          },
          {
            name: '扶余市',
            code: '220781'
          }
        ]
      },
      {
        name: '白城市',
        code: '220800',
        children: [
          {
            name: '洮北区',
            code: '220802'
          },
          {
            name: '镇赉县',
            code: '220821'
          },
          {
            name: '通榆县',
            code: '220822'
          },
          {
            name: '洮南市',
            code: '220881'
          },
          {
            name: '大安市',
            code: '220882'
          }
        ]
      },
      {
        name: '延边朝鲜族自治州',
        code: '222400',
        children: [
          {
            name: '延吉市',
            code: '222401'
          },
          {
            name: '图们市',
            code: '222402'
          },
          {
            name: '敦化市',
            code: '222403'
          },
          {
            name: '珲春市',
            code: '222404'
          },
          {
            name: '龙井市',
            code: '222405'
          },
          {
            name: '和龙市',
            code: '222406'
          },
          {
            name: '汪清县',
            code: '222424'
          },
          {
            name: '安图县',
            code: '222426'
          }
        ]
      }
    ]
  },
  {
    name: '黑龙江',
    code: '230000',
    children: [
      {
        name: '哈尔滨市',
        code: '230100',
        children: [
          {
            name: '道里区',
            code: '230102'
          },
          {
            name: '南岗区',
            code: '230103'
          },
          {
            name: '道外区',
            code: '230104'
          },
          {
            name: '平房区',
            code: '230108'
          },
          {
            name: '松北区',
            code: '230109'
          },
          {
            name: '香坊区',
            code: '230110'
          },
          {
            name: '呼兰区',
            code: '230111'
          },
          {
            name: '阿城区',
            code: '230112'
          },
          {
            name: '双城区',
            code: '230113'
          },
          {
            name: '依兰县',
            code: '230123'
          },
          {
            name: '方正县',
            code: '230124'
          },
          {
            name: '宾县',
            code: '230125'
          },
          {
            name: '巴彦县',
            code: '230126'
          },
          {
            name: '木兰县',
            code: '230127'
          },
          {
            name: '通河县',
            code: '230128'
          },
          {
            name: '延寿县',
            code: '230129'
          },
          {
            name: '尚志市',
            code: '230183'
          },
          {
            name: '五常市',
            code: '230184'
          }
        ]
      },
      {
        name: '齐齐哈尔市',
        code: '230200',
        children: [
          {
            name: '龙沙区',
            code: '230202'
          },
          {
            name: '建华区',
            code: '230203'
          },
          {
            name: '铁锋区',
            code: '230204'
          },
          {
            name: '昂昂溪区',
            code: '230205'
          },
          {
            name: '富拉尔基区',
            code: '230206'
          },
          {
            name: '碾子山区',
            code: '230207'
          },
          {
            name: '梅里斯达斡尔族区',
            code: '230208'
          },
          {
            name: '龙江县',
            code: '230221'
          },
          {
            name: '依安县',
            code: '230223'
          },
          {
            name: '泰来县',
            code: '230224'
          },
          {
            name: '甘南县',
            code: '230225'
          },
          {
            name: '富裕县',
            code: '230227'
          },
          {
            name: '克山县',
            code: '230229'
          },
          {
            name: '克东县',
            code: '230230'
          },
          {
            name: '拜泉县',
            code: '230231'
          },
          {
            name: '讷河市',
            code: '230281'
          }
        ]
      },
      {
        name: '鸡西市',
        code: '230300',
        children: [
          {
            name: '鸡冠区',
            code: '230302'
          },
          {
            name: '恒山区',
            code: '230303'
          },
          {
            name: '滴道区',
            code: '230304'
          },
          {
            name: '梨树区',
            code: '230305'
          },
          {
            name: '城子河区',
            code: '230306'
          },
          {
            name: '麻山区',
            code: '230307'
          },
          {
            name: '鸡东县',
            code: '230321'
          },
          {
            name: '虎林市',
            code: '230381'
          },
          {
            name: '密山市',
            code: '230382'
          }
        ]
      },
      {
        name: '鹤岗市',
        code: '230400',
        children: [
          {
            name: '向阳区',
            code: '230402'
          },
          {
            name: '工农区',
            code: '230403'
          },
          {
            name: '南山区',
            code: '230404'
          },
          {
            name: '兴安区',
            code: '230405'
          },
          {
            name: '东山区',
            code: '230406'
          },
          {
            name: '兴山区',
            code: '230407'
          },
          {
            name: '萝北县',
            code: '230421'
          },
          {
            name: '绥滨县',
            code: '230422'
          }
        ]
      },
      {
        name: '双鸭山市',
        code: '230500',
        children: [
          {
            name: '尖山区',
            code: '230502'
          },
          {
            name: '岭东区',
            code: '230503'
          },
          {
            name: '四方台区',
            code: '230505'
          },
          {
            name: '宝山区',
            code: '230506'
          },
          {
            name: '集贤县',
            code: '230521'
          },
          {
            name: '友谊县',
            code: '230522'
          },
          {
            name: '宝清县',
            code: '230523'
          },
          {
            name: '饶河县',
            code: '230524'
          }
        ]
      },
      {
        name: '大庆市',
        code: '230600',
        children: [
          {
            name: '萨尔图区',
            code: '230602'
          },
          {
            name: '龙凤区',
            code: '230603'
          },
          {
            name: '让胡路区',
            code: '230604'
          },
          {
            name: '红岗区',
            code: '230605'
          },
          {
            name: '大同区',
            code: '230606'
          },
          {
            name: '肇州县',
            code: '230621'
          },
          {
            name: '肇源县',
            code: '230622'
          },
          {
            name: '林甸县',
            code: '230623'
          },
          {
            name: '杜尔伯特蒙古族自治县',
            code: '230624'
          }
        ]
      },
      {
        name: '伊春市',
        code: '230700',
        children: [
          {
            name: '伊春区',
            code: '230702'
          },
          {
            name: '南岔区',
            code: '230703'
          },
          {
            name: '友好区',
            code: '230704'
          },
          {
            name: '西林区',
            code: '230705'
          },
          {
            name: '翠峦区',
            code: '230706'
          },
          {
            name: '新青区',
            code: '230707'
          },
          {
            name: '美溪区',
            code: '230708'
          },
          {
            name: '金山屯区',
            code: '230709'
          },
          {
            name: '五营区',
            code: '230710'
          },
          {
            name: '乌马河区',
            code: '230711'
          },
          {
            name: '汤旺河区',
            code: '230712'
          },
          {
            name: '带岭区',
            code: '230713'
          },
          {
            name: '乌伊岭区',
            code: '230714'
          },
          {
            name: '红星区',
            code: '230715'
          },
          {
            name: '上甘岭区',
            code: '230716'
          },
          {
            name: '嘉荫县',
            code: '230722'
          },
          {
            name: '铁力市',
            code: '230781'
          }
        ]
      },
      {
        name: '佳木斯市',
        code: '230800',
        children: [
          {
            name: '向阳区',
            code: '230803'
          },
          {
            name: '前进区',
            code: '230804'
          },
          {
            name: '东风区',
            code: '230805'
          },
          {
            name: '郊区',
            code: '230811'
          },
          {
            name: '桦南县',
            code: '230822'
          },
          {
            name: '桦川县',
            code: '230826'
          },
          {
            name: '汤原县',
            code: '230828'
          },
          {
            name: '同江市',
            code: '230881'
          },
          {
            name: '富锦市',
            code: '230882'
          },
          {
            name: '抚远市',
            code: '230883'
          }
        ]
      },
      {
        name: '七台河市',
        code: '230900',
        children: [
          {
            name: '新兴区',
            code: '230902'
          },
          {
            name: '桃山区',
            code: '230903'
          },
          {
            name: '茄子河区',
            code: '230904'
          },
          {
            name: '勃利县',
            code: '230921'
          }
        ]
      },
      {
        name: '牡丹江市',
        code: '231000',
        children: [
          {
            name: '东安区',
            code: '231002'
          },
          {
            name: '阳明区',
            code: '231003'
          },
          {
            name: '爱民区',
            code: '231004'
          },
          {
            name: '西安区',
            code: '231005'
          },
          {
            name: '林口县',
            code: '231025'
          },
          {
            name: '绥芬河市',
            code: '231081'
          },
          {
            name: '海林市',
            code: '231083'
          },
          {
            name: '宁安市',
            code: '231084'
          },
          {
            name: '穆棱市',
            code: '231085'
          },
          {
            name: '东宁市',
            code: '231086'
          }
        ]
      },
      {
        name: '黑河市',
        code: '231100',
        children: [
          {
            name: '爱辉区',
            code: '231102'
          },
          {
            name: '嫩江县',
            code: '231121'
          },
          {
            name: '逊克县',
            code: '231123'
          },
          {
            name: '孙吴县',
            code: '231124'
          },
          {
            name: '北安市',
            code: '231181'
          },
          {
            name: '五大连池市',
            code: '231182'
          }
        ]
      },
      {
        name: '绥化市',
        code: '231200',
        children: [
          {
            name: '北林区',
            code: '231202'
          },
          {
            name: '望奎县',
            code: '231221'
          },
          {
            name: '兰西县',
            code: '231222'
          },
          {
            name: '青冈县',
            code: '231223'
          },
          {
            name: '庆安县',
            code: '231224'
          },
          {
            name: '明水县',
            code: '231225'
          },
          {
            name: '绥棱县',
            code: '231226'
          },
          {
            name: '安达市',
            code: '231281'
          },
          {
            name: '肇东市',
            code: '231282'
          },
          {
            name: '海伦市',
            code: '231283'
          }
        ]
      },
      {
        name: '大兴安岭地区',
        code: '232700',
        children: [
          {
            name: '呼玛县',
            code: '232721'
          },
          {
            name: '塔河县',
            code: '232722'
          },
          {
            name: '漠河县',
            code: '232723'
          }
        ]
      }
    ]
  },
  {
    name: '上海',
    code: '310000',
    children: [
      {
        name: '上海市',
        code: '310100',
        children: [
          {
            name: '黄浦区',
            code: '310101'
          },
          {
            name: '徐汇区',
            code: '310104'
          },
          {
            name: '长宁区',
            code: '310105'
          },
          {
            name: '静安区',
            code: '310106'
          },
          {
            name: '普陀区',
            code: '310107'
          },
          {
            name: '虹口区',
            code: '310109'
          },
          {
            name: '杨浦区',
            code: '310110'
          },
          {
            name: '闵行区',
            code: '310112'
          },
          {
            name: '宝山区',
            code: '310113'
          },
          {
            name: '嘉定区',
            code: '310114'
          },
          {
            name: '浦东新区',
            code: '310115'
          },
          {
            name: '金山区',
            code: '310116'
          },
          {
            name: '松江区',
            code: '310117'
          },
          {
            name: '青浦区',
            code: '310118'
          },
          {
            name: '奉贤区',
            code: '310120'
          },
          {
            name: '崇明区',
            code: '310151'
          }
        ]
      }
    ]
  },
  {
    name: '江苏',
    code: '320000',
    children: [
      {
        name: '南京市',
        code: '320100',
        children: [
          {
            name: '玄武区',
            code: '320102'
          },
          {
            name: '秦淮区',
            code: '320104'
          },
          {
            name: '建邺区',
            code: '320105'
          },
          {
            name: '鼓楼区',
            code: '320106'
          },
          {
            name: '浦口区',
            code: '320111'
          },
          {
            name: '栖霞区',
            code: '320113'
          },
          {
            name: '雨花台区',
            code: '320114'
          },
          {
            name: '江宁区',
            code: '320115'
          },
          {
            name: '六合区',
            code: '320116'
          },
          {
            name: '溧水区',
            code: '320117'
          },
          {
            name: '高淳区',
            code: '320118'
          }
        ]
      },
      {
        name: '无锡市',
        code: '320200',
        children: [
          {
            name: '锡山区',
            code: '320205'
          },
          {
            name: '惠山区',
            code: '320206'
          },
          {
            name: '滨湖区',
            code: '320211'
          },
          {
            name: '梁溪区',
            code: '320213'
          },
          {
            name: '新吴区',
            code: '320214'
          },
          {
            name: '江阴市',
            code: '320281'
          },
          {
            name: '宜兴市',
            code: '320282'
          }
        ]
      },
      {
        name: '徐州市',
        code: '320300',
        children: [
          {
            name: '鼓楼区',
            code: '320302'
          },
          {
            name: '云龙区',
            code: '320303'
          },
          {
            name: '贾汪区',
            code: '320305'
          },
          {
            name: '泉山区',
            code: '320311'
          },
          {
            name: '铜山区',
            code: '320312'
          },
          {
            name: '丰县',
            code: '320321'
          },
          {
            name: '沛县',
            code: '320322'
          },
          {
            name: '睢宁县',
            code: '320324'
          },
          {
            name: '新沂市',
            code: '320381'
          },
          {
            name: '邳州市',
            code: '320382'
          }
        ]
      },
      {
        name: '常州市',
        code: '320400',
        children: [
          {
            name: '天宁区',
            code: '320402'
          },
          {
            name: '钟楼区',
            code: '320404'
          },
          {
            name: '新北区',
            code: '320411'
          },
          {
            name: '武进区',
            code: '320412'
          },
          {
            name: '金坛区',
            code: '320413'
          },
          {
            name: '溧阳市',
            code: '320481'
          }
        ]
      },
      {
        name: '苏州市',
        code: '320500',
        children: [
          {
            name: '虎丘区',
            code: '320505'
          },
          {
            name: '吴中区',
            code: '320506'
          },
          {
            name: '相城区',
            code: '320507'
          },
          {
            name: '姑苏区',
            code: '320508'
          },
          {
            name: '吴江区',
            code: '320509'
          },
          {
            name: '常熟市',
            code: '320581'
          },
          {
            name: '张家港市',
            code: '320582'
          },
          {
            name: '昆山市',
            code: '320583'
          },
          {
            name: '太仓市',
            code: '320585'
          }
        ]
      },
      {
        name: '南通市',
        code: '320600',
        children: [
          {
            name: '崇川区',
            code: '320602'
          },
          {
            name: '港闸区',
            code: '320611'
          },
          {
            name: '通州区',
            code: '320612'
          },
          {
            name: '海安县',
            code: '320621'
          },
          {
            name: '如东县',
            code: '320623'
          },
          {
            name: '启东市',
            code: '320681'
          },
          {
            name: '如皋市',
            code: '320682'
          },
          {
            name: '海门市',
            code: '320684'
          }
        ]
      },
      {
        name: '连云港市',
        code: '320700',
        children: [
          {
            name: '连云区',
            code: '320703'
          },
          {
            name: '海州区',
            code: '320706'
          },
          {
            name: '赣榆区',
            code: '320707'
          },
          {
            name: '东海县',
            code: '320722'
          },
          {
            name: '灌云县',
            code: '320723'
          },
          {
            name: '灌南县',
            code: '320724'
          }
        ]
      },
      {
        name: '淮安市',
        code: '320800',
        children: [
          {
            name: '淮安区',
            code: '320803'
          },
          {
            name: '淮阴区',
            code: '320804'
          },
          {
            name: '清江浦区',
            code: '320812'
          },
          {
            name: '洪泽区',
            code: '320813'
          },
          {
            name: '涟水县',
            code: '320826'
          },
          {
            name: '盱眙县',
            code: '320830'
          },
          {
            name: '金湖县',
            code: '320831'
          }
        ]
      },
      {
        name: '盐城市',
        code: '320900',
        children: [
          {
            name: '亭湖区',
            code: '320902'
          },
          {
            name: '盐都区',
            code: '320903'
          },
          {
            name: '大丰区',
            code: '320904'
          },
          {
            name: '响水县',
            code: '320921'
          },
          {
            name: '滨海县',
            code: '320922'
          },
          {
            name: '阜宁县',
            code: '320923'
          },
          {
            name: '射阳县',
            code: '320924'
          },
          {
            name: '建湖县',
            code: '320925'
          },
          {
            name: '东台市',
            code: '320981'
          }
        ]
      },
      {
        name: '扬州市',
        code: '321000',
        children: [
          {
            name: '广陵区',
            code: '321002'
          },
          {
            name: '邗江区',
            code: '321003'
          },
          {
            name: '江都区',
            code: '321012'
          },
          {
            name: '宝应县',
            code: '321023'
          },
          {
            name: '仪征市',
            code: '321081'
          },
          {
            name: '高邮市',
            code: '321084'
          }
        ]
      },
      {
        name: '镇江市',
        code: '321100',
        children: [
          {
            name: '京口区',
            code: '321102'
          },
          {
            name: '润州区',
            code: '321111'
          },
          {
            name: '丹徒区',
            code: '321112'
          },
          {
            name: '丹阳市',
            code: '321181'
          },
          {
            name: '扬中市',
            code: '321182'
          },
          {
            name: '句容市',
            code: '321183'
          }
        ]
      },
      {
        name: '泰州市',
        code: '321200',
        children: [
          {
            name: '海陵区',
            code: '321202'
          },
          {
            name: '高港区',
            code: '321203'
          },
          {
            name: '姜堰区',
            code: '321204'
          },
          {
            name: '兴化市',
            code: '321281'
          },
          {
            name: '靖江市',
            code: '321282'
          },
          {
            name: '泰兴市',
            code: '321283'
          }
        ]
      },
      {
        name: '宿迁市',
        code: '321300',
        children: [
          {
            name: '宿城区',
            code: '321302'
          },
          {
            name: '宿豫区',
            code: '321311'
          },
          {
            name: '沭阳县',
            code: '321322'
          },
          {
            name: '泗阳县',
            code: '321323'
          },
          {
            name: '泗洪县',
            code: '321324'
          }
        ]
      }
    ]
  },
  {
    name: '浙江',
    code: '330000',
    children: [
      {
        name: '杭州市',
        code: '330100',
        children: [
          {
            name: '上城区',
            code: '330102'
          },
          {
            name: '下城区',
            code: '330103'
          },
          {
            name: '江干区',
            code: '330104'
          },
          {
            name: '拱墅区',
            code: '330105'
          },
          {
            name: '西湖区',
            code: '330106'
          },
          {
            name: '滨江区',
            code: '330108'
          },
          {
            name: '萧山区',
            code: '330109'
          },
          {
            name: '余杭区',
            code: '330110'
          },
          {
            name: '富阳区',
            code: '330111'
          },
          {
            name: '桐庐县',
            code: '330122'
          },
          {
            name: '淳安县',
            code: '330127'
          },
          {
            name: '建德市',
            code: '330182'
          },
          {
            name: '临安市',
            code: '330185'
          }
        ]
      },
      {
        name: '宁波市',
        code: '330200',
        children: [
          {
            name: '海曙区',
            code: '330203'
          },
          {
            name: '江东区',
            code: '330204'
          },
          {
            name: '江北区',
            code: '330205'
          },
          {
            name: '北仑区',
            code: '330206'
          },
          {
            name: '镇海区',
            code: '330211'
          },
          {
            name: '鄞州区',
            code: '330212'
          },
          {
            name: '象山县',
            code: '330225'
          },
          {
            name: '宁海县',
            code: '330226'
          },
          {
            name: '余姚市',
            code: '330281'
          },
          {
            name: '慈溪市',
            code: '330282'
          },
          {
            name: '奉化市',
            code: '330283'
          }
        ]
      },
      {
        name: '温州市',
        code: '330300',
        children: [
          {
            name: '鹿城区',
            code: '330302'
          },
          {
            name: '龙湾区',
            code: '330303'
          },
          {
            name: '瓯海区',
            code: '330304'
          },
          {
            name: '洞头区',
            code: '330305'
          },
          {
            name: '永嘉县',
            code: '330324'
          },
          {
            name: '平阳县',
            code: '330326'
          },
          {
            name: '苍南县',
            code: '330327'
          },
          {
            name: '文成县',
            code: '330328'
          },
          {
            name: '泰顺县',
            code: '330329'
          },
          {
            name: '瑞安市',
            code: '330381'
          },
          {
            name: '乐清市',
            code: '330382'
          }
        ]
      },
      {
        name: '嘉兴市',
        code: '330400',
        children: [
          {
            name: '南湖区',
            code: '330402'
          },
          {
            name: '秀洲区',
            code: '330411'
          },
          {
            name: '嘉善县',
            code: '330421'
          },
          {
            name: '海盐县',
            code: '330424'
          },
          {
            name: '海宁市',
            code: '330481'
          },
          {
            name: '平湖市',
            code: '330482'
          },
          {
            name: '桐乡市',
            code: '330483'
          }
        ]
      },
      {
        name: '湖州市',
        code: '330500',
        children: [
          {
            name: '吴兴区',
            code: '330502'
          },
          {
            name: '南浔区',
            code: '330503'
          },
          {
            name: '德清县',
            code: '330521'
          },
          {
            name: '长兴县',
            code: '330522'
          },
          {
            name: '安吉县',
            code: '330523'
          }
        ]
      },
      {
        name: '绍兴市',
        code: '330600',
        children: [
          {
            name: '越城区',
            code: '330602'
          },
          {
            name: '柯桥区',
            code: '330603'
          },
          {
            name: '上虞区',
            code: '330604'
          },
          {
            name: '新昌县',
            code: '330624'
          },
          {
            name: '诸暨市',
            code: '330681'
          },
          {
            name: '嵊州市',
            code: '330683'
          }
        ]
      },
      {
        name: '金华市',
        code: '330700',
        children: [
          {
            name: '婺城区',
            code: '330702'
          },
          {
            name: '金东区',
            code: '330703'
          },
          {
            name: '武义县',
            code: '330723'
          },
          {
            name: '浦江县',
            code: '330726'
          },
          {
            name: '磐安县',
            code: '330727'
          },
          {
            name: '兰溪市',
            code: '330781'
          },
          {
            name: '义乌市',
            code: '330782'
          },
          {
            name: '东阳市',
            code: '330783'
          },
          {
            name: '永康市',
            code: '330784'
          }
        ]
      },
      {
        name: '衢州市',
        code: '330800',
        children: [
          {
            name: '柯城区',
            code: '330802'
          },
          {
            name: '衢江区',
            code: '330803'
          },
          {
            name: '常山县',
            code: '330822'
          },
          {
            name: '开化县',
            code: '330824'
          },
          {
            name: '龙游县',
            code: '330825'
          },
          {
            name: '江山市',
            code: '330881'
          }
        ]
      },
      {
        name: '舟山市',
        code: '330900',
        children: [
          {
            name: '定海区',
            code: '330902'
          },
          {
            name: '普陀区',
            code: '330903'
          },
          {
            name: '岱山县',
            code: '330921'
          },
          {
            name: '嵊泗县',
            code: '330922'
          }
        ]
      },
      {
        name: '台州市',
        code: '331000',
        children: [
          {
            name: '椒江区',
            code: '331002'
          },
          {
            name: '黄岩区',
            code: '331003'
          },
          {
            name: '路桥区',
            code: '331004'
          },
          {
            name: '玉环县',
            code: '331021'
          },
          {
            name: '三门县',
            code: '331022'
          },
          {
            name: '天台县',
            code: '331023'
          },
          {
            name: '仙居县',
            code: '331024'
          },
          {
            name: '温岭市',
            code: '331081'
          },
          {
            name: '临海市',
            code: '331082'
          }
        ]
      },
      {
        name: '丽水市',
        code: '331100',
        children: [
          {
            name: '莲都区',
            code: '331102'
          },
          {
            name: '青田县',
            code: '331121'
          },
          {
            name: '缙云县',
            code: '331122'
          },
          {
            name: '遂昌县',
            code: '331123'
          },
          {
            name: '松阳县',
            code: '331124'
          },
          {
            name: '云和县',
            code: '331125'
          },
          {
            name: '庆元县',
            code: '331126'
          },
          {
            name: '景宁畲族自治县',
            code: '331127'
          },
          {
            name: '龙泉市',
            code: '331181'
          }
        ]
      }
    ]
  },
  {
    name: '安徽',
    code: '340000',
    children: [
      {
        name: '合肥市',
        code: '340100',
        children: [
          {
            name: '瑶海区',
            code: '340102'
          },
          {
            name: '庐阳区',
            code: '340103'
          },
          {
            name: '蜀山区',
            code: '340104'
          },
          {
            name: '包河区',
            code: '340111'
          },
          {
            name: '长丰县',
            code: '340121'
          },
          {
            name: '肥东县',
            code: '340122'
          },
          {
            name: '肥西县',
            code: '340123'
          },
          {
            name: '庐江县',
            code: '340124'
          },
          {
            name: '巢湖市',
            code: '340181'
          }
        ]
      },
      {
        name: '芜湖市',
        code: '340200',
        children: [
          {
            name: '镜湖区',
            code: '340202'
          },
          {
            name: '弋江区',
            code: '340203'
          },
          {
            name: '鸠江区',
            code: '340207'
          },
          {
            name: '三山区',
            code: '340208'
          },
          {
            name: '芜湖县',
            code: '340221'
          },
          {
            name: '繁昌县',
            code: '340222'
          },
          {
            name: '南陵县',
            code: '340223'
          },
          {
            name: '无为县',
            code: '340225'
          }
        ]
      },
      {
        name: '蚌埠市',
        code: '340300',
        children: [
          {
            name: '龙子湖区',
            code: '340302'
          },
          {
            name: '蚌山区',
            code: '340303'
          },
          {
            name: '禹会区',
            code: '340304'
          },
          {
            name: '淮上区',
            code: '340311'
          },
          {
            name: '怀远县',
            code: '340321'
          },
          {
            name: '五河县',
            code: '340322'
          },
          {
            name: '固镇县',
            code: '340323'
          }
        ]
      },
      {
        name: '淮南市',
        code: '340400',
        children: [
          {
            name: '大通区',
            code: '340402'
          },
          {
            name: '田家庵区',
            code: '340403'
          },
          {
            name: '谢家集区',
            code: '340404'
          },
          {
            name: '八公山区',
            code: '340405'
          },
          {
            name: '潘集区',
            code: '340406'
          },
          {
            name: '凤台县',
            code: '340421'
          },
          {
            name: '寿县',
            code: '340422'
          }
        ]
      },
      {
        name: '马鞍山市',
        code: '340500',
        children: [
          {
            name: '花山区',
            code: '340503'
          },
          {
            name: '雨山区',
            code: '340504'
          },
          {
            name: '博望区',
            code: '340506'
          },
          {
            name: '当涂县',
            code: '340521'
          },
          {
            name: '含山县',
            code: '340522'
          },
          {
            name: '和县',
            code: '340523'
          }
        ]
      },
      {
        name: '淮北市',
        code: '340600',
        children: [
          {
            name: '杜集区',
            code: '340602'
          },
          {
            name: '相山区',
            code: '340603'
          },
          {
            name: '烈山区',
            code: '340604'
          },
          {
            name: '濉溪县',
            code: '340621'
          }
        ]
      },
      {
        name: '铜陵市',
        code: '340700',
        children: [
          {
            name: '铜官区',
            code: '340705'
          },
          {
            name: '义安区',
            code: '340706'
          },
          {
            name: '郊区',
            code: '340711'
          },
          {
            name: '枞阳县',
            code: '340722'
          }
        ]
      },
      {
        name: '安庆市',
        code: '340800',
        children: [
          {
            name: '迎江区',
            code: '340802'
          },
          {
            name: '大观区',
            code: '340803'
          },
          {
            name: '宜秀区',
            code: '340811'
          },
          {
            name: '怀宁县',
            code: '340822'
          },
          {
            name: '潜山县',
            code: '340824'
          },
          {
            name: '太湖县',
            code: '340825'
          },
          {
            name: '宿松县',
            code: '340826'
          },
          {
            name: '望江县',
            code: '340827'
          },
          {
            name: '岳西县',
            code: '340828'
          },
          {
            name: '桐城市',
            code: '340881'
          }
        ]
      },
      {
        name: '黄山市',
        code: '341000',
        children: [
          {
            name: '屯溪区',
            code: '341002'
          },
          {
            name: '黄山区',
            code: '341003'
          },
          {
            name: '徽州区',
            code: '341004'
          },
          {
            name: '歙县',
            code: '341021'
          },
          {
            name: '休宁县',
            code: '341022'
          },
          {
            name: '黟县',
            code: '341023'
          },
          {
            name: '祁门县',
            code: '341024'
          }
        ]
      },
      {
        name: '滁州市',
        code: '341100',
        children: [
          {
            name: '琅琊区',
            code: '341102'
          },
          {
            name: '南谯区',
            code: '341103'
          },
          {
            name: '来安县',
            code: '341122'
          },
          {
            name: '全椒县',
            code: '341124'
          },
          {
            name: '定远县',
            code: '341125'
          },
          {
            name: '凤阳县',
            code: '341126'
          },
          {
            name: '天长市',
            code: '341181'
          },
          {
            name: '明光市',
            code: '341182'
          }
        ]
      },
      {
        name: '阜阳市',
        code: '341200',
        children: [
          {
            name: '颍州区',
            code: '341202'
          },
          {
            name: '颍东区',
            code: '341203'
          },
          {
            name: '颍泉区',
            code: '341204'
          },
          {
            name: '临泉县',
            code: '341221'
          },
          {
            name: '太和县',
            code: '341222'
          },
          {
            name: '阜南县',
            code: '341225'
          },
          {
            name: '颍上县',
            code: '341226'
          },
          {
            name: '界首市',
            code: '341282'
          }
        ]
      },
      {
        name: '宿州市',
        code: '341300',
        children: [
          {
            name: '埇桥区',
            code: '341302'
          },
          {
            name: '砀山县',
            code: '341321'
          },
          {
            name: '萧县',
            code: '341322'
          },
          {
            name: '灵璧县',
            code: '341323'
          },
          {
            name: '泗县',
            code: '341324'
          }
        ]
      },
      {
        name: '六安市',
        code: '341500',
        children: [
          {
            name: '金安区',
            code: '341502'
          },
          {
            name: '裕安区',
            code: '341503'
          },
          {
            name: '叶集区',
            code: '341504'
          },
          {
            name: '霍邱县',
            code: '341522'
          },
          {
            name: '舒城县',
            code: '341523'
          },
          {
            name: '金寨县',
            code: '341524'
          },
          {
            name: '霍山县',
            code: '341525'
          }
        ]
      },
      {
        name: '亳州市',
        code: '341600',
        children: [
          {
            name: '谯城区',
            code: '341602'
          },
          {
            name: '涡阳县',
            code: '341621'
          },
          {
            name: '蒙城县',
            code: '341622'
          },
          {
            name: '利辛县',
            code: '341623'
          }
        ]
      },
      {
        name: '池州市',
        code: '341700',
        children: [
          {
            name: '贵池区',
            code: '341702'
          },
          {
            name: '东至县',
            code: '341721'
          },
          {
            name: '石台县',
            code: '341722'
          },
          {
            name: '青阳县',
            code: '341723'
          }
        ]
      },
      {
        name: '宣城市',
        code: '341800',
        children: [
          {
            name: '宣州区',
            code: '341802'
          },
          {
            name: '郎溪县',
            code: '341821'
          },
          {
            name: '广德县',
            code: '341822'
          },
          {
            name: '泾县',
            code: '341823'
          },
          {
            name: '绩溪县',
            code: '341824'
          },
          {
            name: '旌德县',
            code: '341825'
          },
          {
            name: '宁国市',
            code: '341881'
          }
        ]
      }
    ]
  },
  {
    name: '福建',
    code: '350000',
    children: [
      {
        name: '福州市',
        code: '350100',
        children: [
          {
            name: '鼓楼区',
            code: '350102'
          },
          {
            name: '台江区',
            code: '350103'
          },
          {
            name: '仓山区',
            code: '350104'
          },
          {
            name: '马尾区',
            code: '350105'
          },
          {
            name: '晋安区',
            code: '350111'
          },
          {
            name: '闽侯县',
            code: '350121'
          },
          {
            name: '连江县',
            code: '350122'
          },
          {
            name: '罗源县',
            code: '350123'
          },
          {
            name: '闽清县',
            code: '350124'
          },
          {
            name: '永泰县',
            code: '350125'
          },
          {
            name: '平潭县',
            code: '350128'
          },
          {
            name: '福清市',
            code: '350181'
          },
          {
            name: '长乐市',
            code: '350182'
          }
        ]
      },
      {
        name: '厦门市',
        code: '350200',
        children: [
          {
            name: '思明区',
            code: '350203'
          },
          {
            name: '海沧区',
            code: '350205'
          },
          {
            name: '湖里区',
            code: '350206'
          },
          {
            name: '集美区',
            code: '350211'
          },
          {
            name: '同安区',
            code: '350212'
          },
          {
            name: '翔安区',
            code: '350213'
          }
        ]
      },
      {
        name: '莆田市',
        code: '350300',
        children: [
          {
            name: '城厢区',
            code: '350302'
          },
          {
            name: '涵江区',
            code: '350303'
          },
          {
            name: '荔城区',
            code: '350304'
          },
          {
            name: '秀屿区',
            code: '350305'
          },
          {
            name: '仙游县',
            code: '350322'
          }
        ]
      },
      {
        name: '三明市',
        code: '350400',
        children: [
          {
            name: '梅列区',
            code: '350402'
          },
          {
            name: '三元区',
            code: '350403'
          },
          {
            name: '明溪县',
            code: '350421'
          },
          {
            name: '清流县',
            code: '350423'
          },
          {
            name: '宁化县',
            code: '350424'
          },
          {
            name: '大田县',
            code: '350425'
          },
          {
            name: '尤溪县',
            code: '350426'
          },
          {
            name: '沙县',
            code: '350427'
          },
          {
            name: '将乐县',
            code: '350428'
          },
          {
            name: '泰宁县',
            code: '350429'
          },
          {
            name: '建宁县',
            code: '350430'
          },
          {
            name: '永安市',
            code: '350481'
          }
        ]
      },
      {
        name: '泉州市',
        code: '350500',
        children: [
          {
            name: '鲤城区',
            code: '350502'
          },
          {
            name: '丰泽区',
            code: '350503'
          },
          {
            name: '洛江区',
            code: '350504'
          },
          {
            name: '泉港区',
            code: '350505'
          },
          {
            name: '惠安县',
            code: '350521'
          },
          {
            name: '安溪县',
            code: '350524'
          },
          {
            name: '永春县',
            code: '350525'
          },
          {
            name: '德化县',
            code: '350526'
          },
          {
            name: '金门县',
            code: '350527'
          },
          {
            name: '石狮市',
            code: '350581'
          },
          {
            name: '晋江市',
            code: '350582'
          },
          {
            name: '南安市',
            code: '350583'
          }
        ]
      },
      {
        name: '漳州市',
        code: '350600',
        children: [
          {
            name: '芗城区',
            code: '350602'
          },
          {
            name: '龙文区',
            code: '350603'
          },
          {
            name: '云霄县',
            code: '350622'
          },
          {
            name: '漳浦县',
            code: '350623'
          },
          {
            name: '诏安县',
            code: '350624'
          },
          {
            name: '长泰县',
            code: '350625'
          },
          {
            name: '东山县',
            code: '350626'
          },
          {
            name: '南靖县',
            code: '350627'
          },
          {
            name: '平和县',
            code: '350628'
          },
          {
            name: '华安县',
            code: '350629'
          },
          {
            name: '龙海市',
            code: '350681'
          }
        ]
      },
      {
        name: '南平市',
        code: '350700',
        children: [
          {
            name: '延平区',
            code: '350702'
          },
          {
            name: '建阳区',
            code: '350703'
          },
          {
            name: '顺昌县',
            code: '350721'
          },
          {
            name: '浦城县',
            code: '350722'
          },
          {
            name: '光泽县',
            code: '350723'
          },
          {
            name: '松溪县',
            code: '350724'
          },
          {
            name: '政和县',
            code: '350725'
          },
          {
            name: '邵武市',
            code: '350781'
          },
          {
            name: '武夷山市',
            code: '350782'
          },
          {
            name: '建瓯市',
            code: '350783'
          }
        ]
      },
      {
        name: '龙岩市',
        code: '350800',
        children: [
          {
            name: '新罗区',
            code: '350802'
          },
          {
            name: '永定区',
            code: '350803'
          },
          {
            name: '长汀县',
            code: '350821'
          },
          {
            name: '上杭县',
            code: '350823'
          },
          {
            name: '武平县',
            code: '350824'
          },
          {
            name: '连城县',
            code: '350825'
          },
          {
            name: '漳平市',
            code: '350881'
          }
        ]
      },
      {
        name: '宁德市',
        code: '350900',
        children: [
          {
            name: '蕉城区',
            code: '350902'
          },
          {
            name: '霞浦县',
            code: '350921'
          },
          {
            name: '古田县',
            code: '350922'
          },
          {
            name: '屏南县',
            code: '350923'
          },
          {
            name: '寿宁县',
            code: '350924'
          },
          {
            name: '周宁县',
            code: '350925'
          },
          {
            name: '柘荣县',
            code: '350926'
          },
          {
            name: '福安市',
            code: '350981'
          },
          {
            name: '福鼎市',
            code: '350982'
          }
        ]
      }
    ]
  },
  {
    name: '江西',
    code: '360000',
    children: [
      {
        name: '南昌市',
        code: '360100',
        children: [
          {
            name: '东湖区',
            code: '360102'
          },
          {
            name: '西湖区',
            code: '360103'
          },
          {
            name: '青云谱区',
            code: '360104'
          },
          {
            name: '湾里区',
            code: '360105'
          },
          {
            name: '青山湖区',
            code: '360111'
          },
          {
            name: '新建区',
            code: '360112'
          },
          {
            name: '南昌县',
            code: '360121'
          },
          {
            name: '安义县',
            code: '360123'
          },
          {
            name: '进贤县',
            code: '360124'
          }
        ]
      },
      {
        name: '景德镇市',
        code: '360200',
        children: [
          {
            name: '昌江区',
            code: '360202'
          },
          {
            name: '珠山区',
            code: '360203'
          },
          {
            name: '浮梁县',
            code: '360222'
          },
          {
            name: '乐平市',
            code: '360281'
          }
        ]
      },
      {
        name: '萍乡市',
        code: '360300',
        children: [
          {
            name: '安源区',
            code: '360302'
          },
          {
            name: '湘东区',
            code: '360313'
          },
          {
            name: '莲花县',
            code: '360321'
          },
          {
            name: '上栗县',
            code: '360322'
          },
          {
            name: '芦溪县',
            code: '360323'
          }
        ]
      },
      {
        name: '九江市',
        code: '360400',
        children: [
          {
            name: '濂溪区',
            code: '360402'
          },
          {
            name: '浔阳区',
            code: '360403'
          },
          {
            name: '九江县',
            code: '360421'
          },
          {
            name: '武宁县',
            code: '360423'
          },
          {
            name: '修水县',
            code: '360424'
          },
          {
            name: '永修县',
            code: '360425'
          },
          {
            name: '德安县',
            code: '360426'
          },
          {
            name: '都昌县',
            code: '360428'
          },
          {
            name: '湖口县',
            code: '360429'
          },
          {
            name: '彭泽县',
            code: '360430'
          },
          {
            name: '瑞昌市',
            code: '360481'
          },
          {
            name: '共青城市',
            code: '360482'
          },
          {
            name: '庐山市',
            code: '360483'
          }
        ]
      },
      {
        name: '新余市',
        code: '360500',
        children: [
          {
            name: '渝水区',
            code: '360502'
          },
          {
            name: '分宜县',
            code: '360521'
          }
        ]
      },
      {
        name: '鹰潭市',
        code: '360600',
        children: [
          {
            name: '月湖区',
            code: '360602'
          },
          {
            name: '余江县',
            code: '360622'
          },
          {
            name: '贵溪市',
            code: '360681'
          }
        ]
      },
      {
        name: '赣州市',
        code: '360700',
        children: [
          {
            name: '章贡区',
            code: '360702'
          },
          {
            name: '南康区',
            code: '360703'
          },
          {
            name: '赣县',
            code: '360721'
          },
          {
            name: '信丰县',
            code: '360722'
          },
          {
            name: '大余县',
            code: '360723'
          },
          {
            name: '上犹县',
            code: '360724'
          },
          {
            name: '崇义县',
            code: '360725'
          },
          {
            name: '安远县',
            code: '360726'
          },
          {
            name: '龙南县',
            code: '360727'
          },
          {
            name: '定南县',
            code: '360728'
          },
          {
            name: '全南县',
            code: '360729'
          },
          {
            name: '宁都县',
            code: '360730'
          },
          {
            name: '于都县',
            code: '360731'
          },
          {
            name: '兴国县',
            code: '360732'
          },
          {
            name: '会昌县',
            code: '360733'
          },
          {
            name: '寻乌县',
            code: '360734'
          },
          {
            name: '石城县',
            code: '360735'
          },
          {
            name: '瑞金市',
            code: '360781'
          }
        ]
      },
      {
        name: '吉安市',
        code: '360800',
        children: [
          {
            name: '吉州区',
            code: '360802'
          },
          {
            name: '青原区',
            code: '360803'
          },
          {
            name: '吉安县',
            code: '360821'
          },
          {
            name: '吉水县',
            code: '360822'
          },
          {
            name: '峡江县',
            code: '360823'
          },
          {
            name: '新干县',
            code: '360824'
          },
          {
            name: '永丰县',
            code: '360825'
          },
          {
            name: '泰和县',
            code: '360826'
          },
          {
            name: '遂川县',
            code: '360827'
          },
          {
            name: '万安县',
            code: '360828'
          },
          {
            name: '安福县',
            code: '360829'
          },
          {
            name: '永新县',
            code: '360830'
          },
          {
            name: '井冈山市',
            code: '360881'
          }
        ]
      },
      {
        name: '宜春市',
        code: '360900',
        children: [
          {
            name: '袁州区',
            code: '360902'
          },
          {
            name: '奉新县',
            code: '360921'
          },
          {
            name: '万载县',
            code: '360922'
          },
          {
            name: '上高县',
            code: '360923'
          },
          {
            name: '宜丰县',
            code: '360924'
          },
          {
            name: '靖安县',
            code: '360925'
          },
          {
            name: '铜鼓县',
            code: '360926'
          },
          {
            name: '丰城市',
            code: '360981'
          },
          {
            name: '樟树市',
            code: '360982'
          },
          {
            name: '高安市',
            code: '360983'
          }
        ]
      },
      {
        name: '抚州市',
        code: '361000',
        children: [
          {
            name: '临川区',
            code: '361002'
          },
          {
            name: '南城县',
            code: '361021'
          },
          {
            name: '黎川县',
            code: '361022'
          },
          {
            name: '南丰县',
            code: '361023'
          },
          {
            name: '崇仁县',
            code: '361024'
          },
          {
            name: '乐安县',
            code: '361025'
          },
          {
            name: '宜黄县',
            code: '361026'
          },
          {
            name: '金溪县',
            code: '361027'
          },
          {
            name: '资溪县',
            code: '361028'
          },
          {
            name: '东乡县',
            code: '361029'
          },
          {
            name: '广昌县',
            code: '361030'
          }
        ]
      },
      {
        name: '上饶市',
        code: '361100',
        children: [
          {
            name: '信州区',
            code: '361102'
          },
          {
            name: '广丰区',
            code: '361103'
          },
          {
            name: '上饶县',
            code: '361121'
          },
          {
            name: '玉山县',
            code: '361123'
          },
          {
            name: '铅山县',
            code: '361124'
          },
          {
            name: '横峰县',
            code: '361125'
          },
          {
            name: '弋阳县',
            code: '361126'
          },
          {
            name: '余干县',
            code: '361127'
          },
          {
            name: '鄱阳县',
            code: '361128'
          },
          {
            name: '万年县',
            code: '361129'
          },
          {
            name: '婺源县',
            code: '361130'
          },
          {
            name: '德兴市',
            code: '361181'
          }
        ]
      }
    ]
  },
  {
    name: '山东',
    code: '370000',
    children: [
      {
        name: '济南市',
        code: '370100',
        children: [
          {
            name: '历下区',
            code: '370102'
          },
          {
            name: '市中区',
            code: '370103'
          },
          {
            name: '槐荫区',
            code: '370104'
          },
          {
            name: '天桥区',
            code: '370105'
          },
          {
            name: '历城区',
            code: '370112'
          },
          {
            name: '长清区',
            code: '370113'
          },
          {
            name: '平阴县',
            code: '370124'
          },
          {
            name: '济阳县',
            code: '370125'
          },
          {
            name: '商河县',
            code: '370126'
          },
          {
            name: '章丘市',
            code: '370181'
          }
        ]
      },
      {
        name: '青岛市',
        code: '370200',
        children: [
          {
            name: '市南区',
            code: '370202'
          },
          {
            name: '市北区',
            code: '370203'
          },
          {
            name: '黄岛区',
            code: '370211'
          },
          {
            name: '崂山区',
            code: '370212'
          },
          {
            name: '李沧区',
            code: '370213'
          },
          {
            name: '城阳区',
            code: '370214'
          },
          {
            name: '胶州市',
            code: '370281'
          },
          {
            name: '即墨市',
            code: '370282'
          },
          {
            name: '平度市',
            code: '370283'
          },
          {
            name: '莱西市',
            code: '370285'
          }
        ]
      },
      {
        name: '淄博市',
        code: '370300',
        children: [
          {
            name: '淄川区',
            code: '370302'
          },
          {
            name: '张店区',
            code: '370303'
          },
          {
            name: '博山区',
            code: '370304'
          },
          {
            name: '临淄区',
            code: '370305'
          },
          {
            name: '周村区',
            code: '370306'
          },
          {
            name: '桓台县',
            code: '370321'
          },
          {
            name: '高青县',
            code: '370322'
          },
          {
            name: '沂源县',
            code: '370323'
          }
        ]
      },
      {
        name: '枣庄市',
        code: '370400',
        children: [
          {
            name: '市中区',
            code: '370402'
          },
          {
            name: '薛城区',
            code: '370403'
          },
          {
            name: '峄城区',
            code: '370404'
          },
          {
            name: '台儿庄区',
            code: '370405'
          },
          {
            name: '山亭区',
            code: '370406'
          },
          {
            name: '滕州市',
            code: '370481'
          }
        ]
      },
      {
        name: '东营市',
        code: '370500',
        children: [
          {
            name: '东营区',
            code: '370502'
          },
          {
            name: '河口区',
            code: '370503'
          },
          {
            name: '垦利区',
            code: '370505'
          },
          {
            name: '利津县',
            code: '370522'
          },
          {
            name: '广饶县',
            code: '370523'
          }
        ]
      },
      {
        name: '烟台市',
        code: '370600',
        children: [
          {
            name: '芝罘区',
            code: '370602'
          },
          {
            name: '福山区',
            code: '370611'
          },
          {
            name: '牟平区',
            code: '370612'
          },
          {
            name: '莱山区',
            code: '370613'
          },
          {
            name: '长岛县',
            code: '370634'
          },
          {
            name: '龙口市',
            code: '370681'
          },
          {
            name: '莱阳市',
            code: '370682'
          },
          {
            name: '莱州市',
            code: '370683'
          },
          {
            name: '蓬莱市',
            code: '370684'
          },
          {
            name: '招远市',
            code: '370685'
          },
          {
            name: '栖霞市',
            code: '370686'
          },
          {
            name: '海阳市',
            code: '370687'
          }
        ]
      },
      {
        name: '潍坊市',
        code: '370700',
        children: [
          {
            name: '潍城区',
            code: '370702'
          },
          {
            name: '寒亭区',
            code: '370703'
          },
          {
            name: '坊子区',
            code: '370704'
          },
          {
            name: '奎文区',
            code: '370705'
          },
          {
            name: '临朐县',
            code: '370724'
          },
          {
            name: '昌乐县',
            code: '370725'
          },
          {
            name: '青州市',
            code: '370781'
          },
          {
            name: '诸城市',
            code: '370782'
          },
          {
            name: '寿光市',
            code: '370783'
          },
          {
            name: '安丘市',
            code: '370784'
          },
          {
            name: '高密市',
            code: '370785'
          },
          {
            name: '昌邑市',
            code: '370786'
          }
        ]
      },
      {
        name: '济宁市',
        code: '370800',
        children: [
          {
            name: '任城区',
            code: '370811'
          },
          {
            name: '兖州区',
            code: '370812'
          },
          {
            name: '微山县',
            code: '370826'
          },
          {
            name: '鱼台县',
            code: '370827'
          },
          {
            name: '金乡县',
            code: '370828'
          },
          {
            name: '嘉祥县',
            code: '370829'
          },
          {
            name: '汶上县',
            code: '370830'
          },
          {
            name: '泗水县',
            code: '370831'
          },
          {
            name: '梁山县',
            code: '370832'
          },
          {
            name: '曲阜市',
            code: '370881'
          },
          {
            name: '邹城市',
            code: '370883'
          }
        ]
      },
      {
        name: '泰安市',
        code: '370900',
        children: [
          {
            name: '泰山区',
            code: '370902'
          },
          {
            name: '岱岳区',
            code: '370911'
          },
          {
            name: '宁阳县',
            code: '370921'
          },
          {
            name: '东平县',
            code: '370923'
          },
          {
            name: '新泰市',
            code: '370982'
          },
          {
            name: '肥城市',
            code: '370983'
          }
        ]
      },
      {
        name: '威海市',
        code: '371000',
        children: [
          {
            name: '环翠区',
            code: '371002'
          },
          {
            name: '文登区',
            code: '371003'
          },
          {
            name: '荣成市',
            code: '371082'
          },
          {
            name: '乳山市',
            code: '371083'
          }
        ]
      },
      {
        name: '日照市',
        code: '371100',
        children: [
          {
            name: '东港区',
            code: '371102'
          },
          {
            name: '岚山区',
            code: '371103'
          },
          {
            name: '五莲县',
            code: '371121'
          },
          {
            name: '莒县',
            code: '371122'
          }
        ]
      },
      {
        name: '莱芜市',
        code: '371200',
        children: [
          {
            name: '莱城区',
            code: '371202'
          },
          {
            name: '钢城区',
            code: '371203'
          }
        ]
      },
      {
        name: '临沂市',
        code: '371300',
        children: [
          {
            name: '兰山区',
            code: '371302'
          },
          {
            name: '罗庄区',
            code: '371311'
          },
          {
            name: '河东区',
            code: '371312'
          },
          {
            name: '沂南县',
            code: '371321'
          },
          {
            name: '郯城县',
            code: '371322'
          },
          {
            name: '沂水县',
            code: '371323'
          },
          {
            name: '兰陵县',
            code: '371324'
          },
          {
            name: '费县',
            code: '371325'
          },
          {
            name: '平邑县',
            code: '371326'
          },
          {
            name: '莒南县',
            code: '371327'
          },
          {
            name: '蒙阴县',
            code: '371328'
          },
          {
            name: '临沭县',
            code: '371329'
          }
        ]
      },
      {
        name: '德州市',
        code: '371400',
        children: [
          {
            name: '德城区',
            code: '371402'
          },
          {
            name: '陵城区',
            code: '371403'
          },
          {
            name: '宁津县',
            code: '371422'
          },
          {
            name: '庆云县',
            code: '371423'
          },
          {
            name: '临邑县',
            code: '371424'
          },
          {
            name: '齐河县',
            code: '371425'
          },
          {
            name: '平原县',
            code: '371426'
          },
          {
            name: '夏津县',
            code: '371427'
          },
          {
            name: '武城县',
            code: '371428'
          },
          {
            name: '乐陵市',
            code: '371481'
          },
          {
            name: '禹城市',
            code: '371482'
          }
        ]
      },
      {
        name: '聊城市',
        code: '371500',
        children: [
          {
            name: '东昌府区',
            code: '371502'
          },
          {
            name: '阳谷县',
            code: '371521'
          },
          {
            name: '莘县',
            code: '371522'
          },
          {
            name: '茌平县',
            code: '371523'
          },
          {
            name: '东阿县',
            code: '371524'
          },
          {
            name: '冠县',
            code: '371525'
          },
          {
            name: '高唐县',
            code: '371526'
          },
          {
            name: '临清市',
            code: '371581'
          }
        ]
      },
      {
        name: '滨州市',
        code: '371600',
        children: [
          {
            name: '滨城区',
            code: '371602'
          },
          {
            name: '沾化区',
            code: '371603'
          },
          {
            name: '惠民县',
            code: '371621'
          },
          {
            name: '阳信县',
            code: '371622'
          },
          {
            name: '无棣县',
            code: '371623'
          },
          {
            name: '博兴县',
            code: '371625'
          },
          {
            name: '邹平县',
            code: '371626'
          }
        ]
      },
      {
        name: '菏泽市',
        code: '371700',
        children: [
          {
            name: '牡丹区',
            code: '371702'
          },
          {
            name: '定陶区',
            code: '371703'
          },
          {
            name: '曹县',
            code: '371721'
          },
          {
            name: '单县',
            code: '371722'
          },
          {
            name: '成武县',
            code: '371723'
          },
          {
            name: '巨野县',
            code: '371724'
          },
          {
            name: '郓城县',
            code: '371725'
          },
          {
            name: '鄄城县',
            code: '371726'
          },
          {
            name: '东明县',
            code: '371728'
          }
        ]
      }
    ]
  },
  {
    name: '河南',
    code: '410000',
    children: [
      {
        name: '郑州市',
        code: '410100',
        children: [
          {
            name: '中原区',
            code: '410102'
          },
          {
            name: '二七区',
            code: '410103'
          },
          {
            name: '管城回族区',
            code: '410104'
          },
          {
            name: '金水区',
            code: '410105'
          },
          {
            name: '上街区',
            code: '410106'
          },
          {
            name: '惠济区',
            code: '410108'
          },
          {
            name: '中牟县',
            code: '410122'
          },
          {
            name: '巩义市',
            code: '410181'
          },
          {
            name: '荥阳市',
            code: '410182'
          },
          {
            name: '新密市',
            code: '410183'
          },
          {
            name: '新郑市',
            code: '410184'
          },
          {
            name: '登封市',
            code: '410185'
          }
        ]
      },
      {
        name: '开封市',
        code: '410200',
        children: [
          {
            name: '龙亭区',
            code: '410202'
          },
          {
            name: '顺河回族区',
            code: '410203'
          },
          {
            name: '鼓楼区',
            code: '410204'
          },
          {
            name: '禹王台区',
            code: '410205'
          },
          {
            name: '金明区',
            code: '410211'
          },
          {
            name: '祥符区',
            code: '410212'
          },
          {
            name: '杞县',
            code: '410221'
          },
          {
            name: '通许县',
            code: '410222'
          },
          {
            name: '尉氏县',
            code: '410223'
          },
          {
            name: '兰考县',
            code: '410225'
          }
        ]
      },
      {
        name: '洛阳市',
        code: '410300',
        children: [
          {
            name: '老城区',
            code: '410302'
          },
          {
            name: '西工区',
            code: '410303'
          },
          {
            name: '瀍河回族区',
            code: '410304'
          },
          {
            name: '涧西区',
            code: '410305'
          },
          {
            name: '吉利区',
            code: '410306'
          },
          {
            name: '洛龙区',
            code: '410311'
          },
          {
            name: '孟津县',
            code: '410322'
          },
          {
            name: '新安县',
            code: '410323'
          },
          {
            name: '栾川县',
            code: '410324'
          },
          {
            name: '嵩县',
            code: '410325'
          },
          {
            name: '汝阳县',
            code: '410326'
          },
          {
            name: '宜阳县',
            code: '410327'
          },
          {
            name: '洛宁县',
            code: '410328'
          },
          {
            name: '伊川县',
            code: '410329'
          },
          {
            name: '偃师市',
            code: '410381'
          }
        ]
      },
      {
        name: '平顶山市',
        code: '410400',
        children: [
          {
            name: '新华区',
            code: '410402'
          },
          {
            name: '卫东区',
            code: '410403'
          },
          {
            name: '石龙区',
            code: '410404'
          },
          {
            name: '湛河区',
            code: '410411'
          },
          {
            name: '宝丰县',
            code: '410421'
          },
          {
            name: '叶县',
            code: '410422'
          },
          {
            name: '鲁山县',
            code: '410423'
          },
          {
            name: '郏县',
            code: '410425'
          },
          {
            name: '舞钢市',
            code: '410481'
          },
          {
            name: '汝州市',
            code: '410482'
          }
        ]
      },
      {
        name: '安阳市',
        code: '410500',
        children: [
          {
            name: '文峰区',
            code: '410502'
          },
          {
            name: '北关区',
            code: '410503'
          },
          {
            name: '殷都区',
            code: '410505'
          },
          {
            name: '龙安区',
            code: '410506'
          },
          {
            name: '安阳县',
            code: '410522'
          },
          {
            name: '汤阴县',
            code: '410523'
          },
          {
            name: '滑县',
            code: '410526'
          },
          {
            name: '内黄县',
            code: '410527'
          },
          {
            name: '林州市',
            code: '410581'
          }
        ]
      },
      {
        name: '鹤壁市',
        code: '410600',
        children: [
          {
            name: '鹤山区',
            code: '410602'
          },
          {
            name: '山城区',
            code: '410603'
          },
          {
            name: '淇滨区',
            code: '410611'
          },
          {
            name: '浚县',
            code: '410621'
          },
          {
            name: '淇县',
            code: '410622'
          }
        ]
      },
      {
        name: '新乡市',
        code: '410700',
        children: [
          {
            name: '红旗区',
            code: '410702'
          },
          {
            name: '卫滨区',
            code: '410703'
          },
          {
            name: '凤泉区',
            code: '410704'
          },
          {
            name: '牧野区',
            code: '410711'
          },
          {
            name: '新乡县',
            code: '410721'
          },
          {
            name: '获嘉县',
            code: '410724'
          },
          {
            name: '原阳县',
            code: '410725'
          },
          {
            name: '延津县',
            code: '410726'
          },
          {
            name: '封丘县',
            code: '410727'
          },
          {
            name: '长垣县',
            code: '410728'
          },
          {
            name: '卫辉市',
            code: '410781'
          },
          {
            name: '辉县市',
            code: '410782'
          }
        ]
      },
      {
        name: '焦作市',
        code: '410800',
        children: [
          {
            name: '解放区',
            code: '410802'
          },
          {
            name: '中站区',
            code: '410803'
          },
          {
            name: '马村区',
            code: '410804'
          },
          {
            name: '山阳区',
            code: '410811'
          },
          {
            name: '修武县',
            code: '410821'
          },
          {
            name: '博爱县',
            code: '410822'
          },
          {
            name: '武陟县',
            code: '410823'
          },
          {
            name: '温县',
            code: '410825'
          },
          {
            name: '沁阳市',
            code: '410882'
          },
          {
            name: '孟州市',
            code: '410883'
          }
        ]
      },
      {
        name: '濮阳市',
        code: '410900',
        children: [
          {
            name: '华龙区',
            code: '410902'
          },
          {
            name: '清丰县',
            code: '410922'
          },
          {
            name: '南乐县',
            code: '410923'
          },
          {
            name: '范县',
            code: '410926'
          },
          {
            name: '台前县',
            code: '410927'
          },
          {
            name: '濮阳县',
            code: '410928'
          }
        ]
      },
      {
        name: '许昌市',
        code: '411000',
        children: [
          {
            name: '魏都区',
            code: '411002'
          },
          {
            name: '许昌县',
            code: '411023'
          },
          {
            name: '鄢陵县',
            code: '411024'
          },
          {
            name: '襄城县',
            code: '411025'
          },
          {
            name: '禹州市',
            code: '411081'
          },
          {
            name: '长葛市',
            code: '411082'
          }
        ]
      },
      {
        name: '漯河市',
        code: '411100',
        children: [
          {
            name: '源汇区',
            code: '411102'
          },
          {
            name: '郾城区',
            code: '411103'
          },
          {
            name: '召陵区',
            code: '411104'
          },
          {
            name: '舞阳县',
            code: '411121'
          },
          {
            name: '临颍县',
            code: '411122'
          }
        ]
      },
      {
        name: '三门峡市',
        code: '411200',
        children: [
          {
            name: '湖滨区',
            code: '411202'
          },
          {
            name: '陕州区',
            code: '411203'
          },
          {
            name: '渑池县',
            code: '411221'
          },
          {
            name: '卢氏县',
            code: '411224'
          },
          {
            name: '义马市',
            code: '411281'
          },
          {
            name: '灵宝市',
            code: '411282'
          }
        ]
      },
      {
        name: '南阳市',
        code: '411300',
        children: [
          {
            name: '宛城区',
            code: '411302'
          },
          {
            name: '卧龙区',
            code: '411303'
          },
          {
            name: '南召县',
            code: '411321'
          },
          {
            name: '方城县',
            code: '411322'
          },
          {
            name: '西峡县',
            code: '411323'
          },
          {
            name: '镇平县',
            code: '411324'
          },
          {
            name: '内乡县',
            code: '411325'
          },
          {
            name: '淅川县',
            code: '411326'
          },
          {
            name: '社旗县',
            code: '411327'
          },
          {
            name: '唐河县',
            code: '411328'
          },
          {
            name: '新野县',
            code: '411329'
          },
          {
            name: '桐柏县',
            code: '411330'
          },
          {
            name: '邓州市',
            code: '411381'
          }
        ]
      },
      {
        name: '商丘市',
        code: '411400',
        children: [
          {
            name: '梁园区',
            code: '411402'
          },
          {
            name: '睢阳区',
            code: '411403'
          },
          {
            name: '民权县',
            code: '411421'
          },
          {
            name: '睢县',
            code: '411422'
          },
          {
            name: '宁陵县',
            code: '411423'
          },
          {
            name: '柘城县',
            code: '411424'
          },
          {
            name: '虞城县',
            code: '411425'
          },
          {
            name: '夏邑县',
            code: '411426'
          },
          {
            name: '永城市',
            code: '411481'
          }
        ]
      },
      {
        name: '信阳市',
        code: '411500',
        children: [
          {
            name: '浉河区',
            code: '411502'
          },
          {
            name: '平桥区',
            code: '411503'
          },
          {
            name: '罗山县',
            code: '411521'
          },
          {
            name: '光山县',
            code: '411522'
          },
          {
            name: '新县',
            code: '411523'
          },
          {
            name: '商城县',
            code: '411524'
          },
          {
            name: '固始县',
            code: '411525'
          },
          {
            name: '潢川县',
            code: '411526'
          },
          {
            name: '淮滨县',
            code: '411527'
          },
          {
            name: '息县',
            code: '411528'
          }
        ]
      },
      {
        name: '周口市',
        code: '411600',
        children: [
          {
            name: '川汇区',
            code: '411602'
          },
          {
            name: '扶沟县',
            code: '411621'
          },
          {
            name: '西华县',
            code: '411622'
          },
          {
            name: '商水县',
            code: '411623'
          },
          {
            name: '沈丘县',
            code: '411624'
          },
          {
            name: '郸城县',
            code: '411625'
          },
          {
            name: '淮阳县',
            code: '411626'
          },
          {
            name: '太康县',
            code: '411627'
          },
          {
            name: '鹿邑县',
            code: '411628'
          },
          {
            name: '项城市',
            code: '411681'
          }
        ]
      },
      {
        name: '驻马店市',
        code: '411700',
        children: [
          {
            name: '驿城区',
            code: '411702'
          },
          {
            name: '西平县',
            code: '411721'
          },
          {
            name: '上蔡县',
            code: '411722'
          },
          {
            name: '平舆县',
            code: '411723'
          },
          {
            name: '正阳县',
            code: '411724'
          },
          {
            name: '确山县',
            code: '411725'
          },
          {
            name: '泌阳县',
            code: '411726'
          },
          {
            name: '汝南县',
            code: '411727'
          },
          {
            name: '遂平县',
            code: '411728'
          },
          {
            name: '新蔡县',
            code: '411729'
          }
        ]
      },
      {
        name: '直辖县级行政区划',
        code: '419000',
        children: [
          {
            name: '济源市',
            code: '419001'
          }
        ]
      }
    ]
  },
  {
    name: '湖北',
    code: '420000',
    children: [
      {
        name: '武汉市',
        code: '420100',
        children: [
          {
            name: '江岸区',
            code: '420102'
          },
          {
            name: '江汉区',
            code: '420103'
          },
          {
            name: '硚口区',
            code: '420104'
          },
          {
            name: '汉阳区',
            code: '420105'
          },
          {
            name: '武昌区',
            code: '420106'
          },
          {
            name: '青山区',
            code: '420107'
          },
          {
            name: '洪山区',
            code: '420111'
          },
          {
            name: '东西湖区',
            code: '420112'
          },
          {
            name: '汉南区',
            code: '420113'
          },
          {
            name: '蔡甸区',
            code: '420114'
          },
          {
            name: '江夏区',
            code: '420115'
          },
          {
            name: '黄陂区',
            code: '420116'
          },
          {
            name: '新洲区',
            code: '420117'
          }
        ]
      },
      {
        name: '黄石市',
        code: '420200',
        children: [
          {
            name: '黄石港区',
            code: '420202'
          },
          {
            name: '西塞山区',
            code: '420203'
          },
          {
            name: '下陆区',
            code: '420204'
          },
          {
            name: '铁山区',
            code: '420205'
          },
          {
            name: '阳新县',
            code: '420222'
          },
          {
            name: '大冶市',
            code: '420281'
          }
        ]
      },
      {
        name: '十堰市',
        code: '420300',
        children: [
          {
            name: '茅箭区',
            code: '420302'
          },
          {
            name: '张湾区',
            code: '420303'
          },
          {
            name: '郧阳区',
            code: '420304'
          },
          {
            name: '郧西县',
            code: '420322'
          },
          {
            name: '竹山县',
            code: '420323'
          },
          {
            name: '竹溪县',
            code: '420324'
          },
          {
            name: '房县',
            code: '420325'
          },
          {
            name: '丹江口市',
            code: '420381'
          }
        ]
      },
      {
        name: '宜昌市',
        code: '420500',
        children: [
          {
            name: '西陵区',
            code: '420502'
          },
          {
            name: '伍家岗区',
            code: '420503'
          },
          {
            name: '点军区',
            code: '420504'
          },
          {
            name: '猇亭区',
            code: '420505'
          },
          {
            name: '夷陵区',
            code: '420506'
          },
          {
            name: '远安县',
            code: '420525'
          },
          {
            name: '兴山县',
            code: '420526'
          },
          {
            name: '秭归县',
            code: '420527'
          },
          {
            name: '长阳土家族自治县',
            code: '420528'
          },
          {
            name: '五峰土家族自治县',
            code: '420529'
          },
          {
            name: '宜都市',
            code: '420581'
          },
          {
            name: '当阳市',
            code: '420582'
          },
          {
            name: '枝江市',
            code: '420583'
          }
        ]
      },
      {
        name: '襄阳市',
        code: '420600',
        children: [
          {
            name: '襄城区',
            code: '420602'
          },
          {
            name: '樊城区',
            code: '420606'
          },
          {
            name: '襄州区',
            code: '420607'
          },
          {
            name: '南漳县',
            code: '420624'
          },
          {
            name: '谷城县',
            code: '420625'
          },
          {
            name: '保康县',
            code: '420626'
          },
          {
            name: '老河口市',
            code: '420682'
          },
          {
            name: '枣阳市',
            code: '420683'
          },
          {
            name: '宜城市',
            code: '420684'
          }
        ]
      },
      {
        name: '鄂州市',
        code: '420700',
        children: [
          {
            name: '梁子湖区',
            code: '420702'
          },
          {
            name: '华容区',
            code: '420703'
          },
          {
            name: '鄂城区',
            code: '420704'
          }
        ]
      },
      {
        name: '荆门市',
        code: '420800',
        children: [
          {
            name: '东宝区',
            code: '420802'
          },
          {
            name: '掇刀区',
            code: '420804'
          },
          {
            name: '京山县',
            code: '420821'
          },
          {
            name: '沙洋县',
            code: '420822'
          },
          {
            name: '钟祥市',
            code: '420881'
          }
        ]
      },
      {
        name: '孝感市',
        code: '420900',
        children: [
          {
            name: '孝南区',
            code: '420902'
          },
          {
            name: '孝昌县',
            code: '420921'
          },
          {
            name: '大悟县',
            code: '420922'
          },
          {
            name: '云梦县',
            code: '420923'
          },
          {
            name: '应城市',
            code: '420981'
          },
          {
            name: '安陆市',
            code: '420982'
          },
          {
            name: '汉川市',
            code: '420984'
          }
        ]
      },
      {
        name: '荆州市',
        code: '421000',
        children: [
          {
            name: '沙市区',
            code: '421002'
          },
          {
            name: '荆州区',
            code: '421003'
          },
          {
            name: '公安县',
            code: '421022'
          },
          {
            name: '监利县',
            code: '421023'
          },
          {
            name: '江陵县',
            code: '421024'
          },
          {
            name: '石首市',
            code: '421081'
          },
          {
            name: '洪湖市',
            code: '421083'
          },
          {
            name: '松滋市',
            code: '421087'
          }
        ]
      },
      {
        name: '黄冈市',
        code: '421100',
        children: [
          {
            name: '黄州区',
            code: '421102'
          },
          {
            name: '团风县',
            code: '421121'
          },
          {
            name: '红安县',
            code: '421122'
          },
          {
            name: '罗田县',
            code: '421123'
          },
          {
            name: '英山县',
            code: '421124'
          },
          {
            name: '浠水县',
            code: '421125'
          },
          {
            name: '蕲春县',
            code: '421126'
          },
          {
            name: '黄梅县',
            code: '421127'
          },
          {
            name: '麻城市',
            code: '421181'
          },
          {
            name: '武穴市',
            code: '421182'
          }
        ]
      },
      {
        name: '咸宁市',
        code: '421200',
        children: [
          {
            name: '咸安区',
            code: '421202'
          },
          {
            name: '嘉鱼县',
            code: '421221'
          },
          {
            name: '通城县',
            code: '421222'
          },
          {
            name: '崇阳县',
            code: '421223'
          },
          {
            name: '通山县',
            code: '421224'
          },
          {
            name: '赤壁市',
            code: '421281'
          }
        ]
      },
      {
        name: '随州市',
        code: '421300',
        children: [
          {
            name: '曾都区',
            code: '421303'
          },
          {
            name: '随县',
            code: '421321'
          },
          {
            name: '广水市',
            code: '421381'
          }
        ]
      },
      {
        name: '恩施土家族苗族自治州',
        code: '422800',
        children: [
          {
            name: '恩施市',
            code: '422801'
          },
          {
            name: '利川市',
            code: '422802'
          },
          {
            name: '建始县',
            code: '422822'
          },
          {
            name: '巴东县',
            code: '422823'
          },
          {
            name: '宣恩县',
            code: '422825'
          },
          {
            name: '咸丰县',
            code: '422826'
          },
          {
            name: '来凤县',
            code: '422827'
          },
          {
            name: '鹤峰县',
            code: '422828'
          }
        ]
      },
      {
        name: '直辖县级行政区划',
        code: '429000',
        children: [
          {
            name: '仙桃市',
            code: '429004'
          },
          {
            name: '潜江市',
            code: '429005'
          },
          {
            name: '天门市',
            code: '429006'
          },
          {
            name: '神农架林区',
            code: '429021'
          }
        ]
      }
    ]
  },
  {
    name: '湖南',
    code: '430000',
    children: [
      {
        name: '长沙市',
        code: '430100',
        children: [
          {
            name: '芙蓉区',
            code: '430102'
          },
          {
            name: '天心区',
            code: '430103'
          },
          {
            name: '岳麓区',
            code: '430104'
          },
          {
            name: '开福区',
            code: '430105'
          },
          {
            name: '雨花区',
            code: '430111'
          },
          {
            name: '望城区',
            code: '430112'
          },
          {
            name: '长沙县',
            code: '430121'
          },
          {
            name: '宁乡县',
            code: '430124'
          },
          {
            name: '浏阳市',
            code: '430181'
          }
        ]
      },
      {
        name: '株洲市',
        code: '430200',
        children: [
          {
            name: '荷塘区',
            code: '430202'
          },
          {
            name: '芦淞区',
            code: '430203'
          },
          {
            name: '石峰区',
            code: '430204'
          },
          {
            name: '天元区',
            code: '430211'
          },
          {
            name: '株洲县',
            code: '430221'
          },
          {
            name: '攸县',
            code: '430223'
          },
          {
            name: '茶陵县',
            code: '430224'
          },
          {
            name: '炎陵县',
            code: '430225'
          },
          {
            name: '醴陵市',
            code: '430281'
          }
        ]
      },
      {
        name: '湘潭市',
        code: '430300',
        children: [
          {
            name: '雨湖区',
            code: '430302'
          },
          {
            name: '岳塘区',
            code: '430304'
          },
          {
            name: '湘潭县',
            code: '430321'
          },
          {
            name: '湘乡市',
            code: '430381'
          },
          {
            name: '韶山市',
            code: '430382'
          }
        ]
      },
      {
        name: '衡阳市',
        code: '430400',
        children: [
          {
            name: '珠晖区',
            code: '430405'
          },
          {
            name: '雁峰区',
            code: '430406'
          },
          {
            name: '石鼓区',
            code: '430407'
          },
          {
            name: '蒸湘区',
            code: '430408'
          },
          {
            name: '南岳区',
            code: '430412'
          },
          {
            name: '衡阳县',
            code: '430421'
          },
          {
            name: '衡南县',
            code: '430422'
          },
          {
            name: '衡山县',
            code: '430423'
          },
          {
            name: '衡东县',
            code: '430424'
          },
          {
            name: '祁东县',
            code: '430426'
          },
          {
            name: '耒阳市',
            code: '430481'
          },
          {
            name: '常宁市',
            code: '430482'
          }
        ]
      },
      {
        name: '邵阳市',
        code: '430500',
        children: [
          {
            name: '双清区',
            code: '430502'
          },
          {
            name: '大祥区',
            code: '430503'
          },
          {
            name: '北塔区',
            code: '430511'
          },
          {
            name: '邵东县',
            code: '430521'
          },
          {
            name: '新邵县',
            code: '430522'
          },
          {
            name: '邵阳县',
            code: '430523'
          },
          {
            name: '隆回县',
            code: '430524'
          },
          {
            name: '洞口县',
            code: '430525'
          },
          {
            name: '绥宁县',
            code: '430527'
          },
          {
            name: '新宁县',
            code: '430528'
          },
          {
            name: '城步苗族自治县',
            code: '430529'
          },
          {
            name: '武冈市',
            code: '430581'
          }
        ]
      },
      {
        name: '岳阳市',
        code: '430600',
        children: [
          {
            name: '岳阳楼区',
            code: '430602'
          },
          {
            name: '云溪区',
            code: '430603'
          },
          {
            name: '君山区',
            code: '430611'
          },
          {
            name: '岳阳县',
            code: '430621'
          },
          {
            name: '华容县',
            code: '430623'
          },
          {
            name: '湘阴县',
            code: '430624'
          },
          {
            name: '平江县',
            code: '430626'
          },
          {
            name: '汨罗市',
            code: '430681'
          },
          {
            name: '临湘市',
            code: '430682'
          }
        ]
      },
      {
        name: '常德市',
        code: '430700',
        children: [
          {
            name: '武陵区',
            code: '430702'
          },
          {
            name: '鼎城区',
            code: '430703'
          },
          {
            name: '安乡县',
            code: '430721'
          },
          {
            name: '汉寿县',
            code: '430722'
          },
          {
            name: '澧县',
            code: '430723'
          },
          {
            name: '临澧县',
            code: '430724'
          },
          {
            name: '桃源县',
            code: '430725'
          },
          {
            name: '石门县',
            code: '430726'
          },
          {
            name: '津市市',
            code: '430781'
          }
        ]
      },
      {
        name: '张家界市',
        code: '430800',
        children: [
          {
            name: '永定区',
            code: '430802'
          },
          {
            name: '武陵源区',
            code: '430811'
          },
          {
            name: '慈利县',
            code: '430821'
          },
          {
            name: '桑植县',
            code: '430822'
          }
        ]
      },
      {
        name: '益阳市',
        code: '430900',
        children: [
          {
            name: '资阳区',
            code: '430902'
          },
          {
            name: '赫山区',
            code: '430903'
          },
          {
            name: '南县',
            code: '430921'
          },
          {
            name: '桃江县',
            code: '430922'
          },
          {
            name: '安化县',
            code: '430923'
          },
          {
            name: '沅江市',
            code: '430981'
          }
        ]
      },
      {
        name: '郴州市',
        code: '431000',
        children: [
          {
            name: '北湖区',
            code: '431002'
          },
          {
            name: '苏仙区',
            code: '431003'
          },
          {
            name: '桂阳县',
            code: '431021'
          },
          {
            name: '宜章县',
            code: '431022'
          },
          {
            name: '永兴县',
            code: '431023'
          },
          {
            name: '嘉禾县',
            code: '431024'
          },
          {
            name: '临武县',
            code: '431025'
          },
          {
            name: '汝城县',
            code: '431026'
          },
          {
            name: '桂东县',
            code: '431027'
          },
          {
            name: '安仁县',
            code: '431028'
          },
          {
            name: '资兴市',
            code: '431081'
          }
        ]
      },
      {
        name: '永州市',
        code: '431100',
        children: [
          {
            name: '零陵区',
            code: '431102'
          },
          {
            name: '冷水滩区',
            code: '431103'
          },
          {
            name: '祁阳县',
            code: '431121'
          },
          {
            name: '东安县',
            code: '431122'
          },
          {
            name: '双牌县',
            code: '431123'
          },
          {
            name: '道县',
            code: '431124'
          },
          {
            name: '江永县',
            code: '431125'
          },
          {
            name: '宁远县',
            code: '431126'
          },
          {
            name: '蓝山县',
            code: '431127'
          },
          {
            name: '新田县',
            code: '431128'
          },
          {
            name: '江华瑶族自治县',
            code: '431129'
          }
        ]
      },
      {
        name: '怀化市',
        code: '431200',
        children: [
          {
            name: '鹤城区',
            code: '431202'
          },
          {
            name: '中方县',
            code: '431221'
          },
          {
            name: '沅陵县',
            code: '431222'
          },
          {
            name: '辰溪县',
            code: '431223'
          },
          {
            name: '溆浦县',
            code: '431224'
          },
          {
            name: '会同县',
            code: '431225'
          },
          {
            name: '麻阳苗族自治县',
            code: '431226'
          },
          {
            name: '新晃侗族自治县',
            code: '431227'
          },
          {
            name: '芷江侗族自治县',
            code: '431228'
          },
          {
            name: '靖州苗族侗族自治县',
            code: '431229'
          },
          {
            name: '通道侗族自治县',
            code: '431230'
          },
          {
            name: '洪江市',
            code: '431281'
          }
        ]
      },
      {
        name: '娄底市',
        code: '431300',
        children: [
          {
            name: '娄星区',
            code: '431302'
          },
          {
            name: '双峰县',
            code: '431321'
          },
          {
            name: '新化县',
            code: '431322'
          },
          {
            name: '冷水江市',
            code: '431381'
          },
          {
            name: '涟源市',
            code: '431382'
          }
        ]
      },
      {
        name: '湘西土家族苗族自治州',
        code: '433100',
        children: [
          {
            name: '吉首市',
            code: '433101'
          },
          {
            name: '泸溪县',
            code: '433122'
          },
          {
            name: '凤凰县',
            code: '433123'
          },
          {
            name: '花垣县',
            code: '433124'
          },
          {
            name: '保靖县',
            code: '433125'
          },
          {
            name: '古丈县',
            code: '433126'
          },
          {
            name: '永顺县',
            code: '433127'
          },
          {
            name: '龙山县',
            code: '433130'
          }
        ]
      }
    ]
  },
  {
    name: '广东',
    code: '440000',
    children: [
      {
        name: '广州市',
        code: '440100',
        children: [
          {
            name: '荔湾区',
            code: '440103'
          },
          {
            name: '越秀区',
            code: '440104'
          },
          {
            name: '海珠区',
            code: '440105'
          },
          {
            name: '天河区',
            code: '440106'
          },
          {
            name: '白云区',
            code: '440111'
          },
          {
            name: '黄埔区',
            code: '440112'
          },
          {
            name: '番禺区',
            code: '440113'
          },
          {
            name: '花都区',
            code: '440114'
          },
          {
            name: '南沙区',
            code: '440115'
          },
          {
            name: '从化区',
            code: '440117'
          },
          {
            name: '增城区',
            code: '440118'
          }
        ]
      },
      {
        name: '韶关市',
        code: '440200',
        children: [
          {
            name: '武江区',
            code: '440203'
          },
          {
            name: '浈江区',
            code: '440204'
          },
          {
            name: '曲江区',
            code: '440205'
          },
          {
            name: '始兴县',
            code: '440222'
          },
          {
            name: '仁化县',
            code: '440224'
          },
          {
            name: '翁源县',
            code: '440229'
          },
          {
            name: '乳源瑶族自治县',
            code: '440232'
          },
          {
            name: '新丰县',
            code: '440233'
          },
          {
            name: '乐昌市',
            code: '440281'
          },
          {
            name: '南雄市',
            code: '440282'
          }
        ]
      },
      {
        name: '深圳市',
        code: '440300',
        children: [
          {
            name: '罗湖区',
            code: '440303'
          },
          {
            name: '福田区',
            code: '440304'
          },
          {
            name: '南山区',
            code: '440305'
          },
          {
            name: '宝安区',
            code: '440306'
          },
          {
            name: '龙岗区',
            code: '440307'
          },
          {
            name: '盐田区',
            code: '440308'
          }
        ]
      },
      {
        name: '珠海市',
        code: '440400',
        children: [
          {
            name: '香洲区',
            code: '440402'
          },
          {
            name: '斗门区',
            code: '440403'
          },
          {
            name: '金湾区',
            code: '440404'
          }
        ]
      },
      {
        name: '汕头市',
        code: '440500',
        children: [
          {
            name: '龙湖区',
            code: '440507'
          },
          {
            name: '金平区',
            code: '440511'
          },
          {
            name: '濠江区',
            code: '440512'
          },
          {
            name: '潮阳区',
            code: '440513'
          },
          {
            name: '潮南区',
            code: '440514'
          },
          {
            name: '澄海区',
            code: '440515'
          },
          {
            name: '南澳县',
            code: '440523'
          }
        ]
      },
      {
        name: '佛山市',
        code: '440600',
        children: [
          {
            name: '禅城区',
            code: '440604'
          },
          {
            name: '南海区',
            code: '440605'
          },
          {
            name: '顺德区',
            code: '440606'
          },
          {
            name: '三水区',
            code: '440607'
          },
          {
            name: '高明区',
            code: '440608'
          }
        ]
      },
      {
        name: '江门市',
        code: '440700',
        children: [
          {
            name: '蓬江区',
            code: '440703'
          },
          {
            name: '江海区',
            code: '440704'
          },
          {
            name: '新会区',
            code: '440705'
          },
          {
            name: '台山市',
            code: '440781'
          },
          {
            name: '开平市',
            code: '440783'
          },
          {
            name: '鹤山市',
            code: '440784'
          },
          {
            name: '恩平市',
            code: '440785'
          }
        ]
      },
      {
        name: '湛江市',
        code: '440800',
        children: [
          {
            name: '赤坎区',
            code: '440802'
          },
          {
            name: '霞山区',
            code: '440803'
          },
          {
            name: '坡头区',
            code: '440804'
          },
          {
            name: '麻章区',
            code: '440811'
          },
          {
            name: '遂溪县',
            code: '440823'
          },
          {
            name: '徐闻县',
            code: '440825'
          },
          {
            name: '廉江市',
            code: '440881'
          },
          {
            name: '雷州市',
            code: '440882'
          },
          {
            name: '吴川市',
            code: '440883'
          }
        ]
      },
      {
        name: '茂名市',
        code: '440900',
        children: [
          {
            name: '茂南区',
            code: '440902'
          },
          {
            name: '电白区',
            code: '440904'
          },
          {
            name: '高州市',
            code: '440981'
          },
          {
            name: '化州市',
            code: '440982'
          },
          {
            name: '信宜市',
            code: '440983'
          }
        ]
      },
      {
        name: '肇庆市',
        code: '441200',
        children: [
          {
            name: '端州区',
            code: '441202'
          },
          {
            name: '鼎湖区',
            code: '441203'
          },
          {
            name: '高要区',
            code: '441204'
          },
          {
            name: '广宁县',
            code: '441223'
          },
          {
            name: '怀集县',
            code: '441224'
          },
          {
            name: '封开县',
            code: '441225'
          },
          {
            name: '德庆县',
            code: '441226'
          },
          {
            name: '四会市',
            code: '441284'
          }
        ]
      },
      {
        name: '惠州市',
        code: '441300',
        children: [
          {
            name: '惠城区',
            code: '441302'
          },
          {
            name: '惠阳区',
            code: '441303'
          },
          {
            name: '博罗县',
            code: '441322'
          },
          {
            name: '惠东县',
            code: '441323'
          },
          {
            name: '龙门县',
            code: '441324'
          }
        ]
      },
      {
        name: '梅州市',
        code: '441400',
        children: [
          {
            name: '梅江区',
            code: '441402'
          },
          {
            name: '梅县区',
            code: '441403'
          },
          {
            name: '大埔县',
            code: '441422'
          },
          {
            name: '丰顺县',
            code: '441423'
          },
          {
            name: '五华县',
            code: '441424'
          },
          {
            name: '平远县',
            code: '441426'
          },
          {
            name: '蕉岭县',
            code: '441427'
          },
          {
            name: '兴宁市',
            code: '441481'
          }
        ]
      },
      {
        name: '汕尾市',
        code: '441500',
        children: [
          {
            name: '城区',
            code: '441502'
          },
          {
            name: '海丰县',
            code: '441521'
          },
          {
            name: '陆河县',
            code: '441523'
          },
          {
            name: '陆丰市',
            code: '441581'
          }
        ]
      },
      {
        name: '河源市',
        code: '441600',
        children: [
          {
            name: '源城区',
            code: '441602'
          },
          {
            name: '紫金县',
            code: '441621'
          },
          {
            name: '龙川县',
            code: '441622'
          },
          {
            name: '连平县',
            code: '441623'
          },
          {
            name: '和平县',
            code: '441624'
          },
          {
            name: '东源县',
            code: '441625'
          }
        ]
      },
      {
        name: '阳江市',
        code: '441700',
        children: [
          {
            name: '江城区',
            code: '441702'
          },
          {
            name: '阳东区',
            code: '441704'
          },
          {
            name: '阳西县',
            code: '441721'
          },
          {
            name: '阳春市',
            code: '441781'
          }
        ]
      },
      {
        name: '清远市',
        code: '441800',
        children: [
          {
            name: '清城区',
            code: '441802'
          },
          {
            name: '清新区',
            code: '441803'
          },
          {
            name: '佛冈县',
            code: '441821'
          },
          {
            name: '阳山县',
            code: '441823'
          },
          {
            name: '连山壮族瑶族自治县',
            code: '441825'
          },
          {
            name: '连南瑶族自治县',
            code: '441826'
          },
          {
            name: '英德市',
            code: '441881'
          },
          {
            name: '连州市',
            code: '441882'
          }
        ]
      },
      {
        name: '东莞市',
        code: '441900',
        children: []
      },
      {
        name: '中山市',
        code: '442000',
        children: []
      },
      {
        name: '潮州市',
        code: '445100',
        children: [
          {
            name: '湘桥区',
            code: '445102'
          },
          {
            name: '潮安区',
            code: '445103'
          },
          {
            name: '饶平县',
            code: '445122'
          }
        ]
      },
      {
        name: '揭阳市',
        code: '445200',
        children: [
          {
            name: '榕城区',
            code: '445202'
          },
          {
            name: '揭东区',
            code: '445203'
          },
          {
            name: '揭西县',
            code: '445222'
          },
          {
            name: '惠来县',
            code: '445224'
          },
          {
            name: '普宁市',
            code: '445281'
          }
        ]
      },
      {
        name: '云浮市',
        code: '445300',
        children: [
          {
            name: '云城区',
            code: '445302'
          },
          {
            name: '云安区',
            code: '445303'
          },
          {
            name: '新兴县',
            code: '445321'
          },
          {
            name: '郁南县',
            code: '445322'
          },
          {
            name: '罗定市',
            code: '445381'
          }
        ]
      }
    ]
  },
  {
    name: '广西',
    code: '450000',
    children: [
      {
        name: '南宁市',
        code: '450100',
        children: [
          {
            name: '兴宁区',
            code: '450102'
          },
          {
            name: '青秀区',
            code: '450103'
          },
          {
            name: '江南区',
            code: '450105'
          },
          {
            name: '西乡塘区',
            code: '450107'
          },
          {
            name: '良庆区',
            code: '450108'
          },
          {
            name: '邕宁区',
            code: '450109'
          },
          {
            name: '武鸣区',
            code: '450110'
          },
          {
            name: '隆安县',
            code: '450123'
          },
          {
            name: '马山县',
            code: '450124'
          },
          {
            name: '上林县',
            code: '450125'
          },
          {
            name: '宾阳县',
            code: '450126'
          },
          {
            name: '横县',
            code: '450127'
          }
        ]
      },
      {
        name: '柳州市',
        code: '450200',
        children: [
          {
            name: '城中区',
            code: '450202'
          },
          {
            name: '鱼峰区',
            code: '450203'
          },
          {
            name: '柳南区',
            code: '450204'
          },
          {
            name: '柳北区',
            code: '450205'
          },
          {
            name: '柳江区',
            code: '450206'
          },
          {
            name: '柳城县',
            code: '450222'
          },
          {
            name: '鹿寨县',
            code: '450223'
          },
          {
            name: '融安县',
            code: '450224'
          },
          {
            name: '融水苗族自治县',
            code: '450225'
          },
          {
            name: '三江侗族自治县',
            code: '450226'
          }
        ]
      },
      {
        name: '桂林市',
        code: '450300',
        children: [
          {
            name: '秀峰区',
            code: '450302'
          },
          {
            name: '叠彩区',
            code: '450303'
          },
          {
            name: '象山区',
            code: '450304'
          },
          {
            name: '七星区',
            code: '450305'
          },
          {
            name: '雁山区',
            code: '450311'
          },
          {
            name: '临桂区',
            code: '450312'
          },
          {
            name: '阳朔县',
            code: '450321'
          },
          {
            name: '灵川县',
            code: '450323'
          },
          {
            name: '全州县',
            code: '450324'
          },
          {
            name: '兴安县',
            code: '450325'
          },
          {
            name: '永福县',
            code: '450326'
          },
          {
            name: '灌阳县',
            code: '450327'
          },
          {
            name: '龙胜各族自治县',
            code: '450328'
          },
          {
            name: '资源县',
            code: '450329'
          },
          {
            name: '平乐县',
            code: '450330'
          },
          {
            name: '荔浦县',
            code: '450331'
          },
          {
            name: '恭城瑶族自治县',
            code: '450332'
          }
        ]
      },
      {
        name: '梧州市',
        code: '450400',
        children: [
          {
            name: '万秀区',
            code: '450403'
          },
          {
            name: '长洲区',
            code: '450405'
          },
          {
            name: '龙圩区',
            code: '450406'
          },
          {
            name: '苍梧县',
            code: '450421'
          },
          {
            name: '藤县',
            code: '450422'
          },
          {
            name: '蒙山县',
            code: '450423'
          },
          {
            name: '岑溪市',
            code: '450481'
          }
        ]
      },
      {
        name: '北海市',
        code: '450500',
        children: [
          {
            name: '海城区',
            code: '450502'
          },
          {
            name: '银海区',
            code: '450503'
          },
          {
            name: '铁山港区',
            code: '450512'
          },
          {
            name: '合浦县',
            code: '450521'
          }
        ]
      },
      {
        name: '防城港市',
        code: '450600',
        children: [
          {
            name: '港口区',
            code: '450602'
          },
          {
            name: '防城区',
            code: '450603'
          },
          {
            name: '上思县',
            code: '450621'
          },
          {
            name: '东兴市',
            code: '450681'
          }
        ]
      },
      {
        name: '钦州市',
        code: '450700',
        children: [
          {
            name: '钦南区',
            code: '450702'
          },
          {
            name: '钦北区',
            code: '450703'
          },
          {
            name: '灵山县',
            code: '450721'
          },
          {
            name: '浦北县',
            code: '450722'
          }
        ]
      },
      {
        name: '贵港市',
        code: '450800',
        children: [
          {
            name: '港北区',
            code: '450802'
          },
          {
            name: '港南区',
            code: '450803'
          },
          {
            name: '覃塘区',
            code: '450804'
          },
          {
            name: '平南县',
            code: '450821'
          },
          {
            name: '桂平市',
            code: '450881'
          }
        ]
      },
      {
        name: '玉林市',
        code: '450900',
        children: [
          {
            name: '玉州区',
            code: '450902'
          },
          {
            name: '福绵区',
            code: '450903'
          },
          {
            name: '容县',
            code: '450921'
          },
          {
            name: '陆川县',
            code: '450922'
          },
          {
            name: '博白县',
            code: '450923'
          },
          {
            name: '兴业县',
            code: '450924'
          },
          {
            name: '北流市',
            code: '450981'
          }
        ]
      },
      {
        name: '百色市',
        code: '451000',
        children: [
          {
            name: '右江区',
            code: '451002'
          },
          {
            name: '田阳县',
            code: '451021'
          },
          {
            name: '田东县',
            code: '451022'
          },
          {
            name: '平果县',
            code: '451023'
          },
          {
            name: '德保县',
            code: '451024'
          },
          {
            name: '那坡县',
            code: '451026'
          },
          {
            name: '凌云县',
            code: '451027'
          },
          {
            name: '乐业县',
            code: '451028'
          },
          {
            name: '田林县',
            code: '451029'
          },
          {
            name: '西林县',
            code: '451030'
          },
          {
            name: '隆林各族自治县',
            code: '451031'
          },
          {
            name: '靖西市',
            code: '451081'
          }
        ]
      },
      {
        name: '贺州市',
        code: '451100',
        children: [
          {
            name: '八步区',
            code: '451102'
          },
          {
            name: '平桂区',
            code: '451103'
          },
          {
            name: '昭平县',
            code: '451121'
          },
          {
            name: '钟山县',
            code: '451122'
          },
          {
            name: '富川瑶族自治县',
            code: '451123'
          }
        ]
      },
      {
        name: '河池市',
        code: '451200',
        children: [
          {
            name: '金城江区',
            code: '451202'
          },
          {
            name: '南丹县',
            code: '451221'
          },
          {
            name: '天峨县',
            code: '451222'
          },
          {
            name: '凤山县',
            code: '451223'
          },
          {
            name: '东兰县',
            code: '451224'
          },
          {
            name: '罗城仫佬族自治县',
            code: '451225'
          },
          {
            name: '环江毛南族自治县',
            code: '451226'
          },
          {
            name: '巴马瑶族自治县',
            code: '451227'
          },
          {
            name: '都安瑶族自治县',
            code: '451228'
          },
          {
            name: '大化瑶族自治县',
            code: '451229'
          },
          {
            name: '宜州市',
            code: '451281'
          }
        ]
      },
      {
        name: '来宾市',
        code: '451300',
        children: [
          {
            name: '兴宾区',
            code: '451302'
          },
          {
            name: '忻城县',
            code: '451321'
          },
          {
            name: '象州县',
            code: '451322'
          },
          {
            name: '武宣县',
            code: '451323'
          },
          {
            name: '金秀瑶族自治县',
            code: '451324'
          },
          {
            name: '合山市',
            code: '451381'
          }
        ]
      },
      {
        name: '崇左市',
        code: '451400',
        children: [
          {
            name: '江州区',
            code: '451402'
          },
          {
            name: '扶绥县',
            code: '451421'
          },
          {
            name: '宁明县',
            code: '451422'
          },
          {
            name: '龙州县',
            code: '451423'
          },
          {
            name: '大新县',
            code: '451424'
          },
          {
            name: '天等县',
            code: '451425'
          },
          {
            name: '凭祥市',
            code: '451481'
          }
        ]
      }
    ]
  },
  {
    name: '海南',
    code: '460000',
    children: [
      {
        name: '海口市',
        code: '460100',
        children: [
          {
            name: '秀英区',
            code: '460105'
          },
          {
            name: '龙华区',
            code: '460106'
          },
          {
            name: '琼山区',
            code: '460107'
          },
          {
            name: '美兰区',
            code: '460108'
          }
        ]
      },
      {
        name: '三亚市',
        code: '460200',
        children: [
          {
            name: '海棠区',
            code: '460202'
          },
          {
            name: '吉阳区',
            code: '460203'
          },
          {
            name: '天涯区',
            code: '460204'
          },
          {
            name: '崖州区',
            code: '460205'
          }
        ]
      },
      {
        name: '三沙市',
        code: '460300',
        children: []
      },
      {
        name: '儋州市',
        code: '460400',
        children: []
      },
      {
        name: '直辖县级行政区划',
        code: '469000',
        children: [
          {
            name: '五指山市',
            code: '469001'
          },
          {
            name: '琼海市',
            code: '469002'
          },
          {
            name: '文昌市',
            code: '469005'
          },
          {
            name: '万宁市',
            code: '469006'
          },
          {
            name: '东方市',
            code: '469007'
          },
          {
            name: '定安县',
            code: '469021'
          },
          {
            name: '屯昌县',
            code: '469022'
          },
          {
            name: '澄迈县',
            code: '469023'
          },
          {
            name: '临高县',
            code: '469024'
          },
          {
            name: '白沙黎族自治县',
            code: '469025'
          },
          {
            name: '昌江黎族自治县',
            code: '469026'
          },
          {
            name: '乐东黎族自治县',
            code: '469027'
          },
          {
            name: '陵水黎族自治县',
            code: '469028'
          },
          {
            name: '保亭黎族苗族自治县',
            code: '469029'
          },
          {
            name: '琼中黎族苗族自治县',
            code: '469030'
          }
        ]
      }
    ]
  },
  {
    name: '重庆',
    code: '500000',
    children: [
      {
        name: '重庆市',
        code: '500100',
        children: [
          {
            name: '万州区',
            code: '500101'
          },
          {
            name: '涪陵区',
            code: '500102'
          },
          {
            name: '渝中区',
            code: '500103'
          },
          {
            name: '大渡口区',
            code: '500104'
          },
          {
            name: '江北区',
            code: '500105'
          },
          {
            name: '沙坪坝区',
            code: '500106'
          },
          {
            name: '九龙坡区',
            code: '500107'
          },
          {
            name: '南岸区',
            code: '500108'
          },
          {
            name: '北碚区',
            code: '500109'
          },
          {
            name: '綦江区',
            code: '500110'
          },
          {
            name: '大足区',
            code: '500111'
          },
          {
            name: '渝北区',
            code: '500112'
          },
          {
            name: '巴南区',
            code: '500113'
          },
          {
            name: '黔江区',
            code: '500114'
          },
          {
            name: '长寿区',
            code: '500115'
          },
          {
            name: '江津区',
            code: '500116'
          },
          {
            name: '合川区',
            code: '500117'
          },
          {
            name: '永川区',
            code: '500118'
          },
          {
            name: '南川区',
            code: '500119'
          },
          {
            name: '璧山区',
            code: '500120'
          },
          {
            name: '铜梁区',
            code: '500151'
          },
          {
            name: '潼南区',
            code: '500152'
          },
          {
            name: '荣昌区',
            code: '500153'
          },
          {
            name: '开州区',
            code: '500154'
          },
          {
            name: '梁平县',
            code: '500228'
          },
          {
            name: '城口县',
            code: '500229'
          },
          {
            name: '丰都县',
            code: '500230'
          },
          {
            name: '垫江县',
            code: '500231'
          },
          {
            name: '武隆县',
            code: '500232'
          },
          {
            name: '忠县',
            code: '500233'
          },
          {
            name: '云阳县',
            code: '500235'
          },
          {
            name: '奉节县',
            code: '500236'
          },
          {
            name: '巫山县',
            code: '500237'
          },
          {
            name: '巫溪县',
            code: '500238'
          },
          {
            name: '石柱土家族自治县',
            code: '500240'
          },
          {
            name: '秀山土家族苗族自治县',
            code: '500241'
          },
          {
            name: '酉阳土家族苗族自治县',
            code: '500242'
          },
          {
            name: '彭水苗族土家族自治县',
            code: '500243'
          }
        ]
      }
    ]
  },
  {
    name: '四川',
    code: '510000',
    children: [
      {
        name: '成都市',
        code: '510100',
        children: [
          {
            name: '锦江区',
            code: '510104'
          },
          {
            name: '青羊区',
            code: '510105'
          },
          {
            name: '金牛区',
            code: '510106'
          },
          {
            name: '武侯区',
            code: '510107'
          },
          {
            name: '成华区',
            code: '510108'
          },
          {
            name: '龙泉驿区',
            code: '510112'
          },
          {
            name: '青白江区',
            code: '510113'
          },
          {
            name: '新都区',
            code: '510114'
          },
          {
            name: '温江区',
            code: '510115'
          },
          {
            name: '双流区',
            code: '510116'
          },
          {
            name: '金堂县',
            code: '510121'
          },
          {
            name: '郫县',
            code: '510124'
          },
          {
            name: '大邑县',
            code: '510129'
          },
          {
            name: '蒲江县',
            code: '510131'
          },
          {
            name: '新津县',
            code: '510132'
          },
          {
            name: '都江堰市',
            code: '510181'
          },
          {
            name: '彭州市',
            code: '510182'
          },
          {
            name: '邛崃市',
            code: '510183'
          },
          {
            name: '崇州市',
            code: '510184'
          },
          {
            name: '简阳市',
            code: '510185'
          }
        ]
      },
      {
        name: '自贡市',
        code: '510300',
        children: [
          {
            name: '自流井区',
            code: '510302'
          },
          {
            name: '贡井区',
            code: '510303'
          },
          {
            name: '大安区',
            code: '510304'
          },
          {
            name: '沿滩区',
            code: '510311'
          },
          {
            name: '荣县',
            code: '510321'
          },
          {
            name: '富顺县',
            code: '510322'
          }
        ]
      },
      {
        name: '攀枝花市',
        code: '510400',
        children: [
          {
            name: '东区',
            code: '510402'
          },
          {
            name: '西区',
            code: '510403'
          },
          {
            name: '仁和区',
            code: '510411'
          },
          {
            name: '米易县',
            code: '510421'
          },
          {
            name: '盐边县',
            code: '510422'
          }
        ]
      },
      {
        name: '泸州市',
        code: '510500',
        children: [
          {
            name: '江阳区',
            code: '510502'
          },
          {
            name: '纳溪区',
            code: '510503'
          },
          {
            name: '龙马潭区',
            code: '510504'
          },
          {
            name: '泸县',
            code: '510521'
          },
          {
            name: '合江县',
            code: '510522'
          },
          {
            name: '叙永县',
            code: '510524'
          },
          {
            name: '古蔺县',
            code: '510525'
          }
        ]
      },
      {
        name: '德阳市',
        code: '510600',
        children: [
          {
            name: '旌阳区',
            code: '510603'
          },
          {
            name: '中江县',
            code: '510623'
          },
          {
            name: '罗江县',
            code: '510626'
          },
          {
            name: '广汉市',
            code: '510681'
          },
          {
            name: '什邡市',
            code: '510682'
          },
          {
            name: '绵竹市',
            code: '510683'
          }
        ]
      },
      {
        name: '绵阳市',
        code: '510700',
        children: [
          {
            name: '涪城区',
            code: '510703'
          },
          {
            name: '游仙区',
            code: '510704'
          },
          {
            name: '安州区',
            code: '510705'
          },
          {
            name: '三台县',
            code: '510722'
          },
          {
            name: '盐亭县',
            code: '510723'
          },
          {
            name: '梓潼县',
            code: '510725'
          },
          {
            name: '北川羌族自治县',
            code: '510726'
          },
          {
            name: '平武县',
            code: '510727'
          },
          {
            name: '江油市',
            code: '510781'
          }
        ]
      },
      {
        name: '广元市',
        code: '510800',
        children: [
          {
            name: '利州区',
            code: '510802'
          },
          {
            name: '昭化区',
            code: '510811'
          },
          {
            name: '朝天区',
            code: '510812'
          },
          {
            name: '旺苍县',
            code: '510821'
          },
          {
            name: '青川县',
            code: '510822'
          },
          {
            name: '剑阁县',
            code: '510823'
          },
          {
            name: '苍溪县',
            code: '510824'
          }
        ]
      },
      {
        name: '遂宁市',
        code: '510900',
        children: [
          {
            name: '船山区',
            code: '510903'
          },
          {
            name: '安居区',
            code: '510904'
          },
          {
            name: '蓬溪县',
            code: '510921'
          },
          {
            name: '射洪县',
            code: '510922'
          },
          {
            name: '大英县',
            code: '510923'
          }
        ]
      },
      {
        name: '内江市',
        code: '511000',
        children: [
          {
            name: '市中区',
            code: '511002'
          },
          {
            name: '东兴区',
            code: '511011'
          },
          {
            name: '威远县',
            code: '511024'
          },
          {
            name: '资中县',
            code: '511025'
          },
          {
            name: '隆昌县',
            code: '511028'
          }
        ]
      },
      {
        name: '乐山市',
        code: '511100',
        children: [
          {
            name: '市中区',
            code: '511102'
          },
          {
            name: '沙湾区',
            code: '511111'
          },
          {
            name: '五通桥区',
            code: '511112'
          },
          {
            name: '金口河区',
            code: '511113'
          },
          {
            name: '犍为县',
            code: '511123'
          },
          {
            name: '井研县',
            code: '511124'
          },
          {
            name: '夹江县',
            code: '511126'
          },
          {
            name: '沐川县',
            code: '511129'
          },
          {
            name: '峨边彝族自治县',
            code: '511132'
          },
          {
            name: '马边彝族自治县',
            code: '511133'
          },
          {
            name: '峨眉山市',
            code: '511181'
          }
        ]
      },
      {
        name: '南充市',
        code: '511300',
        children: [
          {
            name: '顺庆区',
            code: '511302'
          },
          {
            name: '高坪区',
            code: '511303'
          },
          {
            name: '嘉陵区',
            code: '511304'
          },
          {
            name: '南部县',
            code: '511321'
          },
          {
            name: '营山县',
            code: '511322'
          },
          {
            name: '蓬安县',
            code: '511323'
          },
          {
            name: '仪陇县',
            code: '511324'
          },
          {
            name: '西充县',
            code: '511325'
          },
          {
            name: '阆中市',
            code: '511381'
          }
        ]
      },
      {
        name: '眉山市',
        code: '511400',
        children: [
          {
            name: '东坡区',
            code: '511402'
          },
          {
            name: '彭山区',
            code: '511403'
          },
          {
            name: '仁寿县',
            code: '511421'
          },
          {
            name: '洪雅县',
            code: '511423'
          },
          {
            name: '丹棱县',
            code: '511424'
          },
          {
            name: '青神县',
            code: '511425'
          }
        ]
      },
      {
        name: '宜宾市',
        code: '511500',
        children: [
          {
            name: '翠屏区',
            code: '511502'
          },
          {
            name: '南溪区',
            code: '511503'
          },
          {
            name: '宜宾县',
            code: '511521'
          },
          {
            name: '江安县',
            code: '511523'
          },
          {
            name: '长宁县',
            code: '511524'
          },
          {
            name: '高县',
            code: '511525'
          },
          {
            name: '珙县',
            code: '511526'
          },
          {
            name: '筠连县',
            code: '511527'
          },
          {
            name: '兴文县',
            code: '511528'
          },
          {
            name: '屏山县',
            code: '511529'
          }
        ]
      },
      {
        name: '广安市',
        code: '511600',
        children: [
          {
            name: '广安区',
            code: '511602'
          },
          {
            name: '前锋区',
            code: '511603'
          },
          {
            name: '岳池县',
            code: '511621'
          },
          {
            name: '武胜县',
            code: '511622'
          },
          {
            name: '邻水县',
            code: '511623'
          },
          {
            name: '华蓥市',
            code: '511681'
          }
        ]
      },
      {
        name: '达州市',
        code: '511700',
        children: [
          {
            name: '通川区',
            code: '511702'
          },
          {
            name: '达川区',
            code: '511703'
          },
          {
            name: '宣汉县',
            code: '511722'
          },
          {
            name: '开江县',
            code: '511723'
          },
          {
            name: '大竹县',
            code: '511724'
          },
          {
            name: '渠县',
            code: '511725'
          },
          {
            name: '万源市',
            code: '511781'
          }
        ]
      },
      {
        name: '雅安市',
        code: '511800',
        children: [
          {
            name: '雨城区',
            code: '511802'
          },
          {
            name: '名山区',
            code: '511803'
          },
          {
            name: '荥经县',
            code: '511822'
          },
          {
            name: '汉源县',
            code: '511823'
          },
          {
            name: '石棉县',
            code: '511824'
          },
          {
            name: '天全县',
            code: '511825'
          },
          {
            name: '芦山县',
            code: '511826'
          },
          {
            name: '宝兴县',
            code: '511827'
          }
        ]
      },
      {
        name: '巴中市',
        code: '511900',
        children: [
          {
            name: '巴州区',
            code: '511902'
          },
          {
            name: '恩阳区',
            code: '511903'
          },
          {
            name: '通江县',
            code: '511921'
          },
          {
            name: '南江县',
            code: '511922'
          },
          {
            name: '平昌县',
            code: '511923'
          }
        ]
      },
      {
        name: '资阳市',
        code: '512000',
        children: [
          {
            name: '雁江区',
            code: '512002'
          },
          {
            name: '安岳县',
            code: '512021'
          },
          {
            name: '乐至县',
            code: '512022'
          }
        ]
      },
      {
        name: '阿坝藏族羌族自治州',
        code: '513200',
        children: [
          {
            name: '马尔康市',
            code: '513201'
          },
          {
            name: '汶川县',
            code: '513221'
          },
          {
            name: '理县',
            code: '513222'
          },
          {
            name: '茂县',
            code: '513223'
          },
          {
            name: '松潘县',
            code: '513224'
          },
          {
            name: '九寨沟县',
            code: '513225'
          },
          {
            name: '金川县',
            code: '513226'
          },
          {
            name: '小金县',
            code: '513227'
          },
          {
            name: '黑水县',
            code: '513228'
          },
          {
            name: '壤塘县',
            code: '513230'
          },
          {
            name: '阿坝县',
            code: '513231'
          },
          {
            name: '若尔盖县',
            code: '513232'
          },
          {
            name: '红原县',
            code: '513233'
          }
        ]
      },
      {
        name: '甘孜藏族自治州',
        code: '513300',
        children: [
          {
            name: '康定市',
            code: '513301'
          },
          {
            name: '泸定县',
            code: '513322'
          },
          {
            name: '丹巴县',
            code: '513323'
          },
          {
            name: '九龙县',
            code: '513324'
          },
          {
            name: '雅江县',
            code: '513325'
          },
          {
            name: '道孚县',
            code: '513326'
          },
          {
            name: '炉霍县',
            code: '513327'
          },
          {
            name: '甘孜县',
            code: '513328'
          },
          {
            name: '新龙县',
            code: '513329'
          },
          {
            name: '德格县',
            code: '513330'
          },
          {
            name: '白玉县',
            code: '513331'
          },
          {
            name: '石渠县',
            code: '513332'
          },
          {
            name: '色达县',
            code: '513333'
          },
          {
            name: '理塘县',
            code: '513334'
          },
          {
            name: '巴塘县',
            code: '513335'
          },
          {
            name: '乡城县',
            code: '513336'
          },
          {
            name: '稻城县',
            code: '513337'
          },
          {
            name: '得荣县',
            code: '513338'
          }
        ]
      },
      {
        name: '凉山彝族自治州',
        code: '513400',
        children: [
          {
            name: '西昌市',
            code: '513401'
          },
          {
            name: '木里藏族自治县',
            code: '513422'
          },
          {
            name: '盐源县',
            code: '513423'
          },
          {
            name: '德昌县',
            code: '513424'
          },
          {
            name: '会理县',
            code: '513425'
          },
          {
            name: '会东县',
            code: '513426'
          },
          {
            name: '宁南县',
            code: '513427'
          },
          {
            name: '普格县',
            code: '513428'
          },
          {
            name: '布拖县',
            code: '513429'
          },
          {
            name: '金阳县',
            code: '513430'
          },
          {
            name: '昭觉县',
            code: '513431'
          },
          {
            name: '喜德县',
            code: '513432'
          },
          {
            name: '冕宁县',
            code: '513433'
          },
          {
            name: '越西县',
            code: '513434'
          },
          {
            name: '甘洛县',
            code: '513435'
          },
          {
            name: '美姑县',
            code: '513436'
          },
          {
            name: '雷波县',
            code: '513437'
          }
        ]
      }
    ]
  },
  {
    name: '贵州',
    code: '520000',
    children: [
      {
        name: '贵阳市',
        code: '520100',
        children: [
          {
            name: '南明区',
            code: '520102'
          },
          {
            name: '云岩区',
            code: '520103'
          },
          {
            name: '花溪区',
            code: '520111'
          },
          {
            name: '乌当区',
            code: '520112'
          },
          {
            name: '白云区',
            code: '520113'
          },
          {
            name: '观山湖区',
            code: '520115'
          },
          {
            name: '开阳县',
            code: '520121'
          },
          {
            name: '息烽县',
            code: '520122'
          },
          {
            name: '修文县',
            code: '520123'
          },
          {
            name: '清镇市',
            code: '520181'
          }
        ]
      },
      {
        name: '六盘水市',
        code: '520200',
        children: [
          {
            name: '钟山区',
            code: '520201'
          },
          {
            name: '六枝特区',
            code: '520203'
          },
          {
            name: '水城县',
            code: '520221'
          },
          {
            name: '盘县',
            code: '520222'
          }
        ]
      },
      {
        name: '遵义市',
        code: '520300',
        children: [
          {
            name: '红花岗区',
            code: '520302'
          },
          {
            name: '汇川区',
            code: '520303'
          },
          {
            name: '播州区',
            code: '520304'
          },
          {
            name: '桐梓县',
            code: '520322'
          },
          {
            name: '绥阳县',
            code: '520323'
          },
          {
            name: '正安县',
            code: '520324'
          },
          {
            name: '道真仡佬族苗族自治县',
            code: '520325'
          },
          {
            name: '务川仡佬族苗族自治县',
            code: '520326'
          },
          {
            name: '凤冈县',
            code: '520327'
          },
          {
            name: '湄潭县',
            code: '520328'
          },
          {
            name: '余庆县',
            code: '520329'
          },
          {
            name: '习水县',
            code: '520330'
          },
          {
            name: '赤水市',
            code: '520381'
          },
          {
            name: '仁怀市',
            code: '520382'
          }
        ]
      },
      {
        name: '安顺市',
        code: '520400',
        children: [
          {
            name: '西秀区',
            code: '520402'
          },
          {
            name: '平坝区',
            code: '520403'
          },
          {
            name: '普定县',
            code: '520422'
          },
          {
            name: '镇宁布依族苗族自治县',
            code: '520423'
          },
          {
            name: '关岭布依族苗族自治县',
            code: '520424'
          },
          {
            name: '紫云苗族布依族自治县',
            code: '520425'
          }
        ]
      },
      {
        name: '毕节市',
        code: '520500',
        children: [
          {
            name: '七星关区',
            code: '520502'
          },
          {
            name: '大方县',
            code: '520521'
          },
          {
            name: '黔西县',
            code: '520522'
          },
          {
            name: '金沙县',
            code: '520523'
          },
          {
            name: '织金县',
            code: '520524'
          },
          {
            name: '纳雍县',
            code: '520525'
          },
          {
            name: '威宁彝族回族苗族自治县',
            code: '520526'
          },
          {
            name: '赫章县',
            code: '520527'
          }
        ]
      },
      {
        name: '铜仁市',
        code: '520600',
        children: [
          {
            name: '碧江区',
            code: '520602'
          },
          {
            name: '万山区',
            code: '520603'
          },
          {
            name: '江口县',
            code: '520621'
          },
          {
            name: '玉屏侗族自治县',
            code: '520622'
          },
          {
            name: '石阡县',
            code: '520623'
          },
          {
            name: '思南县',
            code: '520624'
          },
          {
            name: '印江土家族苗族自治县',
            code: '520625'
          },
          {
            name: '德江县',
            code: '520626'
          },
          {
            name: '沿河土家族自治县',
            code: '520627'
          },
          {
            name: '松桃苗族自治县',
            code: '520628'
          }
        ]
      },
      {
        name: '黔西南布依族苗族自治州',
        code: '522300',
        children: [
          {
            name: '兴义市',
            code: '522301'
          },
          {
            name: '兴仁县',
            code: '522322'
          },
          {
            name: '普安县',
            code: '522323'
          },
          {
            name: '晴隆县',
            code: '522324'
          },
          {
            name: '贞丰县',
            code: '522325'
          },
          {
            name: '望谟县',
            code: '522326'
          },
          {
            name: '册亨县',
            code: '522327'
          },
          {
            name: '安龙县',
            code: '522328'
          }
        ]
      },
      {
        name: '黔东南苗族侗族自治州',
        code: '522600',
        children: [
          {
            name: '凯里市',
            code: '522601'
          },
          {
            name: '黄平县',
            code: '522622'
          },
          {
            name: '施秉县',
            code: '522623'
          },
          {
            name: '三穗县',
            code: '522624'
          },
          {
            name: '镇远县',
            code: '522625'
          },
          {
            name: '岑巩县',
            code: '522626'
          },
          {
            name: '天柱县',
            code: '522627'
          },
          {
            name: '锦屏县',
            code: '522628'
          },
          {
            name: '剑河县',
            code: '522629'
          },
          {
            name: '台江县',
            code: '522630'
          },
          {
            name: '黎平县',
            code: '522631'
          },
          {
            name: '榕江县',
            code: '522632'
          },
          {
            name: '从江县',
            code: '522633'
          },
          {
            name: '雷山县',
            code: '522634'
          },
          {
            name: '麻江县',
            code: '522635'
          },
          {
            name: '丹寨县',
            code: '522636'
          }
        ]
      },
      {
        name: '黔南布依族苗族自治州',
        code: '522700',
        children: [
          {
            name: '都匀市',
            code: '522701'
          },
          {
            name: '福泉市',
            code: '522702'
          },
          {
            name: '荔波县',
            code: '522722'
          },
          {
            name: '贵定县',
            code: '522723'
          },
          {
            name: '瓮安县',
            code: '522725'
          },
          {
            name: '独山县',
            code: '522726'
          },
          {
            name: '平塘县',
            code: '522727'
          },
          {
            name: '罗甸县',
            code: '522728'
          },
          {
            name: '长顺县',
            code: '522729'
          },
          {
            name: '龙里县',
            code: '522730'
          },
          {
            name: '惠水县',
            code: '522731'
          },
          {
            name: '三都水族自治县',
            code: '522732'
          }
        ]
      }
    ]
  },
  {
    name: '云南',
    code: '530000',
    children: [
      {
        name: '昆明市',
        code: '530100',
        children: [
          {
            name: '五华区',
            code: '530102'
          },
          {
            name: '盘龙区',
            code: '530103'
          },
          {
            name: '官渡区',
            code: '530111'
          },
          {
            name: '西山区',
            code: '530112'
          },
          {
            name: '东川区',
            code: '530113'
          },
          {
            name: '呈贡区',
            code: '530114'
          },
          {
            name: '晋宁县',
            code: '530122'
          },
          {
            name: '富民县',
            code: '530124'
          },
          {
            name: '宜良县',
            code: '530125'
          },
          {
            name: '石林彝族自治县',
            code: '530126'
          },
          {
            name: '嵩明县',
            code: '530127'
          },
          {
            name: '禄劝彝族苗族自治县',
            code: '530128'
          },
          {
            name: '寻甸回族彝族自治县',
            code: '530129'
          },
          {
            name: '安宁市',
            code: '530181'
          }
        ]
      },
      {
        name: '曲靖市',
        code: '530300',
        children: [
          {
            name: '麒麟区',
            code: '530302'
          },
          {
            name: '沾益区',
            code: '530303'
          },
          {
            name: '马龙县',
            code: '530321'
          },
          {
            name: '陆良县',
            code: '530322'
          },
          {
            name: '师宗县',
            code: '530323'
          },
          {
            name: '罗平县',
            code: '530324'
          },
          {
            name: '富源县',
            code: '530325'
          },
          {
            name: '会泽县',
            code: '530326'
          },
          {
            name: '宣威市',
            code: '530381'
          }
        ]
      },
      {
        name: '玉溪市',
        code: '530400',
        children: [
          {
            name: '红塔区',
            code: '530402'
          },
          {
            name: '江川区',
            code: '530403'
          },
          {
            name: '澄江县',
            code: '530422'
          },
          {
            name: '通海县',
            code: '530423'
          },
          {
            name: '华宁县',
            code: '530424'
          },
          {
            name: '易门县',
            code: '530425'
          },
          {
            name: '峨山彝族自治县',
            code: '530426'
          },
          {
            name: '新平彝族傣族自治县',
            code: '530427'
          },
          {
            name: '元江哈尼族彝族傣族自治县',
            code: '530428'
          }
        ]
      },
      {
        name: '保山市',
        code: '530500',
        children: [
          {
            name: '隆阳区',
            code: '530502'
          },
          {
            name: '施甸县',
            code: '530521'
          },
          {
            name: '龙陵县',
            code: '530523'
          },
          {
            name: '昌宁县',
            code: '530524'
          },
          {
            name: '腾冲市',
            code: '530581'
          }
        ]
      },
      {
        name: '昭通市',
        code: '530600',
        children: [
          {
            name: '昭阳区',
            code: '530602'
          },
          {
            name: '鲁甸县',
            code: '530621'
          },
          {
            name: '巧家县',
            code: '530622'
          },
          {
            name: '盐津县',
            code: '530623'
          },
          {
            name: '大关县',
            code: '530624'
          },
          {
            name: '永善县',
            code: '530625'
          },
          {
            name: '绥江县',
            code: '530626'
          },
          {
            name: '镇雄县',
            code: '530627'
          },
          {
            name: '彝良县',
            code: '530628'
          },
          {
            name: '威信县',
            code: '530629'
          },
          {
            name: '水富县',
            code: '530630'
          }
        ]
      },
      {
        name: '丽江市',
        code: '530700',
        children: [
          {
            name: '古城区',
            code: '530702'
          },
          {
            name: '玉龙纳西族自治县',
            code: '530721'
          },
          {
            name: '永胜县',
            code: '530722'
          },
          {
            name: '华坪县',
            code: '530723'
          },
          {
            name: '宁蒗彝族自治县',
            code: '530724'
          }
        ]
      },
      {
        name: '普洱市',
        code: '530800',
        children: [
          {
            name: '思茅区',
            code: '530802'
          },
          {
            name: '宁洱哈尼族彝族自治县',
            code: '530821'
          },
          {
            name: '墨江哈尼族自治县',
            code: '530822'
          },
          {
            name: '景东彝族自治县',
            code: '530823'
          },
          {
            name: '景谷傣族彝族自治县',
            code: '530824'
          },
          {
            name: '镇沅彝族哈尼族拉祜族自治县',
            code: '530825'
          },
          {
            name: '江城哈尼族彝族自治县',
            code: '530826'
          },
          {
            name: '孟连傣族拉祜族佤族自治县',
            code: '530827'
          },
          {
            name: '澜沧拉祜族自治县',
            code: '530828'
          },
          {
            name: '西盟佤族自治县',
            code: '530829'
          }
        ]
      },
      {
        name: '临沧市',
        code: '530900',
        children: [
          {
            name: '临翔区',
            code: '530902'
          },
          {
            name: '凤庆县',
            code: '530921'
          },
          {
            name: '云县',
            code: '530922'
          },
          {
            name: '永德县',
            code: '530923'
          },
          {
            name: '镇康县',
            code: '530924'
          },
          {
            name: '双江拉祜族佤族布朗族傣族自治县',
            code: '530925'
          },
          {
            name: '耿马傣族佤族自治县',
            code: '530926'
          },
          {
            name: '沧源佤族自治县',
            code: '530927'
          }
        ]
      },
      {
        name: '楚雄彝族自治州',
        code: '532300',
        children: [
          {
            name: '楚雄市',
            code: '532301'
          },
          {
            name: '双柏县',
            code: '532322'
          },
          {
            name: '牟定县',
            code: '532323'
          },
          {
            name: '南华县',
            code: '532324'
          },
          {
            name: '姚安县',
            code: '532325'
          },
          {
            name: '大姚县',
            code: '532326'
          },
          {
            name: '永仁县',
            code: '532327'
          },
          {
            name: '元谋县',
            code: '532328'
          },
          {
            name: '武定县',
            code: '532329'
          },
          {
            name: '禄丰县',
            code: '532331'
          }
        ]
      },
      {
        name: '红河哈尼族彝族自治州',
        code: '532500',
        children: [
          {
            name: '个旧市',
            code: '532501'
          },
          {
            name: '开远市',
            code: '532502'
          },
          {
            name: '蒙自市',
            code: '532503'
          },
          {
            name: '弥勒市',
            code: '532504'
          },
          {
            name: '屏边苗族自治县',
            code: '532523'
          },
          {
            name: '建水县',
            code: '532524'
          },
          {
            name: '石屏县',
            code: '532525'
          },
          {
            name: '泸西县',
            code: '532527'
          },
          {
            name: '元阳县',
            code: '532528'
          },
          {
            name: '红河县',
            code: '532529'
          },
          {
            name: '金平苗族瑶族傣族自治县',
            code: '532530'
          },
          {
            name: '绿春县',
            code: '532531'
          },
          {
            name: '河口瑶族自治县',
            code: '532532'
          }
        ]
      },
      {
        name: '文山壮族苗族自治州',
        code: '532600',
        children: [
          {
            name: '文山市',
            code: '532601'
          },
          {
            name: '砚山县',
            code: '532622'
          },
          {
            name: '西畴县',
            code: '532623'
          },
          {
            name: '麻栗坡县',
            code: '532624'
          },
          {
            name: '马关县',
            code: '532625'
          },
          {
            name: '丘北县',
            code: '532626'
          },
          {
            name: '广南县',
            code: '532627'
          },
          {
            name: '富宁县',
            code: '532628'
          }
        ]
      },
      {
        name: '西双版纳傣族自治州',
        code: '532800',
        children: [
          {
            name: '景洪市',
            code: '532801'
          },
          {
            name: '勐海县',
            code: '532822'
          },
          {
            name: '勐腊县',
            code: '532823'
          }
        ]
      },
      {
        name: '大理白族自治州',
        code: '532900',
        children: [
          {
            name: '大理市',
            code: '532901'
          },
          {
            name: '漾濞彝族自治县',
            code: '532922'
          },
          {
            name: '祥云县',
            code: '532923'
          },
          {
            name: '宾川县',
            code: '532924'
          },
          {
            name: '弥渡县',
            code: '532925'
          },
          {
            name: '南涧彝族自治县',
            code: '532926'
          },
          {
            name: '巍山彝族回族自治县',
            code: '532927'
          },
          {
            name: '永平县',
            code: '532928'
          },
          {
            name: '云龙县',
            code: '532929'
          },
          {
            name: '洱源县',
            code: '532930'
          },
          {
            name: '剑川县',
            code: '532931'
          },
          {
            name: '鹤庆县',
            code: '532932'
          }
        ]
      },
      {
        name: '德宏傣族景颇族自治州',
        code: '533100',
        children: [
          {
            name: '瑞丽市',
            code: '533102'
          },
          {
            name: '芒市',
            code: '533103'
          },
          {
            name: '梁河县',
            code: '533122'
          },
          {
            name: '盈江县',
            code: '533123'
          },
          {
            name: '陇川县',
            code: '533124'
          }
        ]
      },
      {
        name: '怒江傈僳族自治州',
        code: '533300',
        children: [
          {
            name: '泸水市',
            code: '533301'
          },
          {
            name: '福贡县',
            code: '533323'
          },
          {
            name: '贡山独龙族怒族自治县',
            code: '533324'
          },
          {
            name: '兰坪白族普米族自治县',
            code: '533325'
          }
        ]
      },
      {
        name: '迪庆藏族自治州',
        code: '533400',
        children: [
          {
            name: '香格里拉市',
            code: '533401'
          },
          {
            name: '德钦县',
            code: '533422'
          },
          {
            name: '维西傈僳族自治县',
            code: '533423'
          }
        ]
      }
    ]
  },
  {
    name: '西藏',
    code: '540000',
    children: [
      {
        name: '拉萨市',
        code: '540100',
        children: [
          {
            name: '城关区',
            code: '540102'
          },
          {
            name: '堆龙德庆区',
            code: '540103'
          },
          {
            name: '林周县',
            code: '540121'
          },
          {
            name: '当雄县',
            code: '540122'
          },
          {
            name: '尼木县',
            code: '540123'
          },
          {
            name: '曲水县',
            code: '540124'
          },
          {
            name: '达孜县',
            code: '540126'
          },
          {
            name: '墨竹工卡县',
            code: '540127'
          }
        ]
      },
      {
        name: '日喀则市',
        code: '540200',
        children: [
          {
            name: '桑珠孜区',
            code: '540202'
          },
          {
            name: '南木林县',
            code: '540221'
          },
          {
            name: '江孜县',
            code: '540222'
          },
          {
            name: '定日县',
            code: '540223'
          },
          {
            name: '萨迦县',
            code: '540224'
          },
          {
            name: '拉孜县',
            code: '540225'
          },
          {
            name: '昂仁县',
            code: '540226'
          },
          {
            name: '谢通门县',
            code: '540227'
          },
          {
            name: '白朗县',
            code: '540228'
          },
          {
            name: '仁布县',
            code: '540229'
          },
          {
            name: '康马县',
            code: '540230'
          },
          {
            name: '定结县',
            code: '540231'
          },
          {
            name: '仲巴县',
            code: '540232'
          },
          {
            name: '亚东县',
            code: '540233'
          },
          {
            name: '吉隆县',
            code: '540234'
          },
          {
            name: '聂拉木县',
            code: '540235'
          },
          {
            name: '萨嘎县',
            code: '540236'
          },
          {
            name: '岗巴县',
            code: '540237'
          }
        ]
      },
      {
        name: '昌都市',
        code: '540300',
        children: [
          {
            name: '卡若区',
            code: '540302'
          },
          {
            name: '江达县',
            code: '540321'
          },
          {
            name: '贡觉县',
            code: '540322'
          },
          {
            name: '类乌齐县',
            code: '540323'
          },
          {
            name: '丁青县',
            code: '540324'
          },
          {
            name: '察雅县',
            code: '540325'
          },
          {
            name: '八宿县',
            code: '540326'
          },
          {
            name: '左贡县',
            code: '540327'
          },
          {
            name: '芒康县',
            code: '540328'
          },
          {
            name: '洛隆县',
            code: '540329'
          },
          {
            name: '边坝县',
            code: '540330'
          }
        ]
      },
      {
        name: '林芝市',
        code: '540400',
        children: [
          {
            name: '巴宜区',
            code: '540402'
          },
          {
            name: '工布江达县',
            code: '540421'
          },
          {
            name: '米林县',
            code: '540422'
          },
          {
            name: '墨脱县',
            code: '540423'
          },
          {
            name: '波密县',
            code: '540424'
          },
          {
            name: '察隅县',
            code: '540425'
          },
          {
            name: '朗县',
            code: '540426'
          }
        ]
      },
      {
        name: '山南市',
        code: '540500',
        children: [
          {
            name: '乃东区',
            code: '540502'
          },
          {
            name: '扎囊县',
            code: '540521'
          },
          {
            name: '贡嘎县',
            code: '540522'
          },
          {
            name: '桑日县',
            code: '540523'
          },
          {
            name: '琼结县',
            code: '540524'
          },
          {
            name: '曲松县',
            code: '540525'
          },
          {
            name: '措美县',
            code: '540526'
          },
          {
            name: '洛扎县',
            code: '540527'
          },
          {
            name: '加查县',
            code: '540528'
          },
          {
            name: '隆子县',
            code: '540529'
          },
          {
            name: '错那县',
            code: '540530'
          },
          {
            name: '浪卡子县',
            code: '540531'
          }
        ]
      },
      {
        name: '那曲地区',
        code: '542400',
        children: [
          {
            name: '那曲县',
            code: '542421'
          },
          {
            name: '嘉黎县',
            code: '542422'
          },
          {
            name: '比如县',
            code: '542423'
          },
          {
            name: '聂荣县',
            code: '542424'
          },
          {
            name: '安多县',
            code: '542425'
          },
          {
            name: '申扎县',
            code: '542426'
          },
          {
            name: '索县',
            code: '542427'
          },
          {
            name: '班戈县',
            code: '542428'
          },
          {
            name: '巴青县',
            code: '542429'
          },
          {
            name: '尼玛县',
            code: '542430'
          },
          {
            name: '双湖县',
            code: '542431'
          }
        ]
      },
      {
        name: '阿里地区',
        code: '542500',
        children: [
          {
            name: '普兰县',
            code: '542521'
          },
          {
            name: '札达县',
            code: '542522'
          },
          {
            name: '噶尔县',
            code: '542523'
          },
          {
            name: '日土县',
            code: '542524'
          },
          {
            name: '革吉县',
            code: '542525'
          },
          {
            name: '改则县',
            code: '542526'
          },
          {
            name: '措勤县',
            code: '542527'
          }
        ]
      }
    ]
  },
  {
    name: '陕西',
    code: '610000',
    children: [
      {
        name: '西安市',
        code: '610100',
        children: [
          {
            name: '新城区',
            code: '610102'
          },
          {
            name: '碑林区',
            code: '610103'
          },
          {
            name: '莲湖区',
            code: '610104'
          },
          {
            name: '灞桥区',
            code: '610111'
          },
          {
            name: '未央区',
            code: '610112'
          },
          {
            name: '雁塔区',
            code: '610113'
          },
          {
            name: '阎良区',
            code: '610114'
          },
          {
            name: '临潼区',
            code: '610115'
          },
          {
            name: '长安区',
            code: '610116'
          },
          {
            name: '高陵区',
            code: '610117'
          },
          {
            name: '蓝田县',
            code: '610122'
          },
          {
            name: '周至县',
            code: '610124'
          },
          {
            name: '户县',
            code: '610125'
          }
        ]
      },
      {
        name: '铜川市',
        code: '610200',
        children: [
          {
            name: '王益区',
            code: '610202'
          },
          {
            name: '印台区',
            code: '610203'
          },
          {
            name: '耀州区',
            code: '610204'
          },
          {
            name: '宜君县',
            code: '610222'
          }
        ]
      },
      {
        name: '宝鸡市',
        code: '610300',
        children: [
          {
            name: '渭滨区',
            code: '610302'
          },
          {
            name: '金台区',
            code: '610303'
          },
          {
            name: '陈仓区',
            code: '610304'
          },
          {
            name: '凤翔县',
            code: '610322'
          },
          {
            name: '岐山县',
            code: '610323'
          },
          {
            name: '扶风县',
            code: '610324'
          },
          {
            name: '眉县',
            code: '610326'
          },
          {
            name: '陇县',
            code: '610327'
          },
          {
            name: '千阳县',
            code: '610328'
          },
          {
            name: '麟游县',
            code: '610329'
          },
          {
            name: '凤县',
            code: '610330'
          },
          {
            name: '太白县',
            code: '610331'
          }
        ]
      },
      {
        name: '咸阳市',
        code: '610400',
        children: [
          {
            name: '秦都区',
            code: '610402'
          },
          {
            name: '杨陵区',
            code: '610403'
          },
          {
            name: '渭城区',
            code: '610404'
          },
          {
            name: '三原县',
            code: '610422'
          },
          {
            name: '泾阳县',
            code: '610423'
          },
          {
            name: '乾县',
            code: '610424'
          },
          {
            name: '礼泉县',
            code: '610425'
          },
          {
            name: '永寿县',
            code: '610426'
          },
          {
            name: '彬县',
            code: '610427'
          },
          {
            name: '长武县',
            code: '610428'
          },
          {
            name: '旬邑县',
            code: '610429'
          },
          {
            name: '淳化县',
            code: '610430'
          },
          {
            name: '武功县',
            code: '610431'
          },
          {
            name: '兴平市',
            code: '610481'
          }
        ]
      },
      {
        name: '渭南市',
        code: '610500',
        children: [
          {
            name: '临渭区',
            code: '610502'
          },
          {
            name: '华州区',
            code: '610503'
          },
          {
            name: '潼关县',
            code: '610522'
          },
          {
            name: '大荔县',
            code: '610523'
          },
          {
            name: '合阳县',
            code: '610524'
          },
          {
            name: '澄城县',
            code: '610525'
          },
          {
            name: '蒲城县',
            code: '610526'
          },
          {
            name: '白水县',
            code: '610527'
          },
          {
            name: '富平县',
            code: '610528'
          },
          {
            name: '韩城市',
            code: '610581'
          },
          {
            name: '华阴市',
            code: '610582'
          }
        ]
      },
      {
        name: '延安市',
        code: '610600',
        children: [
          {
            name: '宝塔区',
            code: '610602'
          },
          {
            name: '安塞区',
            code: '610603'
          },
          {
            name: '延长县',
            code: '610621'
          },
          {
            name: '延川县',
            code: '610622'
          },
          {
            name: '子长县',
            code: '610623'
          },
          {
            name: '志丹县',
            code: '610625'
          },
          {
            name: '吴起县',
            code: '610626'
          },
          {
            name: '甘泉县',
            code: '610627'
          },
          {
            name: '富县',
            code: '610628'
          },
          {
            name: '洛川县',
            code: '610629'
          },
          {
            name: '宜川县',
            code: '610630'
          },
          {
            name: '黄龙县',
            code: '610631'
          },
          {
            name: '黄陵县',
            code: '610632'
          }
        ]
      },
      {
        name: '汉中市',
        code: '610700',
        children: [
          {
            name: '汉台区',
            code: '610702'
          },
          {
            name: '南郑县',
            code: '610721'
          },
          {
            name: '城固县',
            code: '610722'
          },
          {
            name: '洋县',
            code: '610723'
          },
          {
            name: '西乡县',
            code: '610724'
          },
          {
            name: '勉县',
            code: '610725'
          },
          {
            name: '宁强县',
            code: '610726'
          },
          {
            name: '略阳县',
            code: '610727'
          },
          {
            name: '镇巴县',
            code: '610728'
          },
          {
            name: '留坝县',
            code: '610729'
          },
          {
            name: '佛坪县',
            code: '610730'
          }
        ]
      },
      {
        name: '榆林市',
        code: '610800',
        children: [
          {
            name: '榆阳区',
            code: '610802'
          },
          {
            name: '横山区',
            code: '610803'
          },
          {
            name: '神木县',
            code: '610821'
          },
          {
            name: '府谷县',
            code: '610822'
          },
          {
            name: '靖边县',
            code: '610824'
          },
          {
            name: '定边县',
            code: '610825'
          },
          {
            name: '绥德县',
            code: '610826'
          },
          {
            name: '米脂县',
            code: '610827'
          },
          {
            name: '佳县',
            code: '610828'
          },
          {
            name: '吴堡县',
            code: '610829'
          },
          {
            name: '清涧县',
            code: '610830'
          },
          {
            name: '子洲县',
            code: '610831'
          }
        ]
      },
      {
        name: '安康市',
        code: '610900',
        children: [
          {
            name: '汉滨区',
            code: '610902'
          },
          {
            name: '汉阴县',
            code: '610921'
          },
          {
            name: '石泉县',
            code: '610922'
          },
          {
            name: '宁陕县',
            code: '610923'
          },
          {
            name: '紫阳县',
            code: '610924'
          },
          {
            name: '岚皋县',
            code: '610925'
          },
          {
            name: '平利县',
            code: '610926'
          },
          {
            name: '镇坪县',
            code: '610927'
          },
          {
            name: '旬阳县',
            code: '610928'
          },
          {
            name: '白河县',
            code: '610929'
          }
        ]
      },
      {
        name: '商洛市',
        code: '611000',
        children: [
          {
            name: '商州区',
            code: '611002'
          },
          {
            name: '洛南县',
            code: '611021'
          },
          {
            name: '丹凤县',
            code: '611022'
          },
          {
            name: '商南县',
            code: '611023'
          },
          {
            name: '山阳县',
            code: '611024'
          },
          {
            name: '镇安县',
            code: '611025'
          },
          {
            name: '柞水县',
            code: '611026'
          }
        ]
      }
    ]
  },
  {
    name: '甘肃',
    code: '620000',
    children: [
      {
        name: '兰州市',
        code: '620100',
        children: [
          {
            name: '城关区',
            code: '620102'
          },
          {
            name: '七里河区',
            code: '620103'
          },
          {
            name: '西固区',
            code: '620104'
          },
          {
            name: '安宁区',
            code: '620105'
          },
          {
            name: '红古区',
            code: '620111'
          },
          {
            name: '永登县',
            code: '620121'
          },
          {
            name: '皋兰县',
            code: '620122'
          },
          {
            name: '榆中县',
            code: '620123'
          }
        ]
      },
      {
        name: '嘉峪关市',
        code: '620200',
        children: [
          {
            name: '市辖区',
            code: '620201'
          }
        ]
      },
      {
        name: '金昌市',
        code: '620300',
        children: [
          {
            name: '金川区',
            code: '620302'
          },
          {
            name: '永昌县',
            code: '620321'
          }
        ]
      },
      {
        name: '白银市',
        code: '620400',
        children: [
          {
            name: '白银区',
            code: '620402'
          },
          {
            name: '平川区',
            code: '620403'
          },
          {
            name: '靖远县',
            code: '620421'
          },
          {
            name: '会宁县',
            code: '620422'
          },
          {
            name: '景泰县',
            code: '620423'
          }
        ]
      },
      {
        name: '天水市',
        code: '620500',
        children: [
          {
            name: '秦州区',
            code: '620502'
          },
          {
            name: '麦积区',
            code: '620503'
          },
          {
            name: '清水县',
            code: '620521'
          },
          {
            name: '秦安县',
            code: '620522'
          },
          {
            name: '甘谷县',
            code: '620523'
          },
          {
            name: '武山县',
            code: '620524'
          },
          {
            name: '张家川回族自治县',
            code: '620525'
          }
        ]
      },
      {
        name: '武威市',
        code: '620600',
        children: [
          {
            name: '凉州区',
            code: '620602'
          },
          {
            name: '民勤县',
            code: '620621'
          },
          {
            name: '古浪县',
            code: '620622'
          },
          {
            name: '天祝藏族自治县',
            code: '620623'
          }
        ]
      },
      {
        name: '张掖市',
        code: '620700',
        children: [
          {
            name: '甘州区',
            code: '620702'
          },
          {
            name: '肃南裕固族自治县',
            code: '620721'
          },
          {
            name: '民乐县',
            code: '620722'
          },
          {
            name: '临泽县',
            code: '620723'
          },
          {
            name: '高台县',
            code: '620724'
          },
          {
            name: '山丹县',
            code: '620725'
          }
        ]
      },
      {
        name: '平凉市',
        code: '620800',
        children: [
          {
            name: '崆峒区',
            code: '620802'
          },
          {
            name: '泾川县',
            code: '620821'
          },
          {
            name: '灵台县',
            code: '620822'
          },
          {
            name: '崇信县',
            code: '620823'
          },
          {
            name: '华亭县',
            code: '620824'
          },
          {
            name: '庄浪县',
            code: '620825'
          },
          {
            name: '静宁县',
            code: '620826'
          }
        ]
      },
      {
        name: '酒泉市',
        code: '620900',
        children: [
          {
            name: '肃州区',
            code: '620902'
          },
          {
            name: '金塔县',
            code: '620921'
          },
          {
            name: '瓜州县',
            code: '620922'
          },
          {
            name: '肃北蒙古族自治县',
            code: '620923'
          },
          {
            name: '阿克塞哈萨克族自治县',
            code: '620924'
          },
          {
            name: '玉门市',
            code: '620981'
          },
          {
            name: '敦煌市',
            code: '620982'
          }
        ]
      },
      {
        name: '庆阳市',
        code: '621000',
        children: [
          {
            name: '西峰区',
            code: '621002'
          },
          {
            name: '庆城县',
            code: '621021'
          },
          {
            name: '环县',
            code: '621022'
          },
          {
            name: '华池县',
            code: '621023'
          },
          {
            name: '合水县',
            code: '621024'
          },
          {
            name: '正宁县',
            code: '621025'
          },
          {
            name: '宁县',
            code: '621026'
          },
          {
            name: '镇原县',
            code: '621027'
          }
        ]
      },
      {
        name: '定西市',
        code: '621100',
        children: [
          {
            name: '安定区',
            code: '621102'
          },
          {
            name: '通渭县',
            code: '621121'
          },
          {
            name: '陇西县',
            code: '621122'
          },
          {
            name: '渭源县',
            code: '621123'
          },
          {
            name: '临洮县',
            code: '621124'
          },
          {
            name: '漳县',
            code: '621125'
          },
          {
            name: '岷县',
            code: '621126'
          }
        ]
      },
      {
        name: '陇南市',
        code: '621200',
        children: [
          {
            name: '武都区',
            code: '621202'
          },
          {
            name: '成县',
            code: '621221'
          },
          {
            name: '文县',
            code: '621222'
          },
          {
            name: '宕昌县',
            code: '621223'
          },
          {
            name: '康县',
            code: '621224'
          },
          {
            name: '西和县',
            code: '621225'
          },
          {
            name: '礼县',
            code: '621226'
          },
          {
            name: '徽县',
            code: '621227'
          },
          {
            name: '两当县',
            code: '621228'
          }
        ]
      },
      {
        name: '临夏回族自治州',
        code: '622900',
        children: [
          {
            name: '临夏市',
            code: '622901'
          },
          {
            name: '临夏县',
            code: '622921'
          },
          {
            name: '康乐县',
            code: '622922'
          },
          {
            name: '永靖县',
            code: '622923'
          },
          {
            name: '广河县',
            code: '622924'
          },
          {
            name: '和政县',
            code: '622925'
          },
          {
            name: '东乡族自治县',
            code: '622926'
          },
          {
            name: '积石山保安族东乡族撒拉族自治县',
            code: '622927'
          }
        ]
      },
      {
        name: '甘南藏族自治州',
        code: '623000',
        children: [
          {
            name: '合作市',
            code: '623001'
          },
          {
            name: '临潭县',
            code: '623021'
          },
          {
            name: '卓尼县',
            code: '623022'
          },
          {
            name: '舟曲县',
            code: '623023'
          },
          {
            name: '迭部县',
            code: '623024'
          },
          {
            name: '玛曲县',
            code: '623025'
          },
          {
            name: '碌曲县',
            code: '623026'
          },
          {
            name: '夏河县',
            code: '623027'
          }
        ]
      }
    ]
  },
  {
    name: '青海',
    code: '630000',
    children: [
      {
        name: '西宁市',
        code: '630100',
        children: [
          {
            name: '城东区',
            code: '630102'
          },
          {
            name: '城中区',
            code: '630103'
          },
          {
            name: '城西区',
            code: '630104'
          },
          {
            name: '城北区',
            code: '630105'
          },
          {
            name: '大通回族土族自治县',
            code: '630121'
          },
          {
            name: '湟中县',
            code: '630122'
          },
          {
            name: '湟源县',
            code: '630123'
          }
        ]
      },
      {
        name: '海东市',
        code: '630200',
        children: [
          {
            name: '乐都区',
            code: '630202'
          },
          {
            name: '平安区',
            code: '630203'
          },
          {
            name: '民和回族土族自治县',
            code: '630222'
          },
          {
            name: '互助土族自治县',
            code: '630223'
          },
          {
            name: '化隆回族自治县',
            code: '630224'
          },
          {
            name: '循化撒拉族自治县',
            code: '630225'
          }
        ]
      },
      {
        name: '海北藏族自治州',
        code: '632200',
        children: [
          {
            name: '门源回族自治县',
            code: '632221'
          },
          {
            name: '祁连县',
            code: '632222'
          },
          {
            name: '海晏县',
            code: '632223'
          },
          {
            name: '刚察县',
            code: '632224'
          }
        ]
      },
      {
        name: '黄南藏族自治州',
        code: '632300',
        children: [
          {
            name: '同仁县',
            code: '632321'
          },
          {
            name: '尖扎县',
            code: '632322'
          },
          {
            name: '泽库县',
            code: '632323'
          },
          {
            name: '河南蒙古族自治县',
            code: '632324'
          }
        ]
      },
      {
        name: '海南藏族自治州',
        code: '632500',
        children: [
          {
            name: '共和县',
            code: '632521'
          },
          {
            name: '同德县',
            code: '632522'
          },
          {
            name: '贵德县',
            code: '632523'
          },
          {
            name: '兴海县',
            code: '632524'
          },
          {
            name: '贵南县',
            code: '632525'
          }
        ]
      },
      {
        name: '果洛藏族自治州',
        code: '632600',
        children: [
          {
            name: '玛沁县',
            code: '632621'
          },
          {
            name: '班玛县',
            code: '632622'
          },
          {
            name: '甘德县',
            code: '632623'
          },
          {
            name: '达日县',
            code: '632624'
          },
          {
            name: '久治县',
            code: '632625'
          },
          {
            name: '玛多县',
            code: '632626'
          }
        ]
      },
      {
        name: '玉树藏族自治州',
        code: '632700',
        children: [
          {
            name: '玉树市',
            code: '632701'
          },
          {
            name: '杂多县',
            code: '632722'
          },
          {
            name: '称多县',
            code: '632723'
          },
          {
            name: '治多县',
            code: '632724'
          },
          {
            name: '囊谦县',
            code: '632725'
          },
          {
            name: '曲麻莱县',
            code: '632726'
          }
        ]
      },
      {
        name: '海西蒙古族藏族自治州',
        code: '632800',
        children: [
          {
            name: '格尔木市',
            code: '632801'
          },
          {
            name: '德令哈市',
            code: '632802'
          },
          {
            name: '乌兰县',
            code: '632821'
          },
          {
            name: '都兰县',
            code: '632822'
          },
          {
            name: '天峻县',
            code: '632823'
          }
        ]
      }
    ]
  },
  {
    name: '宁夏',
    code: '640000',
    children: [
      {
        name: '银川市',
        code: '640100',
        children: [
          {
            name: '兴庆区',
            code: '640104'
          },
          {
            name: '西夏区',
            code: '640105'
          },
          {
            name: '金凤区',
            code: '640106'
          },
          {
            name: '永宁县',
            code: '640121'
          },
          {
            name: '贺兰县',
            code: '640122'
          },
          {
            name: '灵武市',
            code: '640181'
          }
        ]
      },
      {
        name: '石嘴山市',
        code: '640200',
        children: [
          {
            name: '大武口区',
            code: '640202'
          },
          {
            name: '惠农区',
            code: '640205'
          },
          {
            name: '平罗县',
            code: '640221'
          }
        ]
      },
      {
        name: '吴忠市',
        code: '640300',
        children: [
          {
            name: '利通区',
            code: '640302'
          },
          {
            name: '红寺堡区',
            code: '640303'
          },
          {
            name: '盐池县',
            code: '640323'
          },
          {
            name: '同心县',
            code: '640324'
          },
          {
            name: '青铜峡市',
            code: '640381'
          }
        ]
      },
      {
        name: '固原市',
        code: '640400',
        children: [
          {
            name: '原州区',
            code: '640402'
          },
          {
            name: '西吉县',
            code: '640422'
          },
          {
            name: '隆德县',
            code: '640423'
          },
          {
            name: '泾源县',
            code: '640424'
          },
          {
            name: '彭阳县',
            code: '640425'
          }
        ]
      },
      {
        name: '中卫市',
        code: '640500',
        children: [
          {
            name: '沙坡头区',
            code: '640502'
          },
          {
            name: '中宁县',
            code: '640521'
          },
          {
            name: '海原县',
            code: '640522'
          }
        ]
      }
    ]
  },
  {
    name: '新疆',
    code: '650000',
    children: [
      {
        name: '乌鲁木齐市',
        code: '650100',
        children: [
          {
            name: '天山区',
            code: '650102'
          },
          {
            name: '沙依巴克区',
            code: '650103'
          },
          {
            name: '新市区',
            code: '650104'
          },
          {
            name: '水磨沟区',
            code: '650105'
          },
          {
            name: '头屯河区',
            code: '650106'
          },
          {
            name: '达坂城区',
            code: '650107'
          },
          {
            name: '米东区',
            code: '650109'
          },
          {
            name: '乌鲁木齐县',
            code: '650121'
          }
        ]
      },
      {
        name: '克拉玛依市',
        code: '650200',
        children: [
          {
            name: '独山子区',
            code: '650202'
          },
          {
            name: '克拉玛依区',
            code: '650203'
          },
          {
            name: '白碱滩区',
            code: '650204'
          },
          {
            name: '乌尔禾区',
            code: '650205'
          }
        ]
      },
      {
        name: '吐鲁番市',
        code: '650400',
        children: [
          {
            name: '高昌区',
            code: '650402'
          },
          {
            name: '鄯善县',
            code: '650421'
          },
          {
            name: '托克逊县',
            code: '650422'
          }
        ]
      },
      {
        name: '哈密市',
        code: '650500',
        children: [
          {
            name: '伊州区',
            code: '650502'
          },
          {
            name: '巴里坤哈萨克自治县',
            code: '650521'
          },
          {
            name: '伊吾县',
            code: '650522'
          }
        ]
      },
      {
        name: '昌吉回族自治州',
        code: '652300',
        children: [
          {
            name: '昌吉市',
            code: '652301'
          },
          {
            name: '阜康市',
            code: '652302'
          },
          {
            name: '呼图壁县',
            code: '652323'
          },
          {
            name: '玛纳斯县',
            code: '652324'
          },
          {
            name: '奇台县',
            code: '652325'
          },
          {
            name: '吉木萨尔县',
            code: '652327'
          },
          {
            name: '木垒哈萨克自治县',
            code: '652328'
          }
        ]
      },
      {
        name: '博尔塔拉蒙古自治州',
        code: '652700',
        children: [
          {
            name: '博乐市',
            code: '652701'
          },
          {
            name: '阿拉山口市',
            code: '652702'
          },
          {
            name: '精河县',
            code: '652722'
          },
          {
            name: '温泉县',
            code: '652723'
          }
        ]
      },
      {
        name: '巴音郭楞蒙古自治州',
        code: '652800',
        children: [
          {
            name: '库尔勒市',
            code: '652801'
          },
          {
            name: '轮台县',
            code: '652822'
          },
          {
            name: '尉犁县',
            code: '652823'
          },
          {
            name: '若羌县',
            code: '652824'
          },
          {
            name: '且末县',
            code: '652825'
          },
          {
            name: '焉耆回族自治县',
            code: '652826'
          },
          {
            name: '和静县',
            code: '652827'
          },
          {
            name: '和硕县',
            code: '652828'
          },
          {
            name: '博湖县',
            code: '652829'
          }
        ]
      },
      {
        name: '阿克苏地区',
        code: '652900',
        children: [
          {
            name: '阿克苏市',
            code: '652901'
          },
          {
            name: '温宿县',
            code: '652922'
          },
          {
            name: '库车县',
            code: '652923'
          },
          {
            name: '沙雅县',
            code: '652924'
          },
          {
            name: '新和县',
            code: '652925'
          },
          {
            name: '拜城县',
            code: '652926'
          },
          {
            name: '乌什县',
            code: '652927'
          },
          {
            name: '阿瓦提县',
            code: '652928'
          },
          {
            name: '柯坪县',
            code: '652929'
          }
        ]
      },
      {
        name: '克孜勒苏柯尔克孜自治州',
        code: '653000',
        children: [
          {
            name: '阿图什市',
            code: '653001'
          },
          {
            name: '阿克陶县',
            code: '653022'
          },
          {
            name: '阿合奇县',
            code: '653023'
          },
          {
            name: '乌恰县',
            code: '653024'
          }
        ]
      },
      {
        name: '喀什地区',
        code: '653100',
        children: [
          {
            name: '喀什市',
            code: '653101'
          },
          {
            name: '疏附县',
            code: '653121'
          },
          {
            name: '疏勒县',
            code: '653122'
          },
          {
            name: '英吉沙县',
            code: '653123'
          },
          {
            name: '泽普县',
            code: '653124'
          },
          {
            name: '莎车县',
            code: '653125'
          },
          {
            name: '叶城县',
            code: '653126'
          },
          {
            name: '麦盖提县',
            code: '653127'
          },
          {
            name: '岳普湖县',
            code: '653128'
          },
          {
            name: '伽师县',
            code: '653129'
          },
          {
            name: '巴楚县',
            code: '653130'
          },
          {
            name: '塔什库尔干塔吉克自治县',
            code: '653131'
          }
        ]
      },
      {
        name: '和田地区',
        code: '653200',
        children: [
          {
            name: '和田市',
            code: '653201'
          },
          {
            name: '和田县',
            code: '653221'
          },
          {
            name: '墨玉县',
            code: '653222'
          },
          {
            name: '皮山县',
            code: '653223'
          },
          {
            name: '洛浦县',
            code: '653224'
          },
          {
            name: '策勒县',
            code: '653225'
          },
          {
            name: '于田县',
            code: '653226'
          },
          {
            name: '民丰县',
            code: '653227'
          }
        ]
      },
      {
        name: '伊犁哈萨克自治州',
        code: '654000',
        children: [
          {
            name: '伊宁市',
            code: '654002'
          },
          {
            name: '奎屯市',
            code: '654003'
          },
          {
            name: '霍尔果斯市',
            code: '654004'
          },
          {
            name: '伊宁县',
            code: '654021'
          },
          {
            name: '察布查尔锡伯自治县',
            code: '654022'
          },
          {
            name: '霍城县',
            code: '654023'
          },
          {
            name: '巩留县',
            code: '654024'
          },
          {
            name: '新源县',
            code: '654025'
          },
          {
            name: '昭苏县',
            code: '654026'
          },
          {
            name: '特克斯县',
            code: '654027'
          },
          {
            name: '尼勒克县',
            code: '654028'
          }
        ]
      },
      {
        name: '塔城地区',
        code: '654200',
        children: [
          {
            name: '塔城市',
            code: '654201'
          },
          {
            name: '乌苏市',
            code: '654202'
          },
          {
            name: '额敏县',
            code: '654221'
          },
          {
            name: '沙湾县',
            code: '654223'
          },
          {
            name: '托里县',
            code: '654224'
          },
          {
            name: '裕民县',
            code: '654225'
          },
          {
            name: '和布克赛尔蒙古自治县',
            code: '654226'
          }
        ]
      },
      {
        name: '阿勒泰地区',
        code: '654300',
        children: [
          {
            name: '阿勒泰市',
            code: '654301'
          },
          {
            name: '布尔津县',
            code: '654321'
          },
          {
            name: '富蕴县',
            code: '654322'
          },
          {
            name: '福海县',
            code: '654323'
          },
          {
            name: '哈巴河县',
            code: '654324'
          },
          {
            name: '青河县',
            code: '654325'
          },
          {
            name: '吉木乃县',
            code: '654326'
          },
          {
            name: '石河子市',
            code: '659001'
          },
          {
            name: '阿拉尔市',
            code: '659002'
          },
          {
            name: '图木舒克市',
            code: '659003'
          },
          {
            name: '五家渠市',
            code: '659004'
          },
          {
            name: '铁门关市',
            code: '659006'
          }
        ]
      }
    ]
  }
];

export default cities;
