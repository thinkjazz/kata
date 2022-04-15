// TODO: complete this object/class


function PaginationHelper(collection, itemsPerPage) {
  // The constructor takes in an array of items and a integer indicating how many
  // items fit within a single page
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}


PaginationHelper.prototype.itemCount = function() {
  // returns the number of items within the entire collection
  return this.collection.length;
};


// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.itemsPerPage;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex < 0 || pageIndex > this.pageCount()) {
    return -1;
  }
  return this.collection.slice(pageIndex * this.itemsPerPage, (pageIndex + 1) * this.itemsPerPage);

}


// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex < 0 || itemIndex > this.itemCount()) {
    return -1;
  }
  return Math.floor(itemIndex / this.itemsPerPage);
}

094fs-api3##1-KDA