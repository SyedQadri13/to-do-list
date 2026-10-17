# Common rules for Capacitor/Ionic/Angular in WebView
-keepclassmembers class * {
    @org.apache.cordova.CordovaPlugin <init>();
}
-keep class * {
    @com.getcapacitor.JSObject <init>();
}
-keep class com.getcapacitor.** { *; }
-keep class com.ionicframework.cordova.webview.** { *; }

# General rules for WebView interaction and JavaScript compatibility
-keepattributes Signature
-keepattributes SourceFile,LineNumberTable
-dontwarn android.webkit.**
-dontwarn org.json.**
-dontwarn java.nio.channels.spi.SelectorProvider
-dontwarn sun.misc.Unsafe

# If your app uses reflection extensively or specific data parsing libraries (like Gson, Jackson)
# -keep class * implements java.io.Serializable { *; }
# -keep class * extends java.lang.Exception { *; }
# -keep class * { <fields>; } # Be careful with this, can prevent shrinking
# -keepclassmembers class * {
#    java.lang.Object <init>(org.json.JSONObject);
# }

# For Angular-specific aspects often involved with reflection for DI or component loading
# (These are sometimes needed, depending on Angular version/compiler settings)
-keep class * implements org.angularjs.compiler.AotGenerated { *; } # Example for AOT, if applicable
-keep class * extends android.webkit.WebViewClient { *; }