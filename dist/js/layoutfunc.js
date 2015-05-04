$("#component li").not('.emptyMessage').click(function() {
       alert('Clicked list. ' + this.id);
});