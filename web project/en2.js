function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerText = result;
}
function Sub() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").innerText = result;
}
function mul() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").innerText = result;
}
function div() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 == 0) {
        document.getElementById("result").innerText = "cannot divide";
    }
    else {
        var result = num1 / num2;
        document.getElementById("result").innerText = result;
    }
}

function calculateForce() {
    
   const massInput = document.getElementById('mass');
    const accelerationInput = document.getElementById('acceleration');
    const resultElement = document.getElementById('result');

     const mass = parseFloat(massInput.value);
     const acceleration = parseFloat(accelerationInput.value);

    if (!isNaN(mass) && !isNaN(acceleration)) {
        var result = mass * acceleration;
        resultElement.innerText = 'Result: ' + result + ' N';
    } else {
        resultElement.innerText = 'Invalid input. Please enter valid numbers.';
    }
}

function calculateVelocity() {

    const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
    const acceleration = parseFloat(document.getElementById('acceleration').value);
    const time = parseFloat(document.getElementById('time').value);

    if (!isNaN(initialVelocity) && !isNaN(acceleration) && !isNaN(time)) {
        const result = initialVelocity + acceleration * time;
        document.getElementById('result').innerText = 'Result: ' + result + ' m/s';
    } else {
        document.getElementById('result').innerText = 'Invalid input. Please enter valid numbers.';
    }

    
}

function calculateQuadratic() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminant = b * b - 4 * a * c;
    const result = document.getElementById('result');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.innerHTML = 'Please enter valid numbers for a, b, and c.';
    } else if (discriminant < 0) {
        result.innerHTML = 'No real roots exist.';
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        result.innerHTML = `The root of the equation is: x = ${root}`;
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.innerHTML = `The roots of the equation are: x1 = ${root1} and x2 = ${root2}`;
    }
}
function calculateMidpoint() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    const result = document.getElementById('result');

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        result.innerHTML = 'Please enter valid numbers for x1, y1, x2, and y2.';
    } else {
        const x = (x1 + x2) / 2;
        const y = (y1 + y2) / 2;
        result.innerHTML = `The midpoint is at (${x}, ${y})`;
        // ${x}: This is a placeholder where the value of the variable x will be inserted into the string.
    }
}

function calculateSlope() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    const result = document.getElementById('result');

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        result.innerHTML = 'Please enter valid numbers for x1, y1, x2, and y2.';
    } else if (x1 === x2) {
        result.innerHTML = 'The slope is undefined (vertical line).';
    } else {
        const slope = (y2 - y1) / (x2 - x1);
        result.innerHTML = `The slope is: ${slope}`;
    }
}

function calculateDensity() {
    const mass = parseFloat(document.getElementById('mass').value);
    const volume = parseFloat(document.getElementById('volume').value);

    const result = document.getElementById('result');

    if (isNaN(mass) || isNaN(volume) || volume <= 0) {
        result.innerHTML = 'Please enter valid numbers for mass (m) and volume (V).';
    } else {
        const density = mass / volume;
        result.innerHTML = `The density is: ${density}`;
    }
}

function calculateUnitVector() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const z = parseFloat(document.getElementById('z').value);

    const result = document.getElementById('result');

    if (isNaN(x) || isNaN(y) || (isNaN(z) && z !== 0)) {
        result.innerHTML = 'Please enter valid numbers for the vector components.';
    } else {
        const magnitude = Math.sqrt(x * x + y * y + z * z);
        
        if (magnitude === 0) {
            result.innerHTML = 'The magnitude of the vector is zero. A unit vector is undefined.';
        } else {
            const unitX = x / magnitude;
            const unitY = y / magnitude;
            const unitZ = z / magnitude;
            result.innerHTML = 'The unit vector is (${unitX}, ${unitY}, ${unitZ})';

        }
    }
}

function calculateNaturalLog() {
    const number = parseFloat(document.getElementById('number').value);
    const result = document.getElementById('result');

    if (isNaN(number) || number <= 0) {
        result.innerHTML = 'Please enter a valid positive number for the natural logarithm.';
    } else {
        const naturalLog = Math.log(number);
        result.innerHTML = `The natural logarithm of ${number} is: ${naturalLog}`;
    }
}

function calculateArcLength() {
    const radius = parseFloat(document.getElementById('radius').value);
    const angle = parseFloat(document.getElementById('angle').value);
    const result = document.getElementById('result');

    if (isNaN(radius) || isNaN(angle) || angle < 0) {
        result.innerHTML = 'Please enter a valid positive radius and angle (θ in radians).';
    } else {
        const arcLength = radius * angle;
        result.innerHTML = `The arc length is: ${arcLength}`;
    }
}

function calculateVectorAddition() {
    const ax = parseFloat(document.getElementById('ax').value);
    const ay = parseFloat(document.getElementById('ay').value);
    const bx = parseFloat(document.getElementById('bx').value);
    const by = parseFloat(document.getElementById('by').value);
    const result = document.getElementById('result');

    if (isNaN(ax) || isNaN(ay) || isNaN(bx) || isNaN(by)) {
        result.innerHTML = 'Please enter valid numbers for vector components.';
    } else {
        const rx = ax + bx;
        const ry = ay + by;
        result.innerHTML = `The resulting vector is: (${rx}, ${ry})`;
    }
}

function calculateVectorMagnitude() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const result = document.getElementById('result');

    if (isNaN(x) || isNaN(y)) {
        result.innerHTML = 'Please enter valid numbers for vector components.';
    } else {
        const magnitude = Math.sqrt(x * x + y * y);
        result.innerHTML = `The magnitude of the vector is: ${magnitude}`;
    }
}

function calculateExponential() {
    const x = parseFloat(document.getElementById('x').value);
    const result = document.getElementById('result');

    if (isNaN(x)) {
        result.innerHTML = 'Please enter a valid number for x.';
    } else {
        const exponential = Math.exp(-x);
        result.innerHTML = `e^(-${x}) is approximately: ${exponential.toFixed(4)}`;
    }
}

function calculateMean() {
    const numbersInput = document.getElementById('numbers').value;
    const numbers = numbersInput.split(',').map(Number);
    const result = document.getElementById('result');

    if (!numbersInput || !numbers.length) {
        result.innerHTML = 'Please enter a list of numbers separated by commas.';
    } else {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const mean = sum / numbers.length;
        result.innerHTML = `The mean is: ${mean.toFixed(2)}`;
    }
}

function calculateBayes() {
    const prior = parseFloat(document.getElementById('prior').value);
    const likelihood = parseFloat(document.getElementById('likelihood').value);
    const evidence = parseFloat(document.getElementById('evidence').value);
    const result = document.getElementById('result');

    if (isNaN(prior) || isNaN(likelihood) || isNaN(evidence)) {
        result.innerHTML = 'Please enter valid probabilities for the prior, likelihood, and evidence.';
    } else {
        const posterior = (prior * likelihood) / evidence;
        result.innerHTML = `The posterior probability is: ${posterior.toFixed(4)}`;
    }
}



 //   Arithmetic Mean Calculator 
 function calculateArithmeticMean() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const numbers = inputNumbers.split(',').map(Number);

    if (numbers.some(isNaN)) {
        document.getElementById('result').textContent = "Invalid input. Please enter a list of numbers separated by commas.";
    } else {
        let mul = 1;
        for (let i = 1; i < numbers.length; i++) {
            mul *= numbers[i];
        }
        const Geomatricmean = Math.pow(mul,1 / numbers.length); 
        document.getElementById('result').textContent = `The arithmetic mean is: ${Geomatricmean}`;
}
}

//  Geometric Mean Calculator 
function calculateGeometricMean() {
    const inputNumbers = document.getElementById('inputNumbers').value;
    const numbers = inputNumbers.split(',').map(Number);

    if (numbers.some(isNaN)) {
        document.getElementById('result').textContent = "Invalid input. Please enter a list of numbers separated by commas.";
    } else {
        let mul = 1;
        for (let i = 1; i < numbers.length; i++) {
            mul *= numbers[i];
        }
        const Geomatricmean = Math.pow(mul,1 / numbers.length); 
        document.getElementById('result').textContent = `The arithmetic mean is: ${Geomatricmean}`;
}
}
// Combination Calculator 
function calculateCombination() {
    const n = parseInt(document.getElementById('nInput').value);
    const r = parseInt(document.getElementById('rInput').value);

    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
        document.getElementById('result').textContent = "Invalid input. Please enter non-negative integers, and ensure r <= n.";
    } else {
        const combination = calculateFactorial(n) / (calculateFactorial(r) * calculateFactorial(n - r));
        document.getElementById('result').textContent = `The combination (${n}C${r}) is: ${combination}`;
        document.getElementById('formulaExplanation').style.display = 'block';
    }
}

// calculate Permutation
function calculatePermutation() {
    const n = parseInt(document.getElementById('nInput').value);
    const r = parseInt(document.getElementById('rInput').value);

    if (isNaN(n) || isNaN(r) || n < 0 || r < 0 || r > n) {
        document.getElementById('result').textContent = "Invalid input. Please enter non-negative integers, and ensure r <= n.";
    } else {
        const permutation = calculateFactorial(n) / calculateFactorial(n - r);
        document.getElementById('result').textContent = `The permutation (${n}P${r}) is: ${permutation}`;
    }
}

// calculate Binomial Probability

function calculateBinomialProbability() {
    const n = parseInt(document.getElementById('nInput').value);
    const p = parseFloat(document.getElementById('pInput').value);
    const x = parseInt(document.getElementById('xInput').value);

    if (isNaN(n) || isNaN(p) || isNaN(x) || n < 0 || p < 0 || p > 1 || x < 0 || x > n) {
        document.getElementById('result').textContent = "Invalid input. Please enter valid values.";
    } else {
        const q = 1 - p; // Probability of failure
        const binomialProbability = calculateBinomialCoefficient(n, x) * Math.pow(p, x) * Math.pow(q, n - x);
        document.getElementById('result').textContent = `The binomial probability is: ${binomialProbability.toFixed(4)}`;
    }
}

function calculateBinomialCoefficient(n, x) {
    return calculateFactorial(n) / (calculateFactorial(x) * calculateFactorial(n - x));
}

function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}

// calculate Geometric Distribution
function calculateGeometricDistribution() {
    const p = parseFloat(document.getElementById('pInput').value);
    const x = parseInt(document.getElementById('xInput').value);

    if (isNaN(p) || isNaN(x) || p < 0 || p > 1 || x < 1) {
        document.getElementById('result').textContent = "Invalid input. Please enter valid values.";
    } else {
        const q = 1 - p; // Probability of failure
        const geometricProbability = Math.pow(q, x - 1) * p;
        document.getElementById('result').textContent = `The geometric distribution probability is: ${geometricProbability.toFixed(4)}`;
    }
}

//Simple_Probability 
function calculateProbability() {
    const successCount = parseInt(document.getElementById('successCount').value);
    const totalCount = parseInt(document.getElementById('totalCount').value);

    if (isNaN(successCount) || isNaN(totalCount) || successCount < 0 || totalCount < 0) {
        document.getElementById('result').textContent = "Invalid input. Please enter non-negative numbers.";
        return;
    }

    const probability = successCount / totalCount;
    document.getElementById('result').textContent = `The probability is: ${probability.toFixed(2)}`;
}





// calculate Range
function calculateRange() {
const numberInput = document.getElementById("numberInput").value;
const numbers = numberInput.split(' ').map(Number);

if (numbers.some(isNaN)) {
document.getElementById("result").textContent = "Please enter valid numbers separated by spaces.";
} else {
const range = calculateRangeFromArray(numbers);
document.getElementById("result").textContent = `Range: ${range}`;
}
}

function calculateRangeFromArray(numbers) {
if (numbers.length === 0) {
return "No range - the list is empty";
}

const max = Math.max(...numbers);
const min = Math.min(...numbers);

return max - min;
}

