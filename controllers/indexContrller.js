
const prodects = require('../models/Prodects')
const User = require('../models/User')

const Category = require('../models/Categorys');


// get
// home page
exports.landingPage = async (req, res) => {
    try {
        const limitNumber = 5;

        const categories = await Category.find({}).limit(limitNumber);
        const latest = await prodects.find({}).sort({ _id: -1 }).limit(limitNumber);
        const Vehicles = await prodects.find({ 'category': 'Vehicles' }).limit(limitNumber);
        const Electronics = await prodects.find({ 'category': 'Electronics' }).limit(limitNumber);
        const Fashions = await prodects.find({ 'category': 'Fashions' }).limit(limitNumber)
        const Realestate = await prodects.find({ 'category': 'Realestate' }).limit(limitNumber);
        const Makup = await prodects.find({ 'category': 'Makup' }).limit(limitNumber);
        const ForKides = await prodects.find({ 'category': 'ForKides' }).limit(limitNumber);
        const Foods = await prodects.find({ 'category': 'Foods' }).limit(limitNumber);
        const Others = await prodects.find({ 'category': 'Others' }).limit(limitNumber);
        const pros = { latest, Foods, Vehicles, ForKides, Others, Electronics, Fashions, Realestate, Makup };

        res.render('index', { categories, pros, title: 'دلالة' })
    } catch (err) {
        console.log(err)
        res.render('error/500')
    }
}

/**
 * GET /explore-latest
 * Explplore Latest 
*/
exports.exploreLatest = async (req, res) => {
    try {
        const limitNumber = 20;
        const prodect = await prodects.find({}).sort({ createdAt: 'desc' }).limit(limitNumber)
        res.render('pages/latest', { title: 'احدث الاضافات', prodect });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Error Occured" });
    }
}

// post
// search
exports.search = async (req, res) => {
    try {
        let searchTerm = req.body.searchTerm;
        let search = await prodects.find({ $text: { $search: searchTerm, $diacriticSensitive: true } });
        res.render('pages/search', { search });
        console.log(search);
    } catch (err) {
        console.log(err);
        res.render('error/500')
    }

    // try {
    //     let searchTerm = req.body.searchTerm;
    //     let search = await prodects.find({ $text: { $search: "shadow" } });
    //     res.render('pages/search', { search });
    //     console.log(search);
    // } catch (err) {
    //     console.log(err);
    //     res.render('error/500')
    // }
}

// get
// store 
exports.store = (req, res) => {
    res.render('pages/stores', { title: 'متاجر' })
}

// get
// test 
exports.test = (req, res) => {
    res.render('pages/test', { title: 'test', layout:"layouts/chat" })
}

// get
// serveces 
exports.serveces = (req, res) => {
    res.render('pages/serveces', { title: 'خدمات' })
}

// get
// term 
exports.terms = (req, res) => {
    res.render('pages/terms', { title: 'الشروط والاحكام' })
}

// get
// about
exports.about = (req, res) => {
    res.render('pages/about', { title: 'من نحن' })
}


/**
 * GET /categories
 * Categories 
*/
exports.exploreCategories = async (req, res) => {
    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber)


        res.render('pages/categories', { title: 'الاقسام', categories });
    } catch (error) {
        console.log(error);
    }
}


/**
 * GET /categories/:id
 * Categories By Id
*/
exports.exploreCategoriesById = async (req, res) => {
    try {

        let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await prodects.find({ 'category': categoryId }).limit(limitNumber)
            .sort({ createdAt: 'desc' })
        res.render('pages/categories', { categoryById });
    } catch (error) {
        console.log(error);

    }
}




// async function insertDymmyCategoryData() {
//     try {
//         await Category.insertMany([
//             {
//                 "name": "Vehicles",
//                 "image": "vehicles.jpg",
//                 "ar": "سيارات"
//             },
//             {
//                 "name": "Electronics",
//                 "image": "electronics.jpg",
//                 "ar": "الكترونيات"
//             },
//             {
//                 "name": "Fashions",
//                 "image": "fashions.jpg",
//                 "ar": "الازياء والموضه"
//             },
//             {
//                 "name": "Realestate",
//                 "image": "realestate.jpg",
//                 "ar": "عقارات"

//             },
//             {
//                 "name": "Makup",
//                 "image": "makup.jpg",
//                 "ar": "مستحضرات وادوات تجميل"

//             },
//             {
//                 "name": "ForKides",
//                 "image": "forKides.jpg",
//                 "ar": " أطفال وألعاب"

//             },
//             {
//                 "name": "Foods",
//                 "image": "foods.jpg",
//                 "ar": "الاطعمة ومنتجاتها"

//             },
//             {
//                 "name": "Others",
//                 "image": "others.jpg",
//                 "ar": "سلع اخري "

//             }
//         ]);
//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDymmyCategoryData();




