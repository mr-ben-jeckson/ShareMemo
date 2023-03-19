import { Box, Skeleton, Typography, useTheme } from "@mui/material";
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
    let loading = Boolean(ad);
    const getShowAd = async () => {
        const response = await fetch("https://api-estore.onrender.com/product/6410faa7b20c7c5aae7194b1");
        const adData = await response.json();
        setAd(adData);
    }
    useEffect(() => {
        getShowAd();// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if(!ad) {
        loading = true;
    } else {
        loading = false;
    }
    return (
        <WidgetWrapper>
            {loading ? ( 
                <>
                    <FlexBetween>
                        <Skeleton variant="text" width="50%" sx={{ fontSize: '2rem' }} />
                        <Skeleton variant="text" width="35%" sx={{ fontSize: '1rem'}} />
                    </FlexBetween>
                    <FlexBetween>
                        <Skeleton variant="rectangular" height="150px" width="100%" sx={{ borderRadius: "0.5rem" }} />
                    </FlexBetween>
                    <Box mt="0.5rem">
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                    </Box>
                </>
            ) : (
                <>
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
                        src={`http://api-estore.onrender.com/storage/${ad.data.images[0]}`}
                        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
                    />
                    <FlexBetween>
                        <Typography color={main}>{ad.data.name}</Typography>
                        <Typography sx={{ color: "green" }} > {t('price')}: {ad.data.price}</Typography>
                    </FlexBetween>
                    <Typography color={medium} m="0.5rem 0">
                        {ad.data.detail}
                    </Typography>
                </>
            )}
        </WidgetWrapper>
    )
}

export default AdWidget;
