
const Conservation = (props) => {



    return (
    <>
        <h1 class='header'>Conservation Info Page</h1>
        <br/>
        <h3 class='header'>12 Most Endangered Species</h3>
         {/* ======================= ENDANGERED IMAGE CAROUSEL ======================= */}
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://www.bbva.com/wp-content/uploads/2021/03/BBVA-efecto-invernadero-apertura-sostenibilidad.jpg" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="Polar Bear"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Polar Bear</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>The largest bear in the world and the Arctic's top predator, polar bears are a powerful symbol of the strength and endurance of the Arctic. Polar bears spend over 50% of their time hunting for food. A polar bear might catch only one or two out of 10 seals it hunts, depending on the time of year and other variables. Their diet mainly consists of ringed and bearded seals because they need large amounts of fat to survive.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://wallpaperaccess.com/full/732456.jpg" id='carouselImg' class="d-block d-md-block w-100" alt="Pandas"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Pandas</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>The panda, with its distinctive black and white coat, is adored by the world and considered a national treasure in China. Pandas live mainly in temperate forests high in the mountains of southwest China, where they subsist almost entirely on bamboo. They must eat around 26 to 84 pounds of it every day, depending on what part of the bamboo they are eating. They use their enlarged wrist bones that function as opposable thumbs.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-harvey-sapir-1054655.jpg&fm=jpg" id='carouselImg' class="d-block d-md-block w-100" alt="The Elephant"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>The Elephant</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>Elephants are the largest land mammals on earth and have distinctly massive bodies, large ears, and long trunks. They use their trunks to pick up objects, trumpet warnings, greet other elephants, or suck up water for drinking or bathing, among other uses.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1570913179118-f3d24be1d1f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="The Whale"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>The Whale</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>Whales are the largest animals on Earth and they live in every ocean. The massive mammals range from the 600-pound dwarf sperm whale to the colossal blue whale, which can weigh more than 200 tons and stretch up to 100 feet long.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://wallpaperaccess.com/full/1691272.jpg" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="Chimpanzee"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>The Chimpanzee</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>The chimpanzee, also known simply as chimp, is a species of great ape native to the forest and savannah of tropical Africa. It has four confirmed subspecies and a fifth proposed subspecies. The chimpanzee and the closely related bonobo are classified in the genus Pan.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://wallpaperaccess.com/full/1080952.jpg" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="Mountain Gorilla"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>The Mountain Gorilla</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>The mountain gorilla is one of the two subspecies of the eastern gorilla. It is listed as endangered by the IUCN as of 2018. There are about a thousand mountain gorillas remaining on Earth, and about half live in the forests of the Virunga mountains in central Africa.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://wallpaperaccess.com/full/1471263.jpg" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="Snow Leopard"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>The Snow Leopard</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>The Snow Leopard, also known as the ounce, is a felid in the genus Panthera native to the mountain ranges of Central and South Asia. It is listed as Vulnerable on the IUCN Red List because the global population is estimated to number fewer than 10,000 mature individuals and is expected to decline about 10% by 2040.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://previews.123rf.com/images/promesaartstudio/promesaartstudio1905/promesaartstudio190500780/128399719-the-sumatran-tiger-panthera-tigris-sumatrae-in-the-indonesian-island-of-sumatra-.jpg" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="The Tiger of Sumatra"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>The Sumatran Tiger</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>The Sumatran Tiger is a population of Panthera tigris sondaica on the Indonesian island of Sumatra. This population was listed as Critically Endangered on the IUCN Red List in 2008, as it was estimated at 441 to 679 individuals, with no subpopulation larger than 50 individuals and a declining trend.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://wallpaperaccess.com/full/1780453.jpg" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="The Rhinoceros"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>The Rhinoceros</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>A rhinoceros, commonly abbreviated to rhino, is a member of any of the five extant species of odd-toed ungulates in the family Rhinocerotidae. Two of the extant species are native to Africa, and three to South and Southeast Asia. </p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://wallpaperaccess.com/full/162119.jpg" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="The Turtles"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Turtles</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>Turtles are an order of reptiles known as Testudines, characterized by a shell developed mainly from their ribs. Modern turtles are divided into two major groups, the side-necked turtles and hidden neck turtles, which differ in the way the head retracts.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://images.immediate.co.uk/production/volatile/sites/23/2021/03/Amazon-river-dolphin.-GettyImages-450061621-481e60f.jpg" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="The Fresh Water Dolphin"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>The River Dolphin</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>River dolphins are a polyphyletic group of fully aquatic mammals that reside exclusively in freshwater or brackish water. They are an informal grouping of dolphins, which itself is a paraphyletic group within the infraorder Cetacea. Extant river dolphins are placed in two superfamilies, Platanistoidea and Inioidea.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://images6.alphacoders.com/870/870751.jpg" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="The Whale Shark"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>The Whale Shark</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>The whale shark is a slow-moving, filter-feeding carpet shark and the largest known extant fish species. The largest confirmed individual had a length of 18.8 m. The whale shark holds many records for size in the animal kingdom, most notably being by far the largest living nonmammalian vertebrate.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        {/* ========================================================================== */}
        <p>
        Human action is behind the threat of extinction of these species: poaching of tigers, elephants and rhinoceroses, capture of turtles, and destruction of habitats where species such as chimpanzees, polar bears and pandas live due to the consequences of climate change. Since 1980, greenhouse gas emissions have doubled, raising average global temperatures by at least 0.7 degrees Celsius, causing climate change to affect nature not only at the ecosystem level, but also in terms of species genetics. In the context of the Conference of the Parties to the Convention on Biological Diversity, which in 2021 will lay down new guidelines for the coming decades, some experts have suggested setting a target of fewer than 20 newly extinct species per year.
        </p>
        <h3 class='header'>Mass extinctions</h3>
        <p>
            Although extinction events have happened on the planet for millions of years, the data show that intervals between extinctions are becoming shorter and shorter while the disappearance of species is advancing relentlessly. The IPBES Chair, Sir Robert Watson, has stated that, "The health of ecosystems on which we and all other species depend is deteriorating more rapidly than ever."
        </p>
        <p>
            The first mass extinction, also known as the 'Ordovician-Silurian' event, took place 443 million years ago, and lasted at least 500,000 years and possibly a million years. During that period, 86% of the species that existed at the time disappeared. They were mainly marine species. The reason for extinction was glaciation and a concomitant decrease in the oxygen available for survival.
        </p>
        <p>
            The second, or 'Devonian-Carboniferous', mass extinction came about 367 million years ago. It lasted for three million years, during which time 82% of existing species disappeared. The causes included a proliferation of algae from the emergence of land-based plants that, by turning the soil, released nutrients into the ocean. The algae, by taking oxygen from the water, caused the disappearance of much of marine animal life.
        </p>
        <p>
            The third mass extinction event took place 251 million years ago. Also known as the Permian-Triassic extinction, the process lasted one million years and led to the disappearance of 96% of species. The reason? Volcanic activity—which, according to scientists, perhaps also contributed to the disappearance of 76% of species during the 'Triassic-Jurassic' event, the fourth mass extinction. That event took place 210 million years ago and lasted a million years.
        </p>
        <p>
            The fifth mass extinction came about 65 million years ago, and saw the end of the dinosaurs and many other organisms. Also known as the 'Cretaceous-Paleogene' mass extinction, it involved the disappearance of 76% of species. The impact of a large asteroid in the Yucatan Peninsula, Mexico, put an end to the dinosaur era.
        </p>
        <h3 class='header'>Endangered wildlife</h3>
        <div class='infoContainer'>
            <p>IPBES's 2019 Global Assessment Report on Biodiversity and Ecosystem Services notes that more than one million animal and plant species are at risk of extinction over the next few decades. Currently, the International Union for Conservation of Nature's Red List of Threatened Species, a critical indicator of the health of the world's biodiversity comprising assessments of numerous species groups, including mammals, amphibians, birds, reef-building corals and conifers, shows that of nearly 130,000 species, more than 35,500 species are endangered. Of this figure, 40% are amphibians, 34% conifers, 33% reef-building corals, 26% mammals and 14% birds.</p>
            <img id='infoImg'src="https://i.imgur.com/WgSA0zh.png"></img>
            </div>
            <h3 class='header'>7 Biggest threats to wildlife</h3>

            {/* ======================= THREATS IMAGE CAROUSEL ======================= */}
            <div id="infoCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#infoCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#infoCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#infoCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#infoCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#infoCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#infoCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#infoCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://media.istockphoto.com/photos/madagascar-picture-id520984902?k=20&m=520984902&s=612x612&w=0&h=zdm0dT2U8ANHpMIY5yAyVp1uKTt8QawzP2Nlf5UFvtE=" id='carouselImg' class="d-block d-md-block d-lg-block w-100" alt="Habitat Loss"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Habitat Loss</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>Habitat loss poses the greatest threat to species. The world's forests, swamps, plains, lakes, and other habitats continue to disappear as they are harvested for human consumption and cleared to make way for agriculture, housing, roads, pipelines and the other hallmarks of industrial development.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://www.gannett-cdn.com/media/2019/06/06/USATODAY/usatsports/gettyimages-1079098104.jpg" id='carouselImg' class="d-block d-md-block w-100" alt="Pollution"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Pollution</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>Every day the byproducts of our daily lives—sewage, exhaust, trash, agricultural and lawn chemicals, industrial and powerplant emissions, and more—make their way via the air and water into the natural environment and become pollutants. As big as our planet is, it's not big enough to dilute or absorb all the waste, chemicals, and nutrients that billions of people are continuously producing.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://image.cnbcfm.com/api/v1/image/106054996-1564686730915gettyimages-1077918352.jpeg?v=1564686790&w=1600&h=900" id='carouselImg' class="d-block d-md-block w-100" alt="Overexploitation"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Overexploitation</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>Overharvesting, or overfishing in the case of fish and marine invertebrates, depletes some species to very low numbers and drives others to extinction. In practical terms, it reduces valuable living resources to such low levels that their exploitation is no longer sustainable.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://www.futurity.org/wp/wp-content/uploads/2016/04/crowded_beach_1170.jpg" id='carouselImg' class="d-block d-md-block w-100" alt="Invasive Species"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Invasive Species</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>Invasive species can change the food web in an ecosystem by destroying or replacing native food sources. The invasive species may provide little to no food value for wildlife. Invasive species can also alter the abundance or diversity of species that are important habitat for native wildlife.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://www.edf.org/sites/default/files/facebook_thumb/GettyImages-155141288-polar-bear-1200x630-2.jpg" id='carouselImg' class="d-block d-md-block w-100" alt="Climate Change"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Climate Change</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>Climate change has produced a number of threats to wildlife throughout our parks. Rising temperatures lower many species survival rates due to changes that lead to less food, less successful reproduction, and interfering with the environment for native wildlife.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Chytridiomycosis.jpg/1200px-Chytridiomycosis.jpg" id='carouselImg' class="d-block d-md-block w-100" alt="Disease"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Disease</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>Disease outbreaks that do not cause direct mortality may also affect populations by reducing reproductive rates (Breed et al., 2009), which can slow a species recovery following a disturbance and make populations more vulnerable to stochastic extinction.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://as2.ftcdn.net/v2/jpg/01/18/39/29/1000_F_118392948_APiQQNGIDVVj7j8VkFcL9yoX1cAs5K85.jpg" id='carouselImg' class="d-block d-md-block w-100" alt="Illegal Wildlife Trade"/>
                <div class="carousel-caption d-block d-md-block" id='carouselCaptionName'>
                    <h5>Illegal Wildlife Trade</h5>
                </div>
                <div class="carousel-caption d-none d-md-block" id='carouselCaption'>
                    <p>The illegal wildlife trade is the fourth largest criminal industry in the world, after drugs, arms, and human trafficking. Gathering in over $US20 billion a year, it is also one of the biggest threats to some of the most iconic species on the planet, like the rhino and the elephant. Wildlife trade is a serious conservation problem, has a negative effect on the viability of many wildlife populations and is one of the major threats to the survival of vertebrate species. The illegal wildlife trade has been linked to the emergence and spread of new infectious diseases in humans, including emergent viruses. </p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#infoCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#infoCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
            {/* ====================================================================== */}
            <h3 class='header'>How Many Species Occupy the Earth?</h3>
            <div class='container'>
            <table class="table">
            <thead class="table-dark">
                <tr class="table-dark">
                    <th scope="col">Species</th>
                    <th scope="col">Earth</th>
                    <th scope="col">Ocean</th>
                </tr>
            </thead>
            <tbody class="table-dark">
                <tr class="table-dark">
                    <th scope="row"></th>
                    <td>Catalouged</td>
                    <td>Catalogued</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">Plantae</th>
                    <td>215,644</td>
                    <td>8,600</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">Protozoa</th>
                    <td>8,118</td>
                    <td>8,118</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row">Total</th>
                    <td>1,233,500</td>
                    <td>193,756</td>
                </tr>
            </tbody>
            </table>
        </div>
            <p>The IUCN monitors the world's species, which raises the question: How many species currently occupy the planet?In 2016, researchers declared their collective belief that over one trillion species currently occupy the Earth. However, scientists have only observed and described about one-thousandth of one percent of them, or 7 to 10 million.The typical lifespan of a species is 10 million years. However, some stick around for hundreds of millions of years. For example, jellyfish have lived on Earth for nearly 550 million years!</p>

            <h3 class='header'>What is the Red List?</h3>
            <p>The International Union for the Conservation of Nature is perhaps best known for creating the IUCN Red List of Threatened Species, a detailed accounting of the world's vulnerable and endangered species. The list started in 1964 and details at-risk taxons, for both plants and animals, which are separated into several categories.</p>

            <h3 class='header'>How Many Animals are Currently Endangered?</h3>
            <p>You may be wondering: How many animals are endangered, or what animals are endangered in 2020? For the most recent version of the list, IUCN researchers and scientists evaluated 63,837 species. Of that number, 19,817 are threatened with extinction; 3,947 landed in the Critically Endangered category; 5,766 qualified as Endangered, and over 10,000 species are listed under Vulnerable.</p>
        <div class='infoContainer1'>
            <h2 class='header'>Below is the International Union for the Conservation of Nature (IUCN)'s nine categories of endangered animal lists.</h2>
                {/* <img class='redListImg'src="https://i.imgur.com/K4smaES.png" alt='img'/> */}
        <div class='container'>
            <table class="table">
            <thead class="table-dark">
                <tr class="table-dark">
                    <th scope="col">Image ID</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody class="table-dark">
                <tr class="table-dark">
                    <th scope="row" width='10%'>
                        <img id='tableImg'src="https://a-z-animals.com/media/ex.jpg" alt='img'/>
                    </th>
                    <td>Extinct (EX) — Extinct species no longer exist. After exhaustive research, scientists around the world agree that there isn't a single living individual of the species on the planet. Interestingly, 99 percent of all species that ever graced the Earth over the past five billion years have gone extinct.</td>
                </tr>
                <tr class="table-dark">
                <th scope="row" width='10%'>
                        <img id='tableImg'src="https://a-z-animals.com/media/ew.jpg" alt='img'/>
                    </th>
                    <td>Extinct in the wild (EW) — Species that only survive in captivity, cultivation, or outside their native range are deemed “extinct in the wild.” For example, if only 10 individuals of a rare bird are left, and they all live in zoos or on a single nature preserve, the IUCN would classify the species as extinct in the wild.</td>
                </tr>
                <tr class="table-dark">
                <th scope="row" width='10%'>
                        <img id='tableImg'src="https://a-z-animals.com/media/cr.jpg" alt='img'/>
                    </th>
                    <td>Critically endangered (CR)  — Critically endangered species are on the brink of becoming extinct or extinct in the wild but have not yet met the criteria for either category.</td>
                </tr>
                <tr class="table-dark">
                <th scope="row" width='10%'>
                        <img id='tableImg'src="https://a-z-animals.com/media/en.jpg" alt='img'/>
                    </th>
                    <td>Endangered (EN) — Endangered species are at a very high risk of becoming extinct in the wild or extinct. For an animal to be added to the category, it must meet specific criteria regarding population or habitat decline.</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row" width='10%'>
                        <img id='tableImg'src="https://a-z-animals.com/media/vu.jpg" alt='img'/>
                    </th>
                    <td>Vulnerable (VU) — Vulnerable species meet at least one of the five Red List criteria. They're considered to be at high risk of human-caused extinction if conservationists don't intervene. For the IUCN to add a taxon to the Vulnerable animals list, it must meet specific criteria regarding population or habitat decline.</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row" width='10%'>
                        <img id='tableImg'src="https://a-z-animals.com/media/nt.jpg" alt='img'/>
                    </th>
                    <td>Near threatened (NT) — A species is considered Near Threatened when it doesn't qualify as Critically Endangered, Endangered, or Vulnerable, but scientists believe it will reach one of those levels in the near future.</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row" width='10%'>
                        <img id='tableImg'src="https://a-z-animals.com/media/lc.jpg" alt='img'/>
                    </th>
                    <td>Least concern (LC) — Species that fall into the Least Concern category are not presently facing any population or habitat declines.</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row" width='10%'>
                        <img id='tableImg'src="https://a-z-animals.com/media/dd.png" alt='img'/>
                    </th>
                    <td>Data deficient (DD) — Data deficient species lack enough information to properly categorize into one of the groups above.</td>
                </tr>
                <tr class="table-dark">
                    <th scope="row" width='10%'>
                        <img id='tableImg'src="https://a-z-animals.com/media/ne.png" alt='img'/>
                    </th>
                    <td>Not evaluated (NE) — This species has not been evaluated for an IUCN categorization yet.</td>
                </tr>

            </tbody>
            </table>
        </div>

        </div>
    </>
    )
}


export default Conservation