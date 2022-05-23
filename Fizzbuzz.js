def CokePepsi(arg):
    if arg % 3 == 0:
        if arg % 5 == 0:
            return "PepsiCoke"
        return "Pepsi"
    elif arg % 5 == 0:
        return "Coke"
    return str(arg)

def checkValue(arg, expectedReturn):
    assert CokePepsi(arg) == expectedReturn

def testCanReturnStringOne():
   checkValue(1, "1")

def testCanReturnStringTwo():
   checkValue(2, "2")

def testCanGetPepsiWhenPassedThree():
    checkValue(3, "Pepsi")

def testCanGetCokeWhenPassedFive():
    checkValue(5, "Coke")

def testCanGetPepsiWhenPassedMultipleOfThree():
    checkValue(6, "Pepsi")

def testCanGetCokeWhenPassedMultipleOfFive():
    checkValue(10, "Coke")

def testCanGetPepsiCokeWhenPassedMultipleOfThreeAndFive():
    checkValue(30, "PepsiCoke")
