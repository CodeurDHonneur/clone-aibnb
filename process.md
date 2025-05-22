* création du projet 
* récupération des datas (fichier.json)
* installation des librairies :
  * react-icons
  * @reduxjs/toolkit react-redux
  * react-router-dom
* Création du composant `Home (page)`, `Nav (composant)`, `Search (composant)`
* Activation du routage dans l'application : `BrowserRouter`, `Routes`, `Route` avec `Home` comme page principale
* Mise en place du contenu de la `Nav` : 
  1. airbnb
  2. navigation : Logements, Expériences, Expériences en ligne
  3. icone globe et suivant
  4. Mise en place du contenu du composant `Search` 
* Création du composant `Categories (composant)`
   * Apport des icones et de la variable `categoriesList`
   * méthode `handleScroll`
   * fonctionnement du `scroll` : 
   * Il est constitué de plusieurs balises qui sont les suivantes : 
       * le conteneur principal qui est une `div`. les éléments enfants qu'il contient sont les suivants : 
            * le bouton de scroll gauche  
            * une `div` contenant la `div`, parente des catégories. Sa particularité est le `overflow` pour cacher la partie de son enfant qui déborde.
                 * l'enfant contenant les catégories a la particularité d'avoir un `transform` qui à chaque scroll lui permet de glisser dans son parent soit de la gauche vers la droite, soit de la droite vers la gauche.
                 * un clique droit fait glisser l'élément vers la gauche
                 * un clique gauche fait glisser l'élement vers la droite
            * le bouton de scroll droit
            * le bouton de filtrage
        * `handleScroll` 

* Liste des icones par composant : 
  * Nav 
     * FaAirbnb  
     * TbWorld
     * IoIosMenu
     * FaRegCircleUser
   
   * Categories
     *  SiOpensea
     *  SiCampaignmonitor
     *  GrOverview
     *  MdOutlinePool
     *  MdCabin
     *  MdOutlineSurfing
     *  MdOutlineTwoWheeler
     *  GiBigDiamondRing
     *  GiFarmTractor
     *  GiRiver
     *  GiCampingTent
     *  GiIsland
     *  GiLuckyFisherman
     *  GiMountainCave
     *  GiGrapes
     *  GiTreeBranch
     *  GiWaterfall
     *  GiCastle
     *  GiWheat
     *  GiYinYang
     *  FaSkiing
     *  RiArrowLeftSLine
     *  RiArrowRightSLine
     *  IoFilterSharp