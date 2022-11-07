const theme = {
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  colors: {
    basic200: "hsl(216, 45%, 98%)",
    basic400: "hsl(219, 35%, 92%)",
    danger600: "hsl(0, 90%, 63%)",
    info500Default: "hsl(205, 100%, 50%)",
    m3Black: "hsl(0, 0%, 0%)",
    m3KeyColorsError: "hsl(0, 75%, 42%)",
    m3KeyColorsNeutral: "hsl(240, 2%, 38%)",
    m3KeyColorsNeutralVariant: "hsl(229, 6%, 38%)",
    m3KeyColorsPrimary: "hsl(219, 100%, 18%)",
    m3KeyColorsSecondary: "hsl(193, 4%, 56%)",
    m3KeyColorsTertiary: "hsl(304, 16%, 39%)",
    m3RefErrorError0: "hsl(0, 0%, 0%)",
    m3RefErrorError10: "hsl(358, 100%, 13%)",
    m3RefErrorError100: "hsl(0, 0%, 100%)",
    m3RefErrorError15: "hsl(358, 100%, 16%)",
    m3RefErrorError20: "hsl(357, 100%, 21%)",
    m3RefErrorError25: "hsl(357, 100%, 25%)",
    m3RefErrorError30: "hsl(356, 100%, 29%)",
    m3RefErrorError35: "hsl(357, 92%, 34%)",
    m3RefErrorError40: "hsl(0, 75%, 42%)",
    m3RefErrorError5: "hsl(359, 100%, 9%)",
    m3RefErrorError50: "hsl(2, 73%, 53%)",
    m3RefErrorError60: "hsl(4, 100%, 64%)",
    m3RefErrorError70: "hsl(6, 100%, 75%)",
    m3RefErrorError80: "hsl(6, 100%, 84%)",
    m3RefErrorError90: "hsl(6, 100%, 92%)",
    m3RefErrorError95: "hsl(9, 100%, 96%)",
    m3RefErrorError98: "hsl(7, 100%, 98%)",
    m3RefErrorError99: "hsl(300, 100%, 99%)",
    m3RefNeutralVariantNeutralVariant0: "hsl(0, 0%, 0%)",
    m3RefNeutralVariantNeutralVariant10: "hsl(228, 17%, 12%)",
    m3RefNeutralVariantNeutralVariant100: "hsl(0, 0%, 100%)",
    m3RefNeutralVariantNeutralVariant15: "hsl(240, 10%, 16%)",
    m3RefNeutralVariantNeutralVariant20: "hsl(228, 10%, 20%)",
    m3RefNeutralVariantNeutralVariant25: "hsl(228, 8%, 24%)",
    m3RefNeutralVariantNeutralVariant30: "hsl(234, 7%, 29%)",
    m3RefNeutralVariantNeutralVariant35: "hsl(228, 6%, 33%)",
    m3RefNeutralVariantNeutralVariant40: "hsl(229, 6%, 38%)",
    m3RefNeutralVariantNeutralVariant5: "hsl(240, 20%, 8%)",
    m3RefNeutralVariantNeutralVariant50: "hsl(235, 4%, 48%)",
    m3RefNeutralVariantNeutralVariant60: "hsl(235, 5%, 58%)",
    m3RefNeutralVariantNeutralVariant70: "hsl(240, 6%, 69%)",
    m3RefNeutralVariantNeutralVariant80: "hsl(235, 10%, 79%)",
    m3RefNeutralVariantNeutralVariant90: "hsl(235, 22%, 90%)",
    m3RefNeutralVariantNeutralVariant95: "hsl(240, 50%, 96%)",
    m3RefNeutralVariantNeutralVariant98: "hsl(257, 100%, 99%)",
    m3RefNeutralVariantNeutralVariant99: "hsl(285, 100%, 99%)",
    m3RefNeutralNeutral0: "hsl(0, 0%, 0%)",
    m3RefNeutralNeutral10: "hsl(240, 7%, 11%)",
    m3RefNeutralNeutral100: "hsl(0, 0%, 100%)",
    m3RefNeutralNeutral15: "hsl(255, 5%, 15%)",
    m3RefNeutralNeutral20: "hsl(240, 4%, 20%)",
    m3RefNeutralNeutral25: "hsl(240, 3%, 24%)",
    m3RefNeutralNeutral30: "hsl(240, 3%, 28%)",
    m3RefNeutralNeutral35: "hsl(240, 2%, 33%)",
    m3RefNeutralNeutral40: "hsl(240, 2%, 38%)",
    m3RefNeutralNeutral5: "hsl(240, 8%, 7%)",
    m3RefNeutralNeutral50: "hsl(255, 2%, 47%)",
    m3RefNeutralNeutral60: "hsl(255, 2%, 57%)",
    m3RefNeutralNeutral70: "hsl(264, 3%, 68%)",
    m3RefNeutralNeutral80: "hsl(255, 4%, 78%)",
    m3RefNeutralNeutral90: "hsl(270, 7%, 89%)",
    m3RefNeutralNeutral95: "hsl(270, 15%, 95%)",
    m3RefNeutralNeutral98: "hsl(276, 56%, 98%)",
    m3RefNeutralNeutral99: "hsl(285, 100%, 99%)",
    m3RefNeutralNeutralNaN: "hsl(0, 0%, 100%)",
    m3RefPrimaryPrimary0: "hsl(0, 0%, 0%)",
    m3RefPrimaryPrimary10: "hsl(220, 100%, 14%)",
    m3RefPrimaryPrimary100: "hsl(0, 0%, 100%)",
    m3RefPrimaryPrimary15: "hsl(237, 71%, 25%)",
    m3RefPrimaryPrimary20: "hsl(218, 100%, 23%)",
    m3RefPrimaryPrimary25: "hsl(220, 79%, 29%)",
    m3RefPrimaryPrimary30: "hsl(222, 63%, 34%)",
    m3RefPrimaryPrimary35: "hsl(223, 54%, 40%)",
    m3RefPrimaryPrimary40: "hsl(223, 48%, 45%)",
    m3RefPrimaryPrimary5: "hsl(240, 100%, 15%)",
    m3RefPrimaryPrimary50: "hsl(224, 48%, 55%)",
    m3RefPrimaryPrimary60: "hsl(224, 64%, 66%)",
    m3RefPrimaryPrimary70: "hsl(224, 95%, 77%)",
    m3RefPrimaryPrimary80: "hsl(226, 100%, 85%)",
    m3RefPrimaryPrimary90: "hsl(229, 100%, 93%)",
    m3RefPrimaryPrimary95: "hsl(233, 100%, 97%)",
    m3RefPrimaryPrimary98: "hsl(257, 100%, 99%)",
    m3RefPrimaryPrimary99: "hsl(285, 100%, 99%)",
    m3RefSecondarySecondary0: "hsl(0, 0%, 0%)",
    m3RefSecondarySecondary10: "hsl(190, 100%, 7%)",
    m3RefSecondarySecondary100: "hsl(0, 0%, 100%)",
    m3RefSecondarySecondary15: "hsl(237, 22%, 18%)",
    m3RefSecondarySecondary20: "hsl(189, 100%, 12%)",
    m3RefSecondarySecondary25: "hsl(188, 100%, 15%)",
    m3RefSecondarySecondary30: "hsl(188, 100%, 18%)",
    m3RefSecondarySecondary35: "hsl(188, 100%, 21%)",
    m3RefSecondarySecondary40: "hsl(188, 100%, 24%)",
    m3RefSecondarySecondary5: "hsl(237, 40%, 9%)",
    m3RefSecondarySecondary50: "hsl(188, 100%, 29%)",
    m3RefSecondarySecondary60: "hsl(188, 100%, 36%)",
    m3RefSecondarySecondary70: "hsl(189, 68%, 50%)",
    m3RefSecondarySecondary80: "hsl(190, 85%, 64%)",
    m3RefSecondarySecondary90: "hsl(191, 100%, 82%)",
    m3RefSecondarySecondary95: "hsl(193, 100%, 92%)",
    m3RefSecondarySecondary98: "hsl(191, 100%, 97%)",
    m3RefSecondarySecondary99: "hsl(195, 100%, 98%)",
    m3RefTertiaryTertiary0: "hsl(0, 0%, 0%)",
    m3RefTertiaryTertiary10: "hsl(300, 41%, 12%)",
    m3RefTertiaryTertiary100: "hsl(0, 0%, 100%)",
    m3RefTertiaryTertiary15: "hsl(319, 36%, 17%)",
    m3RefTertiaryTertiary20: "hsl(302, 26%, 21%)",
    m3RefTertiaryTertiary25: "hsl(302, 22%, 25%)",
    m3RefTertiaryTertiary30: "hsl(304, 19%, 30%)",
    m3RefTertiaryTertiary35: "hsl(304, 17%, 35%)",
    m3RefTertiaryTertiary40: "hsl(304, 16%, 39%)",
    m3RefTertiaryTertiary5: "hsl(316, 66%, 8%)",
    m3RefTertiaryTertiary50: "hsl(307, 13%, 49%)",
    m3RefTertiaryTertiary60: "hsl(307, 17%, 59%)",
    m3RefTertiaryTertiary70: "hsl(308, 24%, 70%)",
    m3RefTertiaryTertiary80: "hsl(308, 39%, 81%)",
    m3RefTertiaryTertiary90: "hsl(309, 100%, 92%)",
    m3RefTertiaryTertiary95: "hsl(318, 100%, 96%)",
    m3RefTertiaryTertiary98: "hsl(338, 100%, 98%)",
    m3RefTertiaryTertiary99: "hsl(300, 100%, 99%)",
    m3SourceError: "hsl(3, 71%, 41%)",
    m3SourceNeutral: "hsl(276, 3%, 37%)",
    m3SourceNeutralVariant: "hsl(260, 5%, 38%)",
    m3SourcePrimary: "hsl(219, 100%, 18%)",
    m3SourceSecondary: "hsl(193, 4%, 56%)",
    m3SourceSeed: "hsl(219, 100%, 18%)",
    m3SourceTertiary: "hsl(340, 21%, 41%)",
    m3StateLayersDarkBackgroundOpacity008: "hsla(240, 7%, 11%, 0.08)",
    m3StateLayersDarkBackgroundOpacity012: "hsla(240, 7%, 11%, 0.12)",
    m3StateLayersDarkBackgroundOpacity016: "hsla(240, 7%, 11%, 0.16)",
    m3StateLayersDarkErrorContainerOpacity008: "hsla(356, 100%, 29%, 0.08)",
    m3StateLayersDarkErrorContainerOpacity012: "hsla(356, 100%, 29%, 0.12)",
    m3StateLayersDarkErrorContainerOpacity016: "hsla(356, 100%, 29%, 0.16)",
    m3StateLayersDarkErrorOpacity008: "hsla(6, 100%, 84%, 0.08)",
    m3StateLayersDarkErrorOpacity012: "hsla(6, 100%, 84%, 0.12)",
    m3StateLayersDarkErrorOpacity016: "hsla(6, 100%, 84%, 0.16)",
    m3StateLayersDarkInverseOnSurfaceOpacity008: "hsla(240, 7%, 11%, 0.08)",
    m3StateLayersDarkInverseOnSurfaceOpacity012: "hsla(240, 7%, 11%, 0.12)",
    m3StateLayersDarkInverseOnSurfaceOpacity016: "hsla(240, 7%, 11%, 0.16)",
    m3StateLayersDarkInversePrimaryOpacity008: "hsla(223, 48%, 45%, 0.08)",
    m3StateLayersDarkInversePrimaryOpacity012: "hsla(223, 48%, 45%, 0.12)",
    m3StateLayersDarkInversePrimaryOpacity016: "hsla(223, 48%, 45%, 0.16)",
    m3StateLayersDarkInverseSurfaceOpacity008: "hsla(270, 7%, 89%, 0.08)",
    m3StateLayersDarkInverseSurfaceOpacity012: "hsla(270, 7%, 89%, 0.12)",
    m3StateLayersDarkInverseSurfaceOpacity016: "hsla(270, 7%, 89%, 0.16)",
    m3StateLayersDarkOnBackgroundOpacity008: "hsla(270, 7%, 89%, 0.08)",
    m3StateLayersDarkOnBackgroundOpacity012: "hsla(270, 7%, 89%, 0.12)",
    m3StateLayersDarkOnBackgroundOpacity016: "hsla(270, 7%, 89%, 0.16)",
    m3StateLayersDarkOnErrorContainerOpacity008: "hsla(6, 100%, 92%, 0.08)",
    m3StateLayersDarkOnErrorContainerOpacity012: "hsla(6, 100%, 92%, 0.12)",
    m3StateLayersDarkOnErrorContainerOpacity016: "hsla(6, 100%, 92%, 0.16)",
    m3StateLayersDarkOnErrorOpacity008: "hsla(357, 100%, 21%, 0.08)",
    m3StateLayersDarkOnErrorOpacity012: "hsla(357, 100%, 21%, 0.12)",
    m3StateLayersDarkOnErrorOpacity016: "hsla(357, 100%, 21%, 0.16)",
    m3StateLayersDarkOnPrimaryContainerOpacity008: "hsla(229, 100%, 93%, 0.08)",
    m3StateLayersDarkOnPrimaryContainerOpacity012: "hsla(229, 100%, 93%, 0.12)",
    m3StateLayersDarkOnPrimaryContainerOpacity016: "hsla(229, 100%, 93%, 0.16)",
    m3StateLayersDarkOnPrimaryOpacity008: "hsla(218, 100%, 23%, 0.08)",
    m3StateLayersDarkOnPrimaryOpacity012: "hsla(218, 100%, 23%, 0.12)",
    m3StateLayersDarkOnPrimaryOpacity016: "hsla(218, 100%, 23%, 0.16)",
    m3StateLayersDarkOnSecondaryContainerOpacity008:
      "hsla(191, 100%, 82%, 0.08)",
    m3StateLayersDarkOnSecondaryContainerOpacity012:
      "hsla(191, 100%, 82%, 0.12)",
    m3StateLayersDarkOnSecondaryContainerOpacity016:
      "hsla(191, 100%, 82%, 0.16)",
    m3StateLayersDarkOnSecondaryOpacity008: "hsla(189, 100%, 12%, 0.08)",
    m3StateLayersDarkOnSecondaryOpacity012: "hsla(189, 100%, 12%, 0.12)",
    m3StateLayersDarkOnSecondaryOpacity016: "hsla(189, 100%, 12%, 0.16)",
    m3StateLayersDarkOnSurfaceVariantOpacity008: "hsla(235, 10%, 79%, 0.08)",
    m3StateLayersDarkOnSurfaceVariantOpacity012: "hsla(235, 10%, 79%, 0.12)",
    m3StateLayersDarkOnSurfaceVariantOpacity016: "hsla(235, 10%, 79%, 0.16)",
    m3StateLayersDarkOnSurfaceOpacity008: "hsla(270, 7%, 89%, 0.08)",
    m3StateLayersDarkOnSurfaceOpacity012: "hsla(270, 7%, 89%, 0.12)",
    m3StateLayersDarkOnSurfaceOpacity016: "hsla(270, 7%, 89%, 0.16)",
    m3StateLayersDarkOnTertiaryContainerOpacity008:
      "hsla(309, 100%, 92%, 0.08)",
    m3StateLayersDarkOnTertiaryContainerOpacity012:
      "hsla(309, 100%, 92%, 0.12)",
    m3StateLayersDarkOnTertiaryContainerOpacity016:
      "hsla(309, 100%, 92%, 0.16)",
    m3StateLayersDarkOnTertiaryOpacity008: "hsla(302, 26%, 21%, 0.08)",
    m3StateLayersDarkOnTertiaryOpacity012: "hsla(302, 26%, 21%, 0.12)",
    m3StateLayersDarkOnTertiaryOpacity016: "hsla(302, 26%, 21%, 0.16)",
    m3StateLayersDarkOutlineOpacity008: "hsla(235, 5%, 58%, 0.08)",
    m3StateLayersDarkOutlineOpacity012: "hsla(235, 5%, 58%, 0.12)",
    m3StateLayersDarkOutlineOpacity016: "hsla(235, 5%, 58%, 0.16)",
    m3StateLayersDarkPrimaryContainerOpacity008: "hsla(222, 63%, 34%, 0.08)",
    m3StateLayersDarkPrimaryContainerOpacity012: "hsla(222, 63%, 34%, 0.12)",
    m3StateLayersDarkPrimaryContainerOpacity016: "hsla(222, 63%, 34%, 0.16)",
    m3StateLayersDarkPrimaryOpacity008: "hsla(226, 100%, 85%, 0.08)",
    m3StateLayersDarkPrimaryOpacity012: "hsla(226, 100%, 85%, 0.12)",
    m3StateLayersDarkPrimaryOpacity016: "hsla(226, 100%, 85%, 0.16)",
    m3StateLayersDarkSecondaryContainerOpacity008: "hsla(188, 100%, 18%, 0.08)",
    m3StateLayersDarkSecondaryContainerOpacity012: "hsla(188, 100%, 18%, 0.12)",
    m3StateLayersDarkSecondaryContainerOpacity016: "hsla(188, 100%, 18%, 0.16)",
    m3StateLayersDarkSecondaryOpacity008: "hsla(190, 85%, 64%, 0.08)",
    m3StateLayersDarkSecondaryOpacity012: "hsla(190, 85%, 64%, 0.12)",
    m3StateLayersDarkSecondaryOpacity016: "hsla(190, 85%, 64%, 0.16)",
    m3StateLayersDarkShadowOpacity008: "hsla(0, 0%, 0%, 0.08)",
    m3StateLayersDarkShadowOpacity012: "hsla(0, 0%, 0%, 0.12)",
    m3StateLayersDarkShadowOpacity016: "hsla(0, 0%, 0%, 0.16)",
    m3StateLayersDarkSurfaceTintColorOpacity008: "hsla(226, 100%, 85%, 0.08)",
    m3StateLayersDarkSurfaceTintColorOpacity012: "hsla(226, 100%, 85%, 0.12)",
    m3StateLayersDarkSurfaceTintColorOpacity016: "hsla(226, 100%, 85%, 0.16)",
    m3StateLayersDarkSurfaceTintOpacity008: "hsla(226, 100%, 85%, 0.08)",
    m3StateLayersDarkSurfaceTintOpacity012: "hsla(226, 100%, 85%, 0.12)",
    m3StateLayersDarkSurfaceTintOpacity016: "hsla(226, 100%, 85%, 0.16)",
    m3StateLayersDarkSurfaceVariantOpacity008: "hsla(234, 7%, 29%, 0.08)",
    m3StateLayersDarkSurfaceVariantOpacity012: "hsla(234, 7%, 29%, 0.12)",
    m3StateLayersDarkSurfaceVariantOpacity016: "hsla(234, 7%, 29%, 0.16)",
    m3StateLayersDarkSurfaceOpacity008: "hsla(240, 7%, 11%, 0.08)",
    m3StateLayersDarkSurfaceOpacity012: "hsla(240, 7%, 11%, 0.12)",
    m3StateLayersDarkSurfaceOpacity016: "hsla(240, 7%, 11%, 0.16)",
    m3StateLayersDarkTertiaryContainerOpacity008: "hsla(304, 19%, 30%, 0.08)",
    m3StateLayersDarkTertiaryContainerOpacity012: "hsla(304, 19%, 30%, 0.12)",
    m3StateLayersDarkTertiaryContainerOpacity016: "hsla(304, 19%, 30%, 0.16)",
    m3StateLayersDarkTertiaryOpacity008: "hsla(308, 39%, 81%, 0.08)",
    m3StateLayersDarkTertiaryOpacity012: "hsla(308, 39%, 81%, 0.12)",
    m3StateLayersDarkTertiaryOpacity016: "hsla(308, 39%, 81%, 0.16)",
    m3StateLayersLightBackgroundOpacity008: "hsla(285, 100%, 99%, 0.08)",
    m3StateLayersLightBackgroundOpacity012: "hsla(285, 100%, 99%, 0.12)",
    m3StateLayersLightBackgroundOpacity016: "hsla(285, 100%, 99%, 0.16)",
    m3StateLayersLightErrorContainerOpacity008: "hsla(6, 100%, 92%, 0.08)",
    m3StateLayersLightErrorContainerOpacity012: "hsla(6, 100%, 92%, 0.12)",
    m3StateLayersLightErrorContainerOpacity016: "hsla(6, 100%, 92%, 0.16)",
    m3StateLayersLightErrorOpacity008: "hsla(0, 75%, 42%, 0.08)",
    m3StateLayersLightErrorOpacity012: "hsla(0, 75%, 42%, 0.12)",
    m3StateLayersLightErrorOpacity016: "hsla(0, 75%, 42%, 0.16)",
    m3StateLayersLightInverseOnSurfaceOpacity008: "hsla(270, 15%, 95%, 0.08)",
    m3StateLayersLightInverseOnSurfaceOpacity012: "hsla(270, 15%, 95%, 0.12)",
    m3StateLayersLightInverseOnSurfaceOpacity016: "hsla(270, 15%, 95%, 0.16)",
    m3StateLayersLightInversePrimaryOpacity008: "hsla(226, 100%, 85%, 0.08)",
    m3StateLayersLightInversePrimaryOpacity012: "hsla(226, 100%, 85%, 0.12)",
    m3StateLayersLightInversePrimaryOpacity016: "hsla(226, 100%, 85%, 0.16)",
    m3StateLayersLightInverseSurfaceOpacity008: "hsla(240, 4%, 20%, 0.08)",
    m3StateLayersLightInverseSurfaceOpacity012: "hsla(240, 4%, 20%, 0.12)",
    m3StateLayersLightInverseSurfaceOpacity016: "hsla(240, 4%, 20%, 0.16)",
    m3StateLayersLightOnBackgroundOpacity008: "hsla(240, 7%, 11%, 0.08)",
    m3StateLayersLightOnBackgroundOpacity012: "hsla(240, 7%, 11%, 0.12)",
    m3StateLayersLightOnBackgroundOpacity016: "hsla(240, 7%, 11%, 0.16)",
    m3StateLayersLightOnErrorContainerOpacity008: "hsla(358, 100%, 13%, 0.08)",
    m3StateLayersLightOnErrorContainerOpacity012: "hsla(358, 100%, 13%, 0.12)",
    m3StateLayersLightOnErrorContainerOpacity016: "hsla(358, 100%, 13%, 0.16)",
    m3StateLayersLightOnErrorOpacity008: "hsla(0, 0%, 100%, 0.08)",
    m3StateLayersLightOnErrorOpacity012: "hsla(0, 0%, 100%, 0.12)",
    m3StateLayersLightOnErrorOpacity016: "hsla(0, 0%, 100%, 0.16)",
    m3StateLayersLightOnPrimaryContainerOpacity008:
      "hsla(220, 100%, 14%, 0.08)",
    m3StateLayersLightOnPrimaryContainerOpacity012:
      "hsla(220, 100%, 14%, 0.12)",
    m3StateLayersLightOnPrimaryContainerOpacity016:
      "hsla(220, 100%, 14%, 0.16)",
    m3StateLayersLightOnPrimaryOpacity008: "hsla(0, 0%, 100%, 0.08)",
    m3StateLayersLightOnPrimaryOpacity012: "hsla(0, 0%, 100%, 0.12)",
    m3StateLayersLightOnPrimaryOpacity016: "hsla(0, 0%, 100%, 0.16)",
    m3StateLayersLightOnSecondaryContainerOpacity008:
      "hsla(190, 100%, 7%, 0.08)",
    m3StateLayersLightOnSecondaryContainerOpacity012:
      "hsla(190, 100%, 7%, 0.12)",
    m3StateLayersLightOnSecondaryContainerOpacity016:
      "hsla(190, 100%, 7%, 0.16)",
    m3StateLayersLightOnSecondaryOpacity008: "hsla(0, 0%, 100%, 0.08)",
    m3StateLayersLightOnSecondaryOpacity012: "hsla(0, 0%, 100%, 0.12)",
    m3StateLayersLightOnSecondaryOpacity016: "hsla(0, 0%, 100%, 0.16)",
    m3StateLayersLightOnSurfaceVariantOpacity008: "hsla(234, 7%, 29%, 0.08)",
    m3StateLayersLightOnSurfaceVariantOpacity012: "hsla(234, 7%, 29%, 0.12)",
    m3StateLayersLightOnSurfaceVariantOpacity016: "hsla(234, 7%, 29%, 0.16)",
    m3StateLayersLightOnSurfaceOpacity008: "hsla(240, 7%, 11%, 0.08)",
    m3StateLayersLightOnSurfaceOpacity012: "hsla(240, 7%, 11%, 0.12)",
    m3StateLayersLightOnSurfaceOpacity016: "hsla(240, 7%, 11%, 0.16)",
    m3StateLayersLightOnTertiaryContainerOpacity008:
      "hsla(300, 41%, 12%, 0.08)",
    m3StateLayersLightOnTertiaryContainerOpacity012:
      "hsla(300, 41%, 12%, 0.12)",
    m3StateLayersLightOnTertiaryContainerOpacity016:
      "hsla(300, 41%, 12%, 0.16)",
    m3StateLayersLightOnTertiaryOpacity008: "hsla(0, 0%, 100%, 0.08)",
    m3StateLayersLightOnTertiaryOpacity012: "hsla(0, 0%, 100%, 0.12)",
    m3StateLayersLightOnTertiaryOpacity016: "hsla(0, 0%, 100%, 0.16)",
    m3StateLayersLightOutlineOpacity008: "hsla(235, 4%, 48%, 0.08)",
    m3StateLayersLightOutlineOpacity012: "hsla(235, 4%, 48%, 0.12)",
    m3StateLayersLightOutlineOpacity016: "hsla(235, 4%, 48%, 0.16)",
    m3StateLayersLightPrimaryContainerOpacity008: "hsla(229, 100%, 93%, 0.08)",
    m3StateLayersLightPrimaryContainerOpacity012: "hsla(229, 100%, 93%, 0.12)",
    m3StateLayersLightPrimaryContainerOpacity016: "hsla(229, 100%, 93%, 0.16)",
    m3StateLayersLightPrimaryOpacity008: "hsla(223, 48%, 45%, 0.08)",
    m3StateLayersLightPrimaryOpacity012: "hsla(223, 48%, 45%, 0.12)",
    m3StateLayersLightPrimaryOpacity016: "hsla(223, 48%, 45%, 0.16)",
    m3StateLayersLightSecondaryContainerOpacity008:
      "hsla(191, 100%, 82%, 0.08)",
    m3StateLayersLightSecondaryContainerOpacity012:
      "hsla(191, 100%, 82%, 0.12)",
    m3StateLayersLightSecondaryContainerOpacity016:
      "hsla(191, 100%, 82%, 0.16)",
    m3StateLayersLightSecondaryOpacity008: "hsla(188, 100%, 24%, 0.08)",
    m3StateLayersLightSecondaryOpacity012: "hsla(188, 100%, 24%, 0.12)",
    m3StateLayersLightSecondaryOpacity016: "hsla(188, 100%, 24%, 0.16)",
    m3StateLayersLightShadowOpacity008: "hsla(0, 0%, 0%, 0.08)",
    m3StateLayersLightShadowOpacity012: "hsla(0, 0%, 0%, 0.12)",
    m3StateLayersLightShadowOpacity016: "hsla(0, 0%, 0%, 0.16)",
    m3StateLayersLightSurfaceTintColorOpacity008: "hsla(223, 48%, 45%, 0.08)",
    m3StateLayersLightSurfaceTintColorOpacity012: "hsla(223, 48%, 45%, 0.12)",
    m3StateLayersLightSurfaceTintColorOpacity016: "hsla(223, 48%, 45%, 0.16)",
    m3StateLayersLightSurfaceTintOpacity008: "hsla(223, 48%, 45%, 0.08)",
    m3StateLayersLightSurfaceTintOpacity012: "hsla(223, 48%, 45%, 0.12)",
    m3StateLayersLightSurfaceTintOpacity016: "hsla(223, 48%, 45%, 0.16)",
    m3StateLayersLightSurfaceVariantOpacity008: "hsla(235, 22%, 90%, 0.08)",
    m3StateLayersLightSurfaceVariantOpacity012: "hsla(235, 22%, 90%, 0.12)",
    m3StateLayersLightSurfaceVariantOpacity016: "hsla(235, 22%, 90%, 0.16)",
    m3StateLayersLightSurfaceOpacity008: "hsla(285, 100%, 99%, 0.08)",
    m3StateLayersLightSurfaceOpacity012: "hsla(285, 100%, 99%, 0.12)",
    m3StateLayersLightSurfaceOpacity016: "hsla(285, 100%, 99%, 0.16)",
    m3StateLayersLightTertiaryContainerOpacity008: "hsla(309, 100%, 92%, 0.08)",
    m3StateLayersLightTertiaryContainerOpacity012: "hsla(309, 100%, 92%, 0.12)",
    m3StateLayersLightTertiaryContainerOpacity016: "hsla(309, 100%, 92%, 0.16)",
    m3StateLayersLightTertiaryOpacity008: "hsla(304, 16%, 39%, 0.08)",
    m3StateLayersLightTertiaryOpacity012: "hsla(304, 16%, 39%, 0.12)",
    m3StateLayersLightTertiaryOpacity016: "hsla(304, 16%, 39%, 0.16)",
    m3SysDarkBackground: "hsl(240, 7%, 11%)",
    m3SysDarkError: "hsl(6, 100%, 84%)",
    m3SysDarkErrorContainer: "hsl(356, 100%, 29%)",
    m3SysDarkInverseOnSurface: "hsl(240, 7%, 11%)",
    m3SysDarkInversePrimary: "hsl(223, 48%, 45%)",
    m3SysDarkInverseSurface: "hsl(270, 7%, 89%)",
    m3SysDarkOnBackground: "hsl(270, 7%, 89%)",
    m3SysDarkOnError: "hsl(357, 100%, 21%)",
    m3SysDarkOnErrorContainer: "hsl(6, 100%, 92%)",
    m3SysDarkOnPrimary: "hsl(218, 100%, 23%)",
    m3SysDarkOnPrimaryContainer: "hsl(229, 100%, 93%)",
    m3SysDarkOnSecondary: "hsl(189, 100%, 12%)",
    m3SysDarkOnSecondaryContainer: "hsl(191, 100%, 82%)",
    m3SysDarkOnSurface: "hsl(270, 7%, 89%)",
    m3SysDarkOnSurfaceVariant: "hsl(235, 10%, 79%)",
    m3SysDarkOnTertiary: "hsl(302, 26%, 21%)",
    m3SysDarkOnTertiaryContainer: "hsl(309, 100%, 92%)",
    m3SysDarkOutline: "hsl(235, 5%, 58%)",
    m3SysDarkPrimary: "hsl(226, 100%, 85%)",
    m3SysDarkPrimaryContainer: "hsl(222, 63%, 34%)",
    m3SysDarkSecondary: "hsl(190, 85%, 64%)",
    m3SysDarkSecondaryContainer: "hsl(188, 100%, 18%)",
    m3SysDarkShadow: "hsl(0, 0%, 0%)",
    m3SysDarkSurface: "hsl(240, 7%, 11%)",
    m3SysDarkSurfaceTint: "hsl(226, 100%, 85%)",
    m3SysDarkSurfaceTintColor: "hsl(226, 100%, 85%)",
    m3SysDarkSurfaceVariant: "hsl(234, 7%, 29%)",
    m3SysDarkTertiary: "hsl(308, 39%, 81%)",
    m3SysDarkTertiaryContainer: "hsl(304, 19%, 30%)",
    m3SysLightBackground: "hsl(285, 100%, 99%)",
    m3SysLightError: "hsl(0, 75%, 42%)",
    m3SysLightErrorContainer: "hsl(6, 100%, 92%)",
    m3SysLightInverseOnSurface: "hsl(270, 15%, 95%)",
    m3SysLightInversePrimary: "hsl(226, 100%, 85%)",
    m3SysLightInverseSurface: "hsl(240, 4%, 20%)",
    m3SysLightOnBackground: "hsl(240, 7%, 11%)",
    m3SysLightOnError: "hsl(0, 0%, 100%)",
    m3SysLightOnErrorContainer: "hsl(358, 100%, 13%)",
    m3SysLightOnPrimary: "hsl(0, 0%, 100%)",
    m3SysLightOnPrimaryContainer: "hsl(220, 100%, 14%)",
    m3SysLightOnSecondary: "hsl(0, 0%, 100%)",
    m3SysLightOnSecondaryContainer: "hsl(190, 100%, 7%)",
    m3SysLightOnSurface: "hsl(240, 7%, 11%)",
    m3SysLightOnSurfaceVariant: "hsl(234, 7%, 29%)",
    m3SysLightOnTertiary: "hsl(0, 0%, 100%)",
    m3SysLightOnTertiaryContainer: "hsl(300, 41%, 12%)",
    m3SysLightOutline: "hsl(235, 4%, 48%)",
    m3SysLightPrimary: "hsl(223, 48%, 45%)",
    m3SysLightPrimaryContainer: "hsl(229, 100%, 93%)",
    m3SysLightSecondary: "hsl(188, 100%, 24%)",
    m3SysLightSecondaryContainer: "hsl(191, 100%, 82%)",
    m3SysLightShadow: "hsl(0, 0%, 0%)",
    m3SysLightSurface: "hsl(285, 100%, 99%)",
    m3SysLightSurfaceTint: "hsl(223, 48%, 45%)",
    m3SysLightSurfaceTintColor: "hsl(223, 48%, 45%)",
    m3SysLightSurfaceVariant: "hsl(235, 22%, 90%)",
    m3SysLightTertiary: "hsl(304, 16%, 39%)",
    m3SysLightTertiaryContainer: "hsl(309, 100%, 92%)",
    m3White: "hsl(0, 0%, 100%)",
    neutral200: "hsl(0, 0%, 93%)",
    neutral400: "hsl(0, 0%, 79%)",
    neutral50: "hsl(0, 0%, 98%)",
    neutral600: "hsl(0, 0%, 29%)",
    normalBeeLegalBeelegal: "hsl(209, 100%, 18%)",
    normalBg: "hsl(217, 33%, 22%)",
    normalBlack: "hsl(0, 0%, 0%)",
    normalCardContentBg: "hsla(216, 100%, 87%, 0.5)",
    normalGlassBg: "hsla(223, 34%, 48%, 0.5)",
    normalLetterColor: "hsl(221, 15%, 32%)",
    normalStroke: "hsl(212, 34%, 48%)",
    normalWhite: "hsl(0, 0%, 100%)",
    success500Default: "hsl(160, 100%, 42%)",
    success600: "hsl(151, 44%, 50%)",
    successSuccess90: "hsl(160, 100%, 91%)",
    warning500Default: "hsl(40, 100%, 50%)",
    warning600: "hsl(40, 100%, 53%)",
    warningWarning90: "hsl(40, 100%, 89%)",
    uiColorPrimary: "hsl(257, 34%, 48%)",
  },
};

export default theme;