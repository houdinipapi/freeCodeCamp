/**
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the product of all positive intergers less than or equal to n.
 */

function factorialize(num)
{
    if (num === 0)
    {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);