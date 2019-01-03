// todo make it deep
export class Utils {

    static isEqual(a, b) {
        let res = true;

        Object.keys(a).forEach((aKey) => {
            if (a[aKey] !== b[aKey]) {
                res = false;
            }
        });

        return res;
    }
}
