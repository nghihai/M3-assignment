let grade = prompt("Please enter the number of your grade: ")

if (grade >= 60 && grade <= 69) {
    document.write('You received a D')
} 
else if (grade >=70 && grade <= 79)
{
    document.write("You received a C")
}
else if (grade >= 80 && grade <= 89)
{
    document.write("You received an B")
}
else if (grade >= 90 && grade <= 100)
{
    document.write("You received an A")
}
else
{
    document.write("You received an F")
}