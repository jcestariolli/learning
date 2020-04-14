package com.javaudemy.section3;

public class Main {

    public static void main(String[] args) {

        double poundToKgRatio = 0.45359237;

	    double poundsValue = 200;
	    var poundsConvertedToKg = poundsValue * poundToKgRatio;
        System.out.println(poundsValue + " pounds are " + poundsConvertedToKg + " kilograms");

        double kgValue = 65;
        var kgConvertedToPounds = kgValue / poundToKgRatio;
        System.out.println(kgValue + " kilograms are " + kgConvertedToPounds + " pounds");

        // other stuff
        double pi =  Math.PI;
        double anotherNumber = 3_000_000.4_567_890d;
        System.out.println(pi);
        System.out.println(anotherNumber);

    }
}
