var index = {
    arrayFunction: function(array, id) {
        var _ul = document.createElement("ul");
        array.forEach(function(items) {
            var _split = items.split(' ').join(' | ').replaceAll('_', ' ');
            var listItem = document.createElement("li");
            var anchor = document.createElement("a");
            anchor.textContent = _split;
            anchor.href = items;
            listItem.appendChild(anchor);
            _ul.appendChild(listItem);
        });
        document.getElementById(id).appendChild(_ul);
    },  
    navBar: function() {
        var nav = ['home', 'invetory', 'specials', 'finance', 'service', 'parts', 'collision_center', 'dealership', 'contact_us', 'map'];
        this.arrayFunction(nav, "nav-button");
    },
    featuresLink: function() {
        var links = ['Quick_Quote', 'Schedule_Service', 'Get_Pre-Approve', 'Honda_E-Store', 'Collision_Center', 'Employment_Center'];
        this.arrayFunction(links, "a-collection");
    },
    footer: function() {
        var carArray = ['Accord_Coupe ', 
                        'Accord_Sedan ', 
                        'Civic_Coupe ', 
                        'Civic_GX ', 
                        'Civic_Hybrid ', 
                        'Civic_Sedan ', 
                        'Civic_SI_Coupe ', 
                        'Civic_SI_Sedan ', 
                        'Crosstour ', 
                        'CR-V ', 
                        'CR-Z ' , 
                        'Element ', 
                        'FCX_Clarity ', 
                        'Fit ', 
                        'Fit_EV ', 
                        'Insight ', 
                        'Odyssey ', 
                        'Pilot ', 
                        'Ridgline ', 
                        'S2000'];

        this.arrayFunction(carArray, "cars");
    },
    spinnerWidget: function() {
        const _spinner = document.querySelector(".spinner");


        setTimeout(() =>{
           _spinner.style.display = "none";
        }, 1000)
    },
    innerWidthCheck: function() {
        var innerWidth = window.innerWidth,
            _class = document.getElementsByClassName('offer-cars');

        if (innerWidth >= 1730) {
            Array.from(_class).forEach(function(element) {
                element.classList.remove("row-cols-xxl-2");
                element.classList.add("row-cols-xxl-3");
            });
        }
    },
    init: function() {
        this.spinnerWidget();
        this.navBar();
        this.featuresLink();
        this.footer();
        this.innerWidthCheck();
    }
}


index.init();