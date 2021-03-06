import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
  @font-face {
    font-family: "quran-common";
    src: url("./fonts/quran-common/quran_common.ttf") format("truetype");
  }

  @font-face {
    font-family: "IndoPak";
    src: url("./fonts/indoPak/_PDMS_Saleem_QuranFont.ttf") format("truetype");
  }



  @font-face {
    font-family: "Madani";
    src: url("./fonts/madani/KFGQPC.otf") format("opentype");
  }

  @font-face {
    font-family: 'Uthmani';
    src: url(./fonts/QCF-uthmani/QCF_P064.ttf);
  }

  @font-face {
    font-family: "SFProText-Regular";
    src: local("SFProText Regular"), local("SFProText-Regular"),
      local("SF Pro Text Regular"),
      url("./fonts/SFPro/SFProText-Regular.eot?#iefix") format("embedded-opentype"),
      url("./fonts/SFPro/SFProText-Regular.woff") format("woff"),
      url("./fonts/SFPro/SFProText-Regular.ttf") format("truetype"),
      url("./fonts/SFPro/SFProText-Regular.svg#SFProText-Regular") format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
  font-family: "SFProText-Medium";
  src: local("SFProText Medium"), local("SFProText-Medium"),
    local("SF Pro Text Medium"), url("./fonts/SFPro/SFProText-Medium.woff2"),
    url("./fonts/SFPro/SFProText-Medium.eot?#iefix") format("embedded-opentype"),
    url("./fonts/SFPro/SFProText-Medium.woff") format("woff"),
    url("./fonts/SFPro/SFProText-Medium.ttf") format("truetype"),
    url("./fonts/SFPro/SFProText-Medium.svg#SFProText-Medium") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  }

  @font-face {
  font-family: "SFProText-Bold";
  src: local("SFProText Bold"), local("SFProText-Bold"),
    local("SF Pro Text Bold"), url("./fonts/SFPro//SFProText-Bold.woff2"),
    url("./fonts/SFPro/SFProText-Bold.eot?#iefix") format("embedded-opentype"),
    url("./fonts/SFPro/SFProText-Bold.woff") format("woff"),
    url("./fonts/SFPro/SFProText-Bold.ttf") format("truetype"),
    url("./fonts/SFPro/SFProText-Bold.svg#SFProText-Bold") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  }

  @font-face {
    font-family: "bismillah";
    src: url("./fonts/bismillah/bismillah.woff2"),
      url("./fonts/bismillah/bismillah.eot?#iefix") format("embedded-opentype"),
      url("./fonts/bismillah/bismillah.woff") format("woff"),
      url("./fonts/bismillah/bismillah.ttf") format("truetype"),
      url("./fonts/bismillah/bismillah.svg#bismillah") format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
  font-family: "surahnames";
  src: url("./fonts/surah-names/surah-names.eot");
  src: url("./fonts/surah-names/surah-names.eot#iefix")
      format("embedded-opentype"),
    url("./fonts/surah-names/surah-names.ttf") format("truetype"),
    url("./fonts/surah-names/surah-names.woff") format("woff"),
    url("./fonts/surah-names/surah-names.svg#surah-names") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  }

  @font-face {
  font-family: "bismillah";
  src: url("./fonts/bismillah/bismillah.eot");
  src: url("./fonts/bismillah/bismillah.eot#iefix") format("embedded-opentype"),
    url("./fonts/bismillah/bismillah.ttf") format("truetype"),
    url("./fonts/bismillah/bismillah.woff") format("woff"),
    url("./fonts/bismillah/bismillah.svg#bismillah") format("svg");
  font-weight: normal;
  font-style: normal;
  }


/* uthmani fonts */
  @font-face {
    font-family: p1;
    src: url("/fonts/QCF-uthmani/QCF_P001.ttf") format("truetype");
  }

  @font-face {
  font-family: p2;
  src: url("/fonts/QCF-uthmani/QCF_P002.ttf") format("truetype");
  }

  @font-face {
  font-family: p3;
  src: url("/fonts/QCF-uthmani/QCF_P003.ttf") format("truetype");
  }

  @font-face {
  font-family: p4;
  src: url("/fonts/QCF-uthmani/QCF_P004.ttf") format("truetype");
  }

  @font-face {
  font-family: p5;
  src: url("/fonts/QCF-uthmani/QCF_P005.ttf") format("truetype");
  }

  @font-face {
  font-family: p6;
  src: url("/fonts/QCF-uthmani/QCF_P006.ttf") format("truetype");
  }

  @font-face {
  font-family: p7;
  src: url("/fonts/QCF-uthmani/QCF_P007.ttf") format("truetype");
  }

  @font-face {
  font-family: p8;
  src: url("/fonts/QCF-uthmani/QCF_P008.ttf") format("truetype");
  }

  @font-face {
  font-family: p9;
  src: url("/fonts/QCF-uthmani/QCF_P009.ttf") format("truetype");
  }

  @font-face {
  font-family: p10;
  src: url("/fonts/QCF-uthmani/QCF_P010.ttf") format("truetype");
  }

  @font-face {
  font-family: p11;
  src: url("/fonts/QCF-uthmani/QCF_P011.ttf") format("truetype");
  }

  @font-face {
  font-family: p12;
  src: url("/fonts/QCF-uthmani/QCF_P012.ttf") format("truetype");
  }

  @font-face {
  font-family: p13;
  src: url("/fonts/QCF-uthmani/QCF_P013.ttf") format("truetype");
  }

  @font-face {
  font-family: p14;
  src: url("/fonts/QCF-uthmani/QCF_P014.ttf") format("truetype");
  }

  @font-face {
  font-family: p15;
  src: url("/fonts/QCF-uthmani/QCF_P015.ttf") format("truetype");
  }

  @font-face {
  font-family: p16;
  src: url("/fonts/QCF-uthmani/QCF_P016.ttf") format("truetype");
  }

  @font-face {
  font-family: p17;
  src: url("/fonts/QCF-uthmani/QCF_P017.ttf") format("truetype");
  }

  @font-face {
  font-family: p18;
  src: url("/fonts/QCF-uthmani/QCF_P018.ttf") format("truetype");
  }

  @font-face {
  font-family: p19;
  src: url("/fonts/QCF-uthmani/QCF_P019.ttf") format("truetype");
  }

  @font-face {
  font-family: p20;
  src: url("/fonts/QCF-uthmani/QCF_P020.ttf") format("truetype");
  }

  @font-face {
  font-family: p21;
  src: url("/fonts/QCF-uthmani/QCF_P021.ttf") format("truetype");
}

  @font-face {
  font-family: p22;
  src: url("/fonts/QCF-uthmani/QCF_P022.ttf") format("truetype");
}

  @font-face {
  font-family: p23;
  src: url("/fonts/QCF-uthmani/QCF_P023.ttf") format("truetype");
}

  @font-face {
  font-family: p24;
  src: url("/fonts/QCF-uthmani/QCF_P024.ttf") format("truetype");
}

  @font-face {
  font-family: p25;
  src: url("/fonts/QCF-uthmani/QCF_P025.ttf") format("truetype");
}

  @font-face {
  font-family: p26;
  src: url("/fonts/QCF-uthmani/QCF_P026.ttf") format("truetype");
}

  @font-face {
  font-family: p27;
  src: url("/fonts/QCF-uthmani/QCF_P027.ttf") format("truetype");
}

  @font-face {
  font-family: p28;
  src: url("/fonts/QCF-uthmani/QCF_P028.ttf") format("truetype");
}

  @font-face {
  font-family: p29;
  src: url("/fonts/QCF-uthmani/QCF_P029.ttf") format("truetype");
}

  @font-face {
  font-family: p30;
  src: url("/fonts/QCF-uthmani/QCF_P030.ttf") format("truetype");
}

  @font-face {
  font-family: p31;
  src: url("/fonts/QCF-uthmani/QCF_P031.ttf") format("truetype");
}

  @font-face {
  font-family: p32;
  src: url("/fonts/QCF-uthmani/QCF_P032.ttf") format("truetype");
}

  @font-face {
  font-family: p33;
  src: url("/fonts/QCF-uthmani/QCF_P033.ttf") format("truetype");
}

  @font-face {
  font-family: p34;
  src: url("/fonts/QCF-uthmani/QCF_P034.ttf") format("truetype");
}

  @font-face {
  font-family: p35;
  src: url("/fonts/QCF-uthmani/QCF_P035.ttf") format("truetype");
}

  @font-face {
  font-family: p36;
  src: url("/fonts/QCF-uthmani/QCF_P036.ttf") format("truetype");
}

  @font-face {
  font-family: p37;
  src: url("/fonts/QCF-uthmani/QCF_P037.ttf") format("truetype");
}

  @font-face {
  font-family: p38;
  src: url("/fonts/QCF-uthmani/QCF_P038.ttf") format("truetype");
}

  @font-face {
  font-family: p39;
  src: url("/fonts/QCF-uthmani/QCF_P039.ttf") format("truetype");
}

  @font-face {
  font-family: p40;
  src: url("/fonts/QCF-uthmani/QCF_P040.ttf") format("truetype");
}

  @font-face {
  font-family: p41;
  src: url("/fonts/QCF-uthmani/QCF_P041.ttf") format("truetype");
}

  @font-face {
  font-family: p42;
  src: url("/fonts/QCF-uthmani/QCF_P042.ttf") format("truetype");
}

  @font-face {
  font-family: p43;
  src: url("/fonts/QCF-uthmani/QCF_P043.ttf") format("truetype");
}

  @font-face {
  font-family: p44;
  src: url("/fonts/QCF-uthmani/QCF_P044.ttf") format("truetype");
}

  @font-face {
  font-family: p45;
  src: url("/fonts/QCF-uthmani/QCF_P045.ttf") format("truetype");
}

  @font-face {
  font-family: p46;
  src: url("/fonts/QCF-uthmani/QCF_P046.ttf") format("truetype");
}

  @font-face {
  font-family: p47;
  src: url("/fonts/QCF-uthmani/QCF_P047.ttf") format("truetype");
}

  @font-face {
  font-family: p48;
  src: url("/fonts/QCF-uthmani/QCF_P048.ttf") format("truetype");
}

  @font-face {
  font-family: p49;
  src: url("/fonts/QCF-uthmani/QCF_P049.ttf") format("truetype");
}

  @font-face {
  font-family: p50;
  src: url("/fonts/QCF-uthmani/QCF_P050.ttf") format("truetype");
}

  @font-face {
  font-family: p51;
  src: url("/fonts/QCF-uthmani/QCF_P051.ttf") format("truetype");
}

  @font-face {
  font-family: p52;
  src: url("/fonts/QCF-uthmani/QCF_P052.ttf") format("truetype");
}

  @font-face {
  font-family: p53;
  src: url("/fonts/QCF-uthmani/QCF_P053.ttf") format("truetype");
}

  @font-face {
  font-family: p54;
  src: url("/fonts/QCF-uthmani/QCF_P054.ttf") format("truetype");
}

  @font-face {
  font-family: p55;
  src: url("/fonts/QCF-uthmani/QCF_P055.ttf") format("truetype");
}

  @font-face {
  font-family: p56;
  src: url("/fonts/QCF-uthmani/QCF_P056.ttf") format("truetype");
}

  @font-face {
  font-family: p57;
  src: url("/fonts/QCF-uthmani/QCF_P057.ttf") format("truetype");
}

  @font-face {
  font-family: p58;
  src: url("/fonts/QCF-uthmani/QCF_P058.ttf") format("truetype");
}

  @font-face {
  font-family: p59;
  src: url("/fonts/QCF-uthmani/QCF_P059.ttf") format("truetype");
}

  @font-face {
  font-family: p60;
  src: url("/fonts/QCF-uthmani/QCF_P060.ttf") format("truetype");
}

  @font-face {
  font-family: p61;
  src: url("/fonts/QCF-uthmani/QCF_P061.ttf") format("truetype");
}

  @font-face {
  font-family: p62;
  src: url("/fonts/QCF-uthmani/QCF_P062.ttf") format("truetype");
}

  @font-face {
  font-family: p63;
  src: url("/fonts/QCF-uthmani/QCF_P063.ttf") format("truetype");
}

  @font-face {
  font-family: p64;
  src: url("/fonts/QCF-uthmani/QCF_P064.ttf") format("truetype");
}

  @font-face {
  font-family: p65;
  src: url("/fonts/QCF-uthmani/QCF_P065.ttf") format("truetype");
}

  @font-face {
  font-family: p66;
  src: url("/fonts/QCF-uthmani/QCF_P066.ttf") format("truetype");
}

  @font-face {
  font-family: p67;
  src: url("/fonts/QCF-uthmani/QCF_P067.ttf") format("truetype");
}

  @font-face {
  font-family: p68;
  src: url("/fonts/QCF-uthmani/QCF_P068.ttf") format("truetype");
}

  @font-face {
  font-family: p69;
  src: url("/fonts/QCF-uthmani/QCF_P069.ttf") format("truetype");
}

  @font-face {
  font-family: p70;
  src: url("/fonts/QCF-uthmani/QCF_P070.ttf") format("truetype");
}

  @font-face {
  font-family: p71;
  src: url("/fonts/QCF-uthmani/QCF_P071.ttf") format("truetype");
}

  @font-face {
  font-family: p72;
  src: url("/fonts/QCF-uthmani/QCF_P072.ttf") format("truetype");
}

  @font-face {
  font-family: p73;
  src: url("/fonts/QCF-uthmani/QCF_P073.ttf") format("truetype");
}

  @font-face {
  font-family: p74;
  src: url("/fonts/QCF-uthmani/QCF_P074.ttf") format("truetype");
}

  @font-face {
  font-family: p75;
  src: url("/fonts/QCF-uthmani/QCF_P075.ttf") format("truetype");
}

  @font-face {
  font-family: p76;
  src: url("/fonts/QCF-uthmani/QCF_P076.ttf") format("truetype");
}

  @font-face {
  font-family: p77;
  src: url("/fonts/QCF-uthmani/QCF_P077.ttf") format("truetype");
}

  @font-face {
  font-family: p78;
  src: url("/fonts/QCF-uthmani/QCF_P078.ttf") format("truetype");
}

  @font-face {
  font-family: p79;
  src: url("/fonts/QCF-uthmani/QCF_P079.ttf") format("truetype");
}

  @font-face {
  font-family: p80;
  src: url("/fonts/QCF-uthmani/QCF_P080.ttf") format("truetype");
}

  @font-face {
  font-family: p81;
  src: url("/fonts/QCF-uthmani/QCF_P081.ttf") format("truetype");
}

  @font-face {
  font-family: p82;
  src: url("/fonts/QCF-uthmani/QCF_P082.ttf") format("truetype");
}

  @font-face {
  font-family: p83;
  src: url("/fonts/QCF-uthmani/QCF_P083.ttf") format("truetype");
}

  @font-face {
  font-family: p84;
  src: url("/fonts/QCF-uthmani/QCF_P084.ttf") format("truetype");
}

  @font-face {
  font-family: p85;
  src: url("/fonts/QCF-uthmani/QCF_P085.ttf") format("truetype");
}

  @font-face {
  font-family: p86;
  src: url("/fonts/QCF-uthmani/QCF_P086.ttf") format("truetype");
}

  @font-face {
  font-family: p87;
  src: url("/fonts/QCF-uthmani/QCF_P087.ttf") format("truetype");
}

  @font-face {
  font-family: p88;
  src: url("/fonts/QCF-uthmani/QCF_P088.ttf") format("truetype");
}

  @font-face {
  font-family: p89;
  src: url("/fonts/QCF-uthmani/QCF_P089.ttf") format("truetype");
}

  @font-face {
  font-family: p90;
  src: url("/fonts/QCF-uthmani/QCF_P090.ttf") format("truetype");
}

  @font-face {
  font-family: p91;
  src: url("/fonts/QCF-uthmani/QCF_P091.ttf") format("truetype");
}

  @font-face {
  font-family: p92;
  src: url("/fonts/QCF-uthmani/QCF_P092.ttf") format("truetype");
}

  @font-face {
  font-family: p93;
  src: url("/fonts/QCF-uthmani/QCF_P093.ttf") format("truetype");
}

  @font-face {
  font-family: p94;
  src: url("/fonts/QCF-uthmani/QCF_P094.ttf") format("truetype");
}

  @font-face {
  font-family: p95;
  src: url("/fonts/QCF-uthmani/QCF_P095.ttf") format("truetype");
}

  @font-face {
  font-family: p96;
  src: url("/fonts/QCF-uthmani/QCF_P096.ttf") format("truetype");
}

  @font-face {
  font-family: p97;
  src: url("/fonts/QCF-uthmani/QCF_P097.ttf") format("truetype");
}

  @font-face {
  font-family: p98;
  src: url("/fonts/QCF-uthmani/QCF_P098.ttf") format("truetype");
}

  @font-face {
  font-family: p99;
  src: url("/fonts/QCF-uthmani/QCF_P099.ttf") format("truetype");
}

  @font-face {
  font-family: p100;
  src: url("/fonts/QCF-uthmani/QCF_P100.ttf") format("truetype");
}

  @font-face {
  font-family: p101;
  src: url("/fonts/QCF-uthmani/QCF_P101.ttf") format("truetype");
}

  @font-face {
  font-family: p102;
  src: url("/fonts/QCF-uthmani/QCF_P102.ttf") format("truetype");
}

  @font-face {
  font-family: p103;
  src: url("/fonts/QCF-uthmani/QCF_P103.ttf") format("truetype");
}

  @font-face {
  font-family: p104;
  src: url("/fonts/QCF-uthmani/QCF_P104.ttf") format("truetype");
}

  @font-face {
  font-family: p105;
  src: url("/fonts/QCF-uthmani/QCF_P105.ttf") format("truetype");
}

  @font-face {
  font-family: p106;
  src: url("/fonts/QCF-uthmani/QCF_P106.ttf") format("truetype");
}

  @font-face {
  font-family: p107;
  src: url("/fonts/QCF-uthmani/QCF_P107.ttf") format("truetype");
}

  @font-face {
  font-family: p108;
  src: url("/fonts/QCF-uthmani/QCF_P108.ttf") format("truetype");
}

  @font-face {
  font-family: p109;
  src: url("/fonts/QCF-uthmani/QCF_P109.ttf") format("truetype");
}

  @font-face {
  font-family: p110;
  src: url("/fonts/QCF-uthmani/QCF_P110.ttf") format("truetype");
}

  @font-face {
  font-family: p111;
  src: url("/fonts/QCF-uthmani/QCF_P111.ttf") format("truetype");
}

  @font-face {
  font-family: p112;
  src: url("/fonts/QCF-uthmani/QCF_P112.ttf") format("truetype");
}

  @font-face {
  font-family: p113;
  src: url("/fonts/QCF-uthmani/QCF_P113.ttf") format("truetype");
}

  @font-face {
  font-family: p114;
  src: url("/fonts/QCF-uthmani/QCF_P114.ttf") format("truetype");
}

  @font-face {
  font-family: p115;
  src: url("/fonts/QCF-uthmani/QCF_P115.ttf") format("truetype");
}

  @font-face {
  font-family: p116;
  src: url("/fonts/QCF-uthmani/QCF_P116.ttf") format("truetype");
}

  @font-face {
  font-family: p117;
  src: url("/fonts/QCF-uthmani/QCF_P117.ttf") format("truetype");
}

  @font-face {
  font-family: p118;
  src: url("/fonts/QCF-uthmani/QCF_P118.ttf") format("truetype");
}

  @font-face {
  font-family: p119;
  src: url("/fonts/QCF-uthmani/QCF_P119.ttf") format("truetype");
}

  @font-face {
  font-family: p120;
  src: url("/fonts/QCF-uthmani/QCF_P120.ttf") format("truetype");
}

  @font-face {
  font-family: p121;
  src: url("/fonts/QCF-uthmani/QCF_P121.ttf") format("truetype");
}

  @font-face {
  font-family: p122;
  src: url("/fonts/QCF-uthmani/QCF_P122.ttf") format("truetype");
}

  @font-face {
  font-family: p123;
  src: url("/fonts/QCF-uthmani/QCF_P123.ttf") format("truetype");
}

  @font-face {
  font-family: p124;
  src: url("/fonts/QCF-uthmani/QCF_P124.ttf") format("truetype");
}

  @font-face {
  font-family: p125;
  src: url("/fonts/QCF-uthmani/QCF_P125.ttf") format("truetype");
}

  @font-face {
  font-family: p126;
  src: url("/fonts/QCF-uthmani/QCF_P126.ttf") format("truetype");
}

  @font-face {
  font-family: p127;
  src: url("/fonts/QCF-uthmani/QCF_P127.ttf") format("truetype");
}

  @font-face {
  font-family: p128;
  src: url("/fonts/QCF-uthmani/QCF_P128.ttf") format("truetype");
}

  @font-face {
  font-family: p129;
  src: url("/fonts/QCF-uthmani/QCF_P129.ttf") format("truetype");
}

  @font-face {
  font-family: p130;
  src: url("/fonts/QCF-uthmani/QCF_P130.ttf") format("truetype");
}

  @font-face {
  font-family: p131;
  src: url("/fonts/QCF-uthmani/QCF_P131.ttf") format("truetype");
}

  @font-face {
  font-family: p132;
  src: url("/fonts/QCF-uthmani/QCF_P132.ttf") format("truetype");
}

  @font-face {
  font-family: p133;
  src: url("/fonts/QCF-uthmani/QCF_P133.ttf") format("truetype");
}

  @font-face {
  font-family: p134;
  src: url("/fonts/QCF-uthmani/QCF_P134.ttf") format("truetype");
}

  @font-face {
  font-family: p135;
  src: url("/fonts/QCF-uthmani/QCF_P135.ttf") format("truetype");
}

  @font-face {
  font-family: p136;
  src: url("/fonts/QCF-uthmani/QCF_P136.ttf") format("truetype");
}

  @font-face {
  font-family: p137;
  src: url("/fonts/QCF-uthmani/QCF_P137.ttf") format("truetype");
}

  @font-face {
  font-family: p138;
  src: url("/fonts/QCF-uthmani/QCF_P138.ttf") format("truetype");
}

  @font-face {
  font-family: p139;
  src: url("/fonts/QCF-uthmani/QCF_P139.ttf") format("truetype");
}

  @font-face {
  font-family: p140;
  src: url("/fonts/QCF-uthmani/QCF_P140.ttf") format("truetype");
}

  @font-face {
  font-family: p141;
  src: url("/fonts/QCF-uthmani/QCF_P141.ttf") format("truetype");
}

  @font-face {
  font-family: p142;
  src: url("/fonts/QCF-uthmani/QCF_P142.ttf") format("truetype");
}

  @font-face {
  font-family: p143;
  src: url("/fonts/QCF-uthmani/QCF_P143.ttf") format("truetype");
}

  @font-face {
  font-family: p144;
  src: url("/fonts/QCF-uthmani/QCF_P144.ttf") format("truetype");
}

  @font-face {
  font-family: p145;
  src: url("/fonts/QCF-uthmani/QCF_P145.ttf") format("truetype");
}

  @font-face {
  font-family: p146;
  src: url("/fonts/QCF-uthmani/QCF_P146.ttf") format("truetype");
}

  @font-face {
  font-family: p147;
  src: url("/fonts/QCF-uthmani/QCF_P147.ttf") format("truetype");
}

  @font-face {
  font-family: p148;
  src: url("/fonts/QCF-uthmani/QCF_P148.ttf") format("truetype");
}

  @font-face {
  font-family: p149;
  src: url("/fonts/QCF-uthmani/QCF_P149.ttf") format("truetype");
}

  @font-face {
  font-family: p150;
  src: url("/fonts/QCF-uthmani/QCF_P150.ttf") format("truetype");
}

  @font-face {
  font-family: p151;
  src: url("/fonts/QCF-uthmani/QCF_P151.ttf") format("truetype");
}

  @font-face {
  font-family: p152;
  src: url("/fonts/QCF-uthmani/QCF_P152.ttf") format("truetype");
}

  @font-face {
  font-family: p153;
  src: url("/fonts/QCF-uthmani/QCF_P153.ttf") format("truetype");
}

  @font-face {
  font-family: p154;
  src: url("/fonts/QCF-uthmani/QCF_P154.ttf") format("truetype");
}

  @font-face {
  font-family: p155;
  src: url("/fonts/QCF-uthmani/QCF_P155.ttf") format("truetype");
}

  @font-face {
  font-family: p156;
  src: url("/fonts/QCF-uthmani/QCF_P156.ttf") format("truetype");
}

  @font-face {
  font-family: p157;
  src: url("/fonts/QCF-uthmani/QCF_P157.ttf") format("truetype");
}

  @font-face {
  font-family: p158;
  src: url("/fonts/QCF-uthmani/QCF_P158.ttf") format("truetype");
}

  @font-face {
  font-family: p159;
  src: url("/fonts/QCF-uthmani/QCF_P159.ttf") format("truetype");
}

  @font-face {
  font-family: p160;
  src: url("/fonts/QCF-uthmani/QCF_P160.ttf") format("truetype");
}

  @font-face {
  font-family: p161;
  src: url("/fonts/QCF-uthmani/QCF_P161.ttf") format("truetype");
}

  @font-face {
  font-family: p162;
  src: url("/fonts/QCF-uthmani/QCF_P162.ttf") format("truetype");
}

  @font-face {
  font-family: p163;
  src: url("/fonts/QCF-uthmani/QCF_P163.ttf") format("truetype");
}

  @font-face {
  font-family: p164;
  src: url("/fonts/QCF-uthmani/QCF_P164.ttf") format("truetype");
}

  @font-face {
  font-family: p165;
  src: url("/fonts/QCF-uthmani/QCF_P165.ttf") format("truetype");
}

  @font-face {
  font-family: p166;
  src: url("/fonts/QCF-uthmani/QCF_P166.ttf") format("truetype");
}

  @font-face {
  font-family: p167;
  src: url("/fonts/QCF-uthmani/QCF_P167.ttf") format("truetype");
}

  @font-face {
  font-family: p168;
  src: url("/fonts/QCF-uthmani/QCF_P168.ttf") format("truetype");
}

  @font-face {
  font-family: p169;
  src: url("/fonts/QCF-uthmani/QCF_P169.ttf") format("truetype");
}

  @font-face {
  font-family: p170;
  src: url("/fonts/QCF-uthmani/QCF_P170.ttf") format("truetype");
}

  @font-face {
  font-family: p171;
  src: url("/fonts/QCF-uthmani/QCF_P171.ttf") format("truetype");
}

  @font-face {
  font-family: p172;
  src: url("/fonts/QCF-uthmani/QCF_P172.ttf") format("truetype");
}

  @font-face {
  font-family: p173;
  src: url("/fonts/QCF-uthmani/QCF_P173.ttf") format("truetype");
}

  @font-face {
  font-family: p174;
  src: url("/fonts/QCF-uthmani/QCF_P174.ttf") format("truetype");
}

  @font-face {
  font-family: p175;
  src: url("/fonts/QCF-uthmani/QCF_P175.ttf") format("truetype");
}

  @font-face {
  font-family: p176;
  src: url("/fonts/QCF-uthmani/QCF_P176.ttf") format("truetype");
}

  @font-face {
  font-family: p177;
  src: url("/fonts/QCF-uthmani/QCF_P177.ttf") format("truetype");
}

  @font-face {
  font-family: p178;
  src: url("/fonts/QCF-uthmani/QCF_P178.ttf") format("truetype");
}

  @font-face {
  font-family: p179;
  src: url("/fonts/QCF-uthmani/QCF_P179.ttf") format("truetype");
}

  @font-face {
  font-family: p180;
  src: url("/fonts/QCF-uthmani/QCF_P180.ttf") format("truetype");
}

  @font-face {
  font-family: p181;
  src: url("/fonts/QCF-uthmani/QCF_P181.ttf") format("truetype");
}

  @font-face {
  font-family: p182;
  src: url("/fonts/QCF-uthmani/QCF_P182.ttf") format("truetype");
}

  @font-face {
  font-family: p183;
  src: url("/fonts/QCF-uthmani/QCF_P183.ttf") format("truetype");
}

  @font-face {
  font-family: p184;
  src: url("/fonts/QCF-uthmani/QCF_P184.ttf") format("truetype");
}

  @font-face {
  font-family: p185;
  src: url("/fonts/QCF-uthmani/QCF_P185.ttf") format("truetype");
}

  @font-face {
  font-family: p186;
  src: url("/fonts/QCF-uthmani/QCF_P186.ttf") format("truetype");
}

  @font-face {
  font-family: p187;
  src: url("/fonts/QCF-uthmani/QCF_P187.ttf") format("truetype");
}

  @font-face {
  font-family: p188;
  src: url("/fonts/QCF-uthmani/QCF_P188.ttf") format("truetype");
}

  @font-face {
  font-family: p189;
  src: url("/fonts/QCF-uthmani/QCF_P189.ttf") format("truetype");
}

  @font-face {
  font-family: p190;
  src: url("/fonts/QCF-uthmani/QCF_P190.ttf") format("truetype");
}

  @font-face {
  font-family: p191;
  src: url("/fonts/QCF-uthmani/QCF_P191.ttf") format("truetype");
}

  @font-face {
  font-family: p192;
  src: url("/fonts/QCF-uthmani/QCF_P192.ttf") format("truetype");
}

  @font-face {
  font-family: p193;
  src: url("/fonts/QCF-uthmani/QCF_P193.ttf") format("truetype");
}

  @font-face {
  font-family: p194;
  src: url("/fonts/QCF-uthmani/QCF_P194.ttf") format("truetype");
}

  @font-face {
  font-family: p195;
  src: url("/fonts/QCF-uthmani/QCF_P195.ttf") format("truetype");
}

  @font-face {
  font-family: p196;
  src: url("/fonts/QCF-uthmani/QCF_P196.ttf") format("truetype");
}

  @font-face {
  font-family: p197;
  src: url("/fonts/QCF-uthmani/QCF_P197.ttf") format("truetype");
}

  @font-face {
  font-family: p198;
  src: url("/fonts/QCF-uthmani/QCF_P198.ttf") format("truetype");
}

  @font-face {
  font-family: p199;
  src: url("/fonts/QCF-uthmani/QCF_P199.ttf") format("truetype");
}

  @font-face {
  font-family: p200;
  src: url("/fonts/QCF-uthmani/QCF_P200.ttf") format("truetype");
}

  @font-face {
  font-family: p201;
  src: url("/fonts/QCF-uthmani/QCF_P201.ttf") format("truetype");
}

  @font-face {
  font-family: p202;
  src: url("/fonts/QCF-uthmani/QCF_P202.ttf") format("truetype");
}

  @font-face {
  font-family: p203;
  src: url("/fonts/QCF-uthmani/QCF_P203.ttf") format("truetype");
}

  @font-face {
  font-family: p204;
  src: url("/fonts/QCF-uthmani/QCF_P204.ttf") format("truetype");
}

  @font-face {
  font-family: p205;
  src: url("/fonts/QCF-uthmani/QCF_P205.ttf") format("truetype");
}

  @font-face {
  font-family: p206;
  src: url("/fonts/QCF-uthmani/QCF_P206.ttf") format("truetype");
}

  @font-face {
  font-family: p207;
  src: url("/fonts/QCF-uthmani/QCF_P207.ttf") format("truetype");
}

  @font-face {
  font-family: p208;
  src: url("/fonts/QCF-uthmani/QCF_P208.ttf") format("truetype");
}

  @font-face {
  font-family: p209;
  src: url("/fonts/QCF-uthmani/QCF_P209.ttf") format("truetype");
}

  @font-face {
  font-family: p210;
  src: url("/fonts/QCF-uthmani/QCF_P210.ttf") format("truetype");
}

  @font-face {
  font-family: p211;
  src: url("/fonts/QCF-uthmani/QCF_P211.ttf") format("truetype");
}

  @font-face {
  font-family: p212;
  src: url("/fonts/QCF-uthmani/QCF_P212.ttf") format("truetype");
}

  @font-face {
  font-family: p213;
  src: url("/fonts/QCF-uthmani/QCF_P213.ttf") format("truetype");
}

  @font-face {
  font-family: p214;
  src: url("/fonts/QCF-uthmani/QCF_P214.ttf") format("truetype");
}

  @font-face {
  font-family: p215;
  src: url("/fonts/QCF-uthmani/QCF_P215.ttf") format("truetype");
}

  @font-face {
  font-family: p216;
  src: url("/fonts/QCF-uthmani/QCF_P216.ttf") format("truetype");
}

  @font-face {
  font-family: p217;
  src: url("/fonts/QCF-uthmani/QCF_P217.ttf") format("truetype");
}

  @font-face {
  font-family: p218;
  src: url("/fonts/QCF-uthmani/QCF_P218.ttf") format("truetype");
}

  @font-face {
  font-family: p219;
  src: url("/fonts/QCF-uthmani/QCF_P219.ttf") format("truetype");
}

  @font-face {
  font-family: p220;
  src: url("/fonts/QCF-uthmani/QCF_P220.ttf") format("truetype");
}

  @font-face {
  font-family: p221;
  src: url("/fonts/QCF-uthmani/QCF_P221.ttf") format("truetype");
}

  @font-face {
  font-family: p222;
  src: url("/fonts/QCF-uthmani/QCF_P222.ttf") format("truetype");
}

  @font-face {
  font-family: p223;
  src: url("/fonts/QCF-uthmani/QCF_P223.ttf") format("truetype");
}

  @font-face {
  font-family: p224;
  src: url("/fonts/QCF-uthmani/QCF_P224.ttf") format("truetype");
}

  @font-face {
  font-family: p225;
  src: url("/fonts/QCF-uthmani/QCF_P225.ttf") format("truetype");
}

  @font-face {
  font-family: p226;
  src: url("/fonts/QCF-uthmani/QCF_P226.ttf") format("truetype");
}

  @font-face {
  font-family: p227;
  src: url("/fonts/QCF-uthmani/QCF_P227.ttf") format("truetype");
}

  @font-face {
  font-family: p228;
  src: url("/fonts/QCF-uthmani/QCF_P228.ttf") format("truetype");
}

  @font-face {
  font-family: p229;
  src: url("/fonts/QCF-uthmani/QCF_P229.ttf") format("truetype");
}

  @font-face {
  font-family: p230;
  src: url("/fonts/QCF-uthmani/QCF_P230.ttf") format("truetype");
}

  @font-face {
  font-family: p231;
  src: url("/fonts/QCF-uthmani/QCF_P231.ttf") format("truetype");
}

  @font-face {
  font-family: p232;
  src: url("/fonts/QCF-uthmani/QCF_P232.ttf") format("truetype");
}

  @font-face {
  font-family: p233;
  src: url("/fonts/QCF-uthmani/QCF_P233.ttf") format("truetype");
}

  @font-face {
  font-family: p234;
  src: url("/fonts/QCF-uthmani/QCF_P234.ttf") format("truetype");
}

  @font-face {
  font-family: p235;
  src: url("/fonts/QCF-uthmani/QCF_P235.ttf") format("truetype");
}

  @font-face {
  font-family: p236;
  src: url("/fonts/QCF-uthmani/QCF_P236.ttf") format("truetype");
}

  @font-face {
  font-family: p237;
  src: url("/fonts/QCF-uthmani/QCF_P237.ttf") format("truetype");
}

  @font-face {
  font-family: p238;
  src: url("/fonts/QCF-uthmani/QCF_P238.ttf") format("truetype");
}

  @font-face {
  font-family: p239;
  src: url("/fonts/QCF-uthmani/QCF_P239.ttf") format("truetype");
}

  @font-face {
  font-family: p240;
  src: url("/fonts/QCF-uthmani/QCF_P240.ttf") format("truetype");
}

  @font-face {
  font-family: p241;
  src: url("/fonts/QCF-uthmani/QCF_P241.ttf") format("truetype");
}

  @font-face {
  font-family: p242;
  src: url("/fonts/QCF-uthmani/QCF_P242.ttf") format("truetype");
}

  @font-face {
  font-family: p243;
  src: url("/fonts/QCF-uthmani/QCF_P243.ttf") format("truetype");
}

  @font-face {
  font-family: p244;
  src: url("/fonts/QCF-uthmani/QCF_P244.ttf") format("truetype");
}

  @font-face {
  font-family: p245;
  src: url("/fonts/QCF-uthmani/QCF_P245.ttf") format("truetype");
}

  @font-face {
  font-family: p246;
  src: url("/fonts/QCF-uthmani/QCF_P246.ttf") format("truetype");
}

  @font-face {
  font-family: p247;
  src: url("/fonts/QCF-uthmani/QCF_P247.ttf") format("truetype");
}

  @font-face {
  font-family: p248;
  src: url("/fonts/QCF-uthmani/QCF_P248.ttf") format("truetype");
}

  @font-face {
  font-family: p249;
  src: url("/fonts/QCF-uthmani/QCF_P249.ttf") format("truetype");
}

  @font-face {
  font-family: p250;
  src: url("/fonts/QCF-uthmani/QCF_P250.ttf") format("truetype");
}

  @font-face {
  font-family: p251;
  src: url("/fonts/QCF-uthmani/QCF_P251.ttf") format("truetype");
}

  @font-face {
  font-family: p252;
  src: url("/fonts/QCF-uthmani/QCF_P252.ttf") format("truetype");
}

  @font-face {
  font-family: p253;
  src: url("/fonts/QCF-uthmani/QCF_P253.ttf") format("truetype");
}

  @font-face {
  font-family: p254;
  src: url("/fonts/QCF-uthmani/QCF_P254.ttf") format("truetype");
}

  @font-face {
  font-family: p255;
  src: url("/fonts/QCF-uthmani/QCF_P255.ttf") format("truetype");
}

  @font-face {
  font-family: p256;
  src: url("/fonts/QCF-uthmani/QCF_P256.ttf") format("truetype");
}

  @font-face {
  font-family: p257;
  src: url("/fonts/QCF-uthmani/QCF_P257.ttf") format("truetype");
}

  @font-face {
  font-family: p258;
  src: url("/fonts/QCF-uthmani/QCF_P258.ttf") format("truetype");
}

  @font-face {
  font-family: p259;
  src: url("/fonts/QCF-uthmani/QCF_P259.ttf") format("truetype");
}

  @font-face {
  font-family: p260;
  src: url("/fonts/QCF-uthmani/QCF_P260.ttf") format("truetype");
}

  @font-face {
  font-family: p261;
  src: url("/fonts/QCF-uthmani/QCF_P261.ttf") format("truetype");
}

  @font-face {
  font-family: p262;
  src: url("/fonts/QCF-uthmani/QCF_P262.ttf") format("truetype");
}

  @font-face {
  font-family: p263;
  src: url("/fonts/QCF-uthmani/QCF_P263.ttf") format("truetype");
}

  @font-face {
  font-family: p264;
  src: url("/fonts/QCF-uthmani/QCF_P264.ttf") format("truetype");
}

  @font-face {
  font-family: p265;
  src: url("/fonts/QCF-uthmani/QCF_P265.ttf") format("truetype");
}

  @font-face {
  font-family: p266;
  src: url("/fonts/QCF-uthmani/QCF_P266.ttf") format("truetype");
}

  @font-face {
  font-family: p267;
  src: url("/fonts/QCF-uthmani/QCF_P267.ttf") format("truetype");
}

  @font-face {
  font-family: p268;
  src: url("/fonts/QCF-uthmani/QCF_P268.ttf") format("truetype");
}

  @font-face {
  font-family: p269;
  src: url("/fonts/QCF-uthmani/QCF_P269.ttf") format("truetype");
}

  @font-face {
  font-family: p270;
  src: url("/fonts/QCF-uthmani/QCF_P270.ttf") format("truetype");
}

  @font-face {
  font-family: p271;
  src: url("/fonts/QCF-uthmani/QCF_P271.ttf") format("truetype");
}

  @font-face {
  font-family: p272;
  src: url("/fonts/QCF-uthmani/QCF_P272.ttf") format("truetype");
}

  @font-face {
  font-family: p273;
  src: url("/fonts/QCF-uthmani/QCF_P273.ttf") format("truetype");
}

  @font-face {
  font-family: p274;
  src: url("/fonts/QCF-uthmani/QCF_P274.ttf") format("truetype");
}

  @font-face {
  font-family: p275;
  src: url("/fonts/QCF-uthmani/QCF_P275.ttf") format("truetype");
}

  @font-face {
  font-family: p276;
  src: url("/fonts/QCF-uthmani/QCF_P276.ttf") format("truetype");
}

  @font-face {
  font-family: p277;
  src: url("/fonts/QCF-uthmani/QCF_P277.ttf") format("truetype");
}

  @font-face {
  font-family: p278;
  src: url("/fonts/QCF-uthmani/QCF_P278.ttf") format("truetype");
}

  @font-face {
  font-family: p279;
  src: url("/fonts/QCF-uthmani/QCF_P279.ttf") format("truetype");
}

  @font-face {
  font-family: p280;
  src: url("/fonts/QCF-uthmani/QCF_P280.ttf") format("truetype");
}

  @font-face {
  font-family: p281;
  src: url("/fonts/QCF-uthmani/QCF_P281.ttf") format("truetype");
}

  @font-face {
  font-family: p282;
  src: url("/fonts/QCF-uthmani/QCF_P282.ttf") format("truetype");
}

  @font-face {
  font-family: p283;
  src: url("/fonts/QCF-uthmani/QCF_P283.ttf") format("truetype");
}

  @font-face {
  font-family: p284;
  src: url("/fonts/QCF-uthmani/QCF_P284.ttf") format("truetype");
}

  @font-face {
  font-family: p285;
  src: url("/fonts/QCF-uthmani/QCF_P285.ttf") format("truetype");
}

  @font-face {
  font-family: p286;
  src: url("/fonts/QCF-uthmani/QCF_P286.ttf") format("truetype");
}

  @font-face {
  font-family: p287;
  src: url("/fonts/QCF-uthmani/QCF_P287.ttf") format("truetype");
}

  @font-face {
  font-family: p288;
  src: url("/fonts/QCF-uthmani/QCF_P288.ttf") format("truetype");
}

  @font-face {
  font-family: p289;
  src: url("/fonts/QCF-uthmani/QCF_P289.ttf") format("truetype");
}

  @font-face {
  font-family: p290;
  src: url("/fonts/QCF-uthmani/QCF_P290.ttf") format("truetype");
}

  @font-face {
  font-family: p291;
  src: url("/fonts/QCF-uthmani/QCF_P291.ttf") format("truetype");
}

  @font-face {
  font-family: p292;
  src: url("/fonts/QCF-uthmani/QCF_P292.ttf") format("truetype");
}

  @font-face {
  font-family: p293;
  src: url("/fonts/QCF-uthmani/QCF_P293.ttf") format("truetype");
}

  @font-face {
  font-family: p294;
  src: url("/fonts/QCF-uthmani/QCF_P294.ttf") format("truetype");
}

  @font-face {
  font-family: p295;
  src: url("/fonts/QCF-uthmani/QCF_P295.ttf") format("truetype");
}

  @font-face {
  font-family: p296;
  src: url("/fonts/QCF-uthmani/QCF_P296.ttf") format("truetype");
}

  @font-face {
  font-family: p297;
  src: url("/fonts/QCF-uthmani/QCF_P297.ttf") format("truetype");
}

  @font-face {
  font-family: p298;
  src: url("/fonts/QCF-uthmani/QCF_P298.ttf") format("truetype");
}

  @font-face {
  font-family: p299;
  src: url("/fonts/QCF-uthmani/QCF_P299.ttf") format("truetype");
}

  @font-face {
  font-family: p300;
  src: url("/fonts/QCF-uthmani/QCF_P300.ttf") format("truetype");
}

  @font-face {
  font-family: p301;
  src: url("/fonts/QCF-uthmani/QCF_P301.ttf") format("truetype");
}

  @font-face {
  font-family: p302;
  src: url("/fonts/QCF-uthmani/QCF_P302.ttf") format("truetype");
}

  @font-face {
  font-family: p303;
  src: url("/fonts/QCF-uthmani/QCF_P303.ttf") format("truetype");
}

  @font-face {
  font-family: p304;
  src: url("/fonts/QCF-uthmani/QCF_P304.ttf") format("truetype");
}

  @font-face {
  font-family: p305;
  src: url("/fonts/QCF-uthmani/QCF_P305.ttf") format("truetype");
}

  @font-face {
  font-family: p306;
  src: url("/fonts/QCF-uthmani/QCF_P306.ttf") format("truetype");
}

  @font-face {
  font-family: p307;
  src: url("/fonts/QCF-uthmani/QCF_P307.ttf") format("truetype");
}

  @font-face {
  font-family: p308;
  src: url("/fonts/QCF-uthmani/QCF_P308.ttf") format("truetype");
}

  @font-face {
  font-family: p309;
  src: url("/fonts/QCF-uthmani/QCF_P309.ttf") format("truetype");
}

  @font-face {
  font-family: p310;
  src: url("/fonts/QCF-uthmani/QCF_P310.ttf") format("truetype");
}

  @font-face {
  font-family: p311;
  src: url("/fonts/QCF-uthmani/QCF_P311.ttf") format("truetype");
}

  @font-face {
  font-family: p312;
  src: url("/fonts/QCF-uthmani/QCF_P312.ttf") format("truetype");
}

  @font-face {
  font-family: p313;
  src: url("/fonts/QCF-uthmani/QCF_P313.ttf") format("truetype");
}

  @font-face {
  font-family: p314;
  src: url("/fonts/QCF-uthmani/QCF_P314.ttf") format("truetype");
}

  @font-face {
  font-family: p315;
  src: url("/fonts/QCF-uthmani/QCF_P315.ttf") format("truetype");
}

  @font-face {
  font-family: p316;
  src: url("/fonts/QCF-uthmani/QCF_P316.ttf") format("truetype");
}

  @font-face {
  font-family: p317;
  src: url("/fonts/QCF-uthmani/QCF_P317.ttf") format("truetype");
}

  @font-face {
  font-family: p318;
  src: url("/fonts/QCF-uthmani/QCF_P318.ttf") format("truetype");
}

  @font-face {
  font-family: p319;
  src: url("/fonts/QCF-uthmani/QCF_P319.ttf") format("truetype");
}

  @font-face {
  font-family: p320;
  src: url("/fonts/QCF-uthmani/QCF_P320.ttf") format("truetype");
}

  @font-face {
  font-family: p321;
  src: url("/fonts/QCF-uthmani/QCF_P321.ttf") format("truetype");
}

  @font-face {
  font-family: p322;
  src: url("/fonts/QCF-uthmani/QCF_P322.ttf") format("truetype");
}

  @font-face {
  font-family: p323;
  src: url("/fonts/QCF-uthmani/QCF_P323.ttf") format("truetype");
}

  @font-face {
  font-family: p324;
  src: url("/fonts/QCF-uthmani/QCF_P324.ttf") format("truetype");
}

  @font-face {
  font-family: p325;
  src: url("/fonts/QCF-uthmani/QCF_P325.ttf") format("truetype");
}

  @font-face {
  font-family: p326;
  src: url("/fonts/QCF-uthmani/QCF_P326.ttf") format("truetype");
}

  @font-face {
  font-family: p327;
  src: url("/fonts/QCF-uthmani/QCF_P327.ttf") format("truetype");
}

  @font-face {
  font-family: p328;
  src: url("/fonts/QCF-uthmani/QCF_P328.ttf") format("truetype");
}

  @font-face {
  font-family: p329;
  src: url("/fonts/QCF-uthmani/QCF_P329.ttf") format("truetype");
}

  @font-face {
  font-family: p330;
  src: url("/fonts/QCF-uthmani/QCF_P330.ttf") format("truetype");
}

  @font-face {
  font-family: p331;
  src: url("/fonts/QCF-uthmani/QCF_P331.ttf") format("truetype");
}

  @font-face {
  font-family: p332;
  src: url("/fonts/QCF-uthmani/QCF_P332.ttf") format("truetype");
}

  @font-face {
  font-family: p333;
  src: url("/fonts/QCF-uthmani/QCF_P333.ttf") format("truetype");
}

  @font-face {
  font-family: p334;
  src: url("/fonts/QCF-uthmani/QCF_P334.ttf") format("truetype");
}

  @font-face {
  font-family: p335;
  src: url("/fonts/QCF-uthmani/QCF_P335.ttf") format("truetype");
}

  @font-face {
  font-family: p336;
  src: url("/fonts/QCF-uthmani/QCF_P336.ttf") format("truetype");
}

  @font-face {
  font-family: p337;
  src: url("/fonts/QCF-uthmani/QCF_P337.ttf") format("truetype");
}

  @font-face {
  font-family: p338;
  src: url("/fonts/QCF-uthmani/QCF_P338.ttf") format("truetype");
}

  @font-face {
  font-family: p339;
  src: url("/fonts/QCF-uthmani/QCF_P339.ttf") format("truetype");
}

  @font-face {
  font-family: p340;
  src: url("/fonts/QCF-uthmani/QCF_P340.ttf") format("truetype");
}

  @font-face {
  font-family: p341;
  src: url("/fonts/QCF-uthmani/QCF_P341.ttf") format("truetype");
}

  @font-face {
  font-family: p342;
  src: url("/fonts/QCF-uthmani/QCF_P342.ttf") format("truetype");
}

  @font-face {
  font-family: p343;
  src: url("/fonts/QCF-uthmani/QCF_P343.ttf") format("truetype");
}

  @font-face {
  font-family: p344;
  src: url("/fonts/QCF-uthmani/QCF_P344.ttf") format("truetype");
}

  @font-face {
  font-family: p345;
  src: url("/fonts/QCF-uthmani/QCF_P345.ttf") format("truetype");
}

  @font-face {
  font-family: p346;
  src: url("/fonts/QCF-uthmani/QCF_P346.ttf") format("truetype");
}

  @font-face {
  font-family: p347;
  src: url("/fonts/QCF-uthmani/QCF_P347.ttf") format("truetype");
}

  @font-face {
  font-family: p348;
  src: url("/fonts/QCF-uthmani/QCF_P348.ttf") format("truetype");
}

  @font-face {
  font-family: p349;
  src: url("/fonts/QCF-uthmani/QCF_P349.ttf") format("truetype");
}

  @font-face {
  font-family: p350;
  src: url("/fonts/QCF-uthmani/QCF_P350.ttf") format("truetype");
}

  @font-face {
  font-family: p351;
  src: url("/fonts/QCF-uthmani/QCF_P351.ttf") format("truetype");
}

  @font-face {
  font-family: p352;
  src: url("/fonts/QCF-uthmani/QCF_P352.ttf") format("truetype");
}

  @font-face {
  font-family: p353;
  src: url("/fonts/QCF-uthmani/QCF_P353.ttf") format("truetype");
}

  @font-face {
  font-family: p354;
  src: url("/fonts/QCF-uthmani/QCF_P354.ttf") format("truetype");
}

  @font-face {
  font-family: p355;
  src: url("/fonts/QCF-uthmani/QCF_P355.ttf") format("truetype");
}

  @font-face {
  font-family: p356;
  src: url("/fonts/QCF-uthmani/QCF_P356.ttf") format("truetype");
}

  @font-face {
  font-family: p357;
  src: url("/fonts/QCF-uthmani/QCF_P357.ttf") format("truetype");
}

  @font-face {
  font-family: p358;
  src: url("/fonts/QCF-uthmani/QCF_P358.ttf") format("truetype");
}

  @font-face {
  font-family: p359;
  src: url("/fonts/QCF-uthmani/QCF_P359.ttf") format("truetype");
}

  @font-face {
  font-family: p360;
  src: url("/fonts/QCF-uthmani/QCF_P360.ttf") format("truetype");
}

  @font-face {
  font-family: p361;
  src: url("/fonts/QCF-uthmani/QCF_P361.ttf") format("truetype");
}

  @font-face {
  font-family: p362;
  src: url("/fonts/QCF-uthmani/QCF_P362.ttf") format("truetype");
}

  @font-face {
  font-family: p363;
  src: url("/fonts/QCF-uthmani/QCF_P363.ttf") format("truetype");
}

  @font-face {
  font-family: p364;
  src: url("/fonts/QCF-uthmani/QCF_P364.ttf") format("truetype");
}

  @font-face {
  font-family: p365;
  src: url("/fonts/QCF-uthmani/QCF_P365.ttf") format("truetype");
}

  @font-face {
  font-family: p366;
  src: url("/fonts/QCF-uthmani/QCF_P366.ttf") format("truetype");
}

  @font-face {
  font-family: p367;
  src: url("/fonts/QCF-uthmani/QCF_P367.ttf") format("truetype");
}

  @font-face {
  font-family: p368;
  src: url("/fonts/QCF-uthmani/QCF_P368.ttf") format("truetype");
}

  @font-face {
  font-family: p369;
  src: url("/fonts/QCF-uthmani/QCF_P369.ttf") format("truetype");
}

  @font-face {
  font-family: p370;
  src: url("/fonts/QCF-uthmani/QCF_P370.ttf") format("truetype");
}

  @font-face {
  font-family: p371;
  src: url("/fonts/QCF-uthmani/QCF_P371.ttf") format("truetype");
}

  @font-face {
  font-family: p372;
  src: url("/fonts/QCF-uthmani/QCF_P372.ttf") format("truetype");
}

  @font-face {
  font-family: p373;
  src: url("/fonts/QCF-uthmani/QCF_P373.ttf") format("truetype");
}

  @font-face {
  font-family: p374;
  src: url("/fonts/QCF-uthmani/QCF_P374.ttf") format("truetype");
}

  @font-face {
  font-family: p375;
  src: url("/fonts/QCF-uthmani/QCF_P375.ttf") format("truetype");
}

  @font-face {
  font-family: p376;
  src: url("/fonts/QCF-uthmani/QCF_P376.ttf") format("truetype");
}

  @font-face {
  font-family: p377;
  src: url("/fonts/QCF-uthmani/QCF_P377.ttf") format("truetype");
}

  @font-face {
  font-family: p378;
  src: url("/fonts/QCF-uthmani/QCF_P378.ttf") format("truetype");
}

  @font-face {
  font-family: p379;
  src: url("/fonts/QCF-uthmani/QCF_P379.ttf") format("truetype");
}

  @font-face {
  font-family: p380;
  src: url("/fonts/QCF-uthmani/QCF_P380.ttf") format("truetype");
}

  @font-face {
  font-family: p381;
  src: url("/fonts/QCF-uthmani/QCF_P381.ttf") format("truetype");
}

  @font-face {
  font-family: p382;
  src: url("/fonts/QCF-uthmani/QCF_P382.ttf") format("truetype");
}

  @font-face {
  font-family: p383;
  src: url("/fonts/QCF-uthmani/QCF_P383.ttf") format("truetype");
}

  @font-face {
  font-family: p384;
  src: url("/fonts/QCF-uthmani/QCF_P384.ttf") format("truetype");
}

  @font-face {
  font-family: p385;
  src: url("/fonts/QCF-uthmani/QCF_P385.ttf") format("truetype");
}

  @font-face {
  font-family: p386;
  src: url("/fonts/QCF-uthmani/QCF_P386.ttf") format("truetype");
}

  @font-face {
  font-family: p387;
  src: url("/fonts/QCF-uthmani/QCF_P387.ttf") format("truetype");
}

  @font-face {
  font-family: p388;
  src: url("/fonts/QCF-uthmani/QCF_P388.ttf") format("truetype");
}

  @font-face {
  font-family: p389;
  src: url("/fonts/QCF-uthmani/QCF_P389.ttf") format("truetype");
}

  @font-face {
  font-family: p390;
  src: url("/fonts/QCF-uthmani/QCF_P390.ttf") format("truetype");
}

  @font-face {
  font-family: p391;
  src: url("/fonts/QCF-uthmani/QCF_P391.ttf") format("truetype");
}

  @font-face {
  font-family: p392;
  src: url("/fonts/QCF-uthmani/QCF_P392.ttf") format("truetype");
}

  @font-face {
  font-family: p393;
  src: url("/fonts/QCF-uthmani/QCF_P393.ttf") format("truetype");
}

  @font-face {
  font-family: p394;
  src: url("/fonts/QCF-uthmani/QCF_P394.ttf") format("truetype");
}

  @font-face {
  font-family: p395;
  src: url("/fonts/QCF-uthmani/QCF_P395.ttf") format("truetype");
}

  @font-face {
  font-family: p396;
  src: url("/fonts/QCF-uthmani/QCF_P396.ttf") format("truetype");
}

  @font-face {
  font-family: p397;
  src: url("/fonts/QCF-uthmani/QCF_P397.ttf") format("truetype");
}

  @font-face {
  font-family: p398;
  src: url("/fonts/QCF-uthmani/QCF_P398.ttf") format("truetype");
}

  @font-face {
  font-family: p399;
  src: url("/fonts/QCF-uthmani/QCF_P399.ttf") format("truetype");
}

  @font-face {
  font-family: p400;
  src: url("/fonts/QCF-uthmani/QCF_P400.ttf") format("truetype");
}

  @font-face {
  font-family: p401;
  src: url("/fonts/QCF-uthmani/QCF_P401.ttf") format("truetype");
}

  @font-face {
  font-family: p402;
  src: url("/fonts/QCF-uthmani/QCF_P402.ttf") format("truetype");
}

  @font-face {
  font-family: p403;
  src: url("/fonts/QCF-uthmani/QCF_P403.ttf") format("truetype");
}

  @font-face {
  font-family: p404;
  src: url("/fonts/QCF-uthmani/QCF_P404.ttf") format("truetype");
}

  @font-face {
  font-family: p405;
  src: url("/fonts/QCF-uthmani/QCF_P405.ttf") format("truetype");
}

  @font-face {
  font-family: p406;
  src: url("/fonts/QCF-uthmani/QCF_P406.ttf") format("truetype");
}

  @font-face {
  font-family: p407;
  src: url("/fonts/QCF-uthmani/QCF_P407.ttf") format("truetype");
}

  @font-face {
  font-family: p408;
  src: url("/fonts/QCF-uthmani/QCF_P408.ttf") format("truetype");
}

  @font-face {
  font-family: p409;
  src: url("/fonts/QCF-uthmani/QCF_P409.ttf") format("truetype");
}

  @font-face {
  font-family: p410;
  src: url("/fonts/QCF-uthmani/QCF_P410.ttf") format("truetype");
}

  @font-face {
  font-family: p411;
  src: url("/fonts/QCF-uthmani/QCF_P411.ttf") format("truetype");
}

  @font-face {
  font-family: p412;
  src: url("/fonts/QCF-uthmani/QCF_P412.ttf") format("truetype");
}

  @font-face {
  font-family: p413;
  src: url("/fonts/QCF-uthmani/QCF_P413.ttf") format("truetype");
}

  @font-face {
  font-family: p414;
  src: url("/fonts/QCF-uthmani/QCF_P414.ttf") format("truetype");
}

  @font-face {
  font-family: p415;
  src: url("/fonts/QCF-uthmani/QCF_P415.ttf") format("truetype");
}

  @font-face {
  font-family: p416;
  src: url("/fonts/QCF-uthmani/QCF_P416.ttf") format("truetype");
}

  @font-face {
  font-family: p417;
  src: url("/fonts/QCF-uthmani/QCF_P417.ttf") format("truetype");
}

  @font-face {
  font-family: p418;
  src: url("/fonts/QCF-uthmani/QCF_P418.ttf") format("truetype");
}

  @font-face {
  font-family: p419;
  src: url("/fonts/QCF-uthmani/QCF_P419.ttf") format("truetype");
}

  @font-face {
  font-family: p420;
  src: url("/fonts/QCF-uthmani/QCF_P420.ttf") format("truetype");
}

  @font-face {
  font-family: p421;
  src: url("/fonts/QCF-uthmani/QCF_P421.ttf") format("truetype");
}

  @font-face {
  font-family: p422;
  src: url("/fonts/QCF-uthmani/QCF_P422.ttf") format("truetype");
}

  @font-face {
  font-family: p423;
  src: url("/fonts/QCF-uthmani/QCF_P423.ttf") format("truetype");
}

  @font-face {
  font-family: p424;
  src: url("/fonts/QCF-uthmani/QCF_P424.ttf") format("truetype");
}

  @font-face {
  font-family: p425;
  src: url("/fonts/QCF-uthmani/QCF_P425.ttf") format("truetype");
}

  @font-face {
  font-family: p426;
  src: url("/fonts/QCF-uthmani/QCF_P426.ttf") format("truetype");
}

  @font-face {
  font-family: p427;
  src: url("/fonts/QCF-uthmani/QCF_P427.ttf") format("truetype");
}

  @font-face {
  font-family: p428;
  src: url("/fonts/QCF-uthmani/QCF_P428.ttf") format("truetype");
}

  @font-face {
  font-family: p429;
  src: url("/fonts/QCF-uthmani/QCF_P429.ttf") format("truetype");
}

  @font-face {
  font-family: p430;
  src: url("/fonts/QCF-uthmani/QCF_P430.ttf") format("truetype");
}

  @font-face {
  font-family: p431;
  src: url("/fonts/QCF-uthmani/QCF_P431.ttf") format("truetype");
}

  @font-face {
  font-family: p432;
  src: url("/fonts/QCF-uthmani/QCF_P432.ttf") format("truetype");
}

  @font-face {
  font-family: p433;
  src: url("/fonts/QCF-uthmani/QCF_P433.ttf") format("truetype");
}

  @font-face {
  font-family: p434;
  src: url("/fonts/QCF-uthmani/QCF_P434.ttf") format("truetype");
}

  @font-face {
  font-family: p435;
  src: url("/fonts/QCF-uthmani/QCF_P435.ttf") format("truetype");
}

  @font-face {
  font-family: p436;
  src: url("/fonts/QCF-uthmani/QCF_P436.ttf") format("truetype");
}

  @font-face {
  font-family: p437;
  src: url("/fonts/QCF-uthmani/QCF_P437.ttf") format("truetype");
}

  @font-face {
  font-family: p438;
  src: url("/fonts/QCF-uthmani/QCF_P438.ttf") format("truetype");
}

  @font-face {
  font-family: p439;
  src: url("/fonts/QCF-uthmani/QCF_P439.ttf") format("truetype");
}

  @font-face {
  font-family: p440;
  src: url("/fonts/QCF-uthmani/QCF_P440.ttf") format("truetype");
}

  @font-face {
  font-family: p441;
  src: url("/fonts/QCF-uthmani/QCF_P441.ttf") format("truetype");
}

  @font-face {
  font-family: p442;
  src: url("/fonts/QCF-uthmani/QCF_P442.ttf") format("truetype");
}

  @font-face {
  font-family: p443;
  src: url("/fonts/QCF-uthmani/QCF_P443.ttf") format("truetype");
}

  @font-face {
  font-family: p444;
  src: url("/fonts/QCF-uthmani/QCF_P444.ttf") format("truetype");
}

  @font-face {
  font-family: p445;
  src: url("/fonts/QCF-uthmani/QCF_P445.ttf") format("truetype");
}

  @font-face {
  font-family: p446;
  src: url("/fonts/QCF-uthmani/QCF_P446.ttf") format("truetype");
}

  @font-face {
  font-family: p447;
  src: url("/fonts/QCF-uthmani/QCF_P447.ttf") format("truetype");
}

  @font-face {
  font-family: p448;
  src: url("/fonts/QCF-uthmani/QCF_P448.ttf") format("truetype");
}

  @font-face {
  font-family: p449;
  src: url("/fonts/QCF-uthmani/QCF_P449.ttf") format("truetype");
}

  @font-face {
  font-family: p450;
  src: url("/fonts/QCF-uthmani/QCF_P450.ttf") format("truetype");
}

  @font-face {
  font-family: p451;
  src: url("/fonts/QCF-uthmani/QCF_P451.ttf") format("truetype");
}

  @font-face {
  font-family: p452;
  src: url("/fonts/QCF-uthmani/QCF_P452.ttf") format("truetype");
}

  @font-face {
  font-family: p453;
  src: url("/fonts/QCF-uthmani/QCF_P453.ttf") format("truetype");
}

  @font-face {
  font-family: p454;
  src: url("/fonts/QCF-uthmani/QCF_P454.ttf") format("truetype");
}

  @font-face {
  font-family: p455;
  src: url("/fonts/QCF-uthmani/QCF_P455.ttf") format("truetype");
}

  @font-face {
  font-family: p456;
  src: url("/fonts/QCF-uthmani/QCF_P456.ttf") format("truetype");
}

  @font-face {
  font-family: p457;
  src: url("/fonts/QCF-uthmani/QCF_P457.ttf") format("truetype");
}

  @font-face {
  font-family: p458;
  src: url("/fonts/QCF-uthmani/QCF_P458.ttf") format("truetype");
}

  @font-face {
  font-family: p459;
  src: url("/fonts/QCF-uthmani/QCF_P459.ttf") format("truetype");
}

  @font-face {
  font-family: p460;
  src: url("/fonts/QCF-uthmani/QCF_P460.ttf") format("truetype");
}

  @font-face {
  font-family: p461;
  src: url("/fonts/QCF-uthmani/QCF_P461.ttf") format("truetype");
}

  @font-face {
  font-family: p462;
  src: url("/fonts/QCF-uthmani/QCF_P462.ttf") format("truetype");
}

  @font-face {
  font-family: p463;
  src: url("/fonts/QCF-uthmani/QCF_P463.ttf") format("truetype");
}

  @font-face {
  font-family: p464;
  src: url("/fonts/QCF-uthmani/QCF_P464.ttf") format("truetype");
}

  @font-face {
  font-family: p465;
  src: url("/fonts/QCF-uthmani/QCF_P465.ttf") format("truetype");
}

  @font-face {
  font-family: p466;
  src: url("/fonts/QCF-uthmani/QCF_P466.ttf") format("truetype");
}

  @font-face {
  font-family: p467;
  src: url("/fonts/QCF-uthmani/QCF_P467.ttf") format("truetype");
}

  @font-face {
  font-family: p468;
  src: url("/fonts/QCF-uthmani/QCF_P468.ttf") format("truetype");
}

  @font-face {
  font-family: p469;
  src: url("/fonts/QCF-uthmani/QCF_P469.ttf") format("truetype");
}

  @font-face {
  font-family: p470;
  src: url("/fonts/QCF-uthmani/QCF_P470.ttf") format("truetype");
}

  @font-face {
  font-family: p471;
  src: url("/fonts/QCF-uthmani/QCF_P471.ttf") format("truetype");
}

  @font-face {
  font-family: p472;
  src: url("/fonts/QCF-uthmani/QCF_P472.ttf") format("truetype");
}

  @font-face {
  font-family: p473;
  src: url("/fonts/QCF-uthmani/QCF_P473.ttf") format("truetype");
}

  @font-face {
  font-family: p474;
  src: url("/fonts/QCF-uthmani/QCF_P474.ttf") format("truetype");
}

  @font-face {
  font-family: p475;
  src: url("/fonts/QCF-uthmani/QCF_P475.ttf") format("truetype");
}

  @font-face {
  font-family: p476;
  src: url("/fonts/QCF-uthmani/QCF_P476.ttf") format("truetype");
}

  @font-face {
  font-family: p477;
  src: url("/fonts/QCF-uthmani/QCF_P477.ttf") format("truetype");
}

  @font-face {
  font-family: p478;
  src: url("/fonts/QCF-uthmani/QCF_P478.ttf") format("truetype");
}

  @font-face {
  font-family: p479;
  src: url("/fonts/QCF-uthmani/QCF_P479.ttf") format("truetype");
}

  @font-face {
  font-family: p480;
  src: url("/fonts/QCF-uthmani/QCF_P480.ttf") format("truetype");
}

  @font-face {
  font-family: p481;
  src: url("/fonts/QCF-uthmani/QCF_P481.ttf") format("truetype");
}

  @font-face {
  font-family: p482;
  src: url("/fonts/QCF-uthmani/QCF_P482.ttf") format("truetype");
}

  @font-face {
  font-family: p483;
  src: url("/fonts/QCF-uthmani/QCF_P483.ttf") format("truetype");
}

  @font-face {
  font-family: p484;
  src: url("/fonts/QCF-uthmani/QCF_P484.ttf") format("truetype");
}

  @font-face {
  font-family: p485;
  src: url("/fonts/QCF-uthmani/QCF_P485.ttf") format("truetype");
}

  @font-face {
  font-family: p486;
  src: url("/fonts/QCF-uthmani/QCF_P486.ttf") format("truetype");
}

  @font-face {
  font-family: p487;
  src: url("/fonts/QCF-uthmani/QCF_P487.ttf") format("truetype");
}

  @font-face {
  font-family: p488;
  src: url("/fonts/QCF-uthmani/QCF_P488.ttf") format("truetype");
}

  @font-face {
  font-family: p489;
  src: url("/fonts/QCF-uthmani/QCF_P489.ttf") format("truetype");
}

  @font-face {
  font-family: p490;
  src: url("/fonts/QCF-uthmani/QCF_P490.ttf") format("truetype");
}

  @font-face {
  font-family: p491;
  src: url("/fonts/QCF-uthmani/QCF_P491.ttf") format("truetype");
}

  @font-face {
  font-family: p492;
  src: url("/fonts/QCF-uthmani/QCF_P492.ttf") format("truetype");
}

  @font-face {
  font-family: p493;
  src: url("/fonts/QCF-uthmani/QCF_P493.ttf") format("truetype");
}

  @font-face {
  font-family: p494;
  src: url("/fonts/QCF-uthmani/QCF_P494.ttf") format("truetype");
}

  @font-face {
  font-family: p495;
  src: url("/fonts/QCF-uthmani/QCF_P495.ttf") format("truetype");
}

  @font-face {
  font-family: p496;
  src: url("/fonts/QCF-uthmani/QCF_P496.ttf") format("truetype");
}

  @font-face {
  font-family: p497;
  src: url("/fonts/QCF-uthmani/QCF_P497.ttf") format("truetype");
}

  @font-face {
  font-family: p498;
  src: url("/fonts/QCF-uthmani/QCF_P498.ttf") format("truetype");
}

  @font-face {
  font-family: p499;
  src: url("/fonts/QCF-uthmani/QCF_P499.ttf") format("truetype");
}

  @font-face {
  font-family: p500;
  src: url("/fonts/QCF-uthmani/QCF_P500.ttf") format("truetype");
}

  @font-face {
  font-family: p501;
  src: url("/fonts/QCF-uthmani/QCF_P501.ttf") format("truetype");
}

  @font-face {
  font-family: p502;
  src: url("/fonts/QCF-uthmani/QCF_P502.ttf") format("truetype");
}

  @font-face {
  font-family: p503;
  src: url("/fonts/QCF-uthmani/QCF_P503.ttf") format("truetype");
}

  @font-face {
  font-family: p504;
  src: url("/fonts/QCF-uthmani/QCF_P504.ttf") format("truetype");
}

  @font-face {
  font-family: p505;
  src: url("/fonts/QCF-uthmani/QCF_P505.ttf") format("truetype");
}

  @font-face {
  font-family: p506;
  src: url("/fonts/QCF-uthmani/QCF_P506.ttf") format("truetype");
}

  @font-face {
  font-family: p507;
  src: url("/fonts/QCF-uthmani/QCF_P507.ttf") format("truetype");
}

  @font-face {
  font-family: p508;
  src: url("/fonts/QCF-uthmani/QCF_P508.ttf") format("truetype");
}

  @font-face {
  font-family: p509;
  src: url("/fonts/QCF-uthmani/QCF_P509.ttf") format("truetype");
}

  @font-face {
  font-family: p510;
  src: url("/fonts/QCF-uthmani/QCF_P510.ttf") format("truetype");
}

  @font-face {
  font-family: p511;
  src: url("/fonts/QCF-uthmani/QCF_P511.ttf") format("truetype");
}

  @font-face {
  font-family: p512;
  src: url("/fonts/QCF-uthmani/QCF_P512.ttf") format("truetype");
}

  @font-face {
  font-family: p513;
  src: url("/fonts/QCF-uthmani/QCF_P513.ttf") format("truetype");
}

  @font-face {
  font-family: p514;
  src: url("/fonts/QCF-uthmani/QCF_P514.ttf") format("truetype");
}

  @font-face {
  font-family: p515;
  src: url("/fonts/QCF-uthmani/QCF_P515.ttf") format("truetype");
}

  @font-face {
  font-family: p516;
  src: url("/fonts/QCF-uthmani/QCF_P516.ttf") format("truetype");
}

  @font-face {
  font-family: p517;
  src: url("/fonts/QCF-uthmani/QCF_P517.ttf") format("truetype");
}

  @font-face {
  font-family: p518;
  src: url("/fonts/QCF-uthmani/QCF_P518.ttf") format("truetype");
}

  @font-face {
  font-family: p519;
  src: url("/fonts/QCF-uthmani/QCF_P519.ttf") format("truetype");
}

  @font-face {
  font-family: p520;
  src: url("/fonts/QCF-uthmani/QCF_P520.ttf") format("truetype");
}

  @font-face {
  font-family: p521;
  src: url("/fonts/QCF-uthmani/QCF_P521.ttf") format("truetype");
}

  @font-face {
  font-family: p522;
  src: url("/fonts/QCF-uthmani/QCF_P522.ttf") format("truetype");
}

  @font-face {
  font-family: p523;
  src: url("/fonts/QCF-uthmani/QCF_P523.ttf") format("truetype");
}

  @font-face {
  font-family: p524;
  src: url("/fonts/QCF-uthmani/QCF_P524.ttf") format("truetype");
}

  @font-face {
  font-family: p525;
  src: url("/fonts/QCF-uthmani/QCF_P525.ttf") format("truetype");
}

  @font-face {
  font-family: p526;
  src: url("/fonts/QCF-uthmani/QCF_P526.ttf") format("truetype");
}

  @font-face {
  font-family: p527;
  src: url("/fonts/QCF-uthmani/QCF_P527.ttf") format("truetype");
}

  @font-face {
  font-family: p528;
  src: url("/fonts/QCF-uthmani/QCF_P528.ttf") format("truetype");
}

  @font-face {
  font-family: p529;
  src: url("/fonts/QCF-uthmani/QCF_P529.ttf") format("truetype");
}

  @font-face {
  font-family: p530;
  src: url("/fonts/QCF-uthmani/QCF_P530.ttf") format("truetype");
}

  @font-face {
  font-family: p531;
  src: url("/fonts/QCF-uthmani/QCF_P531.ttf") format("truetype");
}

  @font-face {
  font-family: p532;
  src: url("/fonts/QCF-uthmani/QCF_P532.ttf") format("truetype");
}

  @font-face {
  font-family: p533;
  src: url("/fonts/QCF-uthmani/QCF_P533.ttf") format("truetype");
}

  @font-face {
  font-family: p534;
  src: url("/fonts/QCF-uthmani/QCF_P534.ttf") format("truetype");
}

  @font-face {
  font-family: p535;
  src: url("/fonts/QCF-uthmani/QCF_P535.ttf") format("truetype");
}

  @font-face {
  font-family: p536;
  src: url("/fonts/QCF-uthmani/QCF_P536.ttf") format("truetype");
}

  @font-face {
  font-family: p537;
  src: url("/fonts/QCF-uthmani/QCF_P537.ttf") format("truetype");
}

  @font-face {
  font-family: p538;
  src: url("/fonts/QCF-uthmani/QCF_P538.ttf") format("truetype");
}

  @font-face {
  font-family: p539;
  src: url("/fonts/QCF-uthmani/QCF_P539.ttf") format("truetype");
}

  @font-face {
  font-family: p540;
  src: url("/fonts/QCF-uthmani/QCF_P540.ttf") format("truetype");
}

  @font-face {
  font-family: p541;
  src: url("/fonts/QCF-uthmani/QCF_P541.ttf") format("truetype");
}

  @font-face {
  font-family: p542;
  src: url("/fonts/QCF-uthmani/QCF_P542.ttf") format("truetype");
}

  @font-face {
  font-family: p543;
  src: url("/fonts/QCF-uthmani/QCF_P543.ttf") format("truetype");
}

  @font-face {
  font-family: p544;
  src: url("/fonts/QCF-uthmani/QCF_P544.ttf") format("truetype");
}

  @font-face {
  font-family: p545;
  src: url("/fonts/QCF-uthmani/QCF_P545.ttf") format("truetype");
}

  @font-face {
  font-family: p546;
  src: url("/fonts/QCF-uthmani/QCF_P546.ttf") format("truetype");
}

  @font-face {
  font-family: p547;
  src: url("/fonts/QCF-uthmani/QCF_P547.ttf") format("truetype");
}

  @font-face {
  font-family: p548;
  src: url("/fonts/QCF-uthmani/QCF_P548.ttf") format("truetype");
}

  @font-face {
  font-family: p549;
  src: url("/fonts/QCF-uthmani/QCF_P549.ttf") format("truetype");
}

  @font-face {
  font-family: p550;
  src: url("/fonts/QCF-uthmani/QCF_P550.ttf") format("truetype");
}

  @font-face {
  font-family: p551;
  src: url("/fonts/QCF-uthmani/QCF_P551.ttf") format("truetype");
}

  @font-face {
  font-family: p552;
  src: url("/fonts/QCF-uthmani/QCF_P552.ttf") format("truetype");
}

  @font-face {
  font-family: p553;
  src: url("/fonts/QCF-uthmani/QCF_P553.ttf") format("truetype");
}

  @font-face {
  font-family: p554;
  src: url("/fonts/QCF-uthmani/QCF_P554.ttf") format("truetype");
}

  @font-face {
  font-family: p555;
  src: url("/fonts/QCF-uthmani/QCF_P555.ttf") format("truetype");
}

  @font-face {
  font-family: p556;
  src: url("/fonts/QCF-uthmani/QCF_P556.ttf") format("truetype");
}

  @font-face {
  font-family: p557;
  src: url("/fonts/QCF-uthmani/QCF_P557.ttf") format("truetype");
}

  @font-face {
  font-family: p558;
  src: url("/fonts/QCF-uthmani/QCF_P558.ttf") format("truetype");
}

  @font-face {
  font-family: p559;
  src: url("/fonts/QCF-uthmani/QCF_P559.ttf") format("truetype");
}

  @font-face {
  font-family: p560;
  src: url("/fonts/QCF-uthmani/QCF_P560.ttf") format("truetype");
}

  @font-face {
  font-family: p561;
  src: url("/fonts/QCF-uthmani/QCF_P561.ttf") format("truetype");
}

  @font-face {
  font-family: p562;
  src: url("/fonts/QCF-uthmani/QCF_P562.ttf") format("truetype");
}

  @font-face {
  font-family: p563;
  src: url("/fonts/QCF-uthmani/QCF_P563.ttf") format("truetype");
}

  @font-face {
  font-family: p564;
  src: url("/fonts/QCF-uthmani/QCF_P564.ttf") format("truetype");
}

  @font-face {
  font-family: p565;
  src: url("/fonts/QCF-uthmani/QCF_P565.ttf") format("truetype");
}

  @font-face {
  font-family: p566;
  src: url("/fonts/QCF-uthmani/QCF_P566.ttf") format("truetype");
}

  @font-face {
  font-family: p567;
  src: url("/fonts/QCF-uthmani/QCF_P567.ttf") format("truetype");
}

  @font-face {
  font-family: p568;
  src: url("/fonts/QCF-uthmani/QCF_P568.ttf") format("truetype");
}

  @font-face {
  font-family: p569;
  src: url("/fonts/QCF-uthmani/QCF_P569.ttf") format("truetype");
}

  @font-face {
  font-family: p570;
  src: url("/fonts/QCF-uthmani/QCF_P570.ttf") format("truetype");
}

  @font-face {
  font-family: p571;
  src: url("/fonts/QCF-uthmani/QCF_P571.ttf") format("truetype");
}

  @font-face {
  font-family: p572;
  src: url("/fonts/QCF-uthmani/QCF_P572.ttf") format("truetype");
}

  @font-face {
  font-family: p573;
  src: url("/fonts/QCF-uthmani/QCF_P573.ttf") format("truetype");
}

  @font-face {
  font-family: p574;
  src: url("/fonts/QCF-uthmani/QCF_P574.ttf") format("truetype");
}

  @font-face {
  font-family: p575;
  src: url("/fonts/QCF-uthmani/QCF_P575.ttf") format("truetype");
}

  @font-face {
  font-family: p576;
  src: url("/fonts/QCF-uthmani/QCF_P576.ttf") format("truetype");
}

  @font-face {
  font-family: p577;
  src: url("/fonts/QCF-uthmani/QCF_P577.ttf") format("truetype");
}

  @font-face {
  font-family: p578;
  src: url("/fonts/QCF-uthmani/QCF_P578.ttf") format("truetype");
}

  @font-face {
  font-family: p579;
  src: url("/fonts/QCF-uthmani/QCF_P579.ttf") format("truetype");
}

  @font-face {
  font-family: p580;
  src: url("/fonts/QCF-uthmani/QCF_P580.ttf") format("truetype");
}

  @font-face {
  font-family: p581;
  src: url("/fonts/QCF-uthmani/QCF_P581.ttf") format("truetype");
}

  @font-face {
  font-family: p582;
  src: url("/fonts/QCF-uthmani/QCF_P582.ttf") format("truetype");
}

  @font-face {
  font-family: p583;
  src: url("/fonts/QCF-uthmani/QCF_P583.ttf") format("truetype");
}

  @font-face {
  font-family: p584;
  src: url("/fonts/QCF-uthmani/QCF_P584.ttf") format("truetype");
}

  @font-face {
  font-family: p585;
  src: url("/fonts/QCF-uthmani/QCF_P585.ttf") format("truetype");
}

  @font-face {
  font-family: p586;
  src: url("/fonts/QCF-uthmani/QCF_P586.ttf") format("truetype");
}

  @font-face {
  font-family: p587;
  src: url("/fonts/QCF-uthmani/QCF_P587.ttf") format("truetype");
}

  @font-face {
  font-family: p588;
  src: url("/fonts/QCF-uthmani/QCF_P588.ttf") format("truetype");
}

  @font-face {
  font-family: p589;
  src: url("/fonts/QCF-uthmani/QCF_P589.ttf") format("truetype");
}

  @font-face {
  font-family: p590;
  src: url("/fonts/QCF-uthmani/QCF_P590.ttf") format("truetype");
}

  @font-face {
  font-family: p591;
  src: url("/fonts/QCF-uthmani/QCF_P591.ttf") format("truetype");
}

  @font-face {
  font-family: p592;
  src: url("/fonts/QCF-uthmani/QCF_P592.ttf") format("truetype");
}

  @font-face {
  font-family: p593;
  src: url("/fonts/QCF-uthmani/QCF_P593.ttf") format("truetype");
}

  @font-face {
  font-family: p594;
  src: url("/fonts/QCF-uthmani/QCF_P594.ttf") format("truetype");
}

  @font-face {
  font-family: p595;
  src: url("/fonts/QCF-uthmani/QCF_P595.ttf") format("truetype");
}

  @font-face {
  font-family: p596;
  src: url("/fonts/QCF-uthmani/QCF_P596.ttf") format("truetype");
}

  @font-face {
  font-family: p597;
  src: url("/fonts/QCF-uthmani/QCF_P597.ttf") format("truetype");
}

  @font-face {
  font-family: p598;
  src: url("/fonts/QCF-uthmani/QCF_P598.ttf") format("truetype");
}

  @font-face {
  font-family: p599;
  src: url("/fonts/QCF-uthmani/QCF_P599.ttf") format("truetype");
}

  @font-face {
  font-family: p600;
  src: url("/fonts/QCF-uthmani/QCF_P600.ttf") format("truetype");
}

  @font-face {
  font-family: p601;
  src: url("/fonts/QCF-uthmani/QCF_P601.ttf") format("truetype");
}

  @font-face {
  font-family: p602;
  src: url("/fonts/QCF-uthmani/QCF_P602.ttf") format("truetype");
}

  @font-face {
  font-family: p603;
  src: url("/fonts/QCF-uthmani/QCF_P603.ttf") format("truetype");
}

  @font-face {
  font-family: p604;
  src: url("/fonts/QCF-uthmani/QCF_P604.ttf") format("truetype");
}

      `}
  />
);

export default Fonts;
