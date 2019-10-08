window.onload = function () {
    /**封装getElementById方法，获得元素更便捷 */
    function getElebyId(id) {
        if (id === null || typeof (id) != 'string') throw new Exception('ID is illegal');
        return document.getElementById(id)
    }
    /**更改页面显示靠的是修改元素的className，这个方法能让其他页面的display变为none，从而达到隐藏效果 */
    function hidePage(idx) {
        for (i = 0; i < pages.length; i++) {
            if (i === idx) continue;
            pages[i].className = "body-inactive"
        }
    }
    /**页面到页面之间的过渡效果，通过修改透明度来达到 */
    function transition(pgidx) {
        if (pages[pgidx].style.opacity != 0) pages[pgidx].style.opacity = 0
        setTimeout(function () { //直接使用display属性过渡是不行的，只能依靠异步修改透明度实现
            pages[pgidx].style.opacity = 1
        }, 500)
    }
    var pages = document.getElementsByTagName('section');
    var buttons = []
    var Product = getElebyId('Product'),
        News = getElebyId('News'),
        AboutIPI = getElebyId('About IPI'),
        TS = getElebyId('Technical service');
    var Ring = getElebyId('IPI-ring'),
        Pen = getElebyId("IPI-pen"),
        Profiler = getElebyId("IPI-profiler"),
        contact = getElebyId("contact")
    var Productfooter = getElebyId("Product-footer"),
        Ringfooter = getElebyId('Ring-footer'),
        Penfooter = getElebyId("Pen-footer"),
        profilerfooter = getElebyId("Profiler-footer"),
        TSfooter = getElebyId("TS-footer"),
        Aboutfooter = getElebyId("About-footer"),
        Newsfooter = getElebyId("News-footer")
    pages[0].style.opacity = 1 //打开网页时初始化首页的透明度，从而使首页先展示出来
    buttons.push(Product, TS, AboutIPI, News, Pen, Ring, Profiler, contact, Productfooter, Ringfooter, Penfooter, profilerfooter, TSfooter, Aboutfooter, Newsfooter);
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (['Product', "Product-footer"].includes(button.id)) {
                hidePage(0)
                pages[0].className = "body-section"
                transition(0)
            } else if (["Technical service", "TS-footer"].includes(button.id)) {
                hidePage(1)
                pages[1].className = "body-section2"
                transition(1)
            } else if (["About IPI", "About-footer"].includes(button.id)) {
                hidePage(2)
                pages[2].className = "body-section3"
                transition(2)
            } else if (["News", "News-footer"].includes(button.id)) {
                hidePage(4)
                pages[4].className = "body-section5"
                transition(4)
            } else if (["IPI-pen", "Pen-footer"].includes(button.id)) {
                hidePage(5)
                pages[5].className = "body-section6"
                transition(5)
            } else if (["IPI-ring", "Ring-footer"].includes(button.id)) {
                hidePage(6)
                pages[6].className = "body-section6"
                transition(6)
            } else if (["IPI-profiler", "Profiler-footer"].includes(button.id)) {
                hidePage(7)
                pages[7].className = "body-section6"
                transition(7)
            } else if (button.id.includes("contact")) {
                //将contact放在前面，其他元素的id会被篡改，该问题待解决
                hidePage(3)
                pages[3].className = "body-section4"
                transition(3)
            }
        })
    })
}