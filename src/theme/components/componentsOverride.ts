export const componentsOverride = {
    MuiTextField: {
        styleOverrides: {
            root: {
                label: {
                    color: "black",
                },
                input: {
                    color: "black",
                },
                div: {
                    '&:hover': {
                        borderColor: 'black !important',
                    },
                    "&::before": {
                        content: "''",
                        borderColor: 'rgba(0,0,0, .7) !important',
                    },
                },
            },
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                color: "#AAA",
                paddingRight: 10,
                transition: '0.15s',
                svg: {
                    width: 20,
                    height: 20,
                },
                '&:hover': {
                    color: "black",
                }
            },
        }
    },
    MuiTypography: {
        styleOverrides: {
            root: {
                color: "black",
            },
        }
    },
};
