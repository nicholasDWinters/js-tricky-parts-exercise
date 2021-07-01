function curriedAdd(total) {
    if (!total) return 0;
    this.total = total;

    return function add(num) {
        if (num) {
            total += num;
            return add;
        } else {

            return total;
        }
    }
}


curriedAdd(1)(2)(3)();

module.exports = { curriedAdd };
