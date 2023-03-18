import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const AdWidget = () => {
    const [ad, setAd] = useState(null);
    const { t } = useTranslation();
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const getShowAd = async () => {
        const response = await fetch("https://api-estore.onrender.com/product/6410faa7b20c7c5aae7194b1");
        const adData = await response.json();
        setAd(adData);
    }
    useEffect(() => {
        getShowAd();
    }, []);

    if (!ad) {
        return null;
    }

    let image = "http://api-estore.onrender.com/storage/" + ad.data.images[0],
        name = ad.data.name,
        price = ad.data.price,
        detail = ad.data.detail;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    {t('sponsored')}
                </Typography>
                <Typography color={medium}>{t('createAd')}</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="ads"
                src={image}
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>{name}</Typography>
                <Typography sx={{ color: "green"}} > {t('price')}: {price}</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                {detail}
            </Typography>
        </WidgetWrapper>
    )
}

export default AdWidget;
