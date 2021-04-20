
    window.firstPageId = 'l7u0m'
    window.bi.sendBeat(12, 'Partially visible', {pageId: window.firstPageId})
    if (!window.__browser_deprecation__) {
		window.fedops.phaseMark('partially_visible')
	}
