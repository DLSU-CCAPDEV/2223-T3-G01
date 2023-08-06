const mongoose = require('mongoose');

const searchstoreSchema = new mongoose.Schema({
    username:{
        type: String
    },
    token: {
        type: String
    },
    content: {
        type: String
    }
});

const SearchStore = mongoose.model('SearchStore', searchstoreSchema);

async function isSearchStoreEmpty() {
    const count = await SearchStore.countDocuments();
    return count === 0;
  }
  
async function isSearchStoreEmpty() {
    const count = await SearchStore.countDocuments();
    return count === 0;
}

async function populateSearchStore() {
    const storeData = [
      {
        username: 'GangGangStore',
        token: '/images/store/GangGangP1.jpg',
        content: 'Real taste, not just the sauce, boneless fried chicken.',
      },
      {
        username: 'EverythingButCheese',
        token: '/images/store/EBC.png',
        content: 'If you love CHEEEESE, you\'re looking in the right place. #TheCheesiestPlaceOnEarth',
      },
      {
        username: '24chicken',
        token: '/images/24chick.png',
        content:
          'Serving happiness at a budget friendly price since 2017. Selling delicious Korean Fried Chicken is not our only goal. Being part of our customers’ lives and communities is what we aim for.',
      },
      {
        username: 'ObscureCafe',
        token: '/images/store/obscurecafe.jpg',
        content:
          'Would you like an Adventure now, or shall We have our coffee first?'
      },
      {
        username: 'Tahmee',
        token: '/images/store/tahmee.jpg',
        content:
          'The first Double The Froyo Forever™ company in the Philippines.',
      },
      {
        username: 'El Poco Cantina',
        token: '/images/store/elpoco.jpeg',
        content:
          'The best and most authentic birria around town.Come and experience the greatest birria you\'ve ever tasted!',
      },
    ];
  
    const isEmpty = await isSearchStoreEmpty();
    if (isEmpty) {
      await SearchStore.insertMany(storeData);
      console.log('SearchStore model populated.');
    } else {
      console.log('SearchStore model already has contents, no need to populate.');
    }
  }

  populateSearchStore().catch((err) => {
    console.error('Error populating SearchStore model:', err);
  });
exports.SearchStore = SearchStore;