package com.example.admin.imageloadertest;

import android.content.Context;
import android.graphics.Bitmap;
import android.view.View;
import android.widget.ImageView;
import android.widget.ProgressBar;

import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.ImageLoaderConfiguration;
import com.nostra13.universalimageloader.core.assist.FailReason;
import com.nostra13.universalimageloader.core.listener.ImageLoadingProgressListener;
import com.nostra13.universalimageloader.core.listener.SimpleImageLoadingListener;

/**
 * Created by admin on 7/26/2016.
 */

public class ImageHandler {
    private DisplayImageOptions options;
    private ImageLoader imageLoader;
    private ImageView imageView;
    private String url;
    private ProgressBar progressBar;
    public ImageHandler(Context context,ImageView imageView,String url){
        this.imageView = imageView;
        this.url = url;
        imageLoader = ImageLoader.getInstance();
        imageLoader.init(ImageLoaderConfiguration.createDefault(context));
    }
    public ImageHandler(Context context, ImageView imageView, String url, ProgressBar progressBar){
        this.imageView = imageView;
        this.url = url;
        this.progressBar = progressBar;
        imageLoader = ImageLoader.getInstance();
        imageLoader.init(ImageLoaderConfiguration.createDefault(context));


    }
    public void build(){
        options = new DisplayImageOptions.Builder()
                .showImageOnLoading(R.drawable.ic_empty)
                .showImageForEmptyUri(R.drawable.ic_empty)
                .showImageOnFail(R.drawable.ic_error)
                .cacheInMemory(true)
                .cacheOnDisk(true)
                .considerExifParams(true)
                .bitmapConfig(Bitmap.Config.RGB_565)
                .build();
        imageLoader.displayImage(url,
                imageView, options, new SimpleImageLoadingListener() {
                    @Override
                    public void onLoadingStarted(String imageUri, View view) {
                        if (progressBar != null) {
                            progressBar.setVisibility(View.VISIBLE);
                            progressBar.setProgress(0);
                        }

                    }

                    @Override
                    public void onLoadingFailed(String imageUri, View view, FailReason failReason) {
                        if (progressBar != null){
                            progressBar.setVisibility(View.GONE);
                        }

                    }

                    @Override
                    public void onLoadingComplete(String imageUri, View view, Bitmap loadedImage) {
                        if (progressBar != null){
                            progressBar.setVisibility(View.GONE);
                        }

                    }

                    @Override
                    public void onLoadingCancelled(String imageUri, View view) {
                        if (progressBar != null){
                            progressBar.setVisibility(View.GONE);
                        }

                    }
                }, new ImageLoadingProgressListener() {
                    @Override
                    public void onProgressUpdate(String s, View view, int i, int i1) {
                        if (progressBar != null){
                            progressBar.setProgress(Math.round(100.0f * i/i1));
                        }

                    }
                });
    }
}
