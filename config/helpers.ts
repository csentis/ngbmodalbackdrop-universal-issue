
/**
 * Returns the full path of a given directory.
 * @param {Array<string>} args - One or more directories (concatenated with a slash).
 * @returns {string} The full path including the directory/directories.
 */
// function root(args: any) {

function root(args: Array<string>): string {

    const path = require('path');
    /** Declares a semi-private/semi-encapsulated variable '_root' */
    const base: string = path.resolve(__dirname, '..');
    // const _root = path.resolve(__dirname, '..');

    args = Array.prototype.slice.call(arguments, 0);
    console.log(
        'using as full path: ' + path.join.apply(
            path,
            <Array<string>> [base].concat(args)
        )
    );
    return <string> path.join.apply(
        path,
        <Array<string>> [base].concat(args)
    );
}

exports.root = root;
    // exports.root = root;
    // exports.hasProcessFlag = hasProcessFlag;
    // exports.isWebpackDevServer = isWebpackDevServer;
