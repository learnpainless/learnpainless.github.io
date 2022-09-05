/**
 * Author: Nikolai Tschacher
 * Updated: 27.08.2022
 * Website: https://incolumitas.com/
 *
 * Detect uBlock Origin, Adblock Plus and Ghostery with JavaScript only
 *
 * Usage: detectAdblock().then((res) => { console.log(res) });
 *
 */

window.addEventListener('load', (event) => {

  detectAdblock().then((res) => {
    //console.log(res)
    let blocked = res.uBlockOrigin || res.adblockPlus
    //let detector = document.getElementById('detector')
    let detector = document.createElement("div")
    //console.log(blocked)
    if (blocked) {
      //document.body.appendChild()

      document.body.classList.add('pawn')
      detector.innerHTML = '<div id="adblockbyspider"><div class="inner"> <div class="header"> <center><img style="clear: both; text-align: center;" border="0" data-original-height="260" data-original-width="260" src="/aab/app.png"></center> <h2>Ad Blocker Detected :(</h2> </div> <div class="isi"> <p>Please consider supporting us by disabling your ad blocker.</p><p>Please Disable your adblocker and Refresh the page to view the site content.</p><div><br></div>  <div class="spideradblock"></div> </div> </div> </div>'
      document.body.appendChild(detector)
    }
    else {
      document.body.classList.remove('pawn')
      detector.innerHTML = '';
      document.body.appendChild(detector)
    }
  })

})
function detectAdblock() {
  const adblockTests = {
    // https://github.com/uBlockOrigin/uAssets/blob/master/filters/filters-2022.txt
    uBlockOrigin: {
      url: 'https://incolumitas.com/data/pp34.js?sv=',
      id: '837jlaBksSjd9jh',
    },
    // https://github.com/easylist/easylist/blob/master/easylist/easylist_general_block.txt
    adblockPlus: {
      url: 'https://incolumitas.com/data/neutral.js?&ad_height=',
      id: 'hfuBadsf3hFAk',
    },
  };

  function canLoadRemoteScript(obj) {
    return new Promise(function (resolve, reject) {
      let script = document.createElement('script');

      script.onload = function () {
        if (document.getElementById(obj.id)) {
          resolve(false);
        } else {
          resolve(true);
        }
      }

      script.onerror = function () {
        resolve(true);
      }

      script.src = obj.url;
      document.body.appendChild(script);
    });
  }

  return new Promise(function (resolve, reject) {
    let promises = [
      canLoadRemoteScript(adblockTests.uBlockOrigin),
      canLoadRemoteScript(adblockTests.adblockPlus),
    ];

    Promise.all(promises).then((results) => {
      resolve({
        uBlockOrigin: results[0],
        adblockPlus: results[1],
      });
    }).catch((err) => {
      reject(err);
    });
  });
}