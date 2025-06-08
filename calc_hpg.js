let options = {
    container: 'body',
    spacing: 20,
    actions: {
        next: {
            text: 'Дальше',
            class: 'btn btn-default'
        },
        finish: {
            text: 'Спасибо за тур! Конец :)',
            class: 'btn btn-success'
        }
    },
    entries: [
        {
            selector: '#show_hide_graph',
            text: 'График/паспорт профиля'

        },
        {
            selector: '#help_texts',
            text: 'Статьи в помощь, надо прочитать прежде чем задавать вопросы'
        },


        {
            selector: '#help-macro-mode',
            text: 'Способ расчета макро обычно Калия хватает, если не хватает и нужно больше N переключаем'
        },
        {
            selector: '#litres-rastvor',
            text: 'На какой объем рассчитываем соли/концентраты'
        },
        {selector: '#help-npk-common', text: 'Строка обмена -  можно скопировать/вставить в другой калькулятор'},

        {
            selector: '#nav-tabs',
            text: 'Навигация по разделам калькулятора'
        },
        {
            selector: '#help-macro',
            text: 'Макро соли. У каждой культуры свои особенности, смотрим базу профилей. ' +
                'Важен ЕС, а так же соотношение элементов, K:N K:Ca K:Mg.' +
                'Если вы хотите больше рост зеленой массы(листьев), вам нужно соотношение N:K 1:1.3'
            , onEnter: function () {
                if (activeTab != $("#tabmacro-tab")) {
                    $("#tabmacro-tab").tab('show');
                }
            }
        }, {
            selector: '#help-macro-ppm',
            text: 'Профиль макро в ppm, реализована логика что если крутите одно, автоматом крутится другое чтобы компенсировать разницу. Полноценный контроль доступен если будете крутить граммы солей, тогда эта логика не включается'
            , onEnter: function () {
                if (activeTab != $("#tabmacro-tab")) {
                    $("#tabmacro-tab").tab('show');
                }
            }
        },


        {
            selector: '#help-macro-matrix',
            text: 'Когда нашли нужный ЕС, проще менять в матрице соотношение Ca K N - остальное обычно не трогают'
            , onEnter: function () {
                if (activeTab != $("#tabmacro-tab")) {
                    $("#tabmacro-tab").tab('show');
                }
            }
        },
        {
            selector: '#help-macro-salt',
            text: 'У соли меняется название на удобрение и показывается ее формула если начать крутить граммы.' +
                'Сравниваем с пачкой прям с тем что написано Ca 17 N 12 читается как содержание ' +
                'Кальция Ca (не оксида) 17, Азота N (общего NO3 + NH4) 12. Ставим Ca 17 азот автоматически ' +
                'придет на нужное значение. Если он не совпадает например написано что он 12 а у вас 11.2 - ' +
                'надо добавить NH4 - недостающий элемент до нужного значения общего N. ' +
                'Если на пачке указаны оксиды - ориентируемся на оксиды например CaO-26.5% это 18.97 Ca'
            , onEnter: function () {
                if (activeTab != $("#tabmacro-tab")) {
                    $("#tabmacro-tab").tab('show');
                }
            }
        }, {
            selector: '#help-micro',
            text: 'Микропрофиль в МИКРО граммах на литр. ' +
                'Два режима расчета: по комплексу(ориентир по бору) и обычный из моносолей.',
            onEnter: function () {
                if (activeTab != $("#tabmicro-tab")) {
                    $("#tabmicro-tab").tab('show');
                }


            }
        }, {
            selector: '#help-micro-salt-ppm',
            text: 'Редактируем профиль, все эелементы доступны в режиме моносолей, в режиме комплекса ориентируемся на бор только, остальное на Вашей совести, например Cu',
            onEnter: function () {
                if (activeTab != $("#tabmicro-tab")) {
                    $("#tabmicro-tab").tab('show');
                }
            }
        },

        {
            selector: '.micro-salt-help',
            text: 'Заполянем процентное содержание с пачки, автоматически высчитываются граммы на концентрацию указанную ниже',
            onEnter: function () {
                if (activeTab != $("#tabmicro-tab")) {
                    $("#tabmicro-tab").tab('show');
                }
            }
        },

        {
            selector: '#help-conc-gl',
            text: 'Это колонка для заполнения значеняи коцнентарции',
            onEnter: function () {

                if (activeTab != $("#tabconcentrat-tab")) {
                    $("#tabconcentrat-tab").tab('show');
                }

            }
        },

        {
            selector: '#help-conc-plotnost',
            text: 'После того как расвторили указанное в 1й колонке количество необходимо взвесить получившийся раствор и заполнить поле плотности, тк Ваша соль могла впитать в себя воду и соответсвенно будет ее меньшая концентрация',
            onEnter: function () {
                if (activeTab != $("#tabconcentrat-tab")) {
                    $("#tabconcentrat-tab").tab('show');
                }
            }
        },


        {
            selector: '#help-conc-ml',
            text: "Сколько необходимо налить готового концентрата в мл(шприцом)",
            onEnter: function () {
                if (activeTab != $("#tabconcentrat-tab")) {
                    $("#tabconcentrat-tab").tab('show');
                }
            }
        },
        {
            selector: '#help-conc-grml',
            text: "Сколько необходимо налить готового концентрата на весы",
            onEnter: function () {
                if (activeTab != $("#tabconcentrat-tab")) {
                    $("#tabconcentrat-tab").tab('show');
                }
            }
        },


        {
            selector: '#help-conc-a',
            text: "Выбираем объем если получается отрицательное значение, то необходим больший объем для концентрата",
            onEnter: function () {
                if (activeTab != $("#tabconcentrat-tab")) {
                    $("#tabconcentrat-tab").tab('show');
                }
            }
        }, {
            selector: '#help-mixer',
            text: "На этом табе расписано как приготовить раствор(консалидация информации) и возможность выбрать миксер для автоматического замешивания, более подробно про миксер на Вики",
            onEnter: function () {
                if (activeTab != $("#tabmixer-tab")) {
                    $("#tabmixer-tab").tab('show');
                }

            }
        },
        {
            selector: '#help-mixer-mixer',
            text: "Необходимо выбрать миксер и сохрнить профиль чтобы можно было регистрировать объем налитого концентрата",
            onEnter: function () {
                if (activeTab != $("#tabmixer-tab")) {
                    $("#tabmixer-tab").tab('show');
                }
            }
        },
        {
            selector: '#tabcorrector-tab',
            text: "Если необходимо скорректировать раствор в баке лучше воспользоваться корректором а не просто делать раствор второй и просто лить",
            onEnter: function () {
                if (activeTab != $("#tabcorrector-tab")) {
                    $("#tabcorrector-tab").tab('show');
                }

            }
        },

        {
            selector: '#tabprice-tab',
            text: "Понимаем сколько экономим мы тут :) ГХЕ 5-7 рублей за литр выходит, и то не наш профиль увы",
            onEnter: function () {
                if (activeTab != $("#tabprice-tab")) {
                    $("#tabprice-tab").tab('show');
                }
            }
        },


        {
            selector: '#id_model_from',
            text: "Чтобы каждый раз не заполнять одно и тоже, а так же выборочно копировать " +
                "можно тут выбрать профиль-донор и отметить что необходимо с него подгрузить",
            onEnter: function () {

                if (activeTab != $("#tabreadd-tab")) {
                    $("#tabreadd-tab").tab('show');
                }

            }
        },


    ]
};


function urlencode(params) {
    // Аналог Python's urllib.parse.urlencode
    return Object.entries(params)
        .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
        .join('&');
}

// Аналог декоратора float_exception
function floatException(fn) {
    return function (...args) {
        try {
            return fn.apply(this, args);
        } catch (e) {
            console.error(e);
            return 0.00;
        }
    }
}


class HPG {
    // Аналоги вложенных классов-энумов
    static CalcMode = {
        K: "K",
        Mg: "Mg"
    };

    static CalcMicroMode = {
        U: "u",
        B: "b"
    };

    static macro = [
        "n", "no3", "nh4", "p", "k", "ca", "mg", "s", "cl"
    ];

    static macro_dict = {
        n: "N",
        no3: "NO3",
        nh4: "NH4",
        p: "P",
        k: "K",
        ca: "Ca",
        mg: "Mg",
        s: "S",
        cl: "Cl"
    };

    static micro_dict = {
        fe: "Fe",
        fe_2: "Fe2",
        fe_3: "Fe3",
        mn: "Mn",
        b: "B",
        zn: "Zn",
        cu: "Cu",
        mo: "Mo",
        co: "Co",
        si: "Si",
        cmplx: "complex"
    };

    static micro_dict_common = {
        fe: "Fe",
        mn: "Mn",
        b: "B",
        zn: "Zn",
        cu: "Cu",
        mo: "Mo",
        co: "Co",
        si: "Si"
    };

    static graph_elements_macro = [
        ["no3", "nh4", "p", "k", "ca", "mg", "s", "cl", "macro"],
        ["fe", "mn", "b"],
        ["zn", "cu", "mo", "co", "si", "micro"]
    ];

    static macro_matrix = [
        "n", "p", "k", "ca", "mg", "s"
    ];

    static micro = [
        "fe", "fe_2", "fe_3", "mn", "b", "zn", "cu", "mo", "co", "si"
    ];

    static salt_micro_gramm = [
        "gfe", "gfe_2", "gfe_3", "gmn", "gb", "gzn", "gcu", "gmo", "gco", "gsi"
    ];

    static salt_micro_persent = [
        "dfe", "dfe_2", "dfe_3", "dmn", "db", "dzn", "dcu", "dmo", "dco", "dsi"
    ];

    static salt_micro_persent_bor = [
        "agfe", "agmn", "agdb", "agdzn", "agdcu", "agdmo", "agdco", "agdsi"
    ];

    static salt_micro_dict = {
        fe: {name: "Железо", d: "dfe", g: "gfe"},
        fe_2: {name: "Железо", d: "dfe_2", g: "gfe_2"},
        fe_3: {name: "Железо", d: "dfe_3", g: "gfe_3"},
        mn: {name: "Марганец", d: "dmn", g: "gmn"},
        b: {name: "Бор", d: "db", g: "gb"},
        zn: {name: "Цинк", d: "dzn", g: "gzn"},
        cu: {name: "Медь", d: "dcu", g: "gcu"},
        mo: {name: "Молибден", d: "dmo", g: "gmo"},
        co: {name: "Кобальт", d: "dco", g: "gco"},
        si: {name: "Кремний", d: "dsi", g: "gsi"}
    };

    static salt = [
        "cano3_ca", "cano3_no3", "cano3_nh4",
        "kno3_k", "kno3_no3",
        "nh4no3_nh4", "nh4no3_no3",
        "mgso4_mg", "mgso4_s",
        "kh2po4_k", "kh2po4_p",
        "k2so4_k", "k2so4_s",
        "mgno3_mg", "mgno3_no3",
        "cacl2_ca", "cacl2_cl"
    ];

    static salt_default = {
        cano3_ca: 16.972,
        cano3_no3: 11.863,
        cano3_nh4: 0.000,
        kno3_k: 38.672,
        kno3_no3: 13.853,
        nh4no3_nh4: 17.5,
        nh4no3_no3: 17.5,
        mgso4_mg: 9.861,
        mgso4_s: 13.011,
        kh2po4_k: 28.731,
        kh2po4_p: 22.761,
        k2so4_k: 44.874,
        k2so4_s: 18.401,
        mgno3_mg: 9.483,
        mgno3_no3: 10.930,
        cacl2_ca: 18.294,
        cacl2_cl: 32.366
    };

    static salt_gramms = {
        cano3: "calc_cano3",
        kno3: "calc_kno3",
        nh4no3: "calc_nh4no3",
        mgso4: "calc_mgso4",
        kh2po4: "calc_kh2po4",
        k2so4: "calc_k2so4",
        mgno3: "calc_mgno3",
        cacl2: "calc_cacl2"
    };

    static concentrate_dict_a = {
        cano3: {
            name: "cano3",
            mixer: "m_cano3",
            data: ["gl_cano3", "gml_cano3"],
            calc_data: ["ml_cano3", "gg_cano3"]
        },
        kno3: {
            name: "kno3",
            mixer: "m_kno3",
            data: ["gl_kno3", "gml_kno3"],
            calc_data: ["ml_kno3", "gg_kno3"]
        },
        nh4no3: {
            name: "nh4no3",
            mixer: "m_nh4no3",
            data: ["gl_nh4no3", "gml_nh4no3"],
            calc_data: ["ml_nh4no3", "gg_nh4no3"]
        },
        mgno3: {
            name: "mgno3",
            mixer: "m_mgno3",
            data: ["gl_mgno3", "gml_mgno3"],
            calc_data: ["ml_mgno3", "gg_mgno3"]
        },
        cacl2: {
            name: "cacl2",
            mixer: "m_cacl2",
            data: ["gl_cacl2", "gml_cacl2"],
            calc_data: ["ml_cacl2", "gg_cacl2"]
        }
    };

    static concentrate_fields = [
        "taml", "tbml",
        "gml_fe", "gml_fe_2", "gml_fe_3", "gml_mn", "gml_b", "gml_zn", "gml_cu", "gml_mo", "gml_co", "gml_si",
        "gml_cano3", "gml_kno3", "gml_nh4no3", "gml_mgno3", "gml_mgso4", "gml_k2so4", "gml_kh2po4", "gml_cacl2", "gml_cmplx",
        "gl_fe", "gl_fe_2", "gl_fe_3", "gl_mn", "gl_b", "gl_zn", "gl_cu", "gl_mo", "gl_co", "gl_si",
        "gl_cano3", "gl_kno3", "gl_nh4no3", "gl_mgno3", "gl_mgso4", "gl_k2so4", "gl_kh2po4", "gl_cacl2", "gl_cmplx",
        "ml_cano3", "gg_cano3", "ml_kno3", "gg_kno3", "ml_nh4no3", "gg_nh4no3", "ml_mgno3", "ml_mgso4", "ml_kh2po4",
        "ml_k2so4", "ml_cacl2", "ml_fe", "ml_fe_2", "ml_fe_3", "ml_mn", "ml_b", "ml_zn", "ml_cu", "ml_mo", "ml_co", "ml_si", "ml_cmplx",
        "gg_mgno3", "gg_cacl2", "gg_mgso4", "gg_kh2po4", "gg_k2so4", "gg_fe", "gg_fe_2", "gg_fe_3", "gg_mn", "gg_b", "gg_zn", "gg_cu", "gg_mo", "gg_co", "gg_si", "gg_cmplx"
    ];

    static model_create_fields = [
        ...HPG.macro,
        ...HPG.micro,
        ...HPG.salt_micro_gramm,
        ...HPG.salt_micro_persent,
        ...HPG.salt_micro_persent_bor,
        ...HPG.salt,
        ...HPG.concentrate_fields
    ];

    static model_change_fields = [
        ...HPG.macro,
        ...HPG.micro,
        ...HPG.salt_micro_gramm,
        ...HPG.salt_micro_persent,
        ...HPG.salt,
        ...HPG.concentrate_fields
    ];

    static price_fields = [
        "p_cano3", "p_kno3", "p_nh4no3", "p_mgso4", "p_kh2po4", "p_k2so4", "p_mgno3", "p_cacl2",
        "p_fe", "p_fe_2", "p_fe_3", "p_mn", "p_b", "p_zn", "p_cu", "p_mo", "p_co", "p_si", "p_cmplx"
    ];

    static price_fields_macro = [
        "p_cano3", "p_kno3", "p_nh4no3", "p_mgso4", "p_kh2po4", "p_k2so4", "p_mgno3", "p_cacl2"
    ];

    static price_fields_micro = [
        "p_fe", "p_fe_2", "p_fe_3", "p_mn", "p_b", "p_zn", "p_cu", "p_mo", "p_co", "p_si", "p_cmplx"
    ];

    static price_fields_micro_cmplx = [
        "p_cmplx"
    ];

    static mkorr = "";

    static corrections_macro = [
        "N", "NO3", "NH4", "P", "K", "Ca", "Mg", "S", "Cl", "EC"
    ];

    static correction_fields = {
        "0": [
            "n_0", "no3_0", "nh4_0", "p_0", "k_0", "ca_0", "mg_0", "s_0", "cl_0", "ec_0"
        ],
        "1": [
            "n_1", "no3_1", "nh4_1", "p_1", "k_1", "ca_1", "mg_1", "s_1", "cl_1", "ec_1"
        ],
        "2": [
            "n_2", "no3_2", "nh4_2", "p_2", "k_2", "ca_2", "mg_2", "s_2", "cl_2", "ec_2"
        ],
        "k": [
            "n_k", "no3_k", "nh4_k", "p_k", "k_k", "ca_k", "mg_k", "s_k", "cl_k", "ec_k"
        ]
    };

    static correction_fields_all = [
        "ca_0", "cl_0", "ec_0", "k_0", "mg_0", "n_0", "nh4_0", "no3_0", "p_0", "s_0", "v_0",
        "ca_1", "cl_1", "ec_1", "k_1", "mg_1", "n_1", "nh4_1", "no3_1", "p_1", "s_1", "v_1",
        "ca_2", "cl_2", "ec_2", "k_2", "mg_2", "n_2", "nh4_2", "no3_2", "p_2", "s_2", "v_2",
        "ca_k", "cl_k", "ec_k", "k_k", "mg_k", "n_k", "nh4_k", "no3_k", "p_k", "s_k", "v_k",
        "ec_2", "ec_0", "ec_1", "ec_k"
    ];


    concentrate_dict_b() {
        return {
            mgso4: {
                name: "mgso4",
                mixer: "m_mgso4",
                data: ["gl_mgso4", "gml_mgso4"],
                calc_data: ["ml_mgso4", "gg_mgso4"]
            },
            kh2po4: {
                name: "kh2po4",
                mixer: "m_kh2po4",
                data: ["gl_kh2po4", "gml_kh2po4"],
                calc_data: ["ml_kh2po4", "gg_kh2po4"]
            },
            k2so4: {
                name: "k2so4",
                mixer: "m_k2so4",
                data: ["gl_k2so4", "gml_k2so4"],
                calc_data: ["ml_k2so4", "gg_k2so4"]
            },
            fe: {
                name: "fe",
                mixer: "m_fe",
                data: ["gl_fe", "gml_fe"],
                calc_data: ["ml_fe", "gg_fe"]
            },
            fe_2: {
                name: "fe_2",
                mixer: "m_fe_2",
                data: ["gl_fe_2", "gml_fe_2"],
                calc_data: ["ml_fe_2", "gg_fe_2"]
            },
            fe_3: {
                name: "fe_3",
                mixer: "m_fe_3",
                data: ["gl_fe_3", "gml_fe_3"],
                calc_data: ["ml_fe_3", "gg_fe_3"]
            },
            mn: {
                name: "mn",
                mixer: "m_mn",
                data: ["gl_mn", "gml_mn"],
                calc_data: ["ml_mn", "gg_mn"]
            },
            b: {
                name: "b",
                mixer: "m_b",
                data: ["gl_b", "gml_b"],
                calc_data: ["ml_b", "gg_b"]
            },
            zn: {
                name: "zn",
                mixer: "m_zn",
                data: ["gl_zn", "gml_zn"],
                calc_data: ["ml_zn", "gg_zn"]
            },
            cu: {
                name: "cu",
                mixer: "m_cu",
                data: ["gl_cu", "gml_cu"],
                calc_data: ["ml_cu", "gg_cu"]
            },
            mo: {
                name: "mo",
                mixer: "m_mo",
                data: ["gl_mo", "gml_mo"],
                calc_data: ["ml_mo", "gg_mo"]
            },
            co: {
                name: "co",
                mixer: "m_co",
                data: ["gl_co", "gml_co"],
                calc_data: ["ml_co", "gg_co"]
            },
            si: {
                name: "si",
                mixer: "m_si",
                data: ["gl_si", "gml_si"],
                calc_data: ["ml_si", "gg_si"]
            },
            cmplx: {
                name: "cmplx",
                mixer: "m_cmplx",
                data: ["gl_cmplx", "gml_cmplx"],
                calc_data: ["ml_cmplx", "gg_cmplx"]
            }
        };
    }

    // mixer_dict как static поле (порядок ключей в JS сохраняется)
    static mixer_dict = {
        cano3: {
            calc: "calc_cano3", mixer: "m_cano3", ml: "ml_cano3", gram: "gg_cano3", gl: "gl_cano3", gml: "gml_cano3",
            d: "dcano3", p: "p_cano3", calc_p: "calc_p_cano3", rastvor: "a", type: "macro"
        },
        kno3: {
            calc: "calc_kno3", mixer: "m_kno3", ml: "ml_kno3", gram: "gg_kno3", gl: "gl_kno3", gml: "gml_kno3",
            d: "dkno3", p: "p_kno3", calc_p: "calc_p_kno3", rastvor: "a", type: "macro"
        },
        nh4no3: {
            calc: "calc_nh4no3",
            mixer: "m_nh4no3",
            ml: "ml_nh4no3",
            gram: "gg_nh4no3",
            gl: "gl_nh4no3",
            gml: "gml_nh4no3",
            d: "dnh4no3",
            p: "p_nh4no3",
            calc_p: "calc_p_nh4no3",
            rastvor: "a",
            type: "macro"
        },
        mgno3: {
            calc: "calc_mgno3", mixer: "m_mgno3", ml: "ml_mgno3", gram: "gg_mgno3", gl: "gl_mgno3", gml: "gml_mgno3",
            d: "dmgno3", p: "p_mgno3", calc_p: "calc_p_mgno3", rastvor: "a", type: "macro"
        },
        cacl2: {
            calc: "calc_cacl2", mixer: "m_cacl2", ml: "ml_cacl2", gram: "gg_cacl2", gl: "gl_cacl2", gml: "gml_cacl2",
            d: "dcacl2", p: "p_cacl2", calc_p: "calc_p_cacl2", rastvor: "a", type: "macro"
        },
        mgso4: {
            calc: "calc_mgso4", mixer: "m_mgso4", ml: "ml_mgso4", gram: "gg_mgso4", gl: "gl_mgso4", gml: "gml_mgso4",
            d: "dmgso4", p: "p_mgso4", calc_p: "calc_p_mgso4", rastvor: "b", type: "macro"
        },
        kh2po4: {
            calc: "calc_kh2po4",
            mixer: "m_kh2po4",
            ml: "ml_kh2po4",
            gram: "gg_kh2po4",
            gl: "gl_kh2po4",
            gml: "gml_kh2po4",
            d: "dkh2po4",
            p: "p_kh2po4",
            calc_p: "calc_p_kh2po4",
            rastvor: "b",
            type: "macro"
        },
        k2so4: {
            calc: "calc_k2so4", mixer: "m_k2so4", ml: "ml_k2so4", gram: "gg_k2so4", gl: "gl_k2so4", gml: "gml_k2so4",
            d: "dk2so4", p: "p_k2so4", calc_p: "calc_p_k2so4", rastvor: "b", type: "macro"
        },
        fe: {
            calc: "gfe", mixer: "m_fe", ml: "ml_fe", gram: "gg_fe", gl: "gl_fe", gml: "gml_fe",
            d: "dfe", p: "p_fe", calc_p: "calc_p_fe", rastvor: "b", type: "micro"
        },
        fe_2: {
            calc: "gfe_2", mixer: "m_fe_2", ml: "ml_fe_2", gram: "gg_fe_2", gl: "gl_fe_2", gml: "gml_fe_2",
            d: "dfe_2", p: "p_fe_2", calc_p: "calc_p_fe_2", rastvor: "b", type: "micro"
        },
        fe_3: {
            calc: "gfe_3", mixer: "m_fe_3", ml: "ml_fe_3", gram: "gg_fe_3", gl: "gl_fe_3", gml: "gml_fe_3",
            d: "dfe_3", p: "p_fe_3", calc_p: "calc_p_fe_3", rastvor: "b", type: "micro"
        },
        mn: {
            calc: "gmn", mixer: "m_mn", ml: "ml_mn", gram: "gg_mn", gl: "gl_mn", gml: "gml_mn",
            d: "dmn", p: "p_mn", calc_p: "calc_p_mn", rastvor: "b", type: "micro"
        },
        b: {
            calc: "gb", mixer: "m_b", ml: "ml_b", gram: "gg_b", gl: "gl_b", gml: "gml_b",
            d: "db", p: "p_b", calc_p: "calc_p_b", rastvor: "b", type: "micro"
        },
        zn: {
            calc: "gzn", mixer: "m_zn", ml: "ml_zn", gram: "gg_zn", gl: "gl_zn", gml: "gml_zn",
            d: "dzn", p: "p_zn", calc_p: "calc_p_zn", rastvor: "b", type: "micro"
        },
        cu: {
            calc: "gcu", mixer: "m_cu", ml: "ml_cu", gram: "gg_cu", gl: "gl_cu", gml: "gml_cu",
            d: "dcu", p: "p_cu", calc_p: "calc_p_cu", rastvor: "b", type: "micro"
        },
        mo: {
            calc: "gmo", mixer: "m_mo", ml: "ml_mo", gram: "gg_mo", gl: "gl_mo", gml: "gml_mo",
            d: "dmo", p: "p_mo", calc_p: "calc_p_mo", rastvor: "b", type: "micro"
        },
        co: {
            calc: "gco", mixer: "m_co", ml: "ml_co", gram: "gg_co", gl: "gl_co", gml: "gml_co",
            d: "dco", p: "p_co", calc_p: "calc_p_co", rastvor: "b", type: "micro"
        },
        si: {
            calc: "gsi", mixer: "m_si", ml: "ml_si", gram: "gg_si", gl: "gl_si", gml: "gml_si",
            d: "dsi", p: "p_si", calc_p: "calc_p_si", rastvor: "b", type: "micro"
        },
        cmplx: {
            calc: "cmplx", mixer: "m_cmplx", ml: "ml_cmplx", gram: "gg_cmplx", gl: "gl_cmplx", gml: "gml_cmplx",
            p: "p_cmplx", calc_p: "calc_p_cmplx", rastvor: "b", type: "micro"
        }
    };

    static salt_dict = {
        cano3: {
            calc: "calc_cano3",
            salt: ["cano3_ca", "cano3_no3", "cano3_nh4"],
            name: "Кальций азотнокислый",
            formula: "Са(NО3)2*4H2O"
        },
        kno3: {
            calc: "calc_kno3",
            salt: ["kno3_k", "kno3_no3"],
            name: "Калий азотнокислый",
            formula: "KNO3"
        },
        nh4no3: {
            calc: "calc_nh4no3",
            salt: ["nh4no3_nh4", "nh4no3_no3"],
            name: "Аммоний азотнокислый",
            formula: "NH4NO3"
        },
        mgso4: {
            calc: "calc_mgso4",
            salt: ["mgso4_mg", "mgso4_s"],
            name: "Магний сернокислый",
            formula: "MgSO4*7H2O"
        },
        kh2po4: {
            calc: "calc_kh2po4",
            salt: ["kh2po4_k", "kh2po4_p"],
            name: "Калий фосфорнокислый",
            formula: "KH2PO4"
        },
        k2so4: {
            calc: "calc_k2so4",
            salt: ["k2so4_k", "k2so4_s"],
            name: "Калий сернокислый ",
            formula: "K2SO4"
        },
        mgno3: {
            calc: "calc_mgno3",
            salt: ["mgno3_mg", "mgno3_no3"],
            name: "Магний азотнокислый",
            formula: "Mg(NO3)2*6H2O"
        },
        cacl2: {
            calc: "calc_cacl2",
            salt: ["cacl2_ca", "cacl2_cl"],
            name: "Хлорид кальция 6-водный",
            formula: "CaCl2*6H2O"
        }
    };
    static texts = {
        K_Ca: `Если имеется тонкая светлая кромка по листу на старых листьях — коэффициент повышаем.
Если наблюдается явление, когда новые листья растут несколько смятые, а те листья которые активно растут как бы замкнуты по периметру и выдавливаются куполом — коэффициент понижаем.`,
        K_Mg: `Если на старых листьях наблюдается осветление листа при этом жилки остаются ярко-зелеными — понижаем коэффициент
Если листья демонстрируют одновременно признаки проблем и с калием и с кальцием (куполение со светлыми краями) - повышаем коэффициент.`,
        K_N: `Основной вегетативно-генеративный коэффициент. В начале развития в основном потребляется азот из раствора, а при плодоношении калий.
При вегетации — понижаем
Пре генерации плодов — повышаем. Признаком, сообщающим о необходимости коррекции может стать усиление образования желтой каймы вокруг листа по мере завязывания и развития плодов.`,
        cu: "Медь при избытке вызвает сушку краёв листа в виде пятен с последующим пожелтением и скручиванием внутрь. Поэтому если есть возможность снизить медь то её не желательно тоже более 50",
        mo: "Молибден вообще более 130 (0,13) задирать опасно. Ввиду того что он начнёт сушить растения при избытке. А те культуры которые выносят это будут накапливать его до опасной для человека дозы. Поэтому на нём всегда останавливаются на средних и менее средних дозах. Достаточная доза для него  50 (0,05)",
        b: "Бор - желательно не более 700 (вполне достаточно 500). При дозе выше этого значения начинает сушить края листьев и крутить их особенно молодые. Выглядит при этом растение как покурёженное. Если нужно в период цветения томатов и перцев лучше давать внекорневую  подкормку им по листу чем задирать дозу.",
        mn: "Марганец - Один из выскопотребляемых микроэлементов у растений. Его доза может доходить до дозы железа, но следует учесть что его высокая доза в микроэлементах заблокирует другие микроэлементы. Поэтому смотрят чтобы он был не слишком высок. Но как важный элемент для листьев он необходим. Растению достаточно дозы в  500. Но его может содержаться и более 1000 мкг.",
        fe: "Железо - самый потребляемый микроэлемент у растений. Его достаточно растению  в зависимости от культуры от 2000 до 4000. Доза в 2000 достаточна для маленьких растений. Для растений по больше этого уже мало будет. Его максимальная доза может быть 8000.Избыток железа проявляется на листьях в виде ржавых листьев с последующим высыханием. Встречается избыток железа очень редко.",
        zn: "Цинк вполне достаточно как и меди для растения - 50 (0,05). Его тоже лучше не ставить особо выше 150 если нет нужды. Так как при избытке у растений он делает кривыми листья не только между жилок но и вздутые междужилья. Листья становятся кривыми при сильном избытке и гнутся так как на подобии где вздумалось. Даже вдоль листа перегнёт (не по главной жилке). При достаточной же дозе цинка от 50 до 100 листья у растений ровные и на моём опыте всё равно зелёные. Доза же даже в 300 может по коробатить ваш лист. Ели доза ещё  будет сильнее превышена лист высыхает.",
        co: "Кобальта растение потребляет тоже очень мало и его вполне достаточно давать в дозе 50 мкг.  Он у многих растений вообще роли мало играет. Только у некоторых.",
        si: "Кремний (Si) - Считается на сегодня одним важных микроэлементов в гидропонике. Доза же его при этом потребления растениями довольно высока от 2 000 до 15 000 мкг. Этот элемент как выяснилось способствует усвоению микроэлементов даже если доза мала их в составе. Также способствует устойчивости к внешней среде.  Укрепляет скелет растения и Способствует фотосинтезу.  Добавляют всегда перед растворением удобрения.",
        N: " K/N соотношение: признак вегетативно/генеративного состояния",
        P: `Не блокирует макроэлементы. Задается обычно фиксированно в диапазоне от 30-60 ppm в зависимости от культуры на всем протяжении роста. Может быть несколько повышен при неблагоприятных условиях (во время холодов) или для стимуляции цветения. 
При появлении фиолетовых оттенков листьев на некоторых культурах — повышаем. 
Избыток фосфора может стать причиной серьезного нарушения в усвоении железа и как следствие нарушение образования зеленого хлорофилла в молодых листьях.`,
        K: "Блокирует Ca, Mg",
        Ca: "Блокирует N, K",
        Cl: "Можете предложить что написать сюда",
        Mg: "Блокирует Ca",
        S: "Потребность в сере у растений разная и обычно превышение по сере не критичны. Потому по сере выполняется балансирование при расчете профиля.",
        ЕС: `Рабочие значения ЕС обычно лежат в диапазоне от 1-3, в редких случаях выше.
Чем слабее корни, тем меньше должно быть значение.  При избыточном ЕС могут наблюдаться проблемы с тургором (вялые листья, мягкие плоды), нарушения усвоения питания с множеством противоречивых признаков.`,
        nh4_nh3_ratio: `Основное соотношение управляющее стабильностью pH раствора (физиологический кислотно/щелочной баланс) в период активного роста.
При повышении pH раствора (щелочение) - повышаем
При снижении pH раствора (закисление) - понижаем.`,
        gl_cmplx: "Должно совпадать с вкладкой микро расчетом г/л комплекса, если не совпадает возможно у вас ошибка или вызнаете что делаете",
        cmplx: "Должно совпадать с вкладкой микро расчетом г/л комплекса, если не совпадает возможно у вас ошибка или вызнаете что делаете",
        weight_micro: "Должно совпадать с г/л комплекса в концентратах, если не совпадает возможно у вас ошибка или вызнаете что делаете"
    };


    constructor({
                    name = 'тест',
                    system_type = null,
                    substrate = null,
                    user = null,
                    concentrate = null,
                    ec = 0.0,
                    ppm = 0.0,
                    litres = 10.0,
                    micro_litres = 1000.0,
                    template = null,
                    from_template = null,
                    calc_mode = "K",
                    n = 0.0,
                    no3 = 0.0,
                    nh4 = 0.0,
                    p = 0.0,
                    k = 0.0,
                    ca = 0.0,
                    mg = 0.0,
                    s = 0.0,
                    cl = 0.0,
                    fe = 0.0,
                    mn = 0.0,
                    b = 0.0,
                    zn = 0.0,
                    cu = 0.0,
                    mo = 0.0,
                    co = 0.0,
                    si = 0.0,
                    cano3 = 0.0,
                    kno3 = 0.0,
                    nh4no3 = 0.0,
                    mgso4 = 0.0,
                    kh2po4 = 0.0,
                    k2so4 = 0.0,
                    mgno3 = 0.0,
                    cacl2 = 0.0,
                    common_fe = 0.0,
                    dfe = 0.0,
                    dfe_2 = 0.0,
                    dfe_3 = 0.0,
                    dmn = 0.0,
                    db = 0.0,
                    dzn = 0.0,
                    dcu = 0.0,
                    dmo = 0.0,
                    dco = 0.0,
                    dsi = 0.0,
                    u_common_fe = 0.0,
                    u_dfe = 6.0,
                    u_dfe_2 = 11.0,
                    u_dfe_3 = 13.0,
                    u_dmn = 0.0,
                    u_db = 0.0,
                    u_dzn = 0.0,
                    u_dcu = 0.0,
                    u_dmo = 0.0,
                    u_dco = 0.0,
                    u_dsi = 0.0,
                    common_gfe = 0.0,
                    gfe = 0.0,
                    gfe_2 = 0.0,
                    gfe_3 = 0.0,
                    gmn = 0.0,
                    gb = 0.0,
                    gzn = 0.0,
                    gcu = 0.0,
                    gmo = 0.0,
                    gco = 0.0,
                    gsi = 0.0,
                    cano3_ca = 0.0,
                    cano3_no3 = 0.0,
                    cano3_nh4 = 0.0,
                    kno3_k = 0.0,
                    kno3_no3 = 0.0,
                    nh4no3_nh4 = 0.0,
                    nh4no3_no3 = 0.0,
                    mgso4_mg = 0.0,
                    mgso4_s = 0.0,
                    kh2po4_k = 0.0,
                    kh2po4_p = 0.0,
                    k2so4_k = 0.0,
                    k2so4_s = 0.0,
                    mgno3_mg = 0.0,
                    mgno3_no3 = 0.0,
                    cacl2_ca = 0.0,
                    cacl2_cl = 0.0,
                    nh4_nh3_ratio = 0.1,
                    micro_calc_mode = "b",
                    v_micro = 500.0,
                    gl_cano3 = 600.0,
                    gl_kno3 = 250.0,
                    gl_nh4no3 = 100.0,
                    gl_mgno3 = 500.0,
                    gl_mgso4 = 200.0,
                    gl_k2so4 = 100.0,
                    gl_kh2po4 = 150.0,
                    gl_cacl2 = 100.0,
                    gl_cmplx = 10.0,
                    gl_fe = 10.0,
                    gl_fe_2 = 10.0,
                    gl_fe_3 = 10.0,
                    gl_mn = 10.0,
                    gl_b = 10.0,
                    gl_zn = 10.0,
                    gl_cu = 10.0,
                    gl_mo = 10.0,
                    gl_co = 10.0,
                    gl_si = 10.0,
                    gml_cano3 = 1.2845,
                    gml_kno3 = 1.0,
                    gml_nh4no3 = 1.0,
                    gml_mgno3 = 1.0,
                    gml_mgso4 = 1.0,
                    gml_k2so4 = 1.0,
                    gml_kh2po4 = 1.0,
                    gml_cacl2 = 1.0,
                    gml_cmplx = 1.0,
                    gml_fe = 1.0,
                    gml_fe_2 = 1.0,
                    gml_fe_3 = 1.0,
                    gml_mn = 1.0,
                    gml_b = 1.0,
                    gml_zn = 1.0,
                    gml_cu = 1.0,
                    gml_mo = 1.0,
                    gml_co = 1.0,
                    gml_si = 1.0,
                    taml = 1.0,
                    tbml = 1.0,
                    mixer = null,
                    m_cano3 = "p1",
                    m_kno3 = "p2",
                    m_nh4no3 = "p3",
                    m_mgso4 = "p4",
                    m_kh2po4 = "p5",
                    m_k2so4 = "p6",
                    m_mgno3 = null,
                    m_cacl2 = null,
                    m_fe = null,
                    m_fe_2 = null,
                    m_fe_3 = null,
                    m_mn = null,
                    m_b = null,
                    m_zn = null,
                    m_cu = null,
                    m_mo = null,
                    m_co = null,
                    m_si = null,
                    m_cmplx = "p7",
                    m_custom = null,
                    p_cano3 = 0.4,
                    p_kno3 = 0.35,
                    p_nh4no3 = 0.25,
                    p_mgso4 = 0.35,
                    p_kh2po4 = 0.12,
                    p_k2so4 = 0.4,
                    p_mgno3 = 0.32,
                    p_cacl2 = 0.77,
                    p_fe = 0.05,
                    p_fe_2 = 0.05,
                    p_fe_3 = 0.05,
                    p_mn = 3.0,
                    p_b = 0.3,
                    p_zn = 0.4,
                    p_cu = 0.15,
                    p_mo = 0.4,
                    p_co = 3.0,
                    p_si = 2.3,
                    p_cmplx = 0.27,
                    saved_mono_concentrate_v = 1000,
                    saved_mono_concentrate_v_micro = 1000,
                    pk = -1
                } = {}) {
        this.name = name;
        this.pk = pk;


        this.system_type = system_type;
        this.substrate = substrate;
        this.user = user;
        this.concentrate = concentrate;
        this.ec = ec;
        this.ppm = ppm;
        this.litres = litres;
        this.micro_litres = micro_litres;
        this.template = template;
        this.from_template = from_template;
        this.calc_mode = calc_mode;
        this.n = n;
        this.no3 = no3;
        this.nh4 = nh4;
        this.p = p;
        this.k = k;
        this.ca = ca;
        this.mg = mg;
        this.s = s;
        this.cl = cl;
        this.fe = fe;
        this.mn = mn;
        this.b = b;
        this.zn = zn;
        this.cu = cu;
        this.mo = mo;
        this.co = co;
        this.si = si;
        this.cano3 = cano3;
        this.kno3 = kno3;
        this.nh4no3 = nh4no3;
        this.mgso4 = mgso4;
        this.kh2po4 = kh2po4;
        this.k2so4 = k2so4;
        this.mgno3 = mgno3;
        this.cacl2 = cacl2;
        this.common_fe = common_fe;
        this.dfe = dfe;
        this.dfe_2 = dfe_2;
        this.dfe_3 = dfe_3;
        this.dmn = dmn;
        this.db = db;
        this.dzn = dzn;
        this.dcu = dcu;
        this.dmo = dmo;
        this.dco = dco;
        this.dsi = dsi;
        this.u_common_fe = u_common_fe;
        this.u_dfe = u_dfe;
        this.u_dfe_2 = u_dfe_2;
        this.u_dfe_3 = u_dfe_3;
        this.u_dmn = u_dmn;
        this.u_db = u_db;
        this.u_dzn = u_dzn;
        this.u_dcu = u_dcu;
        this.u_dmo = u_dmo;
        this.u_dco = u_dco;
        this.u_dsi = u_dsi;
        this.common_gfe = common_gfe;
        this.gfe = gfe;
        this.gfe_2 = gfe_2;
        this.gfe_3 = gfe_3;
        this.gmn = gmn;
        this.gb = gb;
        this.gzn = gzn;
        this.gcu = gcu;
        this.gmo = gmo;
        this.gco = gco;
        this.gsi = gsi;
        this.cano3_ca = cano3_ca;
        this.cano3_no3 = cano3_no3;
        this.cano3_nh4 = cano3_nh4;
        this.kno3_k = kno3_k;
        this.kno3_no3 = kno3_no3;
        this.nh4no3_nh4 = nh4no3_nh4;
        this.nh4no3_no3 = nh4no3_no3;
        this.mgso4_mg = mgso4_mg;
        this.mgso4_s = mgso4_s;
        this.kh2po4_k = kh2po4_k;
        this.kh2po4_p = kh2po4_p;
        this.k2so4_k = k2so4_k;
        this.k2so4_s = k2so4_s;
        this.mgno3_mg = mgno3_mg;
        this.mgno3_no3 = mgno3_no3;
        this.cacl2_ca = cacl2_ca;
        this.cacl2_cl = cacl2_cl;
        this.nh4_nh3_ratio = nh4_nh3_ratio;
        this.micro_calc_mode = micro_calc_mode;
        this.v_micro = v_micro;
        this.gl_cano3 = gl_cano3;
        this.gl_kno3 = gl_kno3;
        this.gl_nh4no3 = gl_nh4no3;
        this.gl_mgno3 = gl_mgno3;
        this.gl_mgso4 = gl_mgso4;
        this.gl_k2so4 = gl_k2so4;
        this.gl_kh2po4 = gl_kh2po4;
        this.gl_cacl2 = gl_cacl2;
        this.gl_cmplx = gl_cmplx;
        this.gl_fe = gl_fe;
        this.gl_fe_2 = gl_fe_2;
        this.gl_fe_3 = gl_fe_3;
        this.gl_mn = gl_mn;
        this.gl_b = gl_b;
        this.gl_zn = gl_zn;
        this.gl_cu = gl_cu;
        this.gl_mo = gl_mo;
        this.gl_co = gl_co;
        this.gl_si = gl_si;
        this.gml_cano3 = gml_cano3;
        this.gml_kno3 = gml_kno3;
        this.gml_nh4no3 = gml_nh4no3;
        this.gml_mgno3 = gml_mgno3;
        this.gml_mgso4 = gml_mgso4;
        this.gml_k2so4 = gml_k2so4;
        this.gml_kh2po4 = gml_kh2po4;
        this.gml_cacl2 = gml_cacl2;
        this.gml_cmplx = gml_cmplx;
        this.gml_fe = gml_fe;
        this.gml_fe_2 = gml_fe_2;
        this.gml_fe_3 = gml_fe_3;
        this.gml_mn = gml_mn;
        this.gml_b = gml_b;
        this.gml_zn = gml_zn;
        this.gml_cu = gml_cu;
        this.gml_mo = gml_mo;
        this.gml_co = gml_co;
        this.gml_si = gml_si;
        this.taml = taml;
        this.tbml = tbml;
        this.mixer = mixer;
        this.m_cano3 = m_cano3;
        this.m_kno3 = m_kno3;
        this.m_nh4no3 = m_nh4no3;
        this.m_mgso4 = m_mgso4;
        this.m_kh2po4 = m_kh2po4;
        this.m_k2so4 = m_k2so4;
        this.m_mgno3 = m_mgno3;
        this.m_cacl2 = m_cacl2;
        this.m_fe = m_fe;
        this.m_fe_2 = m_fe_2;
        this.m_fe_3 = m_fe_3;
        this.m_mn = m_mn;
        this.m_b = m_b;
        this.m_zn = m_zn;
        this.m_cu = m_cu;
        this.m_mo = m_mo;
        this.m_co = m_co;
        this.m_si = m_si;
        this.m_cmplx = m_cmplx;
        this.m_custom = m_custom;
        this.p_cano3 = p_cano3;
        this.p_kno3 = p_kno3;
        this.p_nh4no3 = p_nh4no3;
        this.p_mgso4 = p_mgso4;
        this.p_kh2po4 = p_kh2po4;
        this.p_k2so4 = p_k2so4;
        this.p_mgno3 = p_mgno3;
        this.p_cacl2 = p_cacl2;
        this.p_fe = p_fe;
        this.p_fe_2 = p_fe_2;
        this.p_fe_3 = p_fe_3;
        this.p_mn = p_mn;
        this.p_b = p_b;
        this.p_zn = p_zn;
        this.p_cu = p_cu;
        this.p_mo = p_mo;
        this.p_co = p_co;
        this.p_si = p_si;
        this.p_cmplx = p_cmplx;
        this.saved_mono_concentrate_v = saved_mono_concentrate_v;
        this.saved_mono_concentrate_v_micro = saved_mono_concentrate_v_micro;
        this.saved_ec = 0;
        this.v_2 = 0;
        this.v_1 = 0;
        this.v_k = 0;
        this.ec_2 = 0;
        this.ec_1 = 0;
        this.ec_k = 0;
        this.fe_2 = 0;
        this.fe_3 = 0;
        this.mol = {
            N: 14.007,
            NO3: 14.007,
            NH4: 14.007,
            P: 30.974,
            K: 39.098,
            Ca: 40.078,
            Mg: 24.305,
            S: 32.06,
            Cl: 35.45,
            Fe: 55.845,
            Mn: 54.938,
            B: 10.81,
            Zn: 65.38,
            Cu: 63.546,
            Mo: 95.95,
            Co: 58.933,
            Si: 28.085
        };
        this.calced_mol = {};
        this.calced_mol_initial = {mol_micro: {}, mol_macro: {}};
        if (HPG.correction_fields) {
            for (const [k, ii] of Object.entries(HPG.correction_fields)) {
                for (const i of ii) {
                    this[i] = this[i.replace("_" + k, "")];
                }
            }
        }
        this.ca_0 = null;
        this.ca_1 = null;
        this.ca_2 = null;
        this.ca_k = null;
        this.cl_0 = null;
        this.cl_1 = null;
        this.cl_2 = null;
        this.cl_k = null;
        this.ec_0 = null;
        this.ec_1 = null;
        this.k_0 = null;
        this.k_1 = null;
        this.k_2 = null;
        this.k_k = null;
        this.mg_0 = null;
        this.mg_1 = null;
        this.mg_2 = null;
        this.mg_k = null;
        this.n_0 = null;
        this.n_1 = null;
        this.nh4_0 = null;
        this.nh4_1 = null;
        this.nh4_2 = null;
        this.nh4_k = null;
        this.no3_0 = null;
        this.no3_1 = null;
        this.no3_2 = null;
        this.no3_k = null;
        this.p_0 = null;
        this.p_1 = null;
        this.p_2 = null;
        this.p_k = null;
        this.s_0 = null;
        this.s_1 = null;
        this.v_k = null;
        this.v_2 = null;
        this.v_1 = null;
        // Цены и текстовые/составные поля
        this.price_common = 0;
        this.macro_price_common = 0;
        this.micro_price_common = 0;
        this.micro_cmplx_price_common = 0;
        this.micro_text = null;
        this.micro_sostav = null;

        // Аггрегаты и микроэлементы
        this.gmsum = null;
        this.agfe = null;
        this.agmn = null;
        this.agb = null;
        this.agzn = null;
        this.agcu = null;
        this.agmo = null;
        this.agco = null;
        this.agsi = null;

        // Объемы и значения по умолчанию
        this.mono_concentrate_v = 1000;
        this.mono_concentrate_v_micro = 1000;

        // ml/gg макро
        this.ml_cano3 = null;
        this.gg_cano3 = null;
        this.ml_kno3 = null;
        this.gg_kno3 = null;
        this.ml_nh4no3 = null;
        this.gg_nh4no3 = null;
        this.ml_mgno3 = null;
        this.gg_mgno3 = null;
        this.ml_cacl2 = null;
        this.gg_cacl2 = null;

        // gg микро
        this.gg_mgso4 = null;
        this.gg_kh2po4 = null;
        this.gg_k2so4 = null;
        this.gg_fe = null;
        this.gg_fe_2 = null;
        this.gg_fe_3 = null;
        this.gg_mn = null;
        this.gg_b = null;
        this.gg_zn = null;
        this.gg_cu = null;
        this.gg_mo = null;
        this.gg_co = null;
        this.gg_si = null;
        this.gg_cmplx = null;

        // ml микро
        this.ml_mgso4 = null;
        this.ml_kh2po4 = null;
        this.ml_k2so4 = null;
        this.ml_fe = null;
        this.ml_fe_2 = null;
        this.ml_fe_3 = null;
        this.ml_mn = null;
        this.ml_b = null;
        this.ml_zn = null;
        this.ml_cu = null;
        this.ml_mo = null;
        this.ml_co = null;
        this.ml_si = null;
        this.ml_cmplx = null;

        // Суммы и объемы растворов
        this.suma = "";
        this.lvola = "";
        this.sumb = "";
        this.lvolb = "";

        // Ошибки граммовок
        this.gmlcano3_error = false;
        this.gmlkno3_error = false;
        this.gmlnh4no3_error = false;
        this.gmlmgno3_error = false;
        this.gmlmgso4_error = false;
        this.gmlkh2po4_error = false;
        this.gmlk2so4_error = false;
        this.gmlcacl2_error = false;

        // Общие ошибки и предупреждения
        this.errors = {};
        this.warnings = {};

        this.history = this.loadHistory(); // загружаем историю из localStorage
        this.currentIndex = this.history.length - 1; // устанавливаем текущий индекс на последний сохраненный элемент
        this.startAutoSave();


    }

    startAutoSave() {
        setInterval(() => {
            this.saveState();
        }, 30000); // сохранять каждые 30 секунд
    }

    saveState() {
        // Сохраняем текущее состояние
        const changeData = getChangesSummary(this.toSrJSON());
        if (changeData['status'] == 'Нет изменений') {
            return;
        }
        let data = this.toSrJSON();
        data['changeStatus'] = changeData['status'];
        data['changeComment'] = changeData['comment'];
        this.history.push(data);

        this.currentIndex++;

        // Ограничиваем количество сохраненных состояний до 5000
        if (this.history.length > 5000) {
            this.history.shift(); // Удаляем самое старое состояние
            this.currentIndex--; // Уменьшаем индекс текущего состояния
        }

        this.updateLocalStorage();
    }

    revertState() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.captions = {...this.history[this.currentIndex]};
            console.log("Состояние восстановлено:", this.captions);
        } else {
            console.log("Нет предыдущих состояний для восстановления.");
        }
    }

    updateLocalStorage() {
        localStorage.setItem('hpgHistory_' + this.pk, JSON.stringify(this.history));
    }

    loadHistory() {
        const savedHistory = localStorage.getItem('hpgHistory_' + this.pk);
        return savedHistory ? JSON.parse(savedHistory) : [];
    }


    calcs = floatException(function (no3, nh4, p, k, ca, mg, cl) {
        // Используем static-поля MM
        const a = nh4 * m.Ca * m.Mg * m.K * m.P * m.Cl;
        const b = 2 * ca * m.N * m.Mg * m.K * m.P * m.Cl;
        const c = 2 * mg * m.N * m.Ca * m.K * m.P * m.Cl;
        const d = k * m.N * m.Ca * m.Mg * m.P * m.Cl;
        const e = no3 * m.Ca * m.Mg * m.K * m.P * m.Cl;
        const f = p * m.N * m.Ca * m.Mg * m.K * m.Cl;
        const g = cl * m.N * m.Ca * m.Mg * m.K * m.P;
        const h = 2 * m.N * m.Ca * m.Mg * m.K * m.P * m.Cl;
        const total = -m.S * (-a - b - c - d + e + f + g) / h;
        return total;
    });

    calcec = floatException(function (nh4, k, ca, mg) {
        // Используем static-поля MM
        const a = nh4 * m.Ca * m.Mg * m.K;
        const b = ca * m.N * m.Mg * m.K;
        const c = mg * m.N * m.Ca * m.K;
        const d = k * m.N * m.Ca * m.Mg;
        const e = m.N * m.Ca * m.Mg * m.K;
        const f = m.N * m.Ca * m.Mg * m.K;
        const ec = 0.095 * (a + 2 * b + 2 * c + d + 2 * e) / f;
        return ec;
    });

    calc_correction = floatException(function (pushedElement = null, val = null) {
        if (
            HPG.correction_fields["0"].includes(pushedElement) ||
            HPG.correction_fields["1"].includes(pushedElement) ||
            HPG.correction_fields["2"].includes(pushedElement) ||
            ["v_1", "v_2", "v_k"].includes(pushedElement)
        ) {
            if (["v_1", "v_k"].includes(pushedElement)) {
                this.v_2 = this.v_1 + this.v_k;
            }
            if (pushedElement === "v_k") {
                this.v_2 = this.v_k + this.v_1;
            }
            if (this.v_1 === this.v_2) {
                this.v_2 = this.v_k + this.v_1;
            }

            this.s_0 = this.calcs(this.no3_0, this.nh4_0, this.p_0, this.k_0, this.ca_0, this.mg_0, this.cl_0);
            this.ec_0 = this.calcec(this.nh4_0, this.k_0, this.ca_0, this.mg_0);
            this.n_0 = this.no3_0 + this.nh4_0;

            this.no3_k = (this.no3_2 * this.v_2 - this.no3_1 * this.v_1) / this.v_k;
            this.nh4_k = (this.nh4_2 * this.v_2 - this.nh4_1 * this.v_1) / this.v_k;
            this.p_k = (this.p_2 * this.v_2 - this.p_1 * this.v_1) / this.v_k;
            this.k_k = (this.k_2 * this.v_2 - this.k_1 * this.v_1) / this.v_k;
            this.ca_k = (this.ca_2 * this.v_2 - this.ca_1 * this.v_1) / this.v_k;
            this.mg_k = (this.mg_2 * this.v_2 - this.mg_1 * this.v_1) / this.v_k;
            this.cl_k = (this.cl_2 * this.v_2 - this.cl_1 * this.v_1) / this.v_k;

            this.s_k = this.calcs(this.no3_k, this.nh4_k, this.p_k, this.k_k, this.ca_k, this.mg_k, this.cl_k);
            this.ec_k = this.calcec(this.nh4_k, this.k_k, this.ca_k, this.mg_k);
            this.n_k = this.no3_k + this.nh4_k;

            this.s_2 = this.calcs(this.no3_2, this.nh4_2, this.p_2, this.k_2, this.ca_2, this.mg_2, this.cl_2);
            this.ec_2 = this.calcec(this.nh4_2, this.k_2, this.ca_2, this.mg_2);
            this.n_2 = this.no3_2 + this.nh4_2;
        }

        if (
            HPG.correction_fields["2"].includes(pushedElement) ||
            HPG.correction_fields["k"].includes(pushedElement) ||
            ["v_1", "v_2"].includes(pushedElement)
        ) {
            if (this.v_2 !== 0) {
                this.no3_2 = (this.no3_k * this.v_k + this.no3_1 * this.v_1) / this.v_2;
                this.nh4_2 = (this.nh4_k * this.v_k + this.nh4_1 * this.v_1) / this.v_2;
                this.p_2 = (this.p_k * this.v_k + this.p_1 * this.v_1) / this.v_2;
                this.k_2 = (this.k_k * this.v_k + this.k_1 * this.v_1) / this.v_2;
                this.ca_2 = (this.ca_k * this.v_k + this.ca_1 * this.v_1) / this.v_2;
                this.mg_2 = (this.mg_k * this.v_k + this.mg_1 * this.v_1) / this.v_2;
                this.cl_2 = (this.cl_k * this.v_k + this.cl_1 * this.v_1) / this.v_2;
            }
            this.n_k = this.no3_k + this.nh4_k;
            this.n_2 = this.no3_2 + this.nh4_2;

            this.s_k = this.calcs(this.no3_k, this.nh4_k, this.p_k, this.k_k, this.ca_k, this.mg_k, this.cl_k);
            this.ec_k = this.calcec(this.nh4_k, this.k_k, this.ca_k, this.mg_k);
            this.s_2 = this.calcs(this.no3_2, this.nh4_2, this.p_2, this.k_2, this.ca_2, this.mg_2, this.cl_2);
            this.ec_2 = this.calcec(this.nh4_2, this.k_2, this.ca_2, this.mg_2);
        }

        if (HPG.correction_fields_all.includes(pushedElement)) {
            this.mkorr =
                `основное:\n` +
                `изменение объема на: ${Math.round((this.v_2 - this.v_1) / this.v_1 * 100)}%\n` +
                `доля старого расвтора: ${Math.round((this.v_1 / this.v_2) * 100)}%\n` +
                `изменение ec на ${Math.round((this.ec_2 - this.ec_1) / this.ec_1 * 100)}%\n` +
                `изменение n общий на: ${Math.round((this.n_2 - this.n_1) / this.n_1 * 100)}%\n\n` +
                `профиль:` +
                `коррекция no3 на: ${Math.round((this.no3_2 - this.no3_1) / this.no3_1 * 100)}%\n` +
                `коррекция nh4 на: ${Math.round((this.nh4_2 - this.nh4_1) / this.nh4_1 * 100)}%\n` +
                `коррекция p на: ${Math.round((this.p_2 - this.p_1) / this.p_1 * 100)}%\n` +
                `коррекция k на: ${Math.round((this.k_2 - this.k_1) / this.k_1 * 100)}%\n` +
                `коррекция ca на: ${Math.round((this.ca_2 - this.ca_1) / this.ca_1 * 100)}%\n` +
                `коррекция mg на: ${Math.round((this.mg_2 - this.mg_1) / this.mg_1 * 100)}%\n` +
                `коррекция s на: ${Math.round(this.s_2 - this.s_1)}ppm\n` +
                `коррекция cl на: ${Math.round(this.cl_2 - this.cl_1)}ppm\n\n` +
                `соотношения:\n` +
                `nh4:no3 до ${Math.round(this.nh4_1 / this.no3_1 * 1000) / 1000} после ${Math.round(this.nh4_2 / this.no3_2 * 1000) / 1000}\n` +
                `k:n до ${Math.round(this.k_1 / this.n_1 * 1000) / 1000} после ${Math.round(this.k_2 / this.n_2 * 1000) / 1000}\n` +
                `k:ca до ${Math.round(this.k_1 / this.ca_1 * 1000) / 1000} после ${Math.round(this.k_2 / this.ca_2 * 1000) / 1000}\n` +
                `k:mg до ${Math.round(this.k_1 / this.mg_1 * 1000) / 1000} после ${Math.round(this.k_2 / this.mg_2 * 1000) / 1000}\n`;
        }
    });

    calc_f_p_cano3 = floatException(function () {
        console.debug("this.p_cano3 * this.calc_cano3()", this.p_cano3, this.calc_cano3(), this.p_cano3 * this.calc_cano3());
        return this.p_cano3 * this.calc_cano3();
    });

    calc_f_p_kno3 = floatException(function () {
        return this.p_kno3 * this.calc_kno3();
    });


    calc_f_p_nh4no3 = floatException(function () {
        return this.p_nh4no3 * this.calc_nh4no3();
    });

    calc_f_p_mgso4 = floatException(function () {
        return this.p_mgso4 * this.calc_mgso4();
    });

    calc_f_p_kh2po4 = floatException(function () {
        return this.p_kh2po4 * this.calc_kh2po4();
    });


    calc_f_p_k2so4 = floatException(function () {
        return this.p_k2so4 * this.calc_k2so4();
    });

    calc_f_p_mgno3 = floatException(function () {
        return this.p_mgno3 * this.calc_mgno3();
    });

    calc_f_p_cacl2 = floatException(function () {
        return this.p_cacl2 * this.calc_cacl2();
    });

    calc_f_p_fe = floatException(function () {
        return this.p_fe * this.gfe;
    });

    calc_f_p_fe_2 = floatException(function () {
        return this.p_fe_2 * this.gfe_2;
    });


    calc_f_p_fe_3 = floatException(function () {
        return this.p_fe_3 * this.gfe_3;
    });

    calc_f_p_mn = floatException(function () {
        return this.p_mn * this.gmn;
    });

    calc_f_p_b = floatException(function () {
        return this.p_b * this.gb;
    });

    calc_f_p_zn = floatException(function () {
        return this.p_zn * this.gzn;
    });

    calc_f_p_cu = floatException(function () {
        return this.p_cu * this.gcu;
    });


    calc_f_p_mo = floatException(function () {
        return this.p_mo * this.gmo;
    });

    calc_f_p_co = floatException(function () {
        return this.p_co * this.gco;
    });

    calc_f_p_si = floatException(function () {
        return this.p_si * this.gsi;
    });

    calc_f_p_cmplx = floatException(function () {
        return this.p_cmplx * this.cmplx();
    });


    get_mixer_link = floatException(function (test = false, mixing_pk = null) {
        const params = {mixer_id: null};
        if (!this.mixer) return '';

        let adr = `http://${String(this.mixer.mixer_ip)}`;
        if (test) adr += '/rest/test-api';

        if (mixing_pk) params.mixing_id = parseInt(mixing_pk, 10);

        params.s = 1;
        if (this.mixer) params.mixer_id = this.mixer.pk;

        if (this.m_cano3 !== null && this.m_cano3 !== undefined)
            params[this.m_cano3] = Number(this.gg_cano3).toFixed(2);
        if (this.m_kno3 !== null && this.m_kno3 !== undefined)
            params[this.m_kno3] = Number(this.gg_kno3).toFixed(2);
        if (this.m_nh4no3 !== null && this.m_nh4no3 !== undefined)
            params[this.m_nh4no3] = Number(this.gg_nh4no3).toFixed(2);
        if (this.m_mgno3 !== null && this.m_mgno3 !== undefined)
            params[this.m_mgno3] = Number(this.gg_mgno3).toFixed(2);
        if (this.m_cacl2 !== null && this.m_cacl2 !== undefined)
            params[this.m_cacl2] = Number(this.gg_cacl2).toFixed(2);
        if (this.m_mgso4 !== null && this.m_mgso4 !== undefined)
            params[this.m_mgso4] = Number(this.gg_mgso4).toFixed(2);
        if (this.m_kh2po4 !== null && this.m_kh2po4 !== undefined)
            params[this.m_kh2po4] = Number(this.gg_kh2po4).toFixed(2);
        if (this.m_k2so4 !== null && this.m_k2so4 !== undefined)
            params[this.m_k2so4] = Number(this.gg_k2so4).toFixed(2);

        if (this.micro_calc_mode === "b") {
            if (this.m_cmplx) params[this.m_cmplx] = Number(this.gg_cmplx).toFixed(2);
            if (this.m_fe) params[this.m_fe] = Number(this.gg_fe).toFixed(2);
            if (this.m_mn) params[this.m_mn] = Number(this.gg_mn).toFixed(2);
            if (this.m_b) params[this.m_b] = Number(this.gg_b).toFixed(2);
            if (this.m_zn) params[this.m_zn] = Number(this.gg_zn).toFixed(2);
            if (this.m_cu) params[this.m_cu] = Number(this.gg_cu).toFixed(2);
            if (this.m_mo) params[this.m_mo] = Number(this.gg_mo).toFixed(2);
            if (this.m_co) params[this.m_co] = Number(this.gg_co).toFixed(2);
            if (this.m_si) params[this.m_si] = Number(this.gg_si).toFixed(2);
        }

        return `${adr}?${urlencode(params)}`;
    });


    calc_micro_vars = floatException(function () {
        const base = this.gmsum > 0 ? this.gmsum * 10000 : 1; // чтобы избежать деления на 0
        this.agfe = this.gmsum > 0 ? (this.fe * this.micro_litres) / base : 0;
        this.agmn = this.gmsum > 0 ? (this.mn * this.micro_litres) / base : 0;
        this.agb = this.gmsum > 0 ? (this.b * this.micro_litres) / base : 0;
        this.agzn = this.gmsum > 0 ? (this.zn * this.micro_litres) / base : 0;
        this.agcu = this.gmsum > 0 ? (this.cu * this.micro_litres) / base : 0;
        this.agmo = this.gmsum > 0 ? (this.mo * this.micro_litres) / base : 0;
        this.agco = this.gmsum > 0 ? (this.co * this.micro_litres) / base : 0;
        this.agsi = this.gmsum > 0 ? (this.si * this.micro_litres) / base : 0;
    });

    weight_to_micro = floatException(function () {
        this.fe =
            10000 * this.gfe * (this.dfe / this.micro_litres) +
            10000 * this.gfe_2 * (this.dfe_2 / this.micro_litres) +
            10000 * this.gfe_3 * (this.dfe_3 / this.micro_litres);

        this.mn = 10000 * this.gmn * (this.dmn / this.micro_litres);
        this.b = 10000 * this.gb * (this.db / this.micro_litres);
        this.zn = 10000 * this.gzn * (this.dzn / this.micro_litres);
        this.cu = 10000 * this.gcu * (this.dcu / this.micro_litres);
        this.mo = 10000 * this.gmo * (this.dmo / this.micro_litres);
        this.co = 10000 * this.gco * (this.dco / this.micro_litres);
        this.si = 10000 * this.gsi * (this.dsi / this.micro_litres);
    });

    micro_to_weight = floatException(function (recalc_gmsum = true) {
        if (this.micro_calc_mode === HPG.CalcMicroMode.U) {
            if (recalc_gmsum) {
                // pass
            }

            const gfe = this.dfe > 0 ? this.fe / this.dfe * this.micro_litres / 10000 : 0;
            const gfe_2 = this.dfe_2 > 0 ? this.fe / this.dfe_2 * this.micro_litres / 10000 : 0;
            const gfe_3 = this.dfe_3 > 0 ? this.fe / this.dfe_3 * this.micro_litres / 10000 : 0;
            const com_sum = gfe + gfe_2 + gfe_3;

            this.gfe = (this.dfe && com_sum > 0) ? this.fe * (gfe / com_sum) / this.dfe * this.micro_litres / 10000 : 0;
            this.gfe_2 = (this.dfe_2 && com_sum > 0) ? this.fe * (gfe_2 / com_sum) / this.dfe_2 * this.micro_litres / 10000 : 0;
            this.gfe_3 = (this.dfe_3 && com_sum > 0) ? this.fe * (gfe_3 / com_sum) / this.dfe_3 * this.micro_litres / 10000 : 0;

            this.gmn = this.dmn > 0 ? this.mn / this.dmn * this.micro_litres / 10000 : 0;
            this.gb = this.db > 0 ? this.b / this.db * this.micro_litres / 10000 : 0;
            this.gzn = this.dzn > 0 ? this.zn / this.dzn * this.micro_litres / 10000 : 0;
            this.gcu = this.dcu > 0 ? this.cu / this.dcu * this.micro_litres / 10000 : 0;
            this.gmo = this.dmo > 0 ? this.mo / this.dmo * this.micro_litres / 10000 : 0;
            this.gco = this.dco > 0 ? this.co / this.dco * this.micro_litres / 10000 : 0;
            this.gsi = this.dsi > 0 ? this.si / this.dsi * this.micro_litres / 10000 : 0;

            if (!this.gmsum) {
                this.gmsum =
                    this.gfe +
                    this.gfe_2 +
                    this.gfe_3 +
                    this.gmn +
                    this.gb +
                    this.gzn +
                    this.gcu +
                    this.gmo +
                    this.gco +
                    this.gsi;
                this.calc_micro_vars();
            }
        } else {
            if (recalc_gmsum) {
                this.gmsum = this.db > 0 ? this.b / this.db * this.micro_litres / 10000 : 0;
                this.calc_micro_vars();
            } else {
                if (!this.gmsum) {
                    this.gmsum = this.db > 0 ? this.b / this.db * this.micro_litres / 10000 : 0;
                    // this.calc_micro_vars();
                }
                if (this.agfe) this.dfe = this.agfe;
                if (this.agmn) this.dmn = this.agmn;
                if (this.agzn) this.dzn = this.agzn;
                if (this.agb) this.db = this.agb;
                if (this.agcu) this.dcu = this.agcu;
                if (this.agmo) this.dmo = this.agmo;
                if (this.agco) this.dco = this.agco;
                if (this.agsi) this.dsi = this.agsi;
            }

            this.fe = (this.dfe > 0 && this.fe > 0) ? 10000 * this.gmsum * (this.dfe / this.micro_litres) : 0;
            this.mn = (this.dmn > 0 && this.mn > 0) ? 10000 * this.gmsum * (this.dmn / this.micro_litres) : 0;
            this.zn = (this.dzn > 0 && this.zn > 0) ? 10000 * this.gmsum * (this.dzn / this.micro_litres) : 0;
            this.cu = (this.dcu > 0 && this.cu > 0) ? 10000 * this.gmsum * (this.dcu / this.micro_litres) : 0;
            this.mo = (this.dmo > 0 && this.mo > 0) ? 10000 * this.gmsum * (this.dmo / this.micro_litres) : 0;
            this.co = (this.dco > 0 && this.co > 0) ? 10000 * this.gmsum * (this.dco / this.micro_litres) : 0;
            this.si = (this.dsi > 0 && this.si > 0) ? 10000 * this.gmsum * (this.dsi / this.micro_litres) : 0;
        }
    });

    switch_micro_to_bor = floatException(function () {
        if (
            !(
                this.gfe +
                this.gmn +
                this.gb +
                this.gzn +
                this.gcu +
                this.gmo +
                this.gco +
                this.gsi
            )
        ) {
            this.micro_to_weight(false);
        }
        this.gmsum =
            this.gfe +
            this.gfe_2 +
            this.gfe_3 +
            this.gmn +
            this.gb +
            this.gzn +
            this.gcu +
            this.gmo +
            this.gco +
            this.gsi;
        this.calc_micro_vars();
        this.micro_to_weight(false);
    });

    switch_micro_to_all = floatException(function () {
        this.gmsum =
            this.gfe +
            this.gfe_2 +
            this.gfe_3 +
            this.gmn +
            this.gb +
            this.gzn +
            this.gcu +
            this.gmo +
            this.gco +
            this.gsi;

        if (
            !(
                this.gfe +
                this.gmn +
                this.gb +
                this.gzn +
                this.gcu +
                this.gmo +
                this.gco +
                this.gsi
            )
        ) {
            this.micro_to_weight(false);
        }
        this.calc_micro_vars();
        this.micro_to_weight(false);
    });

    get_profile_str() {
        return (
            `N=${parseInt(this.n)} NO3=${parseInt(this.no3)} NH4=${parseInt(this.nh4)} P=${parseInt(this.p)} K=${parseInt(this.k)} ` +
            `Ca=${parseInt(this.ca)} Mg=${parseInt(this.mg)} ` +
            `S=${parseInt(this.s)} Cl=${parseInt(this.cl)} Fe=${parseInt(this.fe) / 1000} Mn=${parseInt(this.mn) / 1000} ` +
            `B=${parseInt(this.b) / 1000} Zn=${parseInt(this.zn) / 1000} ` +
            `Cu=${parseInt(this.cu) / 1000} ` +
            `Mo=${parseInt(this.mo) / 1000} Co=${parseInt(this.co) / 1000} Si=${parseInt(this.si) / 1000} `
        );
    }

    calc_micro = floatException(function (pushed_element = null, val = null) {
        if (pushed_element && pushed_element === "micro_calc_mode" && val === "b") {
            this.micro_calc_mode = HPG.CalcMicroMode.B;
            this.switch_micro_to_bor();
            this.calc_micro_rashod_text();
            return;
        }

        if (pushed_element && pushed_element === "micro_calc_mode" && val === "u") {
            this.micro_calc_mode = HPG.CalcMicroMode.U;
            for (let i of HPG.salt_micro_persent) {
                this[i] = this["u_" + i];
            }
            this.switch_micro_to_all();
            this.calc_micro_rashod_text();
            return;
        }

        if (
            (HPG.micro && HPG.micro.includes(pushed_element)) ||
            (HPG.salt_micro_gramm && HPG.salt_micro_gramm.includes(pushed_element)) ||
            (HPG.salt_micro_persent && HPG.salt_micro_persent.includes(pushed_element)) ||
            ["weight_micro", "v_micro", "litres", "micro_litres", null].includes(pushed_element)
        ) {
            let recalc_gmsum = true;

            if (
                !(
                    this.gfe +
                    this.gfe_2 +
                    this.gfe_3 +
                    this.gmn +
                    this.gb +
                    this.gzn +
                    this.gcu +
                    this.gmo +
                    this.gco +
                    this.gsi
                )
            ) {
                this.micro_to_weight(false);
            }

            if (!this.gmsum) {
                if (this.micro_calc_mode === HPG.CalcMicroMode.U) {
                    this.gmsum =
                        this.gfe +
                        this.gfe_2 +
                        this.gfe_3 +
                        this.gmn +
                        this.gb +
                        this.gzn +
                        this.gcu +
                        this.gmo +
                        this.gco +
                        this.gsi;
                } else {
                    this.gmsum = this.db > 0 ? this.b / this.db * this.micro_litres / 10000 : 0;
                }
            }

            this.calc_micro_vars();
            if (HPG.salt_micro_gramm && HPG.salt_micro_gramm.includes(pushed_element)) {
                if (this.micro_calc_mode === HPG.CalcMicroMode.U) {
                    this.weight_to_micro();
                }
            } else {
                if (pushed_element !== "weight_micro") {
                    this.micro_to_weight(recalc_gmsum);
                }
            }

            if (
                pushed_element === "weight_micro" &&
                this.micro_calc_mode === HPG.CalcMicroMode.B
            ) {
                this.gmsum = parseFloat(val);
                this.b = 10000 * this.gmsum * (this.db / this.micro_litres);
                this.micro_to_weight(true);
            }
        }

        if (this.micro_calc_mode === HPG.CalcMicroMode.U) {
            if (
                !(
                    this.gfe +
                    this.gmn +
                    this.gb +
                    this.gzn +
                    this.gcu +
                    this.gmo +
                    this.gco +
                    this.gsi
                )
            ) {
                this.micro_to_weight(false);
            }

            this.gmsum =
                this.gfe +
                this.gfe_2 +
                this.gfe_3 +
                this.gmn +
                this.gb +
                this.gzn +
                this.gcu +
                this.gmo +
                this.gco +
                this.gsi;
            this.calc_micro_vars();
        }
        this.get_micro_sostav();
        this.calc_micro_rashod_text();
    });

    get_micro_sostav() {
        if (this.micro_calc_mode === HPG.CalcMicroMode.U) {
            this.micro_sostav =
                `Состав: Fe=${Math.round(this.agfe * 1000) / 1000}%` +
                ` Mn=${Math.round(this.agmn * 1000) / 1000}%` +
                ` B=${Math.round(this.agb * 1000) / 1000}%` +
                ` Zn=${Math.round(this.agzn * 1000) / 1000}%` +
                ` Cu=${Math.round(this.agcu * 1000) / 1000}%` +
                ` Mo=${Math.round(this.agmo * 1000) / 1000}%` +
                ` Co=${Math.round(this.agco * 1000) / 1000}%` +
                ` Si=${Math.round(this.agsi * 1000) / 1000}%`;
        }
    }

    calc_micro_rashod_text() {
        if (this.v_micro > 0) {
            if (this.micro_calc_mode === HPG.CalcMicroMode.U) {
                this.gmsum =
                    this.gfe +
                    this.gfe_2 +
                    this.gfe_3 +
                    this.gmn +
                    this.gb +
                    this.gzn +
                    this.gcu +
                    this.gmo +
                    this.gco +
                    this.gsi;
            } else {
                this.gmsum = this.db > 0 ? this.b / this.db * this.micro_litres / 10000 : 0;
            }
            this.micro_text =
                `Концентрация: ${Math.round(this.gmsum * 1000 / this.v_micro * 100) / 100} г/л,` +
                `Кратность: ${Math.round(this.micro_litres / this.v_micro * 1000)}:1,` +
                `Расход: ${Number(this.v_micro / this.micro_litres).toFixed(2)} мл/л раствора`;
        }
    }

    cmplx = floatException(function () {
        return this.weight_micro();
    });

    weight_micro = floatException(function () {
        if (this.micro_calc_mode === HPG.CalcMicroMode.B) {
            return this.calc_bor_complex();
        } else {
            return (
                this.gfe +
                this.gfe_2 +
                this.gfe_3 +
                this.gb +
                this.gmn +
                this.gzn +
                this.gcu +
                this.gmo +
                this.gco +
                this.gsi
            );
        }
    });

    calc_bor_complex = floatException(function () {
        let bor_complex = 0;
        if (this.b > 0 && this.micro_calc_mode === HPG.CalcMicroMode.B) {
            bor_complex = this.db > 0 ? this.b / this.db * this.micro_litres / 10000 : 0;
        }
        return bor_complex;
    });

    k_mg = floatException(function (k = null, mg = null) {
        if (!k) k = this.k;
        if (!mg) mg = this.mg;
        return k / mg;
    });

    k_ca = floatException(function (k = null, ca = null) {
        if (!k) k = this.k;
        if (!ca) ca = this.ca;
        return k / ca;
    });

    k_n = floatException(function (k = null, n = null) {
        if (!k) k = this.k;
        if (!n) n = this.n;
        return k / n;
    });

    get_npk() {
        const t = this.get_matrix()[0];
        return t;
    }

    get_profile = floatException(function () {
        return (
            `N=${Math.round(this.n)} ` +
            `NO3=${Math.round(this.no3 * 100) / 100} ` +
            `NH4=${Math.round(this.nh4 * 100) / 100} ` +
            `P=${Math.round(this.p * 100) / 100} ` +
            `K=${Math.round(this.k * 100) / 100} ` +
            `Ca=${Math.round(this.ca * 100) / 100} ` +
            `Mg=${Math.round(this.mg * 100) / 100} ` +
            `S=${Math.round(this.s * 100) / 100} ` +
            `Cl=${Math.round(this.cl * 100) / 100} ` +
            `Fe=${Number((this.fe / 1000).toFixed(2))} ` +
            `Mn=${Number((this.mn / 1000).toFixed(2))} ` +
            `B=${Number((this.b / 1000).toFixed(2))} ` +
            `Zn=${Number((this.zn / 1000).toFixed(2))} ` +
            `Cu=${Number((this.cu / 1000).toFixed(2))} ` +
            `Mo=${Number((this.mo / 1000).toFixed(2))} ` +
            `Co=${Number((this.co / 1000).toFixed(2))} ` +
            `Si=${Number((this.si / 1000).toFixed(2))}`
        );
    });

    calc_npk_formula = floatException(function () {
        if (this.n === 0) {
            return "";
        } else {
            return (
                `${Math.round(this.n / this.n * 100) / 100} : ` +
                `${Math.round(this.p / this.n * 100) / 100} : ` +
                `${Math.round(this.k / this.n * 100) / 100} : ` +
                `${Math.round(this.ca / this.n * 100) / 100} : ` +
                `${Math.round(this.mg / this.n * 100) / 100} : ` +
                `${Math.round(this.s / this.n * 100) / 100} : ` +
                `${Math.round(this.cl / this.n * 100) / 100} sPPM=${this.calc_ppm()}`
            );
        }
    });

    get_npk_magazine = floatException(function () {
        return (
            `NPK: ${Math.round(this.n / 10 * 10) / 10}-${Math.round(this.p / 0.436421 / 10 * 10) / 10}-${Math.round(this.k / 0.830148 / 10 * 10) / 10} ` +
            `CaO=${Math.round(this.ca / 0.714691 / 10 * 10) / 10}% MgO=${Math.round(this.mg / 0.603036 / 10 * 10) / 10}%` +
            `SO3=${Math.round(this.s / 0.400496 / 10 * 10) / 10}`
        );
    });
    get_matrix = floatException(function (as_dict = false) {
        const matrix = [];
        const matrix_dict = {};
        let element_row = [...HPG.macro_matrix];
        const matrix_length = HPG.macro_matrix.length;
        let ii = 0;

        while (ii !== matrix_length) {
            const cur_element = element_row[0];
            const row = {};
            const cur_cal = this[cur_element.toLowerCase()] || 0;
            for (let i of HPG.macro_matrix) {
                const val = this[i.toLowerCase()] || 0;
                if (val == null || cur_cal == null || cur_cal === 0) {
                    row[i] = null;
                    matrix_dict[`${i}-${cur_element}`] = null;
                } else {
                    let t;
                    try {
                        t = Math.round((val / cur_cal) * 100) / 100;
                    } catch (e) {
                        t = 0;
                    }
                    row[i] = t;
                    matrix_dict[`${i}-${cur_element}`] = t;
                }
            }
            element_row.shift();
            element_row.push(cur_element);
            matrix.push(row);
            ii += 1;
        }
        if (as_dict) {
            return matrix_dict;
        }
        return matrix;
    });

    calc_ec_to_val = floatException(function ({
                                                  k_n = null,
                                                  k_ca = null,
                                                  k_mg = null,
                                                  ec = null,
                                                  p = null,
                                                  cl = null,
                                                  k = null,
                                                  ca = null,
                                                  n = null,
                                                  mg = null,
                                                  return_values = false
                                              } = {}) {
        if (ec === null || typeof ec === "string") ec = this.ec;
        if (k === null) k = this.k;
        if (ca === null) ca = this.ca;
        if (n === null) n = this.n;
        if (mg === null) mg = this.mg;
        if (!k_mg) k_mg = this.k_mg(k, mg);
        if (!k_ca) k_ca = this.k_ca(k, ca);
        if (!k_n) k_n = this.k_n(k, n);

        const denom = k_ca * k_n + k_mg * k_n + k_mg * k_ca + k_mg * k_ca * k_n;
        const r_n = (k_mg * k_ca) / denom;
        const r_k = (k_n * k_mg * k_ca) / denom;
        const r_ca = (k_mg * k_n) / denom;
        const r_mg = (k_ca * k_n) / denom;
        const r_nh4 = (r_n * this.nh4_nh3_ratio) / (1 + this.nh4_nh3_ratio);

        const r = (0.10526315789473684 * m.N * m.Ca * m.Mg * m.K * (100 * ec - 19)) /
            (
                r_nh4 * m.Ca * m.Mg * m.K +
                2 * r_ca * m.N * m.Mg * m.K +
                2 * r_mg * m.N * m.Ca * m.K +
                r_k * m.N * m.Ca * m.Mg
            );

        const n_val = r_n * r;
        const k_val = r_k * r;
        const ca_val = r_ca * r;
        const mg_val = r_mg * r;
        const nh4_val = r_nh4 * r;
        const no3_val = n_val - nh4_val;
        const s_val = this.calc_s(
            nh4_val, ca_val, mg_val, k_val, no3_val, p, cl
        );

        if (return_values) {
            return {
                n: n_val,
                k: k_val,
                ca: ca_val,
                mg: mg_val,
                nh4: nh4_val,
                no3: no3_val,
                s: s_val,
            };
        }

        this.n = n_val;
        this.k = k_val;
        this.ca = ca_val;
        this.mg = mg_val;
        this.nh4 = nh4_val;
        this.no3 = no3_val;
        this.s = s_val;
    });

    calc_ratio = floatException(function () {
        this.nh4 = this.n * (this.nh4_nh3_ratio / (this.nh4_nh3_ratio + 1));
        this.no3 = this.n / (this.nh4_nh3_ratio + 1);
    });

    calc_macro = floatException(function (pushed_element = null, val = null) {

        if (pushed_element === "nh4_nh3_ratio") {
            this.calc_ratio();
        }

        if (pushed_element && pushed_element.includes("matrix")) {
            let k_n = null, k_ca = null, k_mg = null;
            const [t, a, b] = pushed_element.split("-");

            if (pushed_element === "matrix-k-n") {
                k_ca = this.k_ca();
                k_mg = this.k_mg();
            }
            if (pushed_element === "matrix-k-ca") {
                k_n = this.k_n();
                k_mg = this.k_mg();
            }
            if (pushed_element === "matrix-k-mg") {
                k_n = this.k_n();
                k_ca = this.k_ca();
            }
            if (pushed_element === "matrix-ca-s") {
                this.s = this.ca / val;
                console.debug("*****", "s", this.ca / val);
            }
            if (a === "s") {
                this.s = this[b] * val;
                console.debug("*****", "s", this.n * val);
            } else {
                const v = this[b] * val;
                this[a] = v;
                console.debug("*****", a, v);
            }
            this.calc_ratio();
            if (b === "s" || a === "s") {
                this.ca = this.calc_ca();
            }
            if (!["matrix-k-mg", "matrix-k-ca", "matrix-k-n"].includes(pushed_element)) {
                console.debug("changing ec");
                this.ec = this.saved_ec;
            }
            console.debug(`ec now/old ${this.ec} /${this.saved_ec}`);
            this.calc_ec_to_val({k_n, k_ca, k_mg});
        }

        if (["ec", "nh4_nh3_ratio"].includes(pushed_element)) {
            this.calc_ec_to_val();
        }

        if (pushed_element === "nh4_nh3_ratio") {
            this.s = this.calc_s();
        }

        if (HPG.salt_gramms && HPG.salt_gramms.hasOwnProperty(pushed_element) && val !== "") {
            val = parseFloat(val);

            let n_nhno3 = 0, n_n = 0, n_no3 = 0, n_nh4 = 0, n_p = 0, n_k = 0, n_ca = 0, n_mg = 0, n_cl = 0;

            if (pushed_element === "cano3") {
                n_no3 = (
                    val * this.cano3_no3 +
                    this.nh4no3_no3 * this.calc_nh4no3() +
                    this.calc_kno3() * this.kno3_no3 +
                    this.calc_mgno3() * this.mgno3_no3
                ) / (0.1 * this.litres);
                n_nh4 = (
                    val * this.cano3_nh4 + this.calc_nh4no3() * this.nh4no3_nh4
                ) / (0.1 * this.litres);
                n_n = n_no3 + n_nh4;
                n_p = (this.calc_kh2po4() * this.kh2po4_p) / (0.1 * this.litres);
                n_k = (
                    this.calc_kno3() * this.kno3_k +
                    this.calc_kh2po4() * this.kh2po4_k +
                    this.calc_k2so4() * this.k2so4_k
                ) / (0.1 * this.litres);
                n_ca = (val * this.cano3_ca + this.calc_cacl2() * this.cacl2_ca) / (0.1 * this.litres);
                n_mg = (
                    this.calc_mgso4() * this.mgso4_mg +
                    this.calc_mgno3() * this.mgno3_mg
                ) / (0.1 * this.litres);
                n_nhno3 = n_no3 === 0 ? 0 : n_nh4 / n_no3;
                n_cl = (this.calc_cacl2() * this.cacl2_cl) / (0.1 * this.litres);
            }

            if (pushed_element === "kno3") {
                n_no3 = (
                    this.calc_cano3() * this.cano3_no3 +
                    this.nh4no3_no3 * this.calc_nh4no3() +
                    val * this.kno3_no3 +
                    this.calc_mgno3() * this.mgno3_no3
                ) / (0.1 * this.litres);
                n_nh4 = (
                    this.calc_cano3() * this.cano3_nh4 +
                    this.calc_nh4no3() * this.nh4no3_nh4
                ) / (0.1 * this.litres);
                n_n = n_no3 + n_nh4;
                n_p = (this.calc_kh2po4() * this.kh2po4_p) / (0.1 * this.litres);
                n_k = (
                    val * this.kno3_k +
                    this.calc_kh2po4() * this.kh2po4_k +
                    this.calc_k2so4() * this.k2so4_k
                ) / (0.1 * this.litres);
                n_ca = (
                    this.calc_cano3() * this.cano3_ca +
                    this.calc_cacl2() * this.cacl2_ca
                ) / (0.1 * this.litres);
                n_mg = (
                    this.calc_mgso4() * this.mgso4_mg +
                    this.calc_mgno3() * this.mgno3_mg
                ) / (0.1 * this.litres);
                n_nhno3 = n_no3 === 0 ? 0 : n_nh4 / n_no3;
                n_cl = (this.calc_cacl2() * this.cacl2_cl) / (0.1 * this.litres);
            }

            if (pushed_element === "nh4no3") {
                n_no3 = (
                    this.calc_cano3() * this.cano3_no3 +
                    val * this.nh4no3_no3 +
                    this.calc_kno3() * this.kno3_no3 +
                    this.calc_mgno3() * this.mgno3_no3
                ) / (0.1 * this.litres);
                n_nh4 = (
                    this.calc_cano3() * this.cano3_nh4 +
                    val * this.nh4no3_nh4
                ) / (0.1 * this.litres);
                n_n = n_no3 + n_nh4;
                n_p = (this.calc_kh2po4() * this.kh2po4_p) / (0.1 * this.litres);
                n_k = (
                    this.calc_kno3() * this.kno3_k +
                    this.calc_kh2po4() * this.kh2po4_k +
                    this.calc_k2so4() * this.k2so4_k
                ) / (0.1 * this.litres);
                n_ca = (
                    this.calc_cano3() * this.cano3_ca +
                    this.calc_cacl2() * this.cacl2_ca
                ) / (0.1 * this.litres);
                n_mg = (
                    this.calc_mgso4() * this.mgso4_mg +
                    this.calc_mgno3() * this.mgno3_mg
                ) / (0.1 * this.litres);
                n_nhno3 = n_no3 === 0 ? 0 : n_nh4 / n_no3;
                n_cl = (this.calc_cacl2() * this.cacl2_cl) / (0.1 * this.litres);
            }

            if (pushed_element === "mgso4") {
                n_no3 = (
                    this.calc_cano3() * this.cano3_no3 +
                    this.nh4no3_no3 * this.calc_nh4no3() +
                    this.calc_kno3() * this.kno3_no3 +
                    this.calc_mgno3() * this.mgno3_no3
                ) / (0.1 * this.litres);
                n_nh4 = (
                    this.calc_cano3() * this.cano3_nh4 +
                    this.calc_nh4no3() * this.nh4no3_nh4
                ) / (0.1 * this.litres);
                n_n = n_no3 + n_nh4;
                n_p = (this.calc_kh2po4() * this.kh2po4_p) / (0.1 * this.litres);
                n_k = (
                    this.calc_kno3() * this.kno3_k +
                    this.calc_kh2po4() * this.kh2po4_k +
                    this.calc_k2so4() * this.k2so4_k
                ) / (0.1 * this.litres);
                n_ca = (
                    this.calc_cano3() * this.cano3_ca +
                    this.calc_cacl2() * this.cacl2_ca
                ) / (0.1 * this.litres);
                n_mg = (val * this.mgso4_mg + this.calc_mgno3() * this.mgno3_mg) / (0.1 * this.litres);
                n_nhno3 = n_no3 === 0 ? 0 : n_nh4 / n_no3;
                n_cl = (this.calc_cacl2() * this.cacl2_cl) / (0.1 * this.litres);
            }

            if (pushed_element === "kh2po4") {
                n_no3 = (
                    this.calc_cano3() * this.cano3_no3 +
                    this.nh4no3_no3 * this.calc_nh4no3() +
                    this.calc_kno3() * this.kno3_no3 +
                    this.calc_mgno3() * this.mgno3_no3
                ) / (0.1 * this.litres);
                n_nh4 = (
                    this.calc_cano3() * this.cano3_nh4 +
                    this.calc_nh4no3() * this.nh4no3_nh4
                ) / (0.1 * this.litres);
                n_n = n_no3 + n_nh4;
                n_p = (val * this.kh2po4_p) / (0.1 * this.litres);
                n_k = (
                    this.calc_kno3() * this.kno3_k +
                    val * this.kh2po4_k +
                    this.calc_k2so4() * this.k2so4_k
                ) / (0.1 * this.litres);
                n_ca = (
                    this.calc_cano3() * this.cano3_ca +
                    this.calc_cacl2() * this.cacl2_ca
                ) / (0.1 * this.litres);
                n_mg = (
                    this.calc_mgso4() * this.mgso4_mg +
                    this.calc_mgno3() * this.mgno3_mg
                ) / (0.1 * this.litres);
                n_nhno3 = n_no3 === 0 ? 0 : n_nh4 / n_no3;
                n_cl = (this.calc_cacl2() * this.cacl2_cl) / (0.1 * this.litres);
            }

            if (pushed_element === "k2so4") {
                n_no3 = (
                    this.calc_cano3() * this.cano3_no3 +
                    this.nh4no3_no3 * this.calc_nh4no3() +
                    this.calc_kno3() * this.kno3_no3 +
                    this.calc_mgno3() * this.mgno3_no3
                ) / (0.1 * this.litres);
                n_nh4 = (
                    this.calc_cano3() * this.cano3_nh4 +
                    this.calc_nh4no3() * this.nh4no3_nh4
                ) / (0.1 * this.litres);
                n_n = n_no3 + n_nh4;
                n_p = (this.calc_kh2po4() * this.kh2po4_p) / (0.1 * this.litres);
                n_k = (
                    this.calc_kno3() * this.kno3_k +
                    this.calc_kh2po4() * this.kh2po4_k +
                    val * this.k2so4_k
                ) / (0.1 * this.litres);
                n_ca = (
                    this.calc_cano3() * this.cano3_ca +
                    this.calc_cacl2() * this.cacl2_ca
                ) / (0.1 * this.litres);
                n_mg = (
                    this.calc_mgso4() * this.mgso4_mg +
                    this.calc_mgno3() * this.mgno3_mg
                ) / (0.1 * this.litres);
                n_nhno3 = n_no3 === 0 ? 0 : n_nh4 / n_no3;
                n_cl = (this.calc_cacl2() * this.cacl2_cl) / (0.1 * this.litres);
            }

            if (pushed_element === "mgno3") {
                if (this.calc_mode === HPG.CalcMode.Mg) {
                    n_no3 = (
                        this.calc_cano3() * this.cano3_no3 +
                        this.nh4no3_no3 * this.calc_nh4no3() +
                        this.calc_kno3() * this.kno3_no3 +
                        val * this.mgno3_no3
                    ) / (0.1 * this.litres);
                    n_nh4 = (
                        this.calc_cano3() * this.cano3_nh4 +
                        this.calc_nh4no3() * this.nh4no3_nh4
                    ) / (0.1 * this.litres);
                    n_n = n_no3 + n_nh4;
                    n_p = (this.calc_kh2po4() * this.kh2po4_p) / (0.1 * this.litres);
                    n_k = (
                        this.calc_kno3() * this.kno3_k +
                        this.calc_kh2po4() * this.kh2po4_k +
                        this.calc_k2so4() * this.k2so4_k
                    ) / (0.1 * this.litres);
                    n_ca = (
                        this.calc_cano3() * this.cano3_ca +
                        this.calc_cacl2() * this.cacl2_ca
                    ) / (0.1 * this.litres);
                    n_mg = (this.calc_mgso4() * this.mgso4_mg + val * this.mgno3_mg) / (0.1 * this.litres);
                    n_nhno3 = n_no3 === 0 ? 0 : n_nh4 / n_no3;
                    n_cl = (this.calc_cacl2() * this.cacl2_cl) / (0.1 * this.litres);
                }
            }

            if (pushed_element === "cacl2") {
                n_no3 = (
                    this.calc_cano3() * this.cano3_no3 +
                    this.nh4no3_no3 * this.calc_nh4no3() +
                    this.calc_kno3() * this.kno3_no3 +
                    this.calc_mgno3() * this.mgno3_no3
                ) / (0.1 * this.litres);
                n_nh4 = (
                    this.calc_cano3() * this.cano3_nh4 +
                    this.calc_nh4no3() * this.nh4no3_nh4
                ) / (0.1 * this.litres);
                n_n = n_no3 + n_nh4;
                n_p = (this.calc_kh2po4() * this.kh2po4_p) / (0.1 * this.litres);
                n_k = (
                    this.calc_kno3() * this.kno3_k +
                    this.calc_kh2po4() * this.kh2po4_k +
                    this.calc_k2so4() * this.k2so4_k
                ) / (0.1 * this.litres);
                n_ca = (this.calc_cano3() * this.cano3_ca + val * this.cacl2_ca) / (0.1 * this.litres);
                n_mg = (
                    this.calc_mgso4() * this.mgso4_mg +
                    this.calc_mgno3() * this.mgno3_mg
                ) / (0.1 * this.litres);
                n_nhno3 = n_no3 === 0 ? 0 : n_nh4 / n_no3;
                n_cl = (val * this.cacl2_cl) / (0.1 * this.litres);
            }

            this.nh4_nh3_ratio = n_nhno3;
            this.n = n_n;
            this.no3 = n_no3;
            this.nh4 = n_nh4;
            this.p = n_p;
            this.k = n_k;
            this.ca = n_ca;
            this.mg = n_mg;
            this.cl = n_cl;

            if (["mgso4", "k2so4"].includes(pushed_element)) {
                this.s = this.calc_s();
            }
            if (["cacl2"].includes(pushed_element)) {
                this.s = this.calc_s();
                this.ca = this.calc_ca();
            }
        }

        if (pushed_element === "nh4") {
            const t = this.n - this.nh4;
            this.no3 = t;
            this.n = this.no3 + this.nh4;
        }
        if (pushed_element === "no3") {
            const t = this.n - this.no3;
            this.nh4 = t;
            this.n = this.no3 + this.nh4;
        }
        if (pushed_element === "n") {
            this.no3 = this.n / (this.nh4_nh3_ratio + 1);
            this.nh4 = this.nh4_nh3_ratio * this.n / (this.nh4_nh3_ratio + 1);
            this.s = this.calc_s();
        }
        if (pushed_element === "s") {
            this.ca = this.calc_ca();
        }
        if (
            !(
                (HPG.salt_gramms && HPG.salt_gramms.hasOwnProperty(pushed_element)) ||
                pushed_element === "litres"
            )
        ) {
            if (!HPG.macro.includes(pushed_element)) {
                this.ca = this.calc_ca();
            }
            this.s = this.calc_s();
        }

        // --- Калькуляции для коэффициентов ---
        if (pushed_element === "cano3_ca") {
            this.cano3_no3 = (2 * this.cano3_ca * m.N + this.cano3_nh4 * m.Ca) / m.Ca;
        }
        if (pushed_element === "cano3_nh4") {
            this.cano3_no3 = (2 * this.cano3_ca * m.N + this.cano3_nh4 * m.Ca) / m.Ca;
            this.cano3_ca = -m.Ca * (this.cano3_nh4 - this.cano3_no3) / (2 * m.N);
        }
        if (pushed_element === "kno3_k") {
            this.kno3_no3 = (this.kno3_k * m.N) / m.K;
        }
        if (pushed_element === "kno3_no3") {
            this.kno3_k = (this.kno3_no3 * m.K) / m.N;
            this.kno3_no3 = (this.kno3_k * m.N) / m.K;
        }
        if (pushed_element === "nh4no3_no3") {
            this.nh4no3_nh4 = this.nh4no3_no3;
        }
        if (pushed_element === "nh4no3_nh4") {
            this.nh4no3_no3 = this.nh4no3_nh4;
        }
        if (pushed_element === "mgso4_mg") {
            this.mgso4_s = (this.mgso4_mg * m.S) / m.Mg;
        }
        if (pushed_element === "mgso4_s") {
            this.mgso4_mg = (this.mgso4_s * m.Mg) / m.S;
        }
        if (pushed_element === "kh2po4_k") {
            this.kh2po4_p = (this.kh2po4_k * m.P) / m.K;
        }
        if (pushed_element === "kh2po4_p") {
            this.kh2po4_k = (this.kh2po4_p * m.K) / m.P;
        }
        if (pushed_element === "k2so4_k") {
            this.k2so4_s = (this.k2so4_k * m.S) / (2 * m.K);
        }
        if (pushed_element === "k2so4_s") {
            this.k2so4_k = (this.k2so4_s * 2 * m.K) / m.S;
        }
        if (pushed_element === "mgno3_mg") {
            this.mgno3_no3 = (2 * this.mgno3_mg * m.N) / m.Mg;
        }
        if (pushed_element === "mgno3_no3") {
            this.mgno3_mg = 0.5 * (this.mgno3_no3 / m.N) * m.Mg;
        }
        if (pushed_element === "cacl2_cl") {
            this.cacl2_ca = 0.5 * (this.cacl2_cl / m.Cl) * m.Ca;
        }
        if (pushed_element === "cacl2_ca") {
            this.cacl2_cl = (2 * this.cacl2_ca / m.Ca) * m.Cl;
        }
        if (pushed_element === "cano3_nh4") {
            this.cano3_no3 = (2 * this.cano3_ca * m.N + this.cano3_nh4 * m.Ca) / m.Ca;
            this.cano3_ca = -m.Ca * (this.cano3_nh4 - this.cano3_no3) / (2 * m.N);
        }
        if (pushed_element === "cano3_no3") {
            this.cano3_ca = -m.Ca * (this.cano3_nh4 - this.cano3_no3) / (2 * m.N);
        }

        if (["litres", "micro_litres"].includes(pushed_element)) {
            for (const [k, i] of Object.entries(HPG.salt_gramms)) {
                this[k] = this[i];
            }
        }
        if (this.no3) {
            this.nh4_nh3_ratio = Math.round((this.nh4 / this.no3) * 100) / 100;
        }

    });

    calc_profile_str = floatException(function (pushed_element = null, val = null) {
        if (pushed_element == "profile_str") {
            const t = val;

            if (t) {
                for (const i of [
                    "N",
                    "NO3",
                    "NH4",
                    "P",
                    "K",
                    "Ca",
                    "Mg",
                    "S",
                    "Cl",
                    "Fe",
                    "Mn",
                    "B",
                    "Zn",
                    "Cu",
                    "Mo",
                    "Co",
                    "Si",
                ]) {
                    const ff = `${i}=`;
                    const ff_find = t.indexOf(ff) + ff.length;
                    const ff_find2 = t.indexOf(" ", ff_find) + 1;
                    let value = t.substring(ff_find, ff_find2);
                    if (i === "Si") {
                        value = t.substring(ff_find);
                    }
                    if (i.toLowerCase() in HPG.micro) {
                        value = parseFloat(value.trim()) * 1000;
                    }

                    if (this[i.toLowerCase()] !== value) {
                        if (["NO3", "NH4"].includes(i)) {
                            this[i.toLowerCase()] = parseFloat(value.trim()) || value;
                            const no3 = this.no3;
                            const nh4 = this.nh4;
                            this.n = no3 + nh4;
                        }
                        this[i.toLowerCase()] = parseFloat(value.trim()) || value;
                    }

                }
            }
            this.recalc();
        }
    });

    recalc = floatException(function (pushed_element = null, val = null) {
        // debugger;
        console.debug('recalc pushed_element ' + pushed_element + ':' + val);
        // this["saved_" + pushed_element] = this[pushed_element];
        this[pushed_element] = parseFloat(val) || val;
        this.saved_ec = this.calc_ec();
        if (!this.ec) {
            this.ec = this.calc_ec();
        }
        let fval = parseFloat(val);
        if (isNaN(fval)) fval = val;

        if (this.v_1 <= 0) this.v_1 = 1;
        if (this.v_2 <= 0) this.v_2 = 1;

        if (pushed_element === "ec_2") {
            this.ec_2 = fval;
            const data = this.calc_ec_to_val({
                ec: this.ec_2,
                p: this.p_2,
                cl: this.cl_2,
                k: this.k_2,
                ca: this.ca_2,
                n: this.n_2,
                mg: this.mg_2,
                return_values: true,
            });
            for (const [k, v] of Object.entries(data)) {
                this[`${k}_2`] = v;
            }
        }

        if (pushed_element === "ec_1") {
            this.ec_1 = fval;
            const data = this.calc_ec_to_val({
                ec: this.ec_1,
                p: this.p_1,
                cl: this.cl_1,
                k: this.k_1,
                ca: this.ca_1,
                n: this.n_1,
                mg: this.mg_1,
                return_values: true,
            });
            for (const [k, v] of Object.entries(data)) {
                this[`${k}_1`] = v;
            }
        }

        if (pushed_element === "ec_0") {
            this.ec_0 = fval;
            const data = this.calc_ec_to_val({
                ec: this.ec_0,
                p: this.p_0,
                cl: this.cl_0,
                k: this.k_0,
                ca: this.ca_0,
                n: this.n_0,
                mg: this.mg_0,
                return_values: true,
            });
            for (const [k, v] of Object.entries(data)) {
                this[`${k}_0`] = v;
            }
        }

        if (pushed_element === "ec_k") {
            this.ec_k = fval;
            const data = this.calc_ec_to_val({
                ec: this.ec_k,
                p: this.p_k,
                cl: this.cl_k,
                k: this.k_k,
                ca: this.ca_k,
                n: this.n_k,
                mg: this.mg_k,
                return_values: true,
            });
            for (const [k, v] of Object.entries(data)) {
                this[`${k}_k`] = v;
            }
        }


        if (this.v_k <= 0) {
            this.v_2 = this.v_2 + Math.abs(this.v_k);
            this.v_k = 1;
        }

        this.calc_profile_str(pushed_element, fval);
        this.calc_macro(pushed_element, fval);
        this.calc_micro(pushed_element, fval);
        this.calc_concentrates(pushed_element, fval);

        this.calc_correction(pushed_element, fval);

        this.calc_prices(pushed_element, fval);
        this.calc_ratio();

        this.captions = this.calc_captions();
        if (pushed_element && !pushed_element.includes("matrix")) {
            this.ec = this.calc_ec();
        }

        this.ppm = this.calc_ppm();
        this.npk = this.get_npk();
        console.debug('recalc this.ec  1 2', this.ec);
        this.npk_formula = this.calc_npk_formula();
        this.npk_magazine = this.get_npk_magazine();
        this.salt_grams = this.sum_salt_grams();
        this.profile_npk_data();

        const cation_dict = {NH4: 1, K: 1, Ca: 2, Mg: 2};
        const anion_dict = {NO3: 1, P: 1, S: 2, Cl: 1};

        let sum_cations = 0;
        let sum_anions = 0;
        console.debug('recalc this.ec  2', this.ec);
        for (const [k, v] of Object.entries(this.mol)) {
            const t = Math.round((this[`${k.toLowerCase()}`] / v) * 100) / 100;
            this.calced_mol[k] = t;

            if (k in cation_dict) {
                sum_cations += t * cation_dict[k];
            } else if (k in anion_dict) {
                sum_anions += t * anion_dict[k];
            }

            if (HPG.macro_dict.hasOwnProperty(k.toLowerCase())) {
                this.calced_mol_initial.mol_macro[k] = t;
            } else {
                this.calced_mol_initial.mol_micro[k] = t;
            }
        }

        this.calced_mol_initial.sum_cations = Math.round(sum_cations * 100) / 100;
        this.calced_mol_initial.sum_anions = Math.round(sum_anions * 100) / 100;

        this.graph_elements_macro_vals = [];
        for (const item of HPG.graph_elements_macro) {
            const t = [];
            for (const i of item) {
                const i_i = this[i];
                if (Array.isArray(i_i)) continue;
                t.push(Number(i_i).toFixed(1));
            }
            this.graph_elements_macro_vals.push(t);
        }
    });

    toJSON() {
        // Аналог self.get_mixer_link()
        const link = [this.get_mixer_link()];

        if (typeof this.npk === "undefined") {
            this.ppm = this.calc_ppm();
            this.npk = this.get_npk();
        }
        if (typeof this.npk_magazine === "undefined") {
            this.npk_magazine = this.get_npk_magazine();
        }

        const data = {
            pk: this.pk,
            ec: this.ec !== undefined ? this.ec.toFixed(3) : "",
            ppm: this.ppm !== undefined ? this.ppm.toFixed(2) : "",
            litres: this.litres,
            micro_litres: this.micro_litres,
            saved_mono_concentrate_v: this.saved_mono_concentrate_v,
            saved_mono_concentrate_v_micro: this.saved_mono_concentrate_v_micro,
            get_profile_str: this.get_profile_str(),
            mixer_btn_link: link,
            weight_micro: this.weight_micro().toFixed(2),
            npk: this.npk,
            npk_formula: this.calc_npk_formula(),
            npk_magazine: this.npk_magazine,
            captions: this.captions,
            micro_calc_mode: this.micro_calc_mode,
            calc_mode: this.calc_mode,
            salt_grams: this.salt_grams !== undefined ? this.salt_grams.toFixed(2) : "",
            micro_text: this.micro_text,
            micro_sostav: this.micro_sostav,
            errors: this.errors,
            warnings: this.warnings,
            suma: this.suma,
            lvola: this.lvola,
            nh4_nh3_ratio: this.nh4_nh3_ratio,
            sumb: this.sumb,
            lvolb: this.lvolb,
            v_1: this.v_1,
            v_2: this.v_2,
            v_k: this.v_k,
            cmplx: this.weight_micro().toFixed(2),
            mkorr: this.mkorr,
        };

        // calced_mol
        for (const [k, v] of Object.entries(this.calced_mol)) {
            data[`mol-${k}`] = Number(v).toFixed(2);
            data[`mol-${k.toLowerCase()}`] = Number(v).toFixed(2);
        }

        // captions
        for (const s in HPG.captions) {
            data[`name-${s}`] = this.captions[s];
        }

        // macro
        for (const s of HPG.macro) {
            data[s] = Number(this[s]).toFixed(2);
        }

        // micro
        for (const s of HPG.micro) {
            data[s] = Number(this[s]).toFixed(0);
        }

        for (const s of HPG.salt_micro_gramm) {
            data[s] = Number(this[s]).toFixed(3);
        }

        // salt_micro_persent
        for (const s of HPG.salt_micro_persent) {
            data[s] = Number(this[s]).toFixed(4);
        }

        // concentrate_fields
        for (const s of HPG.concentrate_fields) {
            const t = this[s];
            if (t !== null && t !== undefined) {
                if (["taml", "tbml"].includes(s)) {
                    data[s] = Number(t).toFixed(0);
                } else if (s.startsWith("gml_") | s.startsWith("gg_") | s.startsWith("ml_")) {
                    data[s] = Number(t).toFixed(3);
                } else {
                    data[s] = Number(t).toFixed(2);
                }
            }
        }

        // salt_gramms
        for (const [k, i] of Object.entries(HPG.salt_gramms)) {
            if (typeof this[i] === "function") {
                this[k] = this[i]();
            }
        }

        // salt_dict
        for (const [s, d] of Object.entries(HPG.salt_dict)) {
            data[s] = Number(this[s]).toFixed(2);
            for (const i of d.salt) {
                data[i] = Number(this[i]).toFixed(2);
            }
        }

        // price_fields
        for (const i of HPG.price_fields) {
            const t = "calc_" + i;
            const tf = "calc_f_" + i;
            if (typeof this[t] === "function") {
                const a = this[t]();
                this[t] = a;
                data[t] = Number(a).toFixed(5);
            }
        }
        data["price_common"] = Number(this.price_common).toFixed(5);
        data["macro_price_common"] = Number(this.macro_price_common).toFixed(5);
        data["micro_price_common"] = Number(this.micro_price_common).toFixed(5);
        data["micro_cmplx_price_common"] = Number(this.micro_cmplx_price_common).toFixed(5);

        // correction_fields
        for (const [k, ii] of Object.entries(HPG.correction_fields)) {
            for (const i of ii) {
                data[i] = Number(this[i]).toFixed(2);
            }
        }

        // matrix
        const matrix = this.get_matrix(true);
        for (const [k, i] of Object.entries(matrix)) {
            data[`matrix-${k}`] = i ? Number(i).toFixed(2) : 0;
        }

        return data;
    }

    toSrJSON() {
        let data = this.toJSON();
        for (const i of ['suma', 'sumb', 'lvola', 'lvolb']) {
            delete data[i];
        }

        return data;
    }

    loadFromHist(data) {

        try {
            // Используем jsonString как объект


            // Обновляем свойства объекта на основе загруженных данных
            this.pk = data.pk !== undefined ? data.pk : this.pk;
            this.ec = data.ec !== undefined ? parseFloat(data.ec) : this.ec;
            this.ppm = data.ppm !== undefined ? parseFloat(data.ppm) : this.ppm;
            this.litres = data.litres !== undefined ? data.litres : this.litres;
            this.micro_litres = data.micro_litres !== undefined ? data.micro_litres : this.micro_litres;
            this.saved_mono_concentrate_v = data.saved_mono_concentrate_v !== undefined ? data.saved_mono_concentrate_v : this.saved_mono_concentrate_v;
            this.saved_mono_concentrate_v_micro = data.saved_mono_concentrate_v_micro !== undefined ? data.saved_mono_concentrate_v_micro : this.saved_mono_concentrate_v_micro;

            // Обновляем captions
            for (const key in data) {
                if (key.startsWith('name-')) {
                    const captionKey = key.slice(5); // Убираем 'name-' из ключа
                    this.captions[captionKey] = data[key];
                }
            }

            // Обновляем другие свойства, если они есть
            for (const key of Object.keys(data)) {
                if (this.hasOwnProperty(key)) {
                    // Проверяем, является ли значение числом или строкой
                    if (typeof this[key] === 'number' || typeof this[key] === 'string') {
                        // Преобразуем в число, если это 'ec'
                        if (key === 'ec') {
                            this[key] = parseFloat(data[key]) || 0; // Преобразуем в число
                        } else {
                            this[key] = data[key]; // Обновляем свойство
                        }
                    }
                }
            }
            console.log("Данные успешно загружены:", this);
        } catch (error) {
            console.error("Ошибка при загрузке данных из JSON:", error);
        }
    }

    performCalculation(string) {
        this.loadFromHist(string);
        this.recalc();
        this.setDOMFromFields();
    }

    calc_ppm = floatException(function () {
        const ppm = Math.round(
            (this.n + this.p + this.k + this.ca + this.mg + this.s + this.cl) * 100
        ) / 100;
        return ppm;
    });

    get_salt_dict = floatException(function () {
        return this.salt_dict;
    });

    calc_kh2po4 = floatException(function () {
        if (this.kh2po4_p === 0) {
            return 0;
        }
        const a = this.p / this.kh2po4_p;
        return a * this.litres / 10;
    });

    calc_ec = floatException(function () {
        if (
            Math.abs(this.nh4) < 0.01 &&
            Math.abs(this.ca) < 0.01 &&
            Math.abs(this.mg) < 0.01 &&
            Math.abs(this.k) < 0.01
        ) {
            return 0;
        }


        const a = this.nh4 * m.Ca * m.Mg * m.K;
        const b = this.ca * m.N * m.Mg * m.K;
        const c = this.mg * m.N * m.Ca * m.K;
        const d = this.k * m.N * m.Ca * m.Mg;
        const e = m.N * m.Ca * m.Mg * m.K;
        const f = m.N * m.Ca * m.Mg * m.K;
        if (f === 0) {
            return 0;
        }
        const ec = 0.095 * (a + 2 * b + 2 * c + d + 2 * e) / f;
        return ec;
    });

    calc_ca = floatException(function () {
        const b = this.nh4 * m.P * m.Mg * m.K * m.S * m.Cl;
        const c = this.p * m.N * m.Mg * m.K * m.S * m.Cl;
        const d = this.mg * m.N * m.P * m.K * m.S * m.Cl;
        const e = this.k * m.N * m.P * m.Mg * m.S * m.Cl;
        const f = this.no3 * m.P * m.Mg * m.K * m.S * m.Cl;
        const g = this.s * m.N * m.P * m.Mg * m.K * m.Cl;
        const h = this.cl * m.N * m.P * m.Mg * m.K * m.S;
        const i = m.N * m.P * m.Mg * m.K * m.S * m.Cl;
        if (i === 0) {
            return 0;
        }
        const ans = (-m.Ca * (b - c + 2 * d + e - f - 2 * g - h)) / (2 * i);
        return ans;
    });

    calc_kno3 = floatException(function () {
        if (this.calc_mode === HPG.CalcMode.K) {
            const a = this.k * this.kh2po4_p * this.k2so4_s * this.mgso4_mg;
            const b = this.p * this.kh2po4_k * this.k2so4_s * this.mgso4_mg;
            const c = this.k2so4_k * this.kh2po4_p * this.s * this.mgso4_mg;
            const d = this.k2so4_k * this.kh2po4_p * this.mg * this.mgso4_s;
            const e = this.kno3_k * this.kh2po4_p * this.k2so4_s * this.mgso4_mg;
            if (e === 0) {
                return 0;
            }
            const f = -(-a + b + c - d) / e;
            return f * this.litres / 10;
        } else {
            const a = this.k * this.kh2po4_p - this.p * this.kh2po4_k;
            const b = this.kno3_k * this.kh2po4_p;
            if (b === 0) {
                return 0;
            }
            return (a / b) * this.litres / 10;
        }
        // return 0; // не нужен, JS сам вернёт undefined если не попал в условия
    });

    calc_cano3 = floatException(function () {
        const a = this.ca * this.cacl2_cl - this.cl * this.cacl2_ca;
        const b = this.cano3_ca * this.cacl2_cl;
        if (b === 0) {
            return 0;
        }
        const c = a / b;
        return c * this.litres / 10;
    });

    calc_mgso4 = floatException(function () {
        if (this.calc_mode === HPG.CalcMode.K) {
            const a = this.mg;
            const b = this.mgso4_mg;
            if (b === 0) return 0;
            const c = a / b;
            return c * this.litres / 10;
        } else {
            const a = this.s;
            const b = this.mgso4_s;
            if (b === 0) return 0;
            const c = a / b;
            return c * this.litres / 10;
        }
    });

    calc_k2so4 = floatException(function () {
        if (this.calc_mode === HPG.CalcMode.K) {
            const a = this.s * this.mgso4_mg - this.mg * this.mgso4_s;
            const b = this.k2so4_s * this.mgso4_mg;
            if (b === 0) return 0;
            const c = a / b;
            return c * this.litres / 10;
        }
        return 0;
    });

    calc_nh4no3 = floatException(function () {
        const a = this.nh4 * this.cano3_ca * this.cacl2_cl;
        const b = this.cano3_nh4 * this.ca * this.cacl2_cl;
        const c = this.cano3_nh4 * this.cl * this.cacl2_ca;
        const d = this.nh4no3_nh4 * this.cano3_ca * this.cacl2_cl;
        if (d === 0) return 0;
        const e = -(-a + b - c) / d;
        return e * this.litres / 10;
    });

    calc_cacl2 = floatException(function () {
        const a = this.cl;
        const b = this.cacl2_cl;
        if (b === 0) return 0;
        const c = a / b;
        return c * this.litres / 10;
    });

    calc_mgno3 = floatException(function () {
        if (this.calc_mode === HPG.CalcMode.Mg) {
            const a = this.mg * this.mgso4_s - this.mgso4_mg * this.s;
            const b = this.mgno3_mg * this.mgso4_s;
            if (b === 0) return 0;
            const c = a / b;
            return c * this.litres / 10;
        }
        return 0;
    });


    calc_s = floatException(function (
        nh4 = null,
        ca = null,
        mg = null,
        k = null,
        no3 = null,
        p = null,
        cl = null
    ) {
        // Класс MM должен быть определён с нужными константами

        // Если аргумент не передан — используем значение из this
        if (nh4 === null || nh4 === undefined) nh4 = this.nh4;
        if (ca === null || ca === undefined) ca = this.ca;
        if (mg === null || mg === undefined) mg = this.mg;
        if (k === null || k === undefined) k = this.k;
        if (no3 === null || no3 === undefined) no3 = this.no3;
        if (p === null || p === undefined) p = this.p;
        if (cl === null || cl === undefined) cl = this.cl;

        const a = nh4 * m.Ca * m.Mg * m.K * m.P * m.Cl;
        const b = 2 * ca * m.N * m.Mg * m.K * m.P * m.Cl;
        const c = 2 * mg * m.N * m.Ca * m.K * m.P * m.Cl;
        const d = k * m.N * m.Ca * m.Mg * m.P * m.Cl;
        const e = no3 * m.Ca * m.Mg * m.K * m.P * m.Cl;
        const f = p * m.N * m.Ca * m.Mg * m.K * m.Cl;
        const g = cl * m.N * m.Ca * m.Mg * m.K * m.P;
        const h = 2 * m.N * m.Ca * m.Mg * m.K * m.P * m.Cl;

        const total = -m.S * (-a - b - c - d + e + f + g) / h;
        return total;
    });


    calc_captions() {
        const captions = {
            fe: "Железо Fe",
            fe_2: "Железо Fe",
            fe_3: "Железо Fe",
            mn: "Марганец Mn",
            b: "Бор B",
            zn: "Цинк Zn",
            cu: "Медь Cu",
            mo: "Молибден Mo",
            co: "Кобальт Co",
            si: "Кремний Si",
            cmplx: "Комплексное удобрение",
            cano3: `Селитра кальциевая CaO-${Math.round((this.cano3_ca / 0.714691) * 10) / 10}%N-${Math.round((this.cano3_nh4 + this.cano3_no3) * 10) / 10}`,
        };

        if (this.cano3_nh4 < 0.3) {
            if (Math.round(this.cano3_ca * 10) / 10 === 17) {
                captions.cano3 = "Кальций азотнокислый Са(NО3)2*4H2O";
            } else if (Math.round(this.cano3_ca * 10) / 10 === 20) {
                captions.cano3 = "Кальций азотнокислый Са(NО3)2*2H2O";
            } else if (Math.round(this.cano3_ca * 10) / 10 === 24.4) {
                captions.cano3 = "Кальций азотнокислый Са(NО3)2";
            }
        }

        captions.kno3 = `Селитра калиевая K2O-${(Math.round((this.kno3_k / 0.830148) * 10) / 10)} %  N-${Math.round(this.kno3_no3 * 10) / 10}%`;
        if (Math.round(this.kno3_k * 10) / 10 === 38.7) {
            captions.kno3 = "Калий азотнокислый KNO3";
        }

        captions.nh4no3 = `Селитра аммиачная N- ${(Math.round((this.nh4no3_nh4 + this.nh4no3_no3) * 10) / 10)}%`;
        if (Math.round(this.nh4no3_no3 * 10) / 10 === 17.5) {
            captions.nh4no3 = "Аммоний азотнокислый NH4NO3";
        }

        captions.mgso4 = `Сульфат магния MgO-${(Math.round((this.mgso4_mg / 0.603036) * 10) / 10)}% SO3-${(Math.round((this.mgso4_s / 0.400496) * 10) / 10)}%`;
        if (Math.round(this.mgso4_mg * 10) / 10 === 9.9) {
            captions.mgso4 = "Магний сернокислый MgSO4*7H2O";
        }
        if (Math.round(this.mgso4_mg * 10) / 10 === 20.2) {
            captions.mgso4 = "Магний сернокислый MgSO4";
        }

        captions.kh2po4 = `Монофосфат калия K2O-${(Math.round((this.kh2po4_k / 0.830148) * 10) / 10)}% P2O5-${(Math.round((this.kh2po4_p / 0.436421) * 10) / 10)}%`;
        if (Math.round(this.kh2po4_k * 10) / 10 === 28.7) {
            captions.kh2po4 = "Калий фосфорнокислый KH2PO4";
        }

        captions.k2so4 = `Сульфат калия K2O-${(Math.round((this.k2so4_k / 0.830148) * 10) / 10)}% SO3-${(Math.round((this.k2so4_s / 0.400496) * 10) / 10)}%`;
        if (Math.round(this.k2so4_k * 10) / 10 === 44.9) {
            captions.k2so4 = "Калий сернокислый K2SO4";
        }

        captions.mgno3 = `Селитра магниевая MgO-${Math.round((this.mgno3_mg / 0.603036) * 10) / 10}% N-${Math.round(this.mgno3_no3 * 10) / 10}%`;
        if (Math.round(this.mgno3_mg * 10) / 10 === 9.5) {
            captions.mgno3 = "Магний азотнокислый Mg(NO3)2*6H2O";
        }
        if (Math.round(this.mgno3_mg * 10) / 10 === 16.4) {
            captions.mgno3 = "Магний азотнокислый Mg(NO3)2";
        }

        captions.cacl2 = `Кальций хлористый CaO-${Math.round((this.cacl2_ca / 0.714691) * 10) / 10}% Cl-${Math.round(this.cacl2_cl * 10) / 10}%`;
        if (Math.round(this.cacl2_ca * 10) / 10 === 18.3) {
            captions.cacl2 = "Хлорид кальция 6-водный CaCl2*6H2O";
        }
        if (Math.round(this.cacl2_ca * 10) / 10 === 36.1) {
            captions.cacl2 = "Хлорид кальция безводный CaCl2";
        }

        if (this.nh4 > 0) {
            captions.nh4_nh3_ratio = `NH4:NO3 1:${Math.round(this.no3 / this.nh4)}`;
        } else {
            captions.nh4_nh3_ratio = "NO3=100%";
        }

        this.captions = captions;
        return captions;
    }


    sum_salt_grams() {
        let s = 0;
        for (const [k, i] of Object.entries(HPG.salt_gramms)) {
            let val = this[i];
            if (typeof val === "function") {
                val = val.call(this);
            }
            s += val;
        }
        return s;
    }

    calc_tbml = floatException(function () {
        this.calc_concentrates();
    });

    calc_taml = floatException(function () {
        this.calc_concentrates();
    });

    calc_gml_cano3 = floatException(function () {
        if (this.cano3_ca === 0) return 0;
        const kmol = this.gl_cano3 / (24.4247 / this.cano3_ca);
        this.gml_cano3 = 0.999 + 0.000732 * kmol - 0.000000113 * Math.pow(kmol, 2);
    });

    calc_gml_kno3 = floatException(function () {
        if (this.kno3_k === 0) return 0;
        const kmol = this.gl_kno3 / (38.6717 / this.kno3_k);
        this.gml_kno3 = 0.998 + 0.00062 * kmol - 0.000000114 * Math.pow(kmol, 2);
    });

    calc_gml_nh4no3 = floatException(function () {
        if (this.nh4no3_no3 === 0) return 0;
        const kmol = this.gl_nh4no3 / ((34.9978 / 2) / this.nh4no3_no3);
        this.gml_nh4no3 = 0.999 + 0.000397 * kmol - 0.0000000422 * Math.pow(kmol, 2);
    });

    calc_gml_mgno3 = floatException(function () {
        if (this.mgno3_mg === 0) return 0;
        const kmol = this.gl_mgno3 / (16.3874 / this.mgno3_mg);
        this.gml_mgno3 = 0.998 + 0.000736 * kmol - 0.000000121 * Math.pow(kmol, 2);
    });

    calc_gml_cacl2 = floatException(function () {
        if (this.cacl2_ca === 0) return 0;
        const kmol = this.gl_cacl2 / (36.1115 / this.cacl2_ca);
        this.gml_cacl2 = 0.999 + 0.000794 * kmol - 0.000000151 * Math.pow(kmol, 2);
    });

    calc_gml_mgso4 = floatException(function () {
        if (this.mgso4_mg === 0) return 0;
        const kmol = this.gl_mgso4 / (20.1923 / this.mgso4_mg);
        this.gml_mgso4 = 0.999 + 0.00097 * kmol - 0.000000268 * Math.pow(kmol, 2);
    });

    calc_gml_kh2po4 = floatException(function () {
        if (this.kh2po4_k === 0) return 0;
        const kmol = this.gl_kh2po4 / (28.7307 / this.kh2po4_k);
        this.gml_kh2po4 = 0.998 + 0.000716 * kmol - 0.000000399 * Math.pow(kmol, 2);
    });

    calc_gml_k2so4 = floatException(function () {
        if (this.k2so4_k === 0) return 0;
        const kmol = this.gl_k2so4 / (44.8737 / this.k2so4_k);
        this.gml_k2so4 = 0.998 + 0.000814 * kmol - 0.00000039 * Math.pow(kmol, 2);
    });

    calc_conc_micro = floatException(function () {
        this.calc_concentrates();
    });


    conc_errors = floatException(function () {
        const errors = {};
        const warnings = {};

        errors.gml_cano3 = this.gml_cano3 > 1.4212;
        errors.gml_kno3 = this.gml_kno3 > 1.1627;
        errors.gml_nh4no3 = this.gml_nh4no3 > 1.2528;
        errors.gml_mgno3 = this.gml_mgno3 > 1.2013;
        errors.gml_mgso4 = this.gml_mgso4 > 1.2978;
        errors.gml_kh2po4 = this.gml_kh2po4 > 1.128;
        errors.gml_k2so4 = this.gml_k2so4 > 1.0825;
        errors.gml_cacl2 = this.gml_cacl2 > 1.3963;

        // Микроэлементы
        if (this.cu > 200) {
            errors.cu = true;
        } else if (this.cu > 50) {
            warnings.cu = true;
            errors.cu = false;
        } else {
            warnings.cu = false;
            errors.cu = false;
        }

        if (this.fe > 8000) {
            errors.fe = true;
        } else if (this.fe > 6000) {
            warnings.fe = true;
            errors.fe = false;
        } else {
            warnings.fe = false;
            errors.fe = false;
        }

        if (this.mo > 130) {
            errors.mo = true;
        } else if (this.mo > 50) {
            warnings.mo = true;
            errors.mo = false;
        } else {
            warnings.mo = false;
            errors.mo = false;
        }

        if (this.b > 700) {
            errors.b = true;
        } else if (this.b > 500) {
            warnings.b = true;
            errors.b = false;
        } else {
            warnings.b = false;
            errors.b = false;
        }

        if (this.mn > 1000) {
            errors.mn = true;
        } else if (this.mn > 500) {
            warnings.mn = true;
            errors.mn = false;
        } else {
            warnings.mn = false;
            errors.mn = false;
        }

        if (this.zn > 350) {
            errors.zn = true;
        } else if (this.zn > 200) {
            warnings.zn = true;
            errors.zn = false;
        } else {
            warnings.zn = false;
            errors.zn = false;
        }

        if (this.co > 150) {
            errors.co = true;
        } else if (this.co > 50) {
            warnings.co = true;
            errors.co = false;
        } else {
            warnings.co = false;
            errors.co = false;
        }

        if (this.si > 20000) {
            errors.si = true;
        } else if (this.si > 6000) {
            warnings.si = true;
            errors.si = false;
        } else {
            warnings.si = false;
            errors.si = false;
        }

        if (this.micro_calc_mode === HPG.CalcMicroMode.B) {
            if (Math.round(this.gl_cmplx * 100) / 100 !== Math.round(this.weight_micro() * 100) / 100) {
                warnings.gl_cmplx = true;
                warnings.weight_micro = true;
                warnings.cmplx = true;
            } else {
                warnings.gl_cmplx = false;
                warnings.weight_micro = false;
                warnings.cmplx = false;
            }
        }

        this.errors = errors;
        this.warnings = warnings;
    });

    calc_prices = floatException(function (pushed_element = null, val = null) {
        this.price_common = 0;
        this.macro_price_common = 0;
        this.micro_price_common = 0;
        this.micro_cmplx_price_common = 0;

        for (const i of HPG.price_fields) {
            const t = "calc_" + i;
            const a = typeof this[t] === "function" ? this[t]() : 0;
            this.price_common += a;
            if (HPG.price_fields_micro_cmplx && HPG.price_fields_micro_cmplx.includes(i)) {
                this.micro_cmplx_price_common += a;
                continue;
            }
            if (HPG.price_fields_macro && HPG.price_fields_macro.includes(i)) {
                this.macro_price_common += a;
                continue;
            }
            if (HPG.price_fields_micro && HPG.price_fields_micro.includes(i)) {
                this.micro_price_common += a;
                continue;
            }
        }
    });

    calc_concentrates = floatException(function (pushed_element = null, val = null) {
        this.calc_gml_cano3();
        this.calc_gml_kno3();
        this.calc_gml_nh4no3();
        this.calc_gml_mgno3();
        this.calc_gml_mgso4();
        this.calc_gml_kh2po4();
        this.calc_gml_k2so4();
        this.calc_gml_cacl2();

        if (HPG.concentrate_fields && HPG.concentrate_fields.includes(pushed_element)) {
            const fn = this["calc_" + pushed_element];
            if (typeof fn === "function") {
                fn.call(this);
            }
        }


        if (pushed_element === "mono_concentrate_v") {
            const reduce_factor = val / this.saved_mono_concentrate_v;
            this.gl_cano3 *= reduce_factor;
            this.gl_kno3 *= reduce_factor;
            this.gl_nh4no3 *= reduce_factor;
            this.gl_mgno3 *= reduce_factor;
            this.gl_mgso4 *= reduce_factor;
            this.gl_kh2po4 *= reduce_factor;
            this.gl_k2so4 *= reduce_factor;
            this.gl_cacl2 *= reduce_factor;
            this.saved_mono_concentrate_v = val;
        }

        if (pushed_element === "mono_concentrate_v_micro") {
            const reduce_factor = val / this.saved_mono_concentrate_v_micro;
            this.gl_b *= reduce_factor;
            this.gl_cmplx *= reduce_factor;
            this.gl_zn *= reduce_factor;
            this.gl_cu *= reduce_factor;
            this.gl_mo *= reduce_factor;
            this.gl_co *= reduce_factor;
            this.gl_si *= reduce_factor;
            this.gl_fe *= reduce_factor;
            this.gl_fe_2 *= reduce_factor;
            this.gl_fe_3 *= reduce_factor;
            this.gl_mn *= reduce_factor;
            this.saved_mono_concentrate_v_micro = val;
        }

        this.ml_cano3 = this.calc_cano3() / this.gl_cano3 * this.mono_concentrate_v;
        this.ml_kno3 = this.calc_kno3() / this.gl_kno3 * this.mono_concentrate_v;
        this.ml_nh4no3 = this.calc_nh4no3() / this.gl_nh4no3 * this.mono_concentrate_v;
        this.ml_mgno3 = this.gl_mgno3 ? this.calc_mgno3() / this.gl_mgno3 * this.mono_concentrate_v : 0;
        this.ml_mgso4 = this.calc_mgso4() / this.gl_mgso4 * this.mono_concentrate_v;
        this.ml_kh2po4 = this.calc_kh2po4() / this.gl_kh2po4 * this.mono_concentrate_v;
        this.ml_k2so4 = this.calc_k2so4() / this.gl_k2so4 * this.mono_concentrate_v;
        this.ml_cacl2 = this.calc_cacl2() / this.gl_cacl2 * this.mono_concentrate_v;

        let fe_count = 0;
        if (this.dfe !== 0) fe_count += 1;
        if (this.dfe_2 !== 0) fe_count += 1;
        if (this.dfe_3 !== 0) fe_count += 1;

        if (this.dfe !== 0) {
            this.ml_fe = ((this.fe / fe_count / this.dfe) * this.litres / 10 * this.mono_concentrate_v_micro / 1000) / this.gl_fe;
        }
        if (this.dfe_2 !== 0) {
            this.ml_fe_2 = ((this.fe / fe_count / this.dfe_2) * this.litres / 10 * this.mono_concentrate_v_micro / 1000) / this.gl_fe_2;
        }
        if (this.dfe_3 !== 0) {
            this.ml_fe_3 = ((this.fe / fe_count / this.dfe_3) * this.litres / 10 * this.mono_concentrate_v_micro / 1000) / this.gl_fe_3;
        }
        if (this.dmn !== 0) {
            this.ml_mn = ((this.mn / this.dmn) * this.litres / 10 * this.mono_concentrate_v_micro / 1000) / this.gl_mn;
        }
        if (this.db !== 0) {
            this.ml_b = (this.b / this.db * this.litres / 10) / this.gl_b;
            this.ml_cmplx = (this.b / this.db * this.litres / 10) / this.gl_cmplx;
        }
        if (this.dzn !== 0) {
            this.ml_zn = ((this.zn / this.dzn) * this.litres / 10 * this.mono_concentrate_v_micro / 1000) / this.gl_zn;
        }
        if (this.dcu !== 0) {
            this.ml_cu = ((this.cu / this.dcu) * this.litres / 10 * this.mono_concentrate_v_micro / 1000) / this.gl_cu;
        }
        if (this.dmo !== 0) {
            this.ml_mo = ((this.mo / this.dmo) * this.litres / 10 * this.mono_concentrate_v_micro / 1000) / this.gl_mo;
        }
        if (this.dco !== 0) {
            this.ml_co = ((this.co / this.dco) * this.litres / 10 * this.mono_concentrate_v_micro / 1000) / this.gl_co;
        }
        if (this.dsi !== 0) {
            this.ml_si = ((this.si / this.dsi) * this.litres / 10 * this.mono_concentrate_v_micro / 1000) / this.gl_si;
        }

        this.gg_cano3 = this.gml_cano3 * this.ml_cano3;
        this.gg_kno3 = this.gml_kno3 * this.ml_kno3;
        this.gg_nh4no3 = this.gml_nh4no3 * this.ml_nh4no3;
        this.gg_mgno3 = this.gml_mgno3 * this.ml_mgno3;
        this.gg_mgso4 = this.gml_mgso4 * this.ml_mgso4;
        this.gg_kh2po4 = this.gml_kh2po4 * this.ml_kh2po4;
        this.gg_k2so4 = this.gml_k2so4 * this.ml_k2so4;
        this.gg_cacl2 = this.gml_cacl2 * this.ml_cacl2;

        this.gg_cmplx = this.ml_cmplx ? this.gml_cmplx * this.ml_cmplx : 0;
        this.gg_fe = this.ml_fe ? this.gml_fe * this.ml_fe : 0;
        this.gg_fe_2 = this.ml_fe_2 ? this.gml_fe_2 * this.ml_fe_2 : 0;
        this.gg_fe_3 = this.ml_fe_3 ? this.gml_fe_3 * this.ml_fe_3 : 0;
        this.gg_b = this.ml_b ? this.gml_b * this.ml_b : 0;
        this.gg_mn = this.ml_mn ? this.gml_mn * this.ml_mn : 0;
        this.gg_zn = this.ml_zn ? this.gml_zn * this.ml_zn : 0;
        this.gg_cu = this.ml_cu ? this.gml_cu * this.ml_cu : 0;
        this.gg_mo = this.ml_mo ? this.gml_mo * this.ml_mo : 0;
        this.gg_co = this.ml_co ? this.gml_co * this.ml_co : 0;
        this.gg_si = this.ml_si ? this.gml_si * this.ml_si : 0;

        const av = Math.round((this.ml_cano3 + this.ml_kno3 + this.ml_nh4no3 + this.ml_mgno3 + this.ml_cacl2) * 10000) / 10000;
        const am = Math.round((this.gg_cano3 + this.gg_kno3 + this.gg_nh4no3 + this.gg_mgno3 + this.gg_cacl2) * 10000) / 10000;
        if (av === 0) return 0;
        const ak = Math.round(am / av * 100) / 100;
        if (this.taml !== 0) {
            const ac = Math.round(this.litres / this.taml * 1000);
            const aw = Math.round(this.taml - av);
            const aml = Math.round(this.taml / this.litres * 1000) / 1000;
            const av_voda = Math.round((this.ml_cano3 + this.ml_kno3 + this.ml_nh4no3 + this.ml_mgno3 + this.ml_cacl2 + aw) * 10000) / 10000;
            const am_voda = Math.round((this.gg_cano3 + this.gg_kno3 + this.gg_nh4no3 + this.gg_mgno3 + this.gg_cacl2 + aw) * 10000) / 10000;
            const ak_voda = Math.round(am_voda / av_voda * 100) / 100;
            this.suma = `Объем: ${Math.round(av * 100) / 100} мл, вес: ${Math.round(am * 100) / 100} гр, плотность концентратов: ${Math.round(ak * 100) / 100} г/мл. Плотность с водой ${ak_voda}`;
            this.lvola = `Концентрат А (${Math.round(ac * 100) / 100}:1). Долить воды: ${Math.round(aw * 100) / 100} мл. Разбавлять по ${Math.round(aml * 100) / 100} мл на 1л.`;
        }

        // Микро-концентраты
        const vmlmgso4 = this.ml_mgso4 || 0;
        const vmlkh2po4 = this.ml_kh2po4 || 0;
        const vmlk2so4 = this.ml_k2so4 || 0;
        const vmlfe = this.ml_fe || 0;
        const vmlfe_2 = this.ml_fe_2 || 0;
        const vmlfe_3 = this.ml_fe_3 || 0;
        const vmlmn = this.ml_mn || 0;
        const vmlb = this.ml_b || 0;
        const vmlzn = this.ml_zn || 0;
        const vmlcu = this.ml_cu || 0;
        const vmlmo = this.ml_mo || 0;
        const vmlco = this.ml_co || 0;
        const vmlsi = this.ml_si || 0;

        let bv, bm, bk, bv_voda, bm_voda, bk_voda;
        if (this.micro_calc_mode === HPG.CalcMicroMode.B) {
            bv = Math.round((this.ml_mgso4 + this.ml_kh2po4 + this.ml_k2so4 + this.ml_cmplx) * 10000) / 10000;
            bm = Math.round((this.gg_mgso4 + this.gg_kh2po4 + this.gg_k2so4 + this.gg_cmplx) * 10000) / 10000;
            bk = Math.round(bm / bv * 1000) / 1000;
        } else {
            bv = vmlmgso4 + vmlkh2po4 + vmlk2so4 + vmlfe + vmlfe_2 + vmlfe_3 + vmlmn + vmlb + vmlzn + vmlmo + vmlcu + vmlco + vmlsi;
            bm = Math.round((this.gg_mgso4 + this.gg_kh2po4 + this.gg_k2so4 + this.gg_fe + this.gg_mn + this.gg_b + this.gg_zn + this.gg_mo + this.gg_co + this.gg_si) * 100) / 100;
            bk = Math.round(bm / bv * 100) / 100;
        }

        if (this.tbml !== 0) {
            const bc = Math.round(this.litres / this.tbml * 1000);
            const bw = Math.round(this.tbml - bv);
            const bml = Math.round(this.tbml / this.litres * 1000) / 1000;

            if (this.micro_calc_mode === HPG.CalcMicroMode.B) {
                bv_voda = Math.round((this.ml_mgso4 + this.ml_kh2po4 + this.ml_k2so4 + this.ml_cmplx + bw) * 10000) / 10000;
                bm_voda = Math.round((this.gg_mgso4 + this.gg_kh2po4 + this.gg_k2so4 + this.gg_cmplx + bw) * 10000) / 10000;
                bk_voda = Math.round(bm_voda / bv_voda * 1000) / 1000;
            } else {
                bv_voda = vmlmgso4 + vmlkh2po4 + vmlk2so4 + vmlfe + vmlfe_2 + vmlfe_3 + vmlmn + vmlb + vmlzn + vmlmo + vmlcu + vmlco + vmlsi + bw;
                bm_voda = Math.round((this.gg_mgso4 + this.gg_kh2po4 + this.gg_k2so4 + this.gg_fe + this.gg_mn + this.gg_b + this.gg_zn + this.gg_mo + this.gg_co + this.gg_si + bw) * 100) / 100;
                bk_voda = Math.round(bm_voda / bv_voda * 100) / 100;
            }
            this.sumb = `Объем: ${Math.round(bv * 10) / 10} мл, вес: ${Math.round(bm * 100) / 100} гр, плотность концентратов: ${Math.round(bk * 100) / 100} г/мл Плотность с водой ${bk_voda}`;
            this.lvolb = `Концентрат Б (${Math.round(bc * 100) / 100}:1) . долить воды: ${Math.round(bw * 100) / 100} мл. Разбавлять по ${Math.round(bml * 100) / 100} мл на 1л.`;
        }
        this.conc_errors();
    });

    profile_npk_data() {
        let out = "<table class='table'><tr>";
        for (const i of HPG.macro) {
            out += `<td>${i}</td>`;
        }
        out += "</tr><tr>";
        for (const i of HPG.macro) {
            out += `<td>${parseInt(this[i])}</td>`;
        }
        out += "</tr></table>";

        out += "<table class='table'><tr>";
        for (const i of HPG.micro) {
            out += `<td>${i}</td>`;
        }
        out += "</tr><tr>";
        for (const i of HPG.micro) {
            out += `<td>${parseInt(this[i])}</td>`;
        }
        out += "</tr></table>";

        return out;
    }

    static dom_fields = [
        "name", "calc_mode", "system_type", "substrate", "user", "concentrate", "ec", "ppm", "litres", "micro_litres", "template", "from_template",
        "n", "no3", "nh4", "p", "k", "ca", "mg", "s", "cl", "fe", "mn", "b", "zn", "cu", "mo", "co", "si",
        "cano3", "kno3", "nh4no3", "mgso4", "kh2po4", "k2so4", "mgno3", "cacl2", "common_fe", "dfe", "dfe_2", "dfe_3", "dmn", "db", "dzn", "dcu", "dmo", "dco", "dsi",
        "u_common_fe", "u_dfe", "u_dfe_2", "u_dfe_3", "u_dmn", "u_db", "u_dzn", "u_dcu", "u_dmo", "u_dco", "u_dsi",
        "common_gfe", "gfe", "gfe_2", "gfe_3", "gmn", "gb", "gzn", "gcu", "gmo", "gco", "gsi",
        "cano3_ca", "cano3_no3", "cano3_nh4", "kno3_k", "kno3_no3", "nh4no3_nh4", "nh4no3_no3", "mgso4_mg", "mgso4_s", "kh2po4_k", "kh2po4_p", "k2so4_k", "k2so4_s", "mgno3_mg", "mgno3_no3", "cacl2_ca", "cacl2_cl",
        "nh4_nh3_ratio", "micro_calc_mode", "v_micro", "gl_cano3", "gl_kno3", "gl_nh4no3", "gl_mgno3", "gl_mgso4", "gl_k2so4", "gl_kh2po4", "gl_cacl2", "gl_cmplx",
        "gl_fe", "gl_fe_2", "gl_fe_3", "gl_mn", "gl_b", "gl_zn", "gl_cu", "gl_mo", "gl_co", "gl_si",
        "gml_cano3", "gml_kno3", "gml_nh4no3", "gml_mgno3", "gml_mgso4", "gml_k2so4", "gml_kh2po4", "gml_cacl2", "gml_cmplx",
        "gml_fe", "gml_fe_2", "gml_fe_3", "gml_mn", "gml_b", "gml_zn", "gml_cu", "gml_mo", "gml_co", "gml_si",
        "taml", "tbml", "mixer", "m_cano3", "m_kno3", "m_nh4no3", "m_mgso4", "m_kh2po4", "m_k2so4", "m_mgno3",
        "m_cacl2", "m_fe", "m_fe_2", "m_fe_3", "m_mn", "m_b", "m_zn", "m_cu",
        "m_mo", "m_co", "m_si", "m_cmplx", "m_custom",
        "p_cano3", "p_kno3", "p_nh4no3", "p_mgso4", "p_kh2po4", "p_k2so4", "p_mgno3",
        "p_cacl2", "p_fe", "p_fe_2", "p_fe_3", "p_mn", "p_b", "p_zn", "p_cu", "p_mo", "p_co", "p_si", "p_cmplx",
        "saved_mono_concentrate_v", "saved_mono_concentrate_v_micro",

        "taml", "tbml",
        "gml_fe", "gml_fe_2", "gml_fe_3", "gml_mn", "gml_b", "gml_zn", "gml_cu", "gml_mo", "gml_co", "gml_si",
        "gml_cano3", "gml_kno3", "gml_nh4no3", "gml_mgno3", "gml_mgso4", "gml_k2so4", "gml_kh2po4", "gml_cacl2", "gml_cmplx",
        "gl_fe", "gl_fe_2", "gl_fe_3", "gl_mn", "gl_b", "gl_zn", "gl_cu", "gl_mo", "gl_co", "gl_si",
        "gl_cano3", "gl_kno3", "gl_nh4no3", "gl_mgno3", "gl_mgso4", "gl_k2so4", "gl_kh2po4", "gl_cacl2", "gl_cmplx",
        "ml_cano3", "gg_cano3", "ml_kno3", "gg_kno3", "ml_nh4no3", "gg_nh4no3", "ml_mgno3", "ml_mgso4", "ml_kh2po4",
        "ml_k2so4", "ml_cacl2", "ml_fe", "ml_fe_2", "ml_fe_3", "ml_mn", "ml_b", "ml_zn", "ml_cu", "ml_mo", "ml_co", "ml_si", "ml_cmplx",
        "gg_mgno3", "gg_cacl2", "gg_mgso4", "gg_kh2po4", "gg_k2so4", "gg_fe", "gg_fe_2", "gg_fe_3", "gg_mn", "gg_b", "gg_zn", "gg_cu", "gg_mo", "gg_co", "gg_si", "gg_cmplx"


    ];

    setFieldsFromDOM() {
        for (const field of HPG.dom_fields) {
            const el = document.querySelector(`#id_${field}`);
            if (el) {
                let val = el.value;
                if (val !== "" && !isNaN(val) && isFinite(val)) {
                    // Преобразуем только если это действительно число (но не пустая строка)
                    this[field] = parseFloat(val);
                } else {
                    this[field] = val;
                }

            }
        }
    }

    compareFieldsWithDOM() {
        const mismatches = [];
        for (const field of HPG.dom_fields) {
            const el = document.querySelector(`#id_${field}`);
            if (el) {
                let domVal = el.value;
                let classVal = this[field];

                // Приводим к числу, если возможно
                const tryParseFloat = v => {
                    if (typeof v === "number") return v;
                    if (typeof v === "string" && v.trim() !== "" && !isNaN(v)) return parseFloat(v);
                    return v;
                };

                const domNum = tryParseFloat(domVal);
                const classNum = tryParseFloat(classVal);

                const bothNumbers =
                    typeof domNum === "number" && isFinite(domNum) &&
                    typeof classNum === "number" && isFinite(classNum);

                if (bothNumbers) {
                    // Округляем оба значения до 3 знаков после запятой
                    const domRounded = Math.round(domNum * 100) / 100;
                    const classRounded = Math.round(classNum * 100) / 100;
                    if (Math.abs(domRounded - classRounded) > 0.015) {
                        mismatches.push({
                            field,
                            classValue: classRounded,
                            domValue: domRounded
                        });
                    }
                } else {
                    // Сравниваем как строки
                    if ((classVal ?? "") !== (domVal ?? "")) {
                        mismatches.push({
                            field,
                            classValue: classVal,
                            domValue: domVal
                        });
                    }
                }
            }
        }
        if (mismatches.length > 0) {
            for (const mismatch of mismatches) {
                console.log("Несовпадения:", mismatch);
            }

        } else {
            console.log("Все значения совпадают.");
        }
        return mismatches;
    }

    setDOMFromFields() {
        for (const field of HPG.dom_fields) {
            const el = document.getElementById(`id_${field}`);
            const spinner = document.getElementById(`id_${field}:input_spinner`);

            // Получаем значение для установки
            let val = (this[field] !== undefined && this[field] !== null) ? this[field] : "";

            // Функция округления до step
            function roundToStep(value, step) {
                if (!step || isNaN(step) || isNaN(value)) return value;
                return (Math.round(value / step) * step).toFixed((step.toString().split('.')[1] || '').length);
            }

            // Округляем, если возможно
            if (el && el.step && !isNaN(val) && el.step !== "any") {
                val = roundToStep(Number(val), Number(el.step));
            }

            if (el) {
                el.value = val;
            }
            if (spinner) {
                let spinnerVal = val;
                if (spinner.step && !isNaN(spinnerVal) && spinner.step !== "any") {
                    spinnerVal = roundToStep(Number(spinnerVal), Number(spinner.step));
                }
                spinner.value = spinnerVal;
            }
        }

        for (const [key, value] of Object.entries(this.captions)) {
            $('#id_name-' + key).text(value);
        }

        const matrix = this.get_matrix(true);
        for (const [k, i] of Object.entries(matrix)) {
            $('#id_matrix-' + `${k}`).val(i ? Number(i).toFixed(2) : 0
            )
            ;
        }
    }
}

function deleteHistoryEntry(index) {
    // Проверяем, что индекс в допустимом диапазоне
    if (index < 0 || index >= hpg.history.length) {
        console.error("Индекс вне диапазона:", index);
        return; // Выходим, если индекс некорректен
    }

    // Удаляем запись из истории
    hpg.history.splice(index, 1);

    // Обновляем текущий индекс, если удаляем запись, которая была текущей
    if (hpg.currentIndex >= index) {
        hpg.currentIndex = Math.max(hpg.currentIndex - 1, 0);
    }

    // Удаляем элемент из DOM
    const historyList = document.getElementById('historyList');
    const listItem = historyList.children[index]; // Получаем элемент списка по индексу
    if (listItem) {
        console.log('listItem', listItem);
        historyList.removeChild(listItem); // Удаляем элемент из списка
    }

    console.log("Запись удалена из истории:", index);
}

function showHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Очистка списка перед добавлением

    hpg.history.forEach((state, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        // Создаем сворачивающийся элемент
        const summary = document.createElement('div');
        summary.className = 'd-flex justify-content-between';
        summary.innerHTML = `Состояние ${index + 1}: ${state['changeComment']}`;

        const detailsButton = document.createElement('button');
        detailsButton.className = 'btn btn-link';
        detailsButton.textContent = 'Подробно';
        detailsButton.onclick = () => {
            const details = document.getElementById(`details-${index}`);
            details.classList.toggle('d-none'); // Переключаем видимость
        };

        summary.appendChild(detailsButton);
        listItem.appendChild(summary);

        // Добавляем подробности
        const details = document.createElement('div');
        details.id = `details-${index}`;
        details.className = 'd-none'; // Скрываем по умолчанию
        details.innerHTML = getFullDetails(state);
        listItem.appendChild(details);

        // Добавляем кнопку для расчета
        const calculateButton = document.createElement('button');
        calculateButton.className = 'btn btn-success btn-sm';
        calculateButton.textContent = 'В расчет';
        calculateButton.onclick = () => {
            hpg.currentIndex = index; // Устанавливаем текущий индекс
            hpg.captions = {...hpg.history[index]}; // Восстанавливаем состояние
            hpg.performCalculation(hpg.history[index]); // Выполняем расчет
            const modal = bootstrap.Modal.getInstance(document.getElementById('historyModal'));
            modal.hide(); // Закрываем модальное окно
        };

// Добавляем кнопку для удаления записи из истории
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = () => {
            deleteHistoryEntry(index); // Удаляем запись из истории
            showHistory(); // Обновляем отображение истории
        };

// Добавляем кнопки в элемент списка
        listItem.appendChild(calculateButton);
        listItem.appendChild(deleteButton);
        historyList.appendChild(listItem);
    });

    if (hpg.history.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.className = 'list-group-item';
        emptyItem.textContent = 'История пуста';
        historyList.appendChild(emptyItem);
    }
}

function getChangesSummary(newState) {
    let data = {
        'status': '', 'comment': ''
    }
    let index = hpg.currentIndex - 1;
    if (index < 0) {
        index = 0;
    }
    const previousState = hpg.history[index] || {};

    let summary = '';
    if (Object.keys(previousState).length === 0) {
        data['comment'] = '1 запись';
        return data
    }
    let counter = 0;

    // Функция для глубокого сравнения значений
    function compareValues(newValue, oldValue, key) {
        if (Array.isArray(newValue) && Array.isArray(oldValue)) {
            // Сравниваем массивы
            if (newValue.length !== oldValue.length) {
                summary += `<span style="color: red;">${key}: [разные длины]</span>, `;
                counter++;
            } else {
                newValue.forEach((item, index) => {
                    if (item !== oldValue[index]) {
                        summary += `<span style="color: red;">${key}[${index}]: ${item}</span>, `;
                        counter++;
                    }
                });
            }
        } else if (typeof newValue === 'object' && newValue !== null && typeof oldValue === 'object' && oldValue !== null) {
            // Сравниваем объекты рекурсивно
            for (const subKey in newValue) {
                if (newValue.hasOwnProperty(subKey)) {
                    compareValues(newValue[subKey], oldValue[subKey], `${key}.${subKey}`);
                    counter++;
                }
            }
        } else if (newValue !== oldValue) {
            // Сравниваем примитивные значения
            summary += `<span style="color: red;">${key}: ${newValue}</span>, `;
            counter++;
        }
    }

    // Сравниваем верхний уровень
    for (const key in newState) {
        if (newState.hasOwnProperty(key)) {
            compareValues(newState[key], previousState[key], key);
        }
    }
    data['status'] = summary.length > 0 ? summary.slice(0, -2) : 'Нет изменений';
    data['comment'] = counter + ' изменений';
    return data
}


function getFullDetails(state) {
    const previousState = hpg.history[hpg.currentIndex - 1] || {};
    return Object.entries(state)
        .map(([key, value]) => {
            if (typeof value === 'number' && value !== previousState[key]) {
                return `${key}: <span style="color: red;">${value}</span>`; // Выделяем измененные числовые значения
            } else if (typeof value === 'object' && value !== null) {
                return `${key}: <pre>${JSON.stringify(value, null, 2)}</pre>`; // Форматируем объект
            } else {
                return `${key}: ${value}`; // Для остальных типов
            }
        })
        .join('<br>'); // Отображаем все значения
}


$('#historyModal').on('show.bs.modal', showHistory);


function updateMacroCalcMode(isChecked) {
    const calcModeValue = isChecked ? 'Mg' : 'K';
    console.debug('isChecked:', isChecked, typeof isChecked);


    $("#id_mgno3").prop("disabled", isChecked);
    $("#id_k2so4").prop("disabled", !isChecked);

    // Обновляем классы
    document.getElementById('id_calc_mode').value = calcModeValue;
    document.getElementById('l_macro_k').classList.toggle('text-danger', !isChecked);
    document.getElementById('l_macro_mg').classList.toggle('text-danger', isChecked);


    // Обновляем профиль и пересчет
    if (typeof hpg !== 'undefined') {
        hpg.macro_calc_mode = calcModeValue;
        hpg.recalc("calc_mode", calcModeValue);
    }

}


function recalc(data) {
    console.debug("recalc", data);
    if (data.error === "не поддерживаемый тип запроса") {
        return true;
    }

    if (data.pp.calc_mode === 'K') {
        $("#id_k2so4").prop("disabled", false);
        $("#id_mgno3").prop("disabled", true);
    } else {
        $("#id_mgno3").prop("disabled", false);
        $("#id_k2so4").prop("disabled", true);
    }

    if (data.pp.micro_calc_mode === "u") {
        $('#id_gfe').removeClass('d-none');
        $('#id_gfe_2').removeClass('d-none');
        $('#id_gfe_3').removeClass('d-none');

        $('#conc-fe_2').removeClass('d-none');
        $('#conc-fe_3').removeClass('d-none');

        $('#row-fe_2').removeClass('d-none');
        $('#row-fe_3').removeClass('d-none');
        $('#id_gmn').removeClass('d-none');
        $('#id_gzn').removeClass('d-none');
        $('#id_gcu').removeClass('d-none');
        $('#id_gmo').removeClass('d-none');
        $('#id_gco').removeClass('d-none');
        $('#id_gsi').removeClass('d-none');
        $('#id_gb').removeClass('d-none');

        $('#mixer-fe').removeClass('d-none');
        $('#mixer-fe_2').removeClass('d-none');
        $('#mixer-fe_3').removeClass('d-none');

        $('#mixer-mn').removeClass('d-none');
        $('#mixer-zn').removeClass('d-none');
        $('#mixer-cu').removeClass('d-none');
        $('#mixer-mo').removeClass('d-none');
        $('#mixer-co').removeClass('d-none');
        $('#mixer-si').removeClass('d-none');
        $('#mixer-b').removeClass('d-none');


        $('#conc-fe').removeClass('d-none');
        $('#conc-fe_2').removeClass('d-none');
        $('#conc-fe_3').removeClass('d-none');
        $('#conc-mn').removeClass('d-none');
        $('#conc-zn').removeClass('d-none');
        $('#conc-cu').removeClass('d-none');
        $('#conc-mo').removeClass('d-none');
        $('#conc-co').removeClass('d-none');
        $('#conc-si').removeClass('d-none');
        $('#conc-b').removeClass('d-none');

        $('#p_fe').removeClass('d-none');
        $('#p_mn').removeClass('d-none');
        $('#p_zn').removeClass('d-none');
        $('#p_cu').removeClass('d-none');
        $('#p_mo').removeClass('d-none');
        $('#p_co').removeClass('d-none');
        $('#p_si').removeClass('d-none');
        $('#p_b').removeClass('d-none');
        $('#p_cmplx').addClass('d-none');

        $('#mixer-cmplx').addClass('d-none');
        $('#conc-cmplx').addClass('d-none');
        $('#grams_micro_up').removeClass('d-none');
        $('#id_fe').prop("disabled", false);
        $('#id_mn').prop("disabled", false);
        $('#id_zn').prop("disabled", false);
        $('#id_cu').prop("disabled", false);
        $('#id_mo').prop("disabled", false);
        $('#id_co').prop("disabled", false);
        $('#id_si').prop("disabled", false);
        $('#id_si').prop("disabled", false);

    }

    if (data.pp.micro_calc_mode == 'b') {


        $('#id_gfe').addClass('d-none');
        $('#row-fe_2').addClass('d-none');
        $('#row-fe_3').addClass('d-none');

        $('#conc-fe_2').addClass('d-none');
        $('#conc-fe_3').addClass('d-none');


        $('#id_gmn').addClass('d-none');
        $('#id_gzn').addClass('d-none');
        $('#id_gcu').addClass('d-none');
        $('#id_gmo').addClass('d-none');
        $('#id_gco').addClass('d-none');
        $('#id_gsi').addClass('d-none');
        $('#id_gb').addClass('d-none');

        $('#mixer-fe').addClass('d-none');
        $('#mixer-fe_2').addClass('d-none');
        $('#mixer-fe_3').addClass('d-none');
        $('#mixer-mn').addClass('d-none');
        $('#mixer-zn').addClass('d-none');
        $('#mixer-cu').addClass('d-none');
        $('#mixer-mo').addClass('d-none');
        $('#mixer-co').addClass('d-none');
        $('#mixer-si').addClass('d-none');
        $('#mixer-b').addClass('d-none');


        $('#p_fe').addClass('d-none');
        $('#p_mn').addClass('d-none');
        $('#p_zn').addClass('d-none');
        $('#p_cu').addClass('d-none');
        $('#p_mo').addClass('d-none');
        $('#p_co').addClass('d-none');
        $('#p_si').addClass('d-none');
        $('#p_b').addClass('d-none');
        $('#p_cmplx').removeClass('d-none');


        $('#conc-fe').addClass('d-none');
        $('#conc-mn').addClass('d-none');
        $('#conc-zn').addClass('d-none');
        $('#conc-cu').addClass('d-none');
        $('#conc-mo').addClass('d-none');
        $('#conc-co').addClass('d-none');
        $('#conc-si').addClass('d-none');
        $('#conc-b').addClass('d-none');


        $('#conc-cmplx').removeClass('d-none');
        $('#mixer-cmplx').removeClass('d-none');
        $('#grams_micro_up').addClass('d-none');
        $('#id_weight_micro').prop("disabled", false);


        $('#id_fe').prop("disabled", true);
        $('#id_mn').prop("disabled", true);
        $('#id_zn').prop("disabled", true);
        $('#id_cu').prop("disabled", true);
        $('#id_mo').prop("disabled", true);
        $('#id_co').prop("disabled", true);
        $('#id_si').prop("disabled", true);
    }

    for (i in data.pp) {


        if (i == 'calc_mode' || i == 'micro_calc_mode') {
            $("#id_" + i + "option[value=" + data.pp[i] + "]").prop('selected', true);
        } else if (i == 'mixer_btn_link') {

            $("#id_" + i).attr("href", data.pp[i]);
        } else {

            $('[id=id_' + i).each(function () {

                let t = $(this);

                t.val(data.pp[i]);
                t.text(data.pp[i]);

            });


        }
    }

    for (i in data.pp.errors) {


        if (data.pp.errors[i] == true) {

            $("#id_" + i).addClass('text-danger');
        } else {
            $("#id_" + i).removeClass('text-danger');
        }
    }

    for (i in data.pp.warnings) {


        if (data.pp.warnings[i] == true) {

            $("#id_" + i).addClass('text-warning');
        } else {
            $("#id_" + i).removeClass('text-warning');
        }
    }

    $("#id_litres2").text(data.pp.litres);


    calc_profile_chart_common.data.datasets = [{
        data: data.pp.graph_elements_macro_vals[0],
        labels: calc_macro_labels
    },
        {data: data.pp.graph_elements_macro_vals[1], labels: calc_micro_labels_fe_b_mn},
        {data: data.pp.graph_elements_macro_vals[2], labels: calc_micro_labels},
    ]

    calc_profile_chart_common.update();

    ['cano3', 'kno3', 'nh4no3', 'mgso4', 'kh2po4', 'k2so4', 'mgno3', 'cacl2'].forEach(function (value, index, array) {
        let tt = $("#id_" + value);
        if (tt.val() < 0) {
            tt.addClass('text-danger');
        } else {
            tt.removeClass('text-danger');
        }
    })

    checkAndAddClass(document.getElementById('id_lvolb'), '-');
    checkAndAddClass(document.getElementById('id_lvola'), '-');
    hpg.compareFieldsWithDOM();
    return true;
};


function updateMicroCalcMode(isChecked) {

    const calcModeValue = isChecked ? 'b' : 'u';  // Определяем значение в зависимости от состояния чекбокса
    document.getElementById('id_micro_calc_mode').value = calcModeValue;  // Обновляем скрытое поле формы


    // Обновляем классы для подсветки выбранного элемента
    if (isChecked) {
        document.getElementById('micro_c_u').classList.remove('text-danger');
        document.getElementById('micro_c_с').classList.add('text-danger');
    } else {
        document.getElementById('micro_c_с').classList.remove('text-danger');
        document.getElementById('micro_c_u').classList.add('text-danger');
    }
    console.debug("calcModeValue", calcModeValue);

    hpg.micro_calc_mode = calcModeValue;
    hpg.recalc("micro_calc_mode", calcModeValue);


}

function precalc(element) {

    out_list = ['cano3', 'kno3', 'nh4no3', 'mgso4', 'kh2po4', 'k2so4', 'mgno3', 'cacl2',
        'cano3_ca', 'cano3_no3', 'cano3_nh4', 'kno3_k', 'kno3_no3', 'nh4no3_nh4', 'nh4no3_no3', 'mgso4_mg',
        'mgso4_s', 'kh2po4_k', 'kh2po4_p', 'k2so4_k', 'k2so4_s', 'mgno3_mg', 'mgno3_no3', 'cacl2_ca', 'cacl2_cl',
        'n', 'no3', 'nh4', 'p', 'k', 'ca', 'mg', 's', 'cl', 'fe', 'mn', 'b', 'zn', 'cu', 'mo', 'co', 'si',
        'gfe', 'gmn', 'gb', 'gzn', 'gcu', 'gmo', 'gco', 'gsi', 'dfe', 'dmn', 'db', 'dzn', 'dcu', 'dmo', 'dco', 'dsi',
        'taml', 'tbml', 'gml_fe', 'gml_mn', 'gml_b', 'gml_zn', 'gml_cu', 'gml_mo', 'gml_co',
        'gml_si', 'gml_cano3', 'gml_kno3', 'gml_nh4no3', 'gml_mgno3', 'gml_mgso4', 'gml_k2so4',
        'gml_kh2po4', 'gml_cacl2', 'gml_cmplx', 'gl_fe', 'gl_mn', 'gl_b', 'gl_zn',
        'gl_cu', 'gl_mo', 'gl_co', 'gl_si', 'gl_cano3', 'gl_kno3', 'gl_nh4no3', 'gl_mgno3',
        'gl_mgso4', 'gl_k2so4', 'gl_kh2po4', 'gl_cacl2', 'gl_cmplx', 'ml_cano3', 'gg_cano3',
        'ml_kno3', 'gg_kno3', 'ml_nh4no3', 'gg_nh4no3', 'ml_mgno3', 'gg_mgno3', 'ml_cacl2',
        'gg_cacl2', 'ml_mgso4', 'ml_kh2po4', 'ml_k2so4', 'ml_fe', 'ml_mn', 'ml_b', 'ml_zn',
        'ml_cu', 'ml_mo', 'ml_co', 'ml_si', 'ml_cmplx', 'gg_mgso4', 'gg_kh2po4', 'gg_k2so4',
        'gg_fe', 'gg_mn', 'gg_b', 'gg_zn', 'gg_cu', 'gg_mo', 'gg_co', 'gg_si', 'gg_cmplx', 'ec',
        'ca_0', 'cl_0', 'ec_0', 'k_0', 'mg_0', 'n_0', 'nh4_0', 'no3_0', 'p_0', 's_0', 'v_0',
        'ca_1', 'cl_1', 'ec_1', 'k_1', 'mg_1', 'n_1', 'nh4_1', 'no3_1', 'p_1', 's_1', 'v_1',
        'ca_2', 'cl_2', 'ec_2', 'k_2', 'mg_2', 'n_2', 'nh4_2', 'no3_2', 'p_2', 's_2', 'v_2',
        'ca_k', 'cl_k', 'ec_k', 'k_k', 'mg_k', 'n_k', 'nh4_k', 'no3_k', 'p_k', 's_k', 'v_k', 'mixer_ip',
        'mixer_system_number', 'nh4_nh3_ratio', 'system_type', 'substrate',
        'p_cano3', 'p_kno3', 'p_nh4no3', 'p_mgso4', 'p_kh2po4', 'p_k2so4', 'p_mgno3', 'p_cacl2', 'p_fe', 'p_mn',
        'p_b', 'p_zn', 'p_cu', 'p_mo', 'p_co', 'p_si', 'p_cmplx', 'v_micro', 'micro_litres',
        'dfe_2', 'gfe_2', 'dfe_3', 'gfe_3', 'gl_fe_2', 'gl_fe_3', 'gml_fe_2', 'gml_fe_3',
        'mono_concentrate_v_micro', 'mono_concentrate_v', 'saved_mono_concentrate_v', 'saved_mono_concentrate_v_micro'
    ];
    let name = $(element.target).attr('name');
    let value = $(element.target).val();

    hpg['id_npk_formula'] = $("#id_npk_formula").val();
    hpg['litres'] = $("#id_litres").val();
    hpg[name] = value;
    hpg['micro_calc_mode'] = $("#id_micro_calc_mode").val();
    hpg['calc_mode'] = $("#id_calc_mode").val();
    hpg.recalc(name, value);
    hpg.toJSON();
    hpg.setDOMFromFields();


    if ($('#send_to_server_switch').is(':checked')) {
        let i;
        let dicts = {};
        dicts['pushed_element'] = $(element.target).attr('name');
        dicts['calc_mode'] = $("#id_calc_mode").val();
        dicts['micro_calc_mode'] = $("#id_micro_calc_mode").val();
        dicts['litres'] = $("#id_litres").val();
        dicts['micro_conc_caption'] = "Расчет концентрата для микро на " + $("#micro_litres").val() + "л";
        dicts['id_npk_formula'] = $("#id_npk_formula").val();
        dicts['id_npk_magazine'] = $("#id_npk_magazine").val();
        dicts['nh4_nh3_ratio'] = $("#id_nh4_nh3_ratio").val();
        dicts['mixer_id'] = $('select[id=id_mixer] option').filter(':selected').val();


        for (i = 0; i < out_list.length; ++i) {
            let t = $('#id_' + out_list[i]);

            dicts[out_list[i]] = t.val();
        }
        dicts[$(element.target).attr('name')] = $(element.target).val();
        console.debug(dicts[$(element.target).attr('name')]);

        $.ajax({
            type: "POST",
            method: "POST",
            queue: true,
            url: recalc_url,
            data: JSON.stringify(dicts),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: recalc,
            error: function (errMsg) {
                alert('Ошибка');
            }
        });
    }


    return true;
};


$(document).ready(function () {


    $('.precalc').on('change', precalc);

    $(".precalc").keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
    $('a.corr').click(function (e) {
        e.preventDefault()
        let n = $(this).data('n');
        let c_fields = ['n', 'no3', 'nh4', 'p', 'k', 'ca', 'mg', 's', 'cl', 'ec',];
        for (const f in c_fields) {
            let t = c_fields[f];
            $("#id_" + t + "_" + n).val($("#id_" + t).val());
            hpg.recalc(t + "_" + n, $("#id_" + t).val())

        }
        precalc(e);

    });
    $('a.raschet').click(function (e) {
        e.preventDefault();
        let n = $(this).data('n');
        let c_fields = ['n', 'no3', 'nh4', 'p', 'k', 'ca', 'mg', 's', 'cl', 'ec',];
        for (const f in c_fields) {
            let t = c_fields[f];
            console.debug($("#id_" + t), $("#id_" + t + "_" + n).val());
            $("#id_" + t).val($("#id_" + t + "_" + n).val());
            hpg.recalc(t, $("#id_" + t + "_" + n).val())


        }
        precalc(e);

    });


    hpg.setFieldsFromDOM();

    // Extract query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const profile = urlParams.get('profile'); // Get the value of 'profile
    hpg.recalc();
    if (profile) {
        console.log("profile_str", profile);
        // Assuming you have a function to handle recalculation based on the profile
        hpg.recalc("profile_str", profile);
        console.log("hpg", hpg.get_profile_str());
        hpg.setDOMFromFields();
        $("#id_get_profile_str").val(profile);
    }
    PageIntro.init(options);

});
