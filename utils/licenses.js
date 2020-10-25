// Information obtained from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// data regarding licensing
// key = license code
// value[0] = Friendly name, value[1] = Markdown for license badge, value[2] = Link to license 
// The data can be more comprehensive
const licenses = {
    "Apache-2.0": ["Apache License 2.0",
        "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)",
        "(https://opensource.org/licenses/Apache-2.0)"],
    "GPL-3.0-only": ["GNU General Public License v3.0",
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
        "(https://www.gnu.org/licenses/gpl-3.0)"],
    "MIT": ["MIT License",
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
        "(https://opensource.org/licenses/MIT)"],
    "BSD-2-Clause": ["BSD 2-Clause 'Simplified' License",
        "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)",
        "(https://opensource.org/licenses/BSD-2-Clause)"],
    "BSD-3-Clause": ["BSD 3-Clause 'New' or 'Simplified' License",
        "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)",
        "(https://opensource.org/licenses/BSD-3-Clause)"],
    "BSL-1.0": ["Boost Software License 1.0",
        "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)",
        "(https://www.boost.org/LICENSE_1_0.txt)"],
    "CC0-1.0": ["Creative Commons Zero v1.0 Universal",
        "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)",
        "(http://creativecommons.org/publicdomain/zero/1.0/)"],
    "EPL-1.0": ["Eclipse Public License 1.0",
        "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)",
        "(https://opensource.org/licenses/EPL-1.0)"],
    "AGPL-3.0-only": ["GNU Affero General Public License v3.0",
        "![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)",
        "(https://www.gnu.org/licenses/agpl-3.0)"],
    "GPL-2.0-only": ["GNU General Public License v2.0",
        "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)",
        "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"],
    "LGPL-3.0-only": ["GNU Lesser General Public License v3.0",
        "![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)",
        "(https://www.gnu.org/licenses/lgpl-3.0)"],
    "MPL-2.0": ["Mozilla Public License 2.0",
        "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)",
        "(https://opensource.org/licenses/MPL-2.0)"],
    "Unlicense": ["The Unlicense",
        "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
        "(http://unlicense.org/)"],
    "ISC": ["ISC License",
        "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
        "(https://opensource.org/licenses/ISC)"]
};

module.exports = licenses;