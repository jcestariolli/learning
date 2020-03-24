package com.javaudemy.section3;

public class Main {

    public static void main(String[] args) {
        byte byteNumber = 2;
        short shortNumber = 3;
        int intNumber = 5;

        long longResult = 50000L + (10L * (byteNumber + shortNumber + intNumber));
        System.out.println(longResult);

        short shortTotal = (short) (1000 * 10 * (byteNumber + shortNumber + intNumber));
    }
}
