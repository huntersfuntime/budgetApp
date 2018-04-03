const budgetController = (function() {
    let x = 23;

    let add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }
})();


const UIController = (function() {


})();


const controller = (function(budgetCtrl, UICtrl) {


})(budgetController, UIController);