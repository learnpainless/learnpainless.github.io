---
title: 'Working with Files, Folders java'
date: 2015-03-25T16:15:00.000Z
categories:
  - java
  - start
  - files
tags:
  - working with files
  - java tutorial
author:
  - lpl
description: >-
  file java,files createdirectory,java create directory,java directory,java
  file,java file folder,java folder,java temp,java temp file,working with
  files,working with files and folders
keywords: >-
  file java,files createdirectory,java create directory,java directory,java
  file,java file folder,java folder,java temp,java temp file,working with
  files,working with files and folders
comments: true
layout: post-java
image: ./img/working-with-files-folders-java-min.png
---

## Working with Files, Folders java

**File** and **Folder** operations are performed using File class in java. File class is present in "**java.io**" package. You can create file or folder using File class. You can also check for file size or delete files using File class.

## Basic operations performed by File class:

### create folder or folders:

To create folder in java we need to initialize File object and pass path of directory in constructor parameter of File class. And then class public method of File class **mkdir()** if you want to create one folder or **mkdirs()** if you want to create nested folders.

Nested folder means if you want to create "**java/android**", android folder inside java folder and java folder not exist then **mkdirs()** method will first create java folder and then Android folder.

That method will return boolean result, true if this method created folder/folders successfully, else return false in case of error.

#### Example:
```java
    class Java{
        public static void main(String[] args){
            File file = new File("java/Android");
            //This will create Android folder inside java folder. If folder doesn't exist.
            file.mkdirs(); //this method will return Boolean result.
        }
    }
```

### Check if folder/file exists:

To check whether file or folder exist, we can use **.exists()** method. This will return Boolean result.

#### Example:

```java
    class Java{
        public static void main(String[] args){
            File file = new File("java/Android");
            boolean result = file.exists();
            System.out.println(result);
        }
    }
```

### Delete folder/file java:

To delete file/folder there is method called **delete()**, it will return Boolean result.

#### Example:

```java
    class Java{
        public static void main(String[] args){
            File f = new File("java/Android");
            f.delete(); //return boolean result.
        }
    }
```

### List files and folders in directory:

To get all files in any folder there is method called **list()**, it will return array of string type "**String\[\]**". This array contains name of all files and folders in that folder.

#### Example:

```java
    class Java{
        public static void main(String[] args){
            File f = new File("java");
            String[] names = f.list(); //this will return files and folders name.
            for(String name : names){
                System.out.println(name); //print each name in array.
            }
        }
    }
```

There are many other methods available for other operations. Check out them too.
