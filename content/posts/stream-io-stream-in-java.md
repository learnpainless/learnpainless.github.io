---
title: 'Stream, I/O Stream in java'
date: 2015-03-25T11:36:00.000Z
categories:
  - java
  - start
tags:
  - streams
keywords: >-
  inputstream,inputstream to file,java fileinputstream,java inputstream,java
  inputstream to file,java io,java io inputstream,java outputstream,java
  stream,outputstream java,stream java,stremio
description: >-
  inputstream,inputstream to file,java fileinputstream,java inputstream,java
  inputstream to file,java io,java io inputstream,java outputstream,java
  stream,outputstream java,stream java,stremio
author:
  - lpl
comments: true
layout: post-java
image: ./img/stream-io-stream-in-java-min.png
---

## Stream, Input/Output Stream in java

### Stream:

Stream is basically sequence of data. To write or read a file we need to use Streams. Because we can't read or write files directly. So we have to read or write files in sequence. And that sequence is called as Stream.

#### Types of Stream:

Streams are of 2 types:

1. Input Stream

2. Output Stream

**Input Stream:** This Stream is used to perform read operation on Stream. Like reading a file, reading input from keyboard, reading data from internet etc.

**Output Stream:** This is opposite to Input Stream, as its name clearly explains. Output Stream is used to perform write operations on Stream. For example writing into file, writing something on screen, writing data to Url (on internet).

Java provides strong and flexible support for **Input/Output Stream** related to files and **Network**.

## Byte Stream/Character Stream:

Java **Byte Stream** are used o perform **input/output** operations of 8bit data. And **Character Stream** is used to perform input/output operations of 16bit unicode data. There are many classes related to Character Stream like **FileReader**, **FileWriter** etc. **FileReader** use **FileInputStream** internally and **FileWriter**use **FileOutputStream**.

#### Example of Character Stream:

```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class CopyCharacters {
    public static void main(String[] args) throws IOException {

        FileReader inputStream = null;
        FileWriter outputStream = null;

        try {
            inputStream = new FileReader("xanadu.txt");
            outputStream = new FileWriter("characteroutput.txt");

            int c;
            while ((c = inputStream.read()) != -1) {
                outputStream.write(c);
            }
        } finally {
            if (inputStream != null) {
                inputStream.close();
            }
            if (outputStream != null) {
                outputStream.close();
            }
        }
    }
}
```

[Source Oracle Docs](https://docs.oracle.com/javase/tutorial/essential/io/charstreams.html)

## Standard Stream :

These Streams are used to perform Standard operation like reading input from keyboard,mouse and Writing output to monitor etc.

### Standard Input:

This Stream handle input from user using Keyboard,mouse etc. General class for this Stream is **System.in**.

#### Example:

```java
class Java{
	public static void main(String[] args){
		//get input from user
		Scanner sc = new Scanner(System.in);
		
		//this will print output on console window.
		System.out.println("Printing the line passed in:");
        	while(sc.hasNextLine()) System.out.println(sc.nextLine());
	}
}
```

### Standard Output:

This Stream handle output to user using monitor/display. General class for this Stream is **System.out**.

#### Example:

```java
class Java{
	public static void main(String[] args){
		//this will print output on console window.
		System.out.println("Hello from Learn Pain Less");
	}
}
```

### Standard Error:

This Stream is used to display Error to users, this is also displayed on monitor/screen. General class for this Stream is **System.err**.

#### Example:

```java
class Java{
	public static void main(String[] args){
		//this will print output on console window.
		System.err.println("Printing Error from Learn Pain Less");
	}
}
```

## Reading and Writing files in java:

As described earlier that Stream is sequence of data. And Input/Output Stream are used to perform Read and Write operations respectively. There is another class which is also used to Read and Write Stream. That classes are **FileInputStream** and **FileOutputStream**.

### FileInputStream:

**FileInputStream** is used to read data from file. To use **FileInputStream** we will use its default constructor and pass path to that file which we want to read. And then we can read file in sequence.

#### Example:

```java
InputStream fs = new FileInputStream ("java/android/test.txt");
fs.read();
```

### FileOutputStream:

**FileOutputStream** is used to write data into file. This is same as **FileInputStream** Stream.

#### Example:

```java
OutputStream os = new FileOutputStream ("java/android/a.txt");
```
