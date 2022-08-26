---
title: Multiple count down timers in RecyclerView flickering when scrolled
date: 2017-04-28 06:37:00 +05:30
categories:
- android
tags:
- RecyclerView
- Timer
author: [pawneshwer]
description: Solved Multiple count down timers in RecyclerView flickering when scrolled in android. How to handle multiple countdown timers in RecyclerView StackOverflow QA.
comments: true
layout: post
draft: false
image: img/multiple-count-down-timers-recyclerview-flickering-when-scrolled.png
---

## Multiple count down timers in RecyclerView flickering when scrolled

This problem is asked multiple time on **StackOverflow**, so i decided to make this project and solve your problem.

### Why RecyclerView flickering when scrolled?

**RecyclerView** flickering when scrolled because we are creating Timer inside `onBindViewHolder()` method. And as you know `onBindViewHolder()` method is called every time when we scroll **RecyclerView**. Because **RecyclerView** reuse views to prevent from memory problems. The best thing here would be to move the **CountDownTimer** in the **ViewHolder** as a reference, cancel it before binding the data (if started) and rescheduling to the desired duration.

### How to fix RecyclerView flickering when scrolled?

- Create instance of **CountDownTimer** in **ViewHolder** instead of `onBindViewHolder()`.
- Release provious **CountDownTimer** before binding new **CountDownTimer**.

#### Lets do it practically:

##### Code of RecyclerView Adapter

```java
package com.learnpainless.recyclerviewcountdowntimer;

import android.os.Handler;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import android.widget.ImageView;
import android.widget.TextView;


public class RecyclerViewAdapter extends RecyclerView.Adapter<RecyclerViewAdapter.ViewHolder> {

    private OnItemClickListener onItemClickListener;
    private Handler handler = new Handler();

    public RecyclerViewAdapter(OnItemClickListener onItemClickListener) {
        this.onItemClickListener = onItemClickListener;
    }

    public void clearAll() {
        handler.removeCallbacksAndMessages(null);
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView timeStamp;
        ImageView imageView;
        CountdownRunnable countdownRunnable;

        public ViewHolder(View itemView) {
            super(itemView);
            timeStamp = itemView.findViewById(R.id.timestamp);
            imageView = itemView.findViewById(R.id.image_view);
            countdownRunnable = new CountdownRunnable(handler,timeStamp,10000,imageView);
        }

        public void bind(final OnItemClickListener listener) {
            handler.removeCallbacks(countdownRunnable);
            countdownRunnable.holder = timeStamp;
            countdownRunnable.millisUntilFinished = 10000 * getAdapterPosition(); //because i want all timers run separately.
            handler.postDelayed(countdownRunnable, 100);

        }
    }




    @Override public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.recycler_item, parent, false);

        return new ViewHolder(view);
    }

    @Override public void onBindViewHolder(ViewHolder holder, int position) {
        holder.bind(onItemClickListener);
    }

    @Override public int getItemCount() {
        return 100;
    }

    public interface OnItemClickListener {
        void onItemClick(int position);
    }
}

```

So i have created my own Runnable implementation to create **CountdownTimer** and created its instance inside **ViewHolder** to bind **CountdownTimer** with **RecyclerView** item. So now it will not flicker when we scroll **RecyclerView**. Thats why i created **RecyclerView** with 100 items in it, so we can check if there is any flickering or not.

#### Full source code is available on Github [here](https://github.com/learnpainless/RecyclerViewCountdownTimer)

###### Hope this tutorial helps you to solve this common problem in RecyclerView in Android.