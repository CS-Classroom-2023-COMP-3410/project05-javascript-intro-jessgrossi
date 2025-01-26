const periodicTable = document.getElementById('periodicTable');
const searchBar = document.getElementById('searchBar');
const elementDetails = document.getElementById('elementDetails');
const elementName = document.getElementById('elementName');
const elementSymbol = document.getElementById('elementSymbol');
const elementNumber = document.getElementById('elementNumber');
const elementGroup = document.getElementById('elementGroup');

// Full periodic table data
const elements = [
    {elementName: 'Hydrogen', elementSymbol: 'H', elementNumber: 1, elementGroup: '1'},
    {elementName: 'Helium', elementSymbol: 'He', elementNumber: 2, elementGroup: '18'},
    {elementName: 'Lithium', elementSymbol: 'Li', elementNumber: 3, elementGroup: '1'},
    {elementName: 'Beryllium', elementSymbol: 'Be', elementNumber: 4, elementGroup: '2'},
    {elementName: 'Boron', elementSymbol: 'B', elementNumber: 5, elementGroup: '13'},
    {elementName: 'Carbon', elementSymbol: 'C', elementNumber: 6, elementGroup: '14'},
    {elementName: 'Nitrogen', elementSymbol: 'N', elementNumber: 7, elementGroup: '15'},
    {elementName: 'Oxygen', elementSymbol: 'O', elementNumber: 8, elementGroup: '16'},
    {elementName: 'Fluorine', elementSymbol: 'F', elementNumber: 9, elementGroup: '17'},
    {elementName: 'Neon', elementSymbol: 'Ne', elementNumber: 10, elementGroup: '18'},
    {elementName: 'Sodium', elementSymbol: 'Na', elementNumber: 11, elementGroup: '1'},
    {elementName: 'Magnesium', elementSymbol: 'Mg', elementNumber: 12, elementGroup: '2'},
    {elementName: 'Aluminum', elementSymbol: 'Al', elementNumber: 13, elementGroup: '13'},
    {elementName: 'Silicon', elementSymbol: 'Si', elementNumber: 14, elementGroup: '14'},
    {elementName: 'Phosphorus', elementSymbol: 'P', elementNumber: 15, elementGroup: '15'},
    {elementName: 'Sulfur', elementSymbol: 'S', elementNumber: 16, elementGroup: '16'},
    {elementName: 'Chlorine', elementSymbol: 'Cl', elementNumber: 17, elementGroup: '17'},
    {elementName: 'Argon', elementSymbol: 'Ar', elementNumber: 18, elementGroup: '18'},
    {elementName: 'Potassium', elementSymbol: 'K', elementNumber: 19, elementGroup: '1'},
    {elementName: 'Calcium', elementSymbol: 'Ca', elementNumber: 20, elementGroup: '2'},
    {elementName: 'Scandium', elementSymbol: 'Sc', elementNumber: 21, elementGroup: '3'},
    {elementName: 'Titanium', elementSymbol: 'Ti', elementNumber: 22, elementGroup: '4'},
    {elementName: 'Vanadium', elementSymbol: 'V', elementNumber: 23, elementGroup: '5'},
    {elementName: 'Chromium', elementSymbol: 'Cr', elementNumber: 24, elementGroup: '6'},
    {elementName: 'Manganese', elementSymbol: 'Mn', elementNumber: 25, elementGroup: '7'},
    {elementName: 'Iron', elementSymbol: 'Fe', elementNumber: 26, elementGroup: '8'},
    {elementName: 'Cobalt', elementSymbol: 'Co', elementNumber: 27, elementGroup: '9'},
    {elementName: 'Nickel', elementSymbol: 'Ni', elementNumber: 28, elementGroup: '10'},
    {elementName: 'Copper', elementSymbol: 'Cu', elementNumber: 29, elementGroup: '11'},
    {elementName: 'Zinc', elementSymbol: 'Zn', elementNumber: 30, elementGroup: '12'},
    {elementName: 'Gallium', elementSymbol: 'Ga', elementNumber: 31, elementGroup: '13'},
    {elementName: 'Germanium', elementSymbol: 'Ge', elementNumber: 32, elementGroup: '14'},
    {elementName: 'Arsenic', elementSymbol: 'As', elementNumber: 33, elementGroup: '15'},
    {elementName: 'Selenium', elementSymbol: 'Se', elementNumber: 34, elementGroup: '16'},
    {elementName: 'Bromine', elementSymbol: 'Br', elementNumber: 35, elementGroup: '17'},
    {elementName: 'Krypton', elementSymbol: 'Kr', elementNumber: 36, elementGroup: '18'},
    {elementName: 'Rubidium', elementSymbol: 'Rb', elementNumber: 37, elementGroup: '1'},
    {elementName: 'Strontium', elementSymbol: 'Sr', elementNumber: 38, elementGroup: '2'},
    {elementName: 'Yttrium', elementSymbol: 'Y', elementNumber: 39, elementGroup: '3'},
    {elementName: 'Zirconium', elementSymbol: 'Zr', elementNumber: 40, elementGroup: '4'},
    {elementName: 'Niobium', elementSymbol: 'Nb', elementNumber: 41, elementGroup: '5'},
    {elementName: 'Molybdenum', elementSymbol: 'Mo', elementNumber: 42, elementGroup: '6'},
    {elementName: 'Technetium', elementSymbol: 'Tc', elementNumber: 43, elementGroup: '7'},
    {elementName: 'Ruthenium', elementSymbol: 'Ru', elementNumber: 44, elementGroup: '8'},
    {elementName: 'Rhodium', elementSymbol: 'Rh', elementNumber: 45, elementGroup: '9'},
    {elementName: 'Palladium', elementSymbol: 'Pd', elementNumber: 46, elementGroup: '10'},
    {elementName: 'Silver', elementSymbol: 'Ag', elementNumber: 47, elementGroup: '11'},
    {elementName: 'Cadmium', elementSymbol: 'Cd', elementNumber: 48, elementGroup: '12'},
    {elementName: 'Indium', elementSymbol: 'In', elementNumber: 49, elementGroup: '13'},
    {elementName: 'Tin', elementSymbol: 'Sn', elementNumber: 50, elementGroup: '14'},
    {elementName: 'Antimony', elementSymbol: 'Sb', elementNumber: 51, elementGroup: '15'},
    {elementName: 'Tellurium', elementSymbol: 'Te', elementNumber: 52, elementGroup: '16'},
    {elementName: 'Iodine', elementSymbol: 'I', elementNumber: 53, elementGroup: '17'},
    {elementName: 'Xenon', elementSymbol: 'Xe', elementNumber: 54, elementGroup: '18'},
    {elementName: 'Cesium', elementSymbol: 'Cs', elementNumber: 55, elementGroup: '1'},
    {elementName: 'Barium', elementSymbol: 'Ba', elementNumber: 56, elementGroup: '2'},
    {elementName: 'Lanthanum', elementSymbol: 'La', elementNumber: 57, elementGroup: 'Lanthanides'},
    {elementName: 'Cerium', elementSymbol: 'Ce', elementNumber: 58, elementGroup: 'Lanthanides'},
    {elementName: 'Praseodymium', elementSymbol: 'Pr', elementNumber: 59, elementGroup: 'Lanthanides'},
    {elementName: 'Neodymium', elementSymbol: 'Nd', elementNumber: 60, elementGroup: 'Lanthanides'},
    {elementName: 'Promethium', elementSymbol: 'Pm', elementNumber: 61, elementGroup: 'Lanthanides'},
    {elementName: 'Samarium', elementSymbol: 'Sm', elementNumber: 62, elementGroup: 'Lanthanides'},
    {elementName: 'Europium', elementSymbol: 'Eu', elementNumber: 63, elementGroup: 'Lanthanides'},
    {elementName: 'Gadolinium', elementSymbol: 'Gd', elementNumber: 64, elementGroup: 'Lanthanides'},
    {elementName: 'Terbium', elementSymbol: 'Tb', elementNumber: 65, elementGroup: 'Lanthanides'},
    {elementName: 'Dysprosium', elementSymbol: 'Dy', elementNumber: 66, elementGroup: 'Lanthanides'},
    {elementName: 'Holmium', elementSymbol: 'Ho', elementNumber: 67, elementGroup: 'Lanthanides'},
    {elementName: 'Erbium', elementSymbol: 'Er', elementNumber: 68, elementGroup: 'Lanthanides'},
    {elementName: 'Thulium', elementSymbol: 'Tm', elementNumber: 69, elementGroup: 'Lanthanides'},
    {elementName: 'Ytterbium', elementSymbol: 'Yb', elementNumber: 70, elementGroup: 'Lanthanides'},
    {elementName: 'Lutetium', elementSymbol: 'Lu', elementNumber: 71, elementGroup: 'Lanthanides'},
    {elementName: 'Hafnium', elementSymbol: 'Hf', elementNumber: 72, elementGroup: '4'},
    {elementName: 'Tantalum', elementSymbol: 'Ta', elementNumber: 73, elementGroup: '5'},
    {elementName: 'Tungsten', elementSymbol: 'W', elementNumber: 74, elementGroup: '6'},
    {elementName: 'Rhenium', elementSymbol: 'Re', elementNumber: 75, elementGroup: '7'},
    {elementName: 'Osmium', elementSymbol: 'Os', elementNumber: 76, elementGroup: '8'},
    {elementName: 'Iridium', elementSymbol: 'Ir', elementNumber: 77, elementGroup: '9'},
    {elementName: 'Platinum', elementSymbol: 'Pt', elementNumber: 78, elementGroup: '10'},
    {elementName: 'Gold', elementSymbol: 'Au', elementNumber: 79, elementGroup: '11'},
    {elementName: 'Mercury', elementSymbol: 'Hg', elementNumber: 80, elementGroup: '12'},
    {elementName: 'Thallium', elementSymbol: 'Tl', elementNumber: 81, elementGroup: '13'},
    {elementName: 'Lead', elementSymbol: 'Pb', elementNumber: 82, elementGroup: '14'},
    {elementName: 'Bismuth', elementSymbol: 'Bi', elementNumber: 83, elementGroup: '15'},
    {elementName: 'Polonium', elementSymbol: 'Po', elementNumber: 84, elementGroup: '16'},
    {elementName: 'Astatine', elementSymbol: 'At', elementNumber: 85, elementGroup: '17'},
    {elementName: 'Radon', elementSymbol: 'Rn', elementNumber: 86, elementGroup: '18'},
    {elementName: 'Francium', elementSymbol: 'Fr', elementNumber: 87, elementGroup: '1'},
    {elementName: 'Radium', elementSymbol: 'Ra', elementNumber: 88, elementGroup: '2'},
    {elementName: 'Actinium', elementSymbol: 'Ac', elementNumber: 89, elementGroup: 'Actinides'},
    {elementName: 'Thorium', elementSymbol: 'Th', elementNumber: 90, elementGroup: 'Actinides'},
    {elementName: 'Protactinium', elementSymbol: 'Pa', elementNumber: 91, elementGroup: 'Actinides'},
    {elementName: 'Uranium', elementSymbol: 'U', elementNumber: 92, elementGroup: 'Actinides'},
    {elementName: 'Neptunium', elementSymbol: 'Np', elementNumber: 93, elementGroup: 'Actinides'},
    {elementName: 'Plutonium', elementSymbol: 'Pu', elementNumber: 94, elementGroup: 'Actinides'},
    {elementName: 'Americium', elementSymbol: 'Am', elementNumber: 95, elementGroup: 'Actinides'},
    {elementName: 'Curium', elementSymbol: 'Cm', elementNumber: 96, elementGroup: 'Actinides'},
    {elementName: 'Berkelium', elementSymbol: 'Bk', elementNumber: 97, elementGroup: 'Actinides'},
    {elementName: 'Californium', elementSymbol: 'Cf', elementNumber: 98, elementGroup: 'Actinides'},
    {elementName: 'Einsteinium', elementSymbol: 'Es', elementNumber: 99, elementGroup: 'Actinides'},
    {elementName: 'Fermium', elementSymbol: 'Fm', elementNumber: 100, elementGroup: 'Actinides'},
    {elementName: 'Mendelevium', elementSymbol: 'Md', elementNumber: 101, elementGroup: 'Actinides'},
    {elementName: 'Nobelium', elementSymbol: 'No', elementNumber: 102, elementGroup: 'Actinides'},
    {elementName: 'Lawrencium', elementSymbol: 'Lr', elementNumber: 103, elementGroup: 'Actinides'},
    {elementName: 'Rutherfordium', elementSymbol: 'Rf', elementNumber: 104, elementGroup: '4'},
    {elementName: 'Dubnium', elementSymbol: 'Db', elementNumber: 105, elementGroup: '5'},
    {elementName: 'Seaborgium', elementSymbol: 'Sg', elementNumber: 106, elementGroup: '6'},
    {elementName: 'Bohrium', elementSymbol: 'Bh', elementNumber: 107, elementGroup: '7'},
    {elementName: 'Hassium', elementSymbol: 'Hs', elementNumber: 108, elementGroup: '8'},
    {elementName: 'Meitnerium', elementSymbol: 'Mt', elementNumber: 109, elementGroup: '9'},
    {elementName: 'Darmstadtium', elementSymbol: 'Ds', elementNumber: 110, elementGroup: '10'},
    {elementName: 'Roentgenium', elementSymbol: 'Rg', elementNumber: 111, elementGroup: '11'},
    {elementName: 'Copernicium', elementSymbol: 'Cn', elementNumber: 112, elementGroup: '12'},
    {elementName: 'Nihonium', elementSymbol: 'Nh', elementNumber: 113, elementGroup: '13'},
    {elementName: 'Flerovium', elementSymbol: 'Fl', elementNumber: 114, elementGroup: '14'},
    {elementName: 'Moscovium', elementSymbol: 'Mc', elementNumber: 115, elementGroup: '15'},
    {elementName: 'Livermorium', elementSymbol: 'Lv', elementNumber: 116, elementGroup: '16'},
    {elementName: 'Tennessine', elementSymbol: 'Ts', elementNumber: 117, elementGroup: '17'},
    {elementName: 'Oganesson', elementSymbol: 'Og', elementNumber: 118, elementGroup: '18'}
  ];
  


// Render periodic table grid
function renderPeriodicTable() {
    periodicTable.innerHTML = ''; // Clear existing content
    elements.forEach((element) => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.textContent = element.elementSymbol;
        elementDiv.dataset.name = element.elementName;
        elementDiv.dataset.symbol = element.elementSymbol;
        elementDiv.dataset.number = element.elementNumber;
        elementDiv.dataset.group = element.elementGroup;

        elementDiv.addEventListener('click', () => showDetails(element));
        periodicTable.appendChild(elementDiv);
    });
}

// Display element details
function showDetails(element) {
    elementName.textContent = element.elementName;
    elementSymbol.textContent = element.elementSymbol;
    elementNumber.textContent = element.elementNumber;
    elementGroup.textContent = element.elementGroup;

    // Highlight selected element
    document.querySelectorAll('.element').forEach((el) => el.classList.remove('selected'));
    document.querySelector(`[data-number="${element.elementNumber}"]`).classList.add('selected');

    // Highlight group
    document.querySelectorAll('.element').forEach((el) => {
        el.classList.remove('highlighted');
        if (el.dataset.group === element.elementGroup) {
            el.classList.add('highlighted');
        }
    });

    elementDetails.classList.remove('hidden');
}

// Search functionality
searchBar.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    document.querySelectorAll('.element').forEach((el) => {
        const name = el.dataset.name.toLowerCase();
        const symbol = el.dataset.symbol.toLowerCase();
        const number = el.dataset.number;

        // Match against name, symbol, or atomic number
        if (name.includes(query) || symbol.includes(query) || number.includes(query)) {
            el.style.display = 'block'; // Show matching elements
        } else {
            el.style.display = 'none'; // Hide non-matching elements
        }
    });
});

// Initial rendering of the periodic table
renderPeriodicTable();
