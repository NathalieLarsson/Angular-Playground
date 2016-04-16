export class RootObject {
	heap: number;
	total: number;
	used: number;
	performace: Performace;
	screen: Screen;
	sender: string;
	userAgent: string;
	platform: string;
	currentScript: any;
	href: string;
	frameCount: number;
	timestamp: number;
	loadedTimestamp: number;
	uptime: number;
	host: string;
}

export class Performace {
	timing: Timing;
	cores: number;
	platform: string;
}

export class Timing {
	navigationStart: any;
	unloadEventStart: any;
	unloadEventEnd: any;
	redirectStart: number;
	redirectEnd: number;
	fetchStart: any;
	domainLookupStart: any;
	domainLookupEnd: any;
	connectStart: any;
	connectEnd: any;
	secureConnectionStart: number;
	requestStart: any;
	responseStart: any;
	responseEnd: any;
	domLoading: any;
	domInteractive: any;
	domContentLoadedEventStart: any;
	domContentLoadedEventEnd: any;
	domComplete: any;
	loadEventStart: any;
	loadEventEnd: any;
}

export class Screen {
	availWidth: number;
	availHeight: number;
	availTop: number;
	availLeft: number;
	pixelDepth: number;
	height: number;
	width: number;
	orientationAngle: number;
	orientationType: string;
}