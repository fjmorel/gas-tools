//Fetches a property from cache if possible, or runs functions to load it (and then save to cache)
function cacheFetch(prop, puller){
  cache = getCache();
  var fetched = cache.get(prop);
  if(fetched && fetched.length && fetched.length > 0) return JSON.parse(fetched);
  else {
    var data = puller();
    cache.put(prop,JSON.stringify(data), 1800);//1800 = Half an hour
    return data;
  }
}