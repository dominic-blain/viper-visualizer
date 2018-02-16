const TOKENS = {
	"width-fullscreen": {
		"name": "width-fullscreen",
		"label": "Fullscreen",
		"type": "range",
		"value": 1920,
		"unit": "px",
		"range": {
			"min": 100,
			"max": 2100
		}
	},
	"width-site": {
		"name": "width-site",
		"label": "Site",
		"type": "range",
		"value": 1440,
		"unit": "px",
		"range": {
			"min": 100,
			"max": 2100
		}
	},
	"width-extra-wide": {
		"name": "width-extra-wide",
		"label": "Extra wide",
		"type": "range",
		"value": 1200,
		"unit": "px",
		"range": {
			"min": 100,
			"max": 2100
		}
	},
	"width-wide": {
		"name": "width-wide",
		"label": "Wide",
		"type": "range",
		"value": 900,
		"unit": "px",
		"range": {
			"min": 100,
			"max": 2100
		}
	},
	"width-current": {
		"name": "width-current",
		"label": "Current",
		"type": "range",
		"value": 600,
		"unit": "px",
		"range": {
			"min": 100,
			"max": 2100
		}
	},
	"width-narrow": {
		"name": "width-narrow",
		"label": "Narrow",
		"type": "range",
		"value": 400,
		"unit": "px",
		"range": {
			"min": 100,
			"max": 2100
		}
	},
	"width-extra-narrow": {
		"name": "width-extra-narrow",
		"label": "Extra Narrow",
		"type": "range",
		"value": 200,
		"unit": "px",
		"range": {
			"min": 100,
			"max": 2100
		}
	},
	"gutter-big": {
		"name": "gutter-big",
		"label": "Big",
		"type": "range",
		"value": 80,
		"unit": "px",
		"range": {
			"min": 0,
			"max": 200
		}
	},
	"gutter-normal": {
		"name": "gutter-normal",
		"label": "Normal",
		"type": "range",
		"value": 50,
		"unit": "px",
		"range": {
			"min": 0,
			"max": 200
		}
	},
	"gutter-small": {
		"name": "gutter-small",
		"label": "Small",
		"type": "range",
		"value": 20,
		"unit": "px",
		"range": {
			"min": 0,
			"max": 200
		}
	},
	"vertical-spacing-big": {
		"name": "vertical-spacing-big",
		"label": "Big",
		"type": "range",
		"value": 100,
		"unit": "px",
		"range": {
			"min": 0,
			"max": 500
		}
	},
	"vertical-spacing-normal": {
		"name": "vertical-spacing-normal",
		"label": "Normal",
		"type": "range",
		"value": 60,
		"unit": "px",
		"range": {
			"min": 0,
			"max": 500
		}
	},
	"vertical-spacing-small": {
		"name": "vertical-spacing-small",
		"label": "Small",
		"type": "range",
		"value": 20,
		"unit": "px",
		"range": {
			"min": 0,
			"max": 500
		}
	},
	"font-size-title-extra-big": {
		"name": "font-size-title-extra-big",
		"label": "Size",
		"type": "range",
		"value": 60,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-title-big": {
		"name": "font-size-title-big",
		"label": "Size",
		"type": "range",
		"value": 48,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-title-normal": {
		"name": "font-size-title-normal",
		"label": "Size",
		"type": "range",
		"value": 36,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-title-small": {
		"name": "font-size-title-small",
		"label": "Size",
		"type": "range",
		"value": 24,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-title-extra-small": {
		"name": "font-size-title-extra-small",
		"label": "Size",
		"type": "range",
		"value": 16,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-text-big": {
		"name": "font-size-text-big",
		"label": "Size",
		"type": "range",
		"value": 24,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-text-normal": {
		"name": "font-size-text-normal",
		"label": "Size",
		"type": "range",
		"value": 18,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-text-small": {
		"name": "font-size-text-small",
		"label": "Size",
		"type": "range",
		"value": 14,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-label-big": {
		"name": "font-size-label-big",
		"label": "Size",
		"type": "range",
		"value": 16,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-label-normal": {
		"name": "font-size-label-normal",
		"label": "Size",
		"type": "range",
		"value": 14,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-size-label-small": {
		"name": "font-size-label-small",
		"label": "Size",
		"type": "range",
		"value": 12,
		"unit": "px",
		"range": {
			"min": 5,
			"max": 200
		}
	},
	"font-family-title-extra-big": {
		"name": "font-family-title-extra-big",
		"label": "Font",
		"type": "font",
		"value": "Georgia"
	},
	"font-family-title-big": {
		"name": "font-family-title-big",
		"label": "Font",
		"type": "font",
		"value": "Georgia"
	},
	"font-family-title-normal": {
		"name": "font-family-title-normal",
		"label": "Font",
		"type": "font",
		"value": "Georgia"
	},
	"font-family-title-small": {
		"name": "font-family-title-small",
		"label": "Font",
		"type": "font",
		"value": "Georgia"
	},
	"font-family-title-extra-small": {
		"name": "font-family-title-extra-small",
		"label": "Font",
		"type": "font",
		"value": "Georgia"
	},
	"font-family-text-big": {
		"name": "font-family-text-big",
		"label": "Font",
		"type": "font",
		"value": "Helvetica, Arial"
	},
	"font-family-text-normal": {
		"name": "font-family-text-normal",
		"label": "Font",
		"type": "font",
		"value": "Helvetica, Arial"
	},
	"font-family-text-small": {
		"name": "font-family-text-small",
		"label": "Font",
		"type": "font",
		"value": "Helvetica, Arial"
	},
	"font-family-label-big": {
		"name": "font-family-label-big",
		"label": "Font",
		"type": "font",
		"value": "Helvetica, Arial"
	},
	"font-family-label-normal": {
		"name": "font-family-label-normal",
		"label": "Font",
		"type": "font",
		"value": "Helvetica, Arial"
	},
	"font-family-label-small": {
		"name": "font-family-label-small",
		"label": "Font",
		"type": "font",
		"value": "Helvetica, Arial"
	}
};

export default TOKENS;
