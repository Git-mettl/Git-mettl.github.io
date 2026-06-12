/* ============================================
   UTPRERAK ARCHITECTS — Tailwind Configuration
   Design tokens pulled from DESIGN.md
   ============================================ */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary-container": "#1c1b1b",
                "secondary-fixed-dim": "#c7c6c6",
                "on-primary-fixed-variant": "#474746",
                "surface-bright": "#f9f9f9",
                "surface-container-high": "#e8e8e8",
                "surface-tint": "#5f5e5e",
                "primary-fixed-dim": "#c8c6c5",
                "on-secondary": "#ffffff",
                "inverse-on-surface": "#f0f1f1",
                "on-primary-fixed": "#1c1b1b",
                "primary": "#000000",
                "error-container": "#ffdad6",
                "surface-container": "#eeeeee",
                "tertiary": "#000000",
                "on-tertiary-container": "#838483",
                "tertiary-fixed-dim": "#c6c7c5",
                "on-primary-container": "#858383",
                "on-surface": "#1a1c1c",
                "on-surface-variant": "#444748",
                "surface-variant": "#e2e2e2",
                "surface-dim": "#dadada",
                "surface-container-low": "#f3f3f4",
                "surface-container-lowest": "#ffffff",
                "on-secondary-fixed-variant": "#464747",
                "inverse-surface": "#2f3131",
                "primary-fixed": "#e5e2e1",
                "on-background": "#1a1c1c",
                "on-tertiary": "#ffffff",
                "inverse-primary": "#c8c6c5",
                "surface": "#f9f9f9",
                "outline-variant": "#c4c7c7",
                "outline": "#747878",
                "error": "#ba1a1a",
                "on-primary": "#ffffff",
                "tertiary-fixed": "#e2e3e1",
                "secondary": "#5e5e5e",
                "on-error": "#ffffff",
                "on-secondary-fixed": "#1b1c1c",
                "secondary-fixed": "#e3e2e2",
                "tertiary-container": "#1a1c1b",
                "on-tertiary-fixed": "#1a1c1b",
                "on-error-container": "#93000a",
                "secondary-container": "#e3e2e2",
                "surface-container-highest": "#e2e2e2",
                "on-secondary-container": "#646464",
                "on-tertiary-fixed-variant": "#454746",
                "background": "#f9f9f9"
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            spacing: {
                "stack-md": "24px",
                "gutter": "24px",
                "margin-mobile": "20px",
                "stack-sm": "12px",
                "stack-lg": "48px",
                "unit": "4px",
                "margin-desktop": "80px",
                "section-gap": "128px"
            },
            fontFamily: {
                "body-md": ["Outfit"],
                "headline-sm": ["Outfit"],
                "headline-lg-mobile": ["Outfit"],
                "label-md": ["Outfit"],
                "headline-md": ["Outfit"],
                "headline-lg": ["Outfit"],
                "label-sm": ["Outfit"],
                "body-lg": ["Outfit"],
                "display-lg": ["Outfit"],
                "display-lg-mobile": ["Outfit"]
            },
            fontSize: {
                "body-md": ["16px", { lineHeight: "1.6", fontWeight: "300" }],
                "headline-sm": ["24px", { lineHeight: "1.3", fontWeight: "400" }],
                "headline-lg-mobile": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "300" }],
                "label-md": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "400" }],
                "headline-md": ["32px", { lineHeight: "1.2", fontWeight: "300" }],
                "headline-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" }],
                "label-sm": ["12px", { lineHeight: "1.2", letterSpacing: "0.03em", fontWeight: "400" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "300" }],
                "display-lg": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "300" }],
                "display-lg-mobile": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "300" }]
            }
        }
    }
};
