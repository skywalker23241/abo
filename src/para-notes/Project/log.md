#### Mar 2025

##### Mon Mar 24

###### Mon Mar 24 11:22:41 CST 2025

记日也移动到这里吧，后台干干净净的，全部给firefox得了哈哈。

###### Mon Mar 24 14:38:41 CST 2025

Wiz的阅读进度条和我们差不多，但是细节方面做的不错，除了截屏那块。

###### Mon Mar 24 15:49:41 CST 2025

做了个wiz进度条的demo，效果还可以，但是不适合公司网站。

###### Mon Mar 24 16:02:41 CST 2025

阿聪给我设置ip地址是那个吧，得了吧，继续干。

###### Mon Mar 24 17:00:41 CST 2025

这些VPN的收款方都是一些不知名的商家，可能也是按照你的IP来分的，读取号码归属地？分配本地的合作商家来收款？自己风险降到最小，也不怕帽子叔叔找上门。

##### Tue Mar 25

###### Tue Mar 25 18:09:50 CST 2025

OK了,可以添加时间了.

###### Tue Mar 25 18:18:40 CST 2025

总结一下今天吧,虽然站内只是改了一点点,但是还是可以的,明天尽可能把lib的搞完吧.

##### Wed Mar 26

###### Wed Mar 26 08:52:41 CST 2025

到了,把lib搞完吧,不要有什么打扰我啊!

###### Wed Mar 26 09:19:47 CST 2025

把一些不需要跟踪的文件夹添加到gitignore了.

###### Wed Mar 26 09:53:20 CST 2025

-   [How to Repair Corrupted MP4 Video Files Using VLC](../backup-recovery/repair-corrupted-mp4-file-using-vlc.html)

-   [7 Proven Ways to Repair Corrupted JPG/JPEG Files](../backup-recovery/repair-corrupted-jpg-files.html)

-   [4 Proven Ways to Fix Corrupted MOV File](../backup-recovery/repair-corrupted-mov-file.html)


###### Wed Mar 26 11:07:51 CST 2025

发现一处错误,图片添加了一个p类型,然后移动端显示异常. url:trunk/backup-recovery/a-comprehensive-tutorial-on-system-backup-in-windows-11.html code:

```html
<p style="width: 782px; height: 555px; background-color: rgb(247, 247, 247);">
                    <img loading="lazy" src="../images/backup-recovery/a-comprehensive-tutorial-on-system-backup-in-windows-11/start-backup.webp"
                        alt="start-backup" width="680" height="545" style="margin: 5px 51px;" />
                </p>
```

###### Wed Mar 26 11:41:06 CST 2025

这个肯定是同一个人写的代码,一模一样,太搞了,改完了.

###### Wed Mar 26 11:47:43 CST 2025

bitlocker有一篇文章用的是backup的lib文件,等改完bitlocker再把它改了吧. fix-recovery-key-cannot-save-to-this-location-error.html

###### Wed Mar 26 11:53:31 CST 2025

测试自动提交12341234. 测试自动提交12341234. 测试自动提交12341234.

###### Wed Mar 26 11:58:47 CST 2025

吃饭去了,那个自动提交好像没有用哈哈哈.

###### Wed Mar 26 13:32:14 CST 2025

中午的时间还是太短了,不过至少不会睡的头疼.

###### Wed Mar 26 14:55:20 CST 2025

这个GIT有点像SVN,提交的文件也会冲突哈哈哈,但是至始至终都是我一个人编辑怎么会冲突呢?

###### Wed Mar 26 17:04:49 CST 2025

Assume the persona of [Expert Persona], [Verb] [Format & Length] [Objective]. The output should include [Data]. The writing style is [Tone of Voice] tailored towards [Audience].

###### Wed Mar 26 18:12:04 CST 2025

ai也会安排ai吗哈哈哈

###### Wed Mar 26 18:17:43 CST 2025

先这样吧,明天再来看看,感觉是哪里出了问题.

##### Thu Mar 27

###### Thu Mar 27 08:48:31 CST 2025

到地了,看下先把lib优化完吧,否则时间拖的太长周五更新不好提交.

###### Thu Mar 27 09:28:11 CST 2025

这个优化格式太混乱了,还需要优化,先这样用会吧;有总比没有好.

###### Thu Mar 27 10:47:03 CST 2025

这个想法不错,直接把阅读进度条做成一个盒子的阴影,这样的话就没有我们之前遇到的那些问题了吧. 参考Google的这个阅读进度条: https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/?ref=producthunt#gemini-2-5-thinking

###### Thu Mar 27 13:34:52 CST 2025

想睡觉.

###### Thu Mar 27 15:26:55 CST 2025

每个人的写作风格,方式不一样,你不能把自己的方式强加到别人的脑子里面.

###### Thu Mar 27 15:42:34 CST 2025

把图片的类型给去除了,不会再显示优化图片了,接下来要把网页头部和尾部给排除掉.

###### Thu Mar 27 15:48:45 CST 2025

终于把那个烦人的Doctuments仓库删掉了,奶奶的.

###### Thu Mar 27 17:05:05 CST 2025

感觉我这个脚本主要包含以下几个步骤,先提取出html文档中包含 `<div class="product-main">`这个的全部部分,然后再在这个部分过滤掉作者栏以及图片栏,也就是 `<div class="product-content clearfloat">`和 `<p><img loading="lazy" src="../images/android/3-ways-to-fix-the-android-recovery-mode-not-working-problem/fix-android-recovery-mode-not-working-problem.webp" alt="fix android recovery mode not working" width="600" height="400">``</p>`这两种类型的代码,后对剩下的 `<h2>`,`<h3><p>`标签进行正文的提取,提取得到的部分交给ai处理并优化,保持结构不变,然后将返回的结果重新导入原来的html中,怎么导出的怎么导回,得到优化后的文档.

###### Thu Mar 27 18:03:47 CST 2025

```txt
调试日志:
======== 实际处理元素统计 ========
总元素数: 36
元素类型分布: {'p': 44, 'h2': 2, 'h3': 3}
样例内容: ['`<p>`Updated: `<time>`January 11, 2024 `</time></p>`', '`<p>`When your Android phone has a system problem, you must want to use Android recovery mode to fix i', '`<h2>`Why is Android recovery mode not working `</h2>`']
======== 提取的正文内容 ========
{'h2': ['Why is Android recovery mode not working', 'How to fix the Android recovery mode not working problem'], 'h3': ['Option 1: Use key combinations', 'Option 2: Use functions in recovery mode', 'Option 3: Use iSumsoft Android Refixer'], 'p': ['Updated: `<time>`January 11, 2024 `</time>`', 'When your Android phone has a system problem, you must want to use Android recovery mode to fix it. This mode is a very useful way to repair Android phone problems. However, it usually has the not working problem, and the "No Command" error will be displayed on the screen. Don\'t worry, this article will show you .',
 '1. When the phone is installing or updating apps, you refuse the Super Users access your phone.',
  '2. When you reset your phone, it is stuck.',
   '3. Due to the improper app installation or device cache error.',
    "A very simple but effective way is to use key combinations to solve the problem of Android can't boot into recovery mode. Please note that before using this method, you should take out your SIM and SD card, cut off the power supply and ensure that the power is above 80%.",
     'Next, I will give you a list of several key combinations for you. Of course you can also try to use other combinations.',
      '1. Power and Volume Up buttons',
       '2. Power and Volume Down buttons',
        '3. Power, Home, and Volume Up buttons',
         '4. Power, Home, and Volume Down buttons',
          '5. Power and Home buttons',
           'When you are trying a key combination, you have to press and hold it for about 5 seconds. If this key combination fails, please wait for some time and use other key combination. Once the key combination has fixed the "No Command" error, you will access the Android recovery mode successfully and see a list of options like "Wipe data/factory reset".',
            'When you are encountering Android recovery mode not working problem and there is no command error, you can try the following two ways.',
             'This way will not have any effect on your phone. It is very practical for us to use it. Please follow the steps:',
              'Step 1: Use the Volume Down button to highlight the "Wipe cache partition" option and press the Power button.',
              'Step 2: Use the Power button to click on "Yes".', 'Step 3:\xa0After finishing wiping the cache, choose the first option "Reboot system now". And wait for restarting your phone. You can try to enter the recovery mode again.',
               'Since this method will erase all the data in the phone, it is not very perfect. But you can try it if there is no way to solve your problem.      ',
 'Step 1:\xa0Use the Volume Down button to place the cursor on "Wipe data/factory reset" option.',
  'Step 2:\xa0Use the Power button twice to confirm the option and advance the procedure.',
   'Step 3:\xa0After wiping all the data, your phone will
restart normally. And you can access the recovery mode again to check if the not working problem has been solved.',
'When the Power or Volume buttons can not work in the Android recovery mode, the above two methods are not applicable. But we have a wonderful software to recommend. That is iSumsoft Android Refixer. It can solve many Android system problems, absolutely including Samsung Android recovery mode not working problem. And you can also use it for fixing apps crashing, phone black screen, high battery consumption and phone slow running.', 'At this time, I will show detailed steps for you.',
 'Step 1:\xa0Download and install Android Refixer on your computer(Enter the website: https://www.isumsoft.com/). Use a USB cable to connect your Android device to the PC. And then click on "Start".',
  'Step 2:\xa0Find
and input your device model and country. Click the "Tip" button, and it will show you the way to get them. Select the download and decompression path and then click "Start".',
 'Step 3: If the device information has matched correctly, iSumsoft Android Refixer will start downloading system package for your device.',
  'Step 4:\xa0Follow the on-screen steps below to make your device enter downloading mode. When your phone stays at the downloading screen, you can click the "Start" button to repair your phone.',
   'Step 5:\xa0After the software has told you the repairing is successful, you can see that your phone will restart normally. And the recovery mode will work as usual.',
 'Latest Articles',
  'Hot Articles']}
======== AI 返回的原始数据 ========
{
  "h2": [
    "Why Android Recovery Mode May Not Work",
    "How to Fix Android Recovery Mode Issues"
  ],
  "h3": [
    "Option 1: Key Combinations",
    "Option 2: Functions in Recovery Mode",
    "Option 3: iSumsoft Android Refixer"
  ],
  "p": [
    "Updated: `<time>`January 11, 2024 `</time>`",
    "When facing a system issue on your Android phone, recovery mode can be a valuable tool for repairs. However, issues like the \"No Command\" error may arise. This article provides solutions.",
    "Common causes include: 1. Refusing Super User access during app installations or updates. 2. Stuck during phone reset. 3. Improper app installations or device cache errors.",
    "A simple yet effective solution is using key combinations. Before trying this, remove the SIM and SD card, disconnect the power supply, and ensure the battery is above 80%.",
    "Here are several key combinations to try: 1. Power + Volume Up 2. Power + Volume Down 3. Power + Home + Volume Up 4. Power + Home +
Volume Down 5. Power + Home.",
    "When using a key combination, hold it for about 5 seconds. If it fails, wait before trying another. Successful combinations will allow access to recovery mode options like \"Wipe data/factory reset.\"",
    "If recovery mode is unresponsive, try the following methods:",
    "These methods are safe for your phone. Follow these steps: Step 1: Highlight \"Wipe cache partition\" with Volume Down and press Power. Step 2: Confirm with Power. Step 3: Select \"Reboot system now\" after wiping cache.",
    "While this method erases all data, it may resolve your issue: Step 1: Highlight \"Wipe data/factory reset\" with Volume Down. Step 2: Confirm with Power twice. Step 3: Restart your phone after wiping data.",
    "If Power or Volume buttons are unresponsive, consider using iSumsoft Android Refixer. It addresses various Android system problems,
including Samsung recovery mode issues.",
    "Here are the detailed steps: Step 1: Download and install Android Refixer on your PC from https://www.isumsoft.com/. Connect your device via USB and click \"Start.\" Step 2: Input your device model and country, then click \"Tip\" for guidance. Select the download path
and click \"Start.\" Step 3: If device information matches, the software will download the necessary system package.",
    "Step 4: Follow the on-screen instructions to enter downloading mode. Once on the downloading screen, click \"Start\" to repair your
phone. Step 5: After a successful repair, your phone will restart, and recovery mode will function normally.",
    "Latest Articles",
    "Hot Articles"
  ]
}
======== 数据校验结果 ========
原始数量: {'h2': 2, 'h3': 3, 'p': 31}
优化数量: {'h2': 2, 'h3': 3, 'p': 14}
❌ 数据校验失败: 元素数量不匹配: {'h2': 2, 'h3': 3, 'p': 14} ≠ {'h2': 2, 'h3': 3, 'p': 31}
⚠️ 已保存错误备份到 error_backup.json
✅ 优化完成，输出已保存到 output.html
```

##### Fri Mar 28

###### Fri Mar 28 09:09:51 CST 2025

实际p标签数量应该只有28个,统计错了,然后ai把部分内容自己合并了,应该是为了理解上下文.

###### Fri Mar 28 10:25:41 CST 2025

这个潘多克还真有点东西,但就是比较难用哈哈哈.

###### Fri Mar 28 11:17:05 CST 2025

很多类型的工具都是为了减少开发过程中代码的使用.

###### Fri Mar 28 16:23:12 CST 2025

原来是模型的问题,我还以为是我代码的问题,还是接入的模型太垃圾了,只优化了两篇文章就不行了,看下换成ds能不能行.

###### Fri Mar 28 16:46:18 CST 2025

测试,刚刚换成deepseek-r1的模型,优化效果达到预期,还保留了超链接,应该就是模型问题.

###### Fri Mar 28 16:52:25 CST 2025

ds的优化给我的感觉更像是一种极致的简化,少了几分专业的感觉,可能是我的命令也没有给到位吧.

##### Mon Mar 31

###### Mon Mar 31 08:58:54 CST 2025

刚来网络有点问题,重置了dns就好了,上完这四天班回去过清明节了.

###### Mon Mar 31 09:18:58 CST 2025

使用最合适的模型,测试是否保留链接. 链接保留了,并且原本不是链接的也转化成链接

###### Mon Mar 31 09:48:06 CST 2025

包含div.product-div的文章调试错误日志

```txt
🔍 正在处理: how-to-fix-black-screen-of-death-iphone-15-pro.html
======== 实际处理元素统计 ========
总元素数: 43
元素类型分布: {'p': 43, 'h2': 5, 'h3': 8}
样例内容: ['`<p>`Updated: `<time>`September 20, 2024`</time></p>`', '`<p><i>`Picture this: you just got your shiny new iPhone 15 Pro and placed it on the MagSafe charger f', '`<h2 id="part1">`What is iPhone 15 Pro
Black Screen of Death?`</h2>`']
======== 提取的正文内容 ========
{'h2': ['What is iPhone 15 Pro Black Screen of Death?', 'Solutions for iPhone 15 Pro Black Screen of Death', 'Powerful iOS System Repair Tool', 'FAQs of iPhone 15 Pro Black Screen of Death', 'SUMMING-UP'], 'h3': ['1. Screen Replacement', '2. Force Restart iPhone', '3. Charge Your iPhone', '4. Ask Siri to Restart Your iPhone', '5. Use iSumsoft iOS Refixer', '1. Do I Need to Visit Apple Care to Check My iPhone?', '2. Why is My iPhone Running But the Screen is Black?', '3. How Might I Accidentally Trigger an Emergency Call?'], 'p': ['Updated: `<time>`September 20, 2024`</time>`', '`<i>`Picture this: you just got your shiny new iPhone 15 Pro and placed it on the MagSafe charger for a full night of charging. Excited to start your new day, but when you pick up your phone only to find the screen completely black. Although you can hear notifications and the iPhone seems to be running, the display remains unresponsive. You’re now facing the frustrating Black Screen of Death.`</i>`', 'The iPhone 15 Pro Black Screen of Death is a common issue that manifests as a completely black screen, while the phone itself might still be running. You may hear notification sounds, phone rings, or even feel vibrations, but the screen stays dark and unresponsive.', 'This situation can also be referred to as the black screen no responding, screen stucked and black, or screen suddenly turns black. The causes can range from software glitches to hardware issues. Luckily, `<a href="how-to-fix-black-screen-of-death-iphone-15-pro.html">`most cases can be resolved with a few simple steps`</a>`.', 'If your iPhone has suffered physical damage before, such as drops or impacts, the black screen issue may be due to a faulty display. In this case, the best solution is to visit an Apple Store or a professional repair shop to get the screen replaced.', 'For many Black Screen Of Death problems, a force restart is an effective solution. The steps are simple:', '`<span class="step">`Step 1 Quickly press and release the Volume Up button.', '`<span class="step">`Step 2 Quickly press and release the Volume Down button.', '`<span class="step">`Step 3 Then, press and hold the Side Button until the `<b>`Apple logo`</b>` appears.', 'But be cautious! If you have enabled the automatic emergency call feature, holding the side button might start a countdown for an `<b>`emergency call`</b>`. Because the screen is black, you may accidentally touch the emergency number. You definitely don’t want to accidentally summon the police!', 'Sometimes, the problem isn’t complicated at all—it might just be that your iPhone’s battery is completely drained. Plug your phone into a charger and wait for at least 15 minutes before trying to turn it back on.', 'If the screen is unresponsive but the phone is still running (for instance, you can hear notifications), you can ask Siri to restart your phone. Just say, "Hey Siri, restart my iPhone." Hopefully, this trusty assistant can help you out.', 'If none of the above methods work, you can try to use iSumsoft iOS Refixer to solve your Black Screen Of Death problem, follow the following methods to take a look!', 'iSumsoft iOS Refixer', '`<span class="step">`Step 1 First, download and install iSumsoft iOS Refixer on your PC or Mac. Then, using a USB-C cable, securely connect your iPhone 15 Pro to the computer.', '`<span class="step">`Step 2 Launch iSumsoft iOS Refixer and select the "System Repair" option from the main interface.', '`<span class="step">`Step 3 Choose "Standard Mode," which allows you to fix the black screen issue without losing any data on your iPhone.', '`<span class="step">`Step 4 Follow the prompts to connect your iPhone and enter recovery mode. To do this:', '1. Quickly press and release the Volume Up button.', '2. Quickly press and release the Volume Down button.', '3. Hold down the Side Button until the recovery mode screen (with the cable pointing to a computer) appears. Then, click "Next."', 'Step 5: The software will detect your iPhone and prompt you to download the appropriate firmware. Click
"Download" to begin.', 'Step 6: Once the firmware is downloaded, click "Repair," and iSumsoft iOS Refixer will start the repair process.', 'Step 7: After the repair is complete, your iPhone should automatically restart, and the black screen issue should be resolved.', "It depends on your situation. If your iPhone 15 Pro has had physical damage before, the screen may be broken, and it's recommended to visit Apple Care or an authorized repair point. If it’s a software issue, the solutions above should help.", 'Sometimes, the iPhone 15 Pro black screen but phone still running issue is due to a display connection problem or software conflict. Other functions might still be working in the background, like notification sounds and phone vibrations, but the screen is simply unresponsive.', 'If you press and hold
the side button and volume buttons simultaneously while the automatic emergency call feature is enabled, your phone will start a countdown to make an emergency call. So, during a force restart, try to avoid holding the side button for too long!', 'Dealing with a iPhone black screen can be frustrating, especially with a brand-new iPhone 15 pro. But don’t worry! By following these solutions, you should be able to resolve the issue and get back to using your iPhone 15 Pro in no time. Stay calm, and remember that there’s always a way out of the tech troubles! If this post help you out iPhone 15 Pro Black Screen of Death issuses, please share it with your friend who may counter the same issues.', 'Latest Articles', 'Hot Articles']}
======== AI 返回的原始数据 ========
{
  "h2": [
    "What is iPhone 15 Pro Black Screen of Death?",
    "Solutions for iPhone 15 Pro Black Screen of Death",
    "Powerful iOS System Repair Tool",
    "FAQs of iPhone 15 Pro Black Screen of Death",
    "SUMMING-UP"
  ],
  "h3": [
    "1. Screen Replacement Solution",
    "2. Force Restart iPhone Method",
    "3. Charging Troubleshooting Guide",
    "4. Voice-Activated Restart via Siri",
    "5. Using iSumsoft iOS Refixer Software",
    "1. Do I Need to Visit Apple Care to Check My iPhone?",
    "2. Why is My iPhone Running But the Screen is Black?",
    "3. How Might I Accidentally Trigger an Emergency Call?"
  ],
  "p": [
    "Updated: `<time>`September 20, 2024`</time>`",
    "`<i>`Imagine this scenario: Your brand-new iPhone 15 Pro charges overnight on a MagSafe charger. Morning comes, but instead of your lock screen, you're greeted with complete darkness. Notifications chime and vibrations confirm functionality, yet the display stays dead - you've encountered the notorious iPhone 15 Pro Black Screen of Death.`</i>`",
    "The iPhone 15 Pro Black Screen of Death refers to a persistent unresponsive display while device functions continue operating. Users often report audible alerts, incoming call rings, and haptic feedback despite the darkened screen.",
    "Commonly called black screen freeze, unresponsive display syndrome, or sudden screen failure, this iPhone 15 Pro issue stems from software conflicts to hardware malfunctions. Our <a href=\"how-to-fix-black-screen-of-death-iphone-15-pro.html\" title=\"iPhone 15 Pro Black Screen Fix Guide\">comprehensive troubleshooting guide`</a>` covers effective solutions for most cases.",
    "Post-impact black screens may indicate damaged display components. For physical trauma cases, consult Apple-certified technicians through <a href=\"https://support.apple.com/\" target=\"_blank\">official Apple Support channels`</a>` for genuine replacement parts.",
    "Execute a force restart sequence to resolve temporary system glitches causing iPhone 15 Pro black screen issues:",
    "<span class=\"step\">Step 1 Briefly press/release Volume Up button",
    "<span class=\"step\">Step 2 Quickly tap Volume Down button",
    "<span class=\"step\>Step 3 Long-press Side Button until Apple logo surfaces (10-15 seconds)",
    "Important Note: Disable Emergency SOS in Settings > Emergency SOS to prevent accidental emergency calls during this process.",
    "Low-power states can mimic black screen errors. Connect to a certified charger using original USB-C cable, allowing 20-30 minutes before powering on.",
    "Activate voice command with \"Hey Siri, reboot my iPhone\" when touchscreen fails. Ensure Siri remains enabled in Accessibility settings pre-crisis.",
    "For persistent software-related black screens, iSumsoft iOS Refixer offers professional-grade system recovery without data loss. Follow these optimized steps:",
    "iSumsoft iOS Refixer: Certified iOS Repair Solution",
    "<span class=\"step\">Step 1 Download iOS Refixer installer from <a href=\"https://www.isumsoft.com\" rel=\"nofollow\">official site`</a>` and complete setup",
    "<span class=\"step\">Step 2 Initiate System Repair module from dashboard interface",
    "<span class=\"step\">Step 3 Select Data-Preserving Standard Mode for non-destructive repair",
    "<span class=\"step\">Step 4 Prepare device for recovery mode connection:",
    "1. Quick-press Volume Up (release immediately)",
    "2. Tap Volume Down button",
    "3. Maintain Side Button hold until recovery symbol appears",
    "Step 5: Software auto-detects device model and downloads compatible iOS firmware",
    "Step 6: Initiate repair process after successful firmware verification",
    "Step 7: Automatic reboot completes system restoration (5-8 minutes average)",
    "Seek Apple Care consultation only after confirming physical damage through our diagnostic flow chart. Software solutions resolve 83% of cases per AppleInsider reports.",
    "Background processes continue during display failures due to graphics subsystem crashes or power management errors. This explains functional audio with black screen occurrences.",
    "Emergency SOS activation requires specific button sequences: Simultaneous Side + Volume button holds trigger 5-second countdown. Adjust settings in Health app > Medical ID to prevent false triggers.",
    "Resolving iPhone 15 Pro black screen issues requires systematic troubleshooting. Implement these verified solutions to restore device functionality while protecting your data. Bookmark this guide for future reference and share with fellow iPhone users experiencing similar display failures.",
    "Latest iOS Troubleshooting Articles",
    "Popular iPhone Repair Guides"
  ]
}
❌ 数据校验失败: Invalid \escape: line 28 column 24 (char 2227)
❌ 处理失败: how-to-fix-black-screen-of-death-iphone-15-pro.html - cannot access local variable 'optimized_counts' where it is not associated with a value
进度: 1文件处理完成 (0成功 1失败)

==============================
处理完成统计:
• 总处理文件: 1
• 成功数量: 0
• 失败文件: 1
输出目录: C:/Users/Admin/Desktop/Github仓库/python/文章ai优化demo/输出文件夹
⚠️ 失败文件列表已保存至: C:/Users/Admin/Desktop/Github仓库/python/文章ai优化demo/输出文件夹\error_log.txt
PS C:\Users\Admin\Desktop\Github仓库>  c:; cd 'c:\Users\Admin\Desktop\Github仓库'; & 'c:\Users\Admin\AppData\Local\Programs\Python\Python313\python.exe' 'c:\Users\Admin\.vscode\extensions\ms-python.debugpy-2025.4.1-win32-x64\bundled\libs\debugpy\launcher' '57787' '--' 'C:\Users\Admin\Desktop\Github仓库\python\文章ai优化demo\工具\ai文章优化ver1.0.py'

🔍 正在处理: how-to-fix-black-screen-of-death-iphone-15-pro.html
======== 实际处理元素统计 ========
总元素数: 159
元素类型分布: {'div': 9, 'h1': 1, 'img': 21, 'span': 14, 'a': 31, 'p': 43, 'time': 1, 'i': 1, 'ul': 5, 'li': 26, 'h2': 5, 'h3': 8, 'b': 5, 'h4': 1}
样例内容: ['`<div class="product-content clearfloat">`\n`<div class="left">`\n`<h1>`iPhone 15/Pro/Max Black Screen of De', '`<div class="left">`\n`<h1>`iPhone 15/Pro/Max Black Screen of Death? 5 Fast & Easy Fixes`</h1>`\n<div cl', '`<h1>`iPhone 15/Pro/Max Black Screen of Death? 5 Fast & Easy Fixes`</h1>`']
======== 提取的正文内容 ========
{
  'h2': [
  'What is iPhone 15 Pro Black Screen of Death?',
  'Solutions for iPhone 15 Pro Black Screen of Death',
  'Powerful iOS System Repair Tool',
  'FAQs of iPhone 15 Pro Black Screen of Death',
  'SUMMING-UP'
  ],
  'h3': [
    '1. Screen Replacement',
    '2. Force Restart iPhone',
    '3. Charge Your iPhone',
    '4. Ask Siri to Restart Your iPhone',
    '5. Use iSumsoft iOS Refixer',
    '1. Do I Need to Visit Apple Care to Check My iPhone?',
    '2. Why is My iPhone Running But the Screen is Black?',
    '3. How Might I Accidentally Trigger an Emergency Call?'
    ],
    'p': [
      'Updated: `<time>`September 20, 2024`</time>`',
      '`<i>`Picture this: you just got your shiny new iPhone 15 Pro and placed it on the MagSafe charger for a full night of charging. Excited to start your new day, but when you pick up your phone only to find the screen completely black. Although you can hear notifications and the iPhone seems to be running, the display remains unresponsive. You’re now facing the frustrating Black Screen of Death.`</i>`',
      '`<img alt="How to Fix iPhone 15 Black Screen Of Death" height="452" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/how-to-fix-iphone-15-pro-black-screen-of-death.webp" width="802"/>`',
      'The iPhone 15 Pro Black Screen of Death is a common issue that manifests as a completely black screen, while the phone itself might still be running. You may hear notification sounds, phone rings, or even feel vibrations, but the screen stays dark and unresponsive.',
      '`<img alt="iPhone 15 Pro Black Screen of Death" height="452" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/iphone-15-pro-black-screen-of-death.webp" width="802"/>`',
      'This situation can also be referred to as the black screen no responding, screen stucked and black, or screen suddenly turns black. The causes can range
from software glitches to hardware issues. Luckily, `<a href="how-to-fix-black-screen-of-death-iphone-15-pro.html">`most cases can be resolved with a few simple steps`</a>`.',
'If your iPhone has suffered physical damage before, such as drops or impacts, the black screen issue may be due to a faulty display. In this case, the best solution is to visit an Apple Store or a professional repair shop to get the screen replaced.',
'`<img alt="iPhone 15 Pro with a Broken Screen" height="450" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/iphone-15-pro-with-a-broken-screen.webp" width="800"/>`',
'For many Black Screen Of Death problems, a force restart is an effective solution. The steps are simple:',
'`<span class="step">`Step 1 Quickly press and release the Volume Up button.',
'`<span class="step">`Step 2 Quickly press and release the Volume Down button.',
'`<span class="step">`Step 3 Then, press and hold the Side Button until the `<b>`Apple logo`</b>` appears.',
'`<img alt="Force Restart You iPhone 15" height="452" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/force-restart-you-iphone-15-pro.webp" width="802"/>`',
'But be cautious! If you have enabled the automatic emergency call feature, holding the side button might start a countdown for an `<b>`emergency call`</b>`. Because the screen is black, you may accidentally touch the emergency number. You definitely don’t want to accidentally summon the police!',
'Sometimes, the problem isn’t complicated at all—it might just be that your iPhone’s battery is completely drained. Plug your phone into a charger and wait for at least 15 minutes before trying to turn it back on.',
'`<img alt="Charge Your iPhone 15" height="479" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/charge-your-iphone-before-battery-drain.webp" width="800"/>`',
'If the screen is unresponsive but the phone is still running (for instance, you can hear notifications), you can ask Siri to restart your phone. Just say, "Hey Siri, restart my iPhone." Hopefully, this trusty assistant can help you out.',
'`<img alt="Ask Siri to Restart Your iPhone 15" height="464" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/ask-siri-to-restart-your-iphone.webp" width="800"/>`', 'If none of the above methods work, you can try to use iSumsoft iOS Refixer to solve
your Black Screen Of Death problem, follow the following methods to take a look!',
'iSumsoft iOS Refixer',
'`<span class="step">`Step 1 First, download and install iSumsoft iOS Refixer on your PC or
Mac. Then, using a USB-C cable, securely connect your iPhone 15 Pro to the computer.',
'`<span class="step">`Step 2 Launch iSumsoft iOS Refixer and select the "System Repair" option from the main interface.',
'`<img alt="Select System Repair in Software" height="571" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/select-system-repair-in-software.webp" width="800"/>`',
'`<span class="step">`Step 3 Choose "Standard Mode," which allows you to fix the black screen issue without losing any data on your iPhone.',
'`<img alt="Select Standard Mode in Software" height="571" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/select-standard-mode-in-software.webp" width="800"/>`',
'`<span class="step">`Step 4 Follow the prompts
to connect your iPhone and enter recovery mode. To do this:',
'1. Quickly press and release the Volume Up button.',
'2. Quickly press and release the Volume Down button.',
'3. Hold down the Side Button until the recovery mode screen (with the cable pointing to a computer) appears. Then, click "Next."',
'`<img alt="Connect Your Device With Computer And Click Next" height="569" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/connect-your-device-with-computer-and-click-next.webp" width="800"/>`',
'Step 5: The software will detect your iPhone and prompt you to download the appropriate firmware. Click "Download" to begin.',
'`<img alt="Click Download to Procceed" height="572" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/click-download-to-procceed.webp" width="800"/>`',
'Step 6: Once the firmware is downloaded, click "Repair," and iSumsoft iOS Refixer will start the repair process.',
'`<img alt="Click Repair to Start Repair" height="571" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/click-repair-to-start-repair.webp" width="800"/>`',
'Step 7: After the repair is complete, your iPhone should automatically restart, and the black screen issue should be resolved.',
'`<img alt="iPhone Repair Successfully" height="572" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/iphone-repair-successfully.webp" width="800"/>`',
"It depends on your situation. If your iPhone 15 Pro has had physical damage before, the screen may be broken, and it's recommended to visit Apple Care or an authorized repair point. If it’s a software issue, the solutions above should help.",
'Sometimes, the iPhone 15 Pro black screen but phone still running issue is due to a display connection problem or software conflict. Other functions might still be working in the background, like notification sounds and phone vibrations, but the screen is simply unresponsive.',
'If you press and hold the side button and volume buttons simultaneously while the automatic emergency call feature is enabled, your phone will start a countdown to make an emergency call. So, during a force restart, try to avoid holding
the side button for too long!',
'`<img alt="Call Emergency Call by Mistake" height="448" loading="lazy" src="../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/call-emergency-call-by-mistake.webp" width="800"/>`',
'Dealing with a iPhone black screen can be frustrating, especially with a brand-new iPhone 15 pro. But don’t worry! By following these solutions, you should be able to resolve the issue and get back to using your iPhone 15 Pro in no time. Stay calm, and remember that there’s always a way out of the tech troubles! If this post help you out iPhone 15 Pro Black Screen of Death issuses, please share it with your friend who may counter the same issues.',
'Latest Articles',
'Hot Articles'
]
}
======== AI 返回的原始数据 ========
{
  "h2": [
    "Understanding iPhone 15 Pro Black Screen of Death",
    "Proven Fixes for iPhone 15 Pro Black Screen Issue",
    "Advanced iOS Repair Solution for Persistent Issues",
    "iPhone 15 Pro Black Screen: Expert FAQs Answered",
    "Conclusion: Key Takeaways for iPhone 15 Pro Screen Issues"
  ],
  "h3": [
    "When to Consider Screen Replacement",
    "Step-by-Step Guide to Force Restart",
    "Proper Charging Protocol for Dead Devices",
    "Voice-Activated Restart via Siri",
    "Data-Safe Repair Using iSumsoft iOS Refixer",
    "Professional Diagnosis: Apple Care Necessity",
    "Understanding Functional Black Screen Scenarios",
    "Preventing Accidental Emergency Calls"
  ],
  "p": [
    "Updated: `<time>`September 20, 2024`</time>`",
    "`<i>`Imagine this scenario: Your new iPhone 15 Pro charges overnight on a MagSafe charger, only to display a completely black screen at dawn. Despite audible notifications and apparent system functionality, the display remains dark and unresponsive - a classic case of the Black Screen of Death affecting iPhone 15 Pro models.`</i>`",
    "<img alt=\"iPhone 15 Pro Black Screen Troubleshooting Guide\" height=\"452\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/how-to-fix-iphone-15-pro-black-screen-of-death.webp\" width=\"802\"/>",
    "The iPhone 15 Pro Black Screen of Death manifests as complete display failure despite maintained device functionality. Users typically report hearing alerts, feeling vibrations, or detecting charging indicators while the screen remains dark and unresponsive.",
    "<img alt=\"iPhone 15 Pro Display Failure Symptoms\" height=\"452\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/iphone-15-pro-black-screen-of-death.webp\" width=\"802\"/>",
    "Commonly referred to as black screen freeze or display failure syndrome, this iPhone 15 Pro issue stems from either software conflicts or hardware malfunctions. <a href=\"how-to-fix-black-screen-of-death-iphone-15-pro.html\">Our comprehensive guide addresses both scenarios`</a>`, offering practical solutions for various black screen situations.",
    "Physical impacts or liquid damage often require professional iPhone 15 Pro screen replacement. Visit Apple-certified technicians for genuine parts and warranty-preserving repairs when dealing with hardware-related display failures.",
    "<img alt=\"iPhone 15 Pro Physical Damage Assessment\" height=\"450\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/iphone-15-pro-with-a-broken-screen.webp\" width=\"800\"/>",
    "Execute a forced reboot using this precise iPhone 15 Pro button sequence:",
    "<span class=\"step\">Step 1 Briefly press and release Volume Up (1 second)",
    "<span class=\"step\">Step 2 Immediately press and release Volume Down",
    "<span class=\"step\">Step 3 Hold Side Button until Apple logo appears (10+ seconds)",
    "<img alt=\"iPhone 15 Pro Force Restart Process\" height=\"452\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/force-restart-you-iphone-15-pro.webp\" width=\"802\"/>",
    "Important: Disable Emergency SOS in Settings > Emergency SOS before attempting forced restarts to prevent accidental emergency calls during black screen situations.",
    "Revive unresponsive iPhones by charging with original USB-C cables and 20W+ adapters. Allow 30 minutes charging before attempting power-on for best results.",
    "<img alt=\"iPhone 15 Pro Charging Best Practices\" height=\"479\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/charge-your-iphone-before-battery-drain.webp\" width=\"800\"/>",
    "Activate Siri through wired headphones or \"Hey Siri\" voice commands to execute voice-controlled restarts when touch functionality fails.",
    "<img alt=\"Voice Command iPhone Restart Process\" height=\"464\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/ask-siri-to-restart-your-iphone.webp\" width=\"800\"/>",
    "For persistent software-related iPhone 15 Pro black screen issues, follow this data-preserving repair protocol using iSumsoft iOS Refixer:",
    "iSumsoft iOS Refixer: Professional-Grade Repair Software",
    "<span class=\"step\">Step 1 Install iSumsoft iOS Refixer on Windows/Mac and connect iPhone 15 Pro via certified USB-C cable",
    "<span class=\"step\">Step 2 Launch software and select System Repair > Standard Mode for data-safe troubleshooting",
    "<img alt=\"iOS System Repair Interface Walkthrough\" height=\"571\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/select-system-repair-in-software.webp\"
width=\"800\"/>",
    "<span class=\"step\">Step 3 Initiate recovery mode sequence: Volume Up > Volume Down > Side Button hold (until recovery screen appears)",
    "<img alt=\"iPhone Recovery Mode Activation Guide\" height=\"571\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/select-standard-mode-in-software.webp\" width=\"800\"/>",
    "<span class=\"step\">Step 4 Download firmware package matching your iPhone 15 Pro model (automatic detection)",
    "Critical notes during repair process:",
    "1. Maintain stable USB connection throughout",
    "2. Avoid device interaction during firmware download",
    "3. Ensure 50%+ battery charge before starting",
    "<img alt=\"Firmware Download Progress Tracking\" height=\"569\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/connect-your-device-with-computer-and-click-next.webp\" width=\"800\"/>",
    "<span class=\"step\">Step 5 Initiate repair process after firmware verification completes (15-25 minute duration)",
    "<img alt=\"iOS Repair Confirmation Screen\" height=\"572\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/click-download-to-procceed.webp\" width=\"800\"/>",
    "<span class=\"step\">Step 6 Monitor progress bar until system restoration completes",
    "<img alt=\"iPhone Repair Completion Interface\" height=\"571\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/click-repair-to-start-repair.webp\" width=\"800\"/>",
    "<span class=\"step\">Step 7 Device automatically reboots with functional display post-repair",
    "<img alt=\"Successful iPhone 15 Pro Repair\" height=\"572\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/iphone-repair-successfully.webp\" width=\"800\"/>",
    "Seek Apple-certified repair services for physical damage cases. For software-related iPhone 15 Pro black screen issues, our recommended solutions typically resolve 85% of cases without professional intervention.",
    "The iPhone 15 Pro's black screen with functional background operations often indicates display driver conflicts or corrupted system files. Advanced users can attempt DFU mode restoration for deep-level fixes.",
    "Emergency call prevention tip: Customize Emergency SOS settings (Settings > Emergency SOS) to require confirmation before dialing, reducing accidental emergency triggers during troubleshooting.",
    "<img alt=\"Emergency Call Settings Configuration\" height=\"448\" loading=\"lazy\" src=\"../images/ios-issues/how-to-fix-black-screen-of-death-iphone-15-pro/call-emergency-call-by-mistake.webp\" width=\"800\"/>",
    "Mastering iPhone 15 Pro black screen recovery techniques ensures minimal downtime. Share these professional-grade solutions with fellow users experiencing similar display issues. For persistent problems, consult Apple Support or visit our updated troubleshooting portal.",
    "Related Guides: iPhone 15 Pro Display Solutions",
    "Popular Fixes: iOS System Recovery Methods"
  ]
}
======== 数据校验结果 ========
原始数量: {'h2': 5, 'h3': 8, 'p': 43}
优化数量: {'h2': 5, 'h3': 8, 'p': 44}
❌ 数据校验失败: 元素数量不匹配: {'p': '44/43'}
⚠️ 已保存详细错误日志到 error_backup.json
✅ 成功保存到: ..\输出文件夹\how-to-fix-black-screen-of-death-iphone-15-pro_optimized.html
进度: 1文件处理完成 (1成功 0失败)

==============================
处理完成统计:
• 总处理文件: 1
• 成功数量: 1
• 失败文件: 0
输出目录: C:/Users/Admin/Desktop/Github仓库/python/文章ai优化demo/输出文件夹
```

###### Mon Mar 31 10:21:18 CST 2025

```txt
数组对比:
p_array_1 = [
    "Updated: `<time>`September 20, 2024`</time>`",
    "`<i>`Picture this: you just got your shiny new iPhone 15 Pro and placed it on the MagSafe charger for a full night of charging. Excited to start your new day, but when you pick up your phone only to find the screen completely black. Although you can hear notifications and the iPhone seems to be running, the display remains unresponsive. You’re now facing the frustrating Black Screen of Death.`</i>`",
    "The iPhone 15 Pro Black Screen of Death is a common issue that manifests as a completely black screen, while the phone itself might still be running. You may hear notification sounds, phone rings, or even feel vibrations, but the screen stays dark and unresponsive.",
    "This situation can also be referred to as the black screen no responding, screen stucked and black, or screen suddenly turns black. The causes can range from software glitches to hardware issues. Luckily, <a href=\"how-to-fix-black-screen-of-death-iphone-15-pro.html\">most cases can be resolved with a few simple steps`</a>`.",
    "If your iPhone has suffered physical damage before, such as drops or impacts, the black screen issue may be due to a faulty display. In this case, the best solution is to visit an Apple Store or a professional repair shop to get the screen replaced.",
    "For many Black Screen Of Death problems, a force restart is an effective solution. The steps are simple:",
    "<span class=\"step\">Step 1 Quickly press and release the Volume Up button.",
    "<span class=\"step\">Step 2 Quickly press and release the Volume Down button.",
    "<span class=\"step\">Step 3 Then, press and hold the Side Button until the `<b>`Apple logo`</b>` appears.",
    "But be cautious! If you have enabled the automatic emergency call feature, holding the side button might start a countdown for an `<b>`emergency call`</b>`. Because the screen is black, you may accidentally touch the emergency number. You definitely don’t want to accidentally summon the police!",
    "Sometimes, the problem isn’t complicated at all—it might just be that your iPhone’s battery is completely drained. Plug your phone into a charger and wait for at least 15 minutes before trying to turn it back on.",
    "If the screen is unresponsive but the phone is still running (for instance, you can hear notifications), you can ask Siri to restart your phone. Just say, \"Hey Siri, restart my iPhone.\" Hopefully, this trusty assistant can help you out.",
    "If none of the above methods work, you can try to use iSumsoft iOS Refixer to solve your Black Screen Of Death problem, follow the following methods to take a look!",
    "iSumsoft iOS Refixer",
    "<span class=\"step\">Step 1 First, download and install iSumsoft iOS Refixer on your PC or Mac. Then, using a USB-C cable, securely connect your iPhone 15 Pro to the computer.",
    "<span class=\"step\">Step 2 Launch iSumsoft iOS Refixer and select the \"System Repair\" option from the main interface.",
    "<span class=\"step\">Step 3 Choose \"Standard Mode,\" which allows you to fix the black screen issue without losing any data on your iPhone.",
    "<span class=\"step\">Step 4 Follow the prompts to connect your iPhone and enter recovery mode. To do this:",
    "1. Quickly press and release the Volume Up button.",
    "2. Quickly press and release the Volume Down button.",
    "3. Hold down the Side Button until the recovery mode screen (with the cable pointing to a computer) appears. Then, click \"Next.\"",
    "Step 5: The software will detect your iPhone and prompt you to download the appropriate firmware. Click \"Download\" to begin.",
    "Step 6: Once the firmware is downloaded, click \"Repair,\" and iSumsoft iOS Refixer will start the repair process.",
    "Step 7: After the repair is complete, your iPhone should automatically restart, and the black screen issue should be resolved.",
    "It depends on your situation. If your iPhone 15 Pro has had physical damage before, the screen may be broken, and it's recommended to visit Apple Care or an authorized repair point. If it’s a software issue, the solutions above should help.",
    "Sometimes, the iPhone 15 Pro black screen but phone still running issue is due to a display connection problem or software conflict. Other functions might still be working in the background, like notification sounds and phone vibrations, but the screen is simply unresponsive.",
    "If you press and hold the side button and volume buttons simultaneously while the automatic emergency call feature is enabled, your phone will start a countdown to make an emergency call. So, during a force restart, try to avoid holding the side button for too long!",
    "Dealing with a iPhone black screen can be frustrating, especially with a brand-new iPhone 15 pro. But don’t worry! By following these solutions, you should be able to resolve the issue and get back to using your iPhone 15 Pro in no time. Stay calm, and remember that there’s always a way out of the tech troubles! If this post help you out iPhone 15 Pro Black Screen of Death issuses, please share it with your friend who may counter the same issues.",
    "Latest Articles",
    "Hot Articles"
]

p_array_2 = [
    "Updated: `<time>`September 20, 2024`</time>`",
    "`<i>`Imagine this scenario: Your brand-new iPhone 15 Pro charges overnight on a MagSafe charger. Morning comes - notifications sound through a completely black display. This common iPhone 15 Pro Black Screen of Death issue leaves users facing functional yet invisible devices.`</i>`",
    "The iPhone 15 Pro Black Screen of Death occurs when the display fails while device functions continue. Users report hearing alerts, feeling vibrations, and receiving calls despite complete screen darkness.",
    "Also known as unresponsive black screen or sudden display failure, this problem stems from software conflicts to hardware damage. Our <a href=\"how-to-fix-black-screen-of-death-iphone-15-pro.html\" alt=\"iPhone 15 Pro display fix\">comprehensive troubleshooting guide`</a>` covers effective solutions for most cases.",
    "Physical damage from drops or impacts often requires professional intervention. Visit Apple-certified technicians for genuine display replacements and component diagnostics.",
    "Perform a force restart using this precise button sequence:",
    "<span class=\"step\">Step 1 Quickly press/release Volume Up",
    "<span class=\"step\">Step 2 Quickly press/release Volume Down",
    "<span class=\"step\">Step 3 Hold Side Button until Apple logo appears",
    "Important: Disable Emergency SOS in Settings > Emergency SOS to prevent accidental emergency calls during this process.",
    "Low battery levels can mimic black screen errors. Connect to original charger for 30+ minutes before attempting restart procedures.",
    "Activate Siri through side button press or \"Hey Siri\" command, then say \"Restart my iPhone\" for hands-free troubleshooting.",
    "For persistent software-related black screens, iSumsoft iOS Refixer offers advanced repair capabilities through these steps:",
    "iSumsoft iOS Refixer - Certified iOS Repair Solution",
    "<span class=\"step\">Step 1 Install software on computer and connect iPhone via USB-C",
    "<span class=\"step\">Step 2 Select System Repair > Standard Mode (data-safe option)",
    "<span class=\"step\">Step 3 Initiate recovery mode with button sequence:",
    "1. Quick Volume Up press/release",
    "2. Quick Volume Down press/release",
    "3. Hold Side Button until recovery screen appears",
    "<span class=\"step\">Step 4 Download firmware package through automated process",
    "<span class=\"step\">Step 5 Execute system repair with one-click interface",
    "Complete repairs typically take 15-20 minutes with automatic device restart upon success.",
    "Seek Apple Care for physical damage assessment. Software-related issues can often be resolved through our troubleshooting methods without service visits."
    "The iPhone 15 Pro's layered architecture allows background operations despite display failures. Loose connectors or firmware errors typically cause this partial functionality state.",
    "Emergency SOS activation occurs with 5-second side button hold. Adjust settings in Emergency SOS > Call with Side Button to prevent unintended triggers.",
    "Resolving iPhone 15 Pro black screen issues requires methodical troubleshooting. Our solutions combine user-friendly fixes with professional repair options for complete display recovery. Share this guide with others facing similar iPhone 15 Pro display challenges.",
    "Latest iPhone Repair Guides",
    "Popular iOS Troubleshooting Articles"
]
```

###### Mon Mar 31 10:57:00 CST 2025

优化的差不多了,等下去其他板块的文章试试.

###### Mon Mar 31 13:39:47 CST 2025

这个rustholder有点东西哈哈哈,把摸鱼的代码整理到了1.md里面,需要的时候可以用.

###### Mon Mar 31 14:21:48 CST 2025

测试一共优化了18篇文章,成功了12篇,6篇数据检验没有通过,成功率66%左右,失败的部分应该是ai返回的内容步骤的缺失,待会再去看看.

以下是调试文件失败的日志:

D:/f/Documents/iSumsoft\_Web\_3/trunk/surface\\fix-windows-10-mail-app-stops-syncing-problem.html D:/f/Documents/iSumsoft\_Web\_3/trunk/surface\\how-to-share-screenshots-on-surface-tablet.html D:/f/Documents/iSumsoft\_Web\_3/trunk/surface\\index.html D:/f/Documents/iSumsoft\_Web\_3/trunk/surface\\microsoft-surface-stops-responding-how-to-do.html D:/f/Documents/iSumsoft\_Web\_3/trunk/surface\\my-surface-goes-black-screen-how-to-do.html D:/f/Documents/iSumsoft\_Web\_3/trunk/surface\\remove-reset-surface-book-password-without-data-loss.html D:/f/Documents/iSumsoft\_Web\_3/trunk/surface\\set-up-and-use-email-on-surface.html D:/f/Documents/iSumsoft\_Web\_3/trunk/surface\\turn-on-or-off-device-encryption-bitlocker-on-surface-pro-laptop.html D:/f/Documents/iSumsoft\_Web\_3/trunk/surface\\which-one-is-the-best-tablet-for-college-ipad-or-surface.html

手快把控制台直接关了...就这样看吧,而且免费的key次数用完之后,ai返回的内容就是空的了.

###### Mon Mar 31 16:10:26 CST 2025

在代码构建的时候,添加数据验证板块还是十分重要的,不然ai返回的内容可能会有问题,导致优化失败,其他的就没什么问题了,我会继续优化的.

###### Mon Mar 31 17:02:38 CST 2025

更新了surface的一些文章,感觉还是要手动替换的,虽然内容没什么变化,但是格式还是有点不一样的,还有就是sidebar的内容改了点.

#### Apr 2025

##### Tue Apr 1

###### Tue Apr 1 08:46:39 CST 2025

愚人节快乐哈哈哈,待会把记日的部分调试文档调整成代码块,优化手机显示.

###### Tue Apr 1 09:05:25 CST 2025

原来这个字体要改成英文才会显示,原来是我之前设置的问题,还以为是系统的问题呢.

###### Tue Apr 1 10:13:49 CST 2025

调试吧,试下chat写的这个代码有没有用.

###### Tue Apr 1 11:50:32 CST 2025

cladue注册成功了,待会手机上也安排一只吧.

###### Tue Apr 1 13:56:44 CST 2025

好吧,使用下来总体感受,cladue只是适合文章的编写吧,几种书写模式还是不错的,但是很快就达到了使用限制,白嫖方面还是不如其他ai的.

###### Tue Apr 1 14:56:31 CST 2025

sql文件夹文章优化调试日志:有一篇文章还是优化失败了,还是数据验证没有通过.

```txt
Microsoft Windows [Version 10.0.19045.5247]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Admin\Desktop\Github仓库\python\文章ai优化demo\工具>python ai文章优化ver1.0.py

🔍 正在处理: how-to-change-sa-password-in-sql-server-2014.html
======== 实际处理元素统计 ========
总元素数: 19
元素类型分布: {'p': 23, 'h2': 2}
样例内容: ['<p>Updated: <time>January 11, 2024</time></p>', '<p>When using Microsoft SQL Server, you may need to change the SA password in many situations. The m', '<h2><a id="method1" name="method1"></a>Method 1: Change SQL Server 2014 SA password in Windows Authe']
======== 提取的正文内容 ========
{'h2': ['Method 1: Change SQL Server 2014 SA password in Windows Authentication', 'Method 2: Change SQL Server 2014 SA password using SQL Password Refixer'], 'h3': [], 'p': ['Updated: <time>January 11, 2024</time>', 'When using Microsoft SQL Server, you may need to change the SA password in many situations. The most common case is when you forgot SA password. Now the latest version of SQL Server 2014 with more new features has been released. You may don\'t know yet how to change its SA password. Now, this article introduces methods to <strong><a href="how-to-change-sa-password-in-sql-server-2014.html">change SA password in SQL Server 2014</a></strong>, which also apply to the previous versions of SQL Server 2012/2008/R2/2005.', 'When you <strong>forgot SQL Server 2014 SA password</strong> and cannot connect to database in SQL Server Authentication, you generally may still can login in Windows Authentication mode. Then you can change the SA password in this mode.', 'Step 1: Open SQL Server Management Studio and select Windows Authentication to connect to Server.', 'Step 2: Expand the folder "<strong>Security -> Logins</strong>". Then double-click the sa account.', 'Step 3: On <strong>Login Properties</strong> dialog, select General. Delete the original password and type a new in the Password field or leave the password field blank, so that you can change the old (forgotten) SA password to a new one or blank.', "Tips: If you find you still cannot connect to database with the SA account after changing its password, you need to check the sa account's status and make sure it's in the Enabled status.", 'If you forgot SA password and also failed to connect to SQL Server 2014 in Windows Authentication. Don\'t worry. <strong>SQL Password Refixer </strong>is a program which is specialized in resetting SQL Server SA password or other users passwords. Firstly download and install <a href="../sql-password-refixer/">SQL Password Refixer</a> on your computer with SQL Server 2014 installed. Then follow the below steps to change the SA password.', '1. Open SQL Server Configuration Manager to <strong><a href="how-to-stop-start-sql-server-service.html">stop SQL Server services</a></strong>.', '2. Launch "SQL Password Refixer". Click <strong>Open File</strong> button and navigate to the path to the SQL Server master.mdf file. Select the file and add it into this program.', 'Tips: The master.mdf file is generally located in <strong>C:\\Program Files(x86)\\Microsoft SQL Server\\MSSQL 12.SQLEXPRESS\\MSSQL\\DATA\\master.mdf.</strong> (The C disk is where SQL Server was installed.)', '3. This program displays all users in the list. Select to highlight the sa account and then click <strong>Reset Password</strong> button.', '4. Type a new password for the SA account in the <strong>Reset Password</strong> dialog box and then click <strong>OK</strong> to confirm.', '5. You are prompted SA password is successfully changed. And you can see the new SA password is displayed in the list.', 'Once SA password is changed successfully, do not forget to restart the SQL Server 2014 service. Then you can connect to the database in SQL Server Authentication with the new SA password.', 'Latest Articles', 'Hot Articles']}
======== AI 返回的原始数据 ========
{
  "h2": [
    "Method 1: Change SQL Server 2014 SA Password via Windows Authentication [Step-by-Step Guide]",
    "Method 2: Reset SA Password in SQL Server 2014 Using SQL Password Refixer [Recovery Tool]"
  ],
  "h3": [],
  "p": [
    "Updated: <time>January 11, 2024</time>",
    "Maintaining secure SA credentials is critical for SQL Server administration. This comprehensive guide explains proven methods to <strong><a href=\"how-to-change-sa-password-in-sql-server-2014.html\">change SA password in SQL Server 2014</a></strong>, with techniques applicable to older versions including SQL Server 2012, 2008/R2, and 2005. Learn both authentication-based and third-party solutions for password recovery scenarios.",
    "Regain database access when <strong>recovering forgotten SQL Server 2014 SA credentials</strong> through Windows Authentication. This method requires administrative privileges and follows Microsoft's recommended security protocols.",
    "Step 1: Launch SQL Server Management Studio and establish connection via Windows Authentication",
    "Step 2: Navigate to Security → Logins in Object Explorer. Right-click the SA account and select Properties",
    "Step 3: In the Login Properties window, update the Password field under General settings. Clear existing credentials or enter a new strong password following your organization's security policies.",
    "Pro Tip: If authentication fails post-update, verify <strong>account enablement status</strong> in Server Properties → Status section and ensure SQL Server authentication mode is activated.",
    "For situations with complete authentication lockout, <strong>SQL Password Refixer</strong> provides emergency access recovery. Download the <a href=\"../sql-password-refixer/\">SQL password recovery tool</a> on the SQL Server host machine before proceeding.",
    "1. Halt SQL Server services through Configuration Manager to enable secure database modification",
    "2. Initiate SQL Password Refixer and load the master.mdf database file via File → Open",
    "Critical Path: Default master.mdf location: <strong>C:\\Program Files\\Microsoft SQL Server\\MSSQL12.SQLEXPRESS\\MSSQL\\DATA\\</strong> (Path varies by installation configuration)",
    "3. Select SA account from decrypted user list and activate password reset function",
    "4. Enter new SA credentials in the password reset dialog, adhering to complexity requirements (12+ characters, mixed case, special symbols)",
    "5. Confirm successful password update through the verification prompt and updated user list display",
    "Complete the recovery process by restarting SQL Server services and testing authentication with new SA credentials through SQL Server Authentication mode.",
    "Latest Security Updates",
    "Popular Administration Guides"
  ]
}
======== 数据校验结果 ========
原始数量: {'h2': 2, 'h3': 0, 'p': 17}
优化数量: {'h2': 2, 'h3': 0, 'p': 17}
======== 开始内容替换 ========
替换 p标签: 原长度25 ⇒ 新长度38
替换 p标签: 原长度436 ⇒ 新长度430
替换 h2: Method 1: Change SQL Server 2014 SA password in Wi... ⇒ Method 1: Change SQL Server 2014 SA Password via W...
替换 p标签: 原长度220 ⇒ 新长度231
替换 p标签: 原长度97 ⇒ 新长度95
替换 p标签: 原长度81 ⇒ 新长度106
替换 p标签: 原长度230 ⇒ 新长度196
替换 p标签: 原长度187 ⇒ 新长度189
替换 h2: Method 2: Change SQL Server 2014 SA password using... ⇒ Method 2: Reset SA Password in SQL Server 2014 Usi...
替换 p标签: 原长度382 ⇒ 新长度255
替换 p标签: 原长度69 ⇒ 新长度96
替换 p标签: 原长度162 ⇒ 新长度86
替换 p标签: 原长度183 ⇒ 新长度173
替换 p标签: 原长度120 ⇒ 新长度82
替换 p标签: 原长度104 ⇒ 新长度139
替换 p标签: 原长度118 ⇒ 新长度99
替换 p标签: 原长度187 ⇒ 新长度154
替换 p标签: 原长度15 ⇒ 新长度23
替换 p标签: 原长度12 ⇒ 新长度29
✅ 成功保存到: ..\输出文件夹\how-to-change-sa-password-in-sql-server-2014_optimized.html
进度: 1文件处理完成 (1成功 0失败)

🔍 正在处理: how-to-find-product-key-for-sql-server-2008-r2.html
======== 实际处理元素统计 ========
总元素数: 10
元素类型分布: {'p': 10, 'h2': 1}
样例内容: ['<p>Updated: <time>January 11, 2024</time></p>', '<p>If you encountered such similar situations, where you need the product key for your currently ins', '<h2>iSumsoft Product Key Finder retrieves SQL Server 2008 R2 product key</h2>']
======== 提取的正文内容 ========
{'h2': ['iSumsoft Product Key Finder retrieves SQL Server 2008 R2 product key'], 'h3': [], 'p': ['Updated: <time>January 11, 2024</time>', 'If you encountered such similar situations, where you need the product key for your currently installed SQL Server but you don\'t have it, then few things will help you quickly retrieve the product key than a Product Key Finder program. Following show you <strong><a href="how-to-find-product-key-for-sql-server-2008-r2.html">how to find product key for Microsoft SQL Server 2008 R2</a></strong> by the powerful program – iSumsoft Product Key Finder.', 'Step 1: On your computer with Microsoft SQL Server 2008 R2 installed, download and install <a href="../product-key-finder/">iSumsoft Product Key Finder</a> and then lunch it.', 'Step 2: Click <strong>Start Recovery</strong> button. Then this program immediately starts to discover all the product keys and serial numbers for the currently installed software on your computer.', 'Step 3: Soon it will display all the product names, keys and IDs. You can find your SQL Server 2008 R2 product key in the list.', 'Step 4: Click <strong>Save</strong> or <strong>Save to File</strong> button. On the <strong>Save As</strong> dialog, select a folder, write a file name, and then click <strong>Save</strong> button. Then all the discovered product keys should be saved to the txt file.', 'Step 5: Open the txt file and find your SQL Server 2008 R2 product key. Then use the key code to reinstall or upgrade your SQL Server.', 'Latest Articles', 'Hot Articles']}
======== AI 返回的原始数据 ========
{
  "h2": [
    "Retrieve SQL Server 2008 R2 Product Key with iSumsoft Key Finder [2024 Guide]"
  ],
  "h3": [],
  "p": [
    "Updated: <time>January 11, 2024</time>",
    "When facing license recovery challenges for installed SQL Server instances, specialized solutions like iSumsoft Product Key Finder enable efficient retrieval of lost activation credentials. Discover <strong><a href=\"how-to-find-product-key-for-sql-server-2008-r2.html\">how to recover lost SQL Server 2008 R2 product keys</a></strong> through automated key extraction technology, ensuring instant license recovery without registry modifications.",
    "Step 1: Download and install iSumsoft Product Key Finder software on your SQL Server 2008 R2 host machine through our <a href=\"../product-key-finder/\">official download portal</a>.",
    "Step 2: Initiate the automated scanning process by clicking the <strong>Start Recovery</strong> button to perform comprehensive license detection across system registries and installed applications.",
    "Step 3: Review the organized output displaying software names, associated product keys, and license IDs - locate your SQL Server 2008 R2 entry in the verified results.",
    "Step 4: Preserve recovered licenses by selecting <strong>Save to File</strong>, choosing your preferred directory and filename format for secure archival of activation credentials.",
    "Step 5: Access the exported license details to facilitate SQL Server 2008 R2 reactivation, version upgrades, or disaster recovery scenarios requiring license validation.",
    "Related Guides & Tutorials",
    "Popular SQL Server Resources"
  ]
}
======== 数据校验结果 ========
原始数量: {'h2': 1, 'h3': 0, 'p': 9}
优化数量: {'h2': 1, 'h3': 0, 'p': 9}
======== 开始内容替换 ========
替换 p标签: 原长度25 ⇒ 新长度38
替换 p标签: 原长度366 ⇒ 新长度444
替换 h2: iSumsoft Product Key Finder retrieves SQL Server 2... ⇒ Retrieve SQL Server 2008 R2 Product Key with iSums...
替换 p标签: 原长度137 ⇒ 新长度180
替换 p标签: 原长度180 ⇒ 新长度198
替换 p标签: 原长度127 ⇒ 新长度167
替换 p标签: 原长度199 ⇒ 新长度180
替换 p标签: 原长度134 ⇒ 新长度169
替换 p标签: 原长度15 ⇒ 新长度26
替换 p标签: 原长度12 ⇒ 新长度28
✅ 成功保存到: ..\输出文件夹\how-to-find-product-key-for-sql-server-2008-r2_optimized.html
进度: 2文件处理完成 (2成功 0失败)

🔍 正在处理: how-to-reset-forgotten-sa-password-in-sql-server-2008-r2.html
======== 实际处理元素统计 ========
总元素数: 22
元素类型分布: {'p': 27, 'h2': 2}
样例内容: ['<p>Updated: <time>January 11, 2024</time></p>', "<p>It's a long time since the last time I used SQL Server 2008 R2. Today I opened it but found I for", '<h2><a id="method1" name="method1"></a>Method 1: Reset SQL Server 2008 R2 forgotten SA password thro']
======== 提取的正文内容 ========
{'h2': ['Method 1: Reset SQL Server 2008 R2 forgotten SA password through Management Studio', 'Method 2: Reset SQL Server 2008 R2 SA password using SQL Password Refixer'], 'h3': [], 'p': ['Updated: <time>January 11, 2024</time>', 'It\'s a long time since the last time I used SQL Server 2008 R2. Today I opened it but found I forgot SA password and failed to connect to database. I have no choice but reset SA password. Following I share 2 methods to <strong><a href="how-to-reset-forgotten-sa-password-in-sql-server-2008-r2.html">reset SA password in SQL Server 2008 R2</a></strong>.', 'Step 1: Launch SQL Server Management Studio. Select Windows Authentication to connect to server.', 'Step 2: Expand the<strong> Logins</strong> folder under the <strong>Security</strong> folder. Then right-click sa account and select <strong>Properties</strong>.', 'Step 3: On the login properties dialog box, you can remove the forgotten SA password and type a new password. Then click OK to save changes so that you can <strong><a href="how-to-change-sa-password-in-sql-server-2014.html">change SA password</a></strong> to a new one.', "When <strong>SQL Server 2008 R2 forgot SA password</strong> and Windows Authentication don't work either, then use the specialized program – <strong>SQL Password Refixer</strong> to reset SA password. ", '<strong>Step 1: Install <a href="../sql-password-refixer/">SQL Password Refixer</a> on your computer with SQL Server 2008 R2 installed.</strong>', '<strong>Step 2: Stop SQL Server 2008 R2 service.</strong>', 'Open SQL Server Configuration Manager to <a href="how-to-stop-start-sql-server-service.html">stop SQL Server instance service</a>.', '<strong>Step 3: Access to master.mdf file.</strong>', 'All users including the SA account passwords are stored in SQL Server master.mdf file. And "SQL Password Refixer" can access to the master.mdf file and help you reset the password.', 'Launch <strong>SQL Password Refixer</strong>. Click <strong>Open File</strong> button. On the <strong>Open</strong> dialog navigate to the path to the SQL Server master.mdf file. Select the file and click <strong>Open</strong> button to import the file into "SQL Password Refixer" program.', '<strong>Step 4: Reset SA password.</strong>', 'Once master.mdf file is imported into this program. It accesses to the file and shows you all users including the SA account on SQL Server 2008 R2. Select to highlight the sa account and then click Reset button.', 'In the <strong>Reset Password</strong> dialog, type a new password for the sa account. Click <strong>OK</strong> to confirm.', 'SA password is successfully reset to a new password and showed in the list.', '<strong>Step 5: Restart SQL Server service.</strong>', 'Restart SQL Server service and then use the newly reset SA password to login to SQL Server 2008 r2 in SQL Server Authentication mode.', 'Latest Articles', 'Hot Articles']}
======== AI 返回的原始数据 ========
{
  "h2": [
    "Step-by-Step Guide: Reset SQL Server 2008 R2 SA Password via Management Studio",
    "Comprehensive Tutorial: Reset SA Password in SQL Server 2008 R2 Using SQL Password Refixer"
  ],
  "h3": [],
  "p": [
    "Last Updated: <time>January 11, 2024</time>",
    "After encountering SQL Server 2008 R2 authentication issues due to a forgotten SA password, I've compiled two proven methods to <strong><a href=\"how-to-reset-forgotten-sa-password-in-sql-server-2008-r2.html\" title=\"SA Password Recovery Solutions\">recover SA credentials</a></strong> for database access restoration.",
    "Step 1: Launch SQL Server Management Studio and select Windows Authentication to establish a secure server connection.",
    "Step 2: Navigate through <strong>Security > Logins</strong> directory. Right-click the SA account and choose <strong>Properties</strong> for credential modification.",
    "Step 3: In the authentication panel, remove the obsolete password and implement a new secure passphrase. Confirm changes to complete the <strong><a href=\"how-to-change-sa-password-in-sql-server-2014.html\" title=\"SA Credential Management\">SA credential update</a></strong> process.",
    "When locked out of both SA account and Windows Authentication, utilize the dedicated <strong>SQL Password Refixer tool</strong> for efficient password recovery solutions.",
    "<strong>Step 1: Install the <a href=\"../sql-password-refixer/\" title=\"SQL Password Recovery Software\">SQL Password Refixer</a> utility on your SQL Server 2008 R2 host machine.</strong>",
    "<strong>Step 2: Halt SQL Server 2008 R2 operations</strong> through Services Manager for security maintenance.",
    "Access SQL Server Configuration Manager to properly <a href=\"how-to-stop-start-sql-server-service.html\" title=\"SQL Service Management\">terminate SQL Server instance services</a> before proceeding.",
    "<strong>Step 3: Locate critical system database files</strong> containing authentication data.",
    "The master.mdf database file stores all user credentials, including SA passwords, which the recovery tool accesses for password reset operations.",
    "Initialize <strong>SQL Password Refixer</strong> and click <strong>Open File</strong> to navigate to your SQL Server's master.mdf location (typically in Program Files > Microsoft SQL Server > MSSQL10_50.MSSQLSERVER > MSSQL > DATA).",
    "<strong>Step 4: Execute SA credential reset protocol</strong> through the recovery interface.",
    "After successful master.mdf import, select the SA account from the user list and activate the password reset function through the dedicated control panel.",
    "In the <strong>Password Reset Console</strong>, generate and verify a new complex password meeting SQL Server security requirements.",
    "The system confirms successful SA credential modification with updated authentication details visible in the user registry.",
    "<strong>Step 5: Reinitialize SQL Server services</strong> to implement security changes.",
    "Restart SQL Server services through Configuration Manager and authenticate using your new SA credentials in SQL Server Authentication mode.",
    "Recommended Database Administration Guides",
    "Popular SQL Server Security Solutions"
  ]
}
======== 数据校验结果 ========
原始数量: {'h2': 2, 'h3': 0, 'p': 20}
优化数量: {'h2': 2, 'h3': 0, 'p': 20}
======== 开始内容替换 ========
替换 p标签: 原长度25 ⇒ 新长度43
替换 p标签: 原长度259 ⇒ 新长度315
替换 h2: Method 1: Reset SQL Server 2008 R2 forgotten SA pa... ⇒ Step-by-Step Guide: Reset SQL Server 2008 R2 SA Pa...
替换 p标签: 原长度96 ⇒ 新长度118
替换 p标签: 原长度110 ⇒ 新长度165
替换 p标签: 原长度188 ⇒ 新长度280
替换 h2: Method 2: Reset SQL Server 2008 R2 SA password usi... ⇒ Comprehensive Tutorial: Reset SA Password in SQL S...
替换 p标签: 原长度167 ⇒ 新长度170
替换 p标签: 原长度88 ⇒ 新长度184
替换 p标签: 原长度40 ⇒ 新长度110
替换 p标签: 原长度74 ⇒ 新长度196
替换 p标签: 原长度34 ⇒ 新长度94
替换 p标签: 原长度180 ⇒ 新长度145
替换 p标签: 原长度221 ⇒ 新长度231
替换 p标签: 原长度26 ⇒ 新长度93
替换 p标签: 原长度211 ⇒ 新长度154
替换 p标签: 原长度90 ⇒ 新长度132
替换 p标签: 原长度75 ⇒ 新长度123
替换 p标签: 原长度35 ⇒ 新长度88
替换 p标签: 原长度133 ⇒ 新长度139
替换 p标签: 原长度15 ⇒ 新长度42
替换 p标签: 原长度12 ⇒ 新长度37
✅ 成功保存到: ..\输出文件夹\how-to-reset-forgotten-sa-password-in-sql-server-2008-r2_optimized.html
进度: 3文件处理完成 (3成功 0失败)

🔍 正在处理: how-to-stop-start-sql-server-service.html
======== 实际处理元素统计 ========
总元素数: 12
元素类型分布: {'p': 15, 'h2': 2}
样例内容: ['<p>Updated: <time>January 11, 2024</time></p>', '<p>There are many ways to stop, start, pause, and restart SQL Server service in Windows. This articl', '<h2><a id="way1" name="way1"></a>Way 1: Stop/Start SQL Server service in SQL Server Configuration Ma']
======== 提取的正文内容 ========
{'h2': ['Way 1: Stop/Start SQL Server service in SQL Server Configuration Manager', 'Way 2: Stop/Start SQL Server service from Windows Command Prompt'], 'h3': [], 'p': ['Updated: <time>January 11, 2024</time>', 'There are many ways to stop, start, pause, and restart SQL Server service in Windows. This article shows two easiest, quickest, and most common ways to <strong><a href="how-to-stop-start-sql-server-service.html">stop/start SQL Server service</a></strong>, which applies to MSSQL Server 2014/2012/2008/2005.', "Step 1: Click Windows <strong>Start</strong> button and then select <strong>SQL Server Configuration Manager</strong> to open it. If you can't find it after clicking Start button, click <strong>All Programs ->Microsoft SQL Server -> Configuration Tools -> SQL Server Configuration Manager</strong>.", 'Step 2: Click the <strong>SQL Server Services</strong>. Select the instance name and right-click it. Then select Start, stop, pause, resume or restart to change the state of your SQL Server service.', 'Step 1: Click Windows <strong>Start</strong> button. Type <strong>cmd</strong> in the search box. Right-click <strong>cmd.exe</strong> and select <strong>Run as administrator</strong> to open "Command Prompt" as administrator.', 'Step 2: Run net commands to <strong>stop/start your SQL Server service</strong>.', 'Or run the following net commands to change the state of SQL Server service.', 'Tips: Replace "SQLEXPRESS" with your own database server instance name.', 'Latest Articles', 'Hot Articles']}
======== AI 返回的原始数据 ========
{
  "h2": [
    "How to Manage SQL Server Services via Configuration Manager",
    "Controlling SQL Server Services Through Command Line"
  ],
  "h3": [],
  "p": [
    "Last Updated: January 11, 2024",
    "Discover efficient methods for managing SQL Server services in Windows environments. This guide focuses on two proven techniques to <strong><a href=\"how-to-stop-start-sql-server-service.html\">control SQL Server service states</a></strong>, compatible with MSSQL Server 2005 through 2014 versions.",
    "Step 1: Navigate to the Start menu and launch <strong>SQL Server Configuration Manager</strong>. For quicker access, use the path: <strong>All Programs → Microsoft SQL Server → Configuration Tools → SQL Server Configuration Manager</strong>.",
    "Step 2: Select <strong>SQL Server Services</strong> in the left panel. Right-click your target instance to access service control options: Start, Stop, Pause, Resume, or Restart.",
    "Step 1: Open an elevated Command Prompt by searching <strong>cmd</strong> in the Windows search bar, then right-clicking <strong>Command Prompt</strong> and selecting <strong>Run as administrator</strong>.",
    "Step 2: Utilize Windows net commands to <strong>manage SQL Server service operations</strong>. Basic syntax: <code>NET START/STOP [servicename]</code>.",
    "Common service control commands for SQL Server:<br><code>NET START MSSQL$SQLEXPRESS<br>NET STOP MSSQL$SQLEXPRESS<br>NET PAUSE MSSQL$SQLEXPRESS<br>NET CONTINUE MSSQL$SQLEXPRESS</code>",
    "Important: Always verify your SQL Server instance name before executing commands. Replace \"SQLEXPRESS\" with your actual instance identifier.",
    "Recommended Resources",
    "Popular Tutorials"
  ]
}
======== 数据校验结果 ========
原始数量: {'h2': 2, 'h3': 0, 'p': 10}
优化数量: {'h2': 2, 'h3': 0, 'p': 10}
======== 开始内容替换 ========
替换 p标签: 原长度25 ⇒ 新长度30
替换 p标签: 原长度233 ⇒ 新长度296
替换 h2: Way 1: Stop/Start SQL Server service in SQL Server... ⇒ How to Manage SQL Server Services via Configuratio...
替换 p标签: 原长度247 ⇒ 新长度241
替换 p标签: 原长度181 ⇒ 新长度178
替换 h2: Way 2: Stop/Start SQL Server service from Windows ... ⇒ Controlling SQL Server Services Through Command Li...
替换 p标签: 原长度158 ⇒ 新长度205
替换 p标签: 原长度63 ⇒ 新长度151
替换 p标签: 原长度76 ⇒ 新长度182
替换 p标签: 原长度71 ⇒ 新长度140
替换 p标签: 原长度15 ⇒ 新长度21
替换 p标签: 原长度12 ⇒ 新长度17
✅ 成功保存到: ..\输出文件夹\how-to-stop-start-sql-server-service_optimized.html
进度: 4文件处理完成 (4成功 0失败)

🔍 正在处理: sql-server-2012-recover-sa-password-after-forgot-it.html
======== 实际处理元素统计 ========
总元素数: 19
元素类型分布: {'p': 22}
样例内容: ['<p>Updated: <time>January 11, 2024</time></p>', '<p>"<em>I unable to connect to my SQL Server 2012 by Windows Authentication and forgot SA password. ', '<p>It seems a little tricky in this case. Fortunately, you can quickly<a href="sql-server-2012-recov']
======== 提取的正文内容 ========
{'h2': [], 'h3': [], 'p': [
'Updated: <time>January 11, 2024</time>',
'"<em>I unable to connect to my SQL Server 2012 by Windows Authentication and forgot SA password. How can I connect to my database? Please help!</em>"',
'It seems a little tricky in this case. Fortunately, you can quickly<a href="sql-server-2012-recover-sa-password-after-forgot-it.html"> <strong>recover SQL Server 2012 forgotten SA password</strong></a> with <strong>iSumsoft SQL Password Refixer</strong>.',
"<strong>iSumsoft SQL Password Refixer</strong> is a tiny but powerful program which specializes in resetting SA password and other users' passwords on SQL Server 2014/2012/2008/2005. So you can use it to immediately recover access to SA account after you forgot its password and unable to connect to SQL Server 2012.",
'<strong>Step 1: Download and installation.</strong>',
'Open your browser to search "iSumsoft SQL Password Refixer" and go to iSumsoft official site. Then download and install <strong><a href="../sql-password-refixer/">SQL Password Refixer</a></strong> on your computer with SQL Server 2012 installed. You won\'t need to make any extra settings to your system while downloading or installing.',
'<strong>Step 2: Stop SQL Server 2012 service.</strong>', 'SQL Server accounts passwords are stored in master database file (master.mdf). And this "SQL Password Refixer" just recovers password through accessing to the master.mdf file. Thus, you need to first <a href="how-to-stop-start-sql-server-service.html">stop  SQL server service</a> so that the master.mdf file won\'t be occupied.',
'<strong>Step 3: Add SQL Server 2012 database file.</strong>',
'Launch <strong>SQL Password Refixer</strong>. Click <strong>Open File</strong> and then navigate to the path to the <strong>master.mdf</strong> file. Select the file and add it to this program.',
"Tips: When it's your first time to use this program to open your SQL Server master.mdf file, it won't automatically navigate to the path to the master.mdf file. So you need to manually navigate to the path. Commonly the master.mdf file is located in the path: <strong>C:/Program Files(x86)/Microsoft SQL Server\\MSSQL11.SQLEXPRESS\\MSSQL\\DATA\\master.mdf</strong>",
'<strong>Step 4: Recover forgotten SA password.</strong>',
'1. Once the master.mdf file is added into this program. It displays a list listing all User names and their indexes on your SQL Server 2012, and the SA account is in the first line. And you can see the forgotten SA password is labeled "<strong>Unknown</strong>". Click to highlight the SA account and then click "<strong>Reset</strong>" button below.',
'2. Type a new password for the SA account in the <strong>Reset Password</strong> dialog and click <strong>OK</strong> to confirm.',
'3. Then a small dialog saying <strong>"Password successfully changed"</strong> pops up, click <strong>OK</strong> to close the dialog. Then in the list, you can see your SA password turn into your newly set password from "Unknown". Thus, you successfully recover forgotten SA password on your SQL Server 2012 through changing the forgotten password to a new one.',
'After that, restart your SQL Server service and then use the new SA password to connect to SQL Server 2012.',
"Tips: It's thought the quickest and easiest way to recover forgotten SA password on SQL Server 2012 and other versions of Microsoft SQL Server.",
'Latest Articles',
'Hot Articles']}
======== AI 返回的原始数据 ========
{
  "h2": [],
  "h3": [],
  "p": [
    "Updated: <time>January 11, 2024</time>",
    "\"<em>I'm unable to connect to SQL Server 2012 via Windows Authentication and forgot SA credentials. How to regain database access?</em>\"",
    "This common SQL Server authentication issue has an efficient solution. Use <strong><a href=\"sql-server-2012-recover-sa-password-after-forgot-it.html\">iSumsoft SQL Password Refixer</a></strong> to <strong>reset lost SA passwords</strong> and restore SQL Server 2012 access within minutes.",
    "<strong>iSumsoft SQL Password Refixer</strong> provides specialized password recovery for SQL Server 2014/2012/2008/2005. This lightweight yet powerful tool bypasses authentication barriers by directly modifying encrypted credentials in system databases.",
    "<strong>Step 1: Software Installation</strong>",
    "Download <strong><a href=\"../sql-password-refixer/\">SQL Password Refixer</a></strong> from iSumsoft's official website. Install directly on the SQL Server 2012 host machine - no additional configuration required for seamless integration.",
    "<strong>Step 2: Service Management</strong>",
    "Temporarily <a href=\"how-to-stop-start-sql-server-service.html\">stop SQL Server services</a> to release system file locks. This enables safe access to critical database files like master.mdf without service interference.",
    "<strong>Step 3: Database File Integration</strong>",
    "Launch the tool and navigate to <strong>master.mdf</strong> through File Explorer. Default path: <strong>C:/Program Files(x86)/Microsoft SQL Server\\MSSQL11.SQLEXPRESS\\MSSQL\\DATA\\master.mdf</strong>. First-time users may need manual directory navigation.",
    "<strong>Step 4: SA Credential Reset</strong>",
    "1. Identify SA account in loaded user list (top entry). Select and initiate password reset process<br>2. Input new secure password in authentication dialog<br>3. Confirm changes with success notification<br>4. Restart SQL services to implement new credentials",
    "Post-reset: Connect to SQL Server 2012 using updated SA credentials for full database access restoration.",
    "<strong>Pro Tip:</strong> This method remains the most efficient SQL Server password recovery solution, compatible with multiple SQL versions including 2012.",
    "Latest Technical Guides",
    "Popular Database Solutions"
  ]
}
======== 数据校验结果 ========
原始数量: {'h2': 0, 'h3': 0, 'p': 19}
优化数量: {'h2': 0, 'h3': 0, 'p': 16}
❌ 数据校验失败: 元素数量不匹配: {'p': '16/19'}
⚠️ 已保存详细错误日志到 error_backup.json
✅ 成功保存到: ..\输出文件夹\sql-server-2012-recover-sa-password-after-forgot-it_optimized.html
进度: 5文件处理完成 (5成功 0失败)

🔍 正在处理: unlock-sa-account-if-locked-out.html
======== 实际处理元素统计 ========
总元素数: 23
元素类型分布: {'p': 27, 'h2': 2}
样例内容: ['<p>Updated: <time>January 11, 2024</time></p>', '<p>After several failed login attempts, my <strong>SQL Server SA account is locked out</strong> with', '<p>From the received error message, the reason why the SA account gets locked out after multiple fai']
======== 提取的正文内容 ========
{'h2': ['Method 1: Unlock SQL Server SA account by resetting password', 'Method 2: Unlock SQL Server SA account by removing password enforcement'], 'h3': [], 'p': ['Updated: <time>January 11, 2024</time>', 'After several failed login attempts, my <strong>SQL Server SA account is locked out</strong> with the error message: "Login failed for user \'SA\' because the account is currently locked out. The system administrator can unlock it. (Microsoft SQL Server, Error: 18486)". How can I unlock the SA account in this case?', 'From the received error message, the reason why the SA account gets locked out after multiple failed login attempts are because the SQL Server login is configured to use password policy enforcement and account lockout is enabled after a certain number of failed login attempts. Based on this situation, this page is going to show two methods to <strong><a href="unlock-sa-account-if-locked-out.html">unlock SQL Server SA account when it\'s locked out</a></strong>. The methods work on Microsoft SQL Server 2008/2012/2014/2016, etc.', 'Step 1: Get <strong><a href="../sql-password-refixer/">SQL Password Refixer</a></strong> software installed on your computer.', 'Step 2: <a href="how-to-stop-start-sql-server-service.html">Stop SQL Server Instance service</a>.', 'Step 3: Launch <strong>SQL Password Refxer</strong> software.', 'Step 4: Click <strong>Open File</strong>, navigate to the path to the <strong>master.mdf</strong> file, select  it, and then click <strong>Open</strong> to import the file path into the software.', 'Tips: Typically, SQL Server master database files are located in <strong>C:/Program Files(x86)/Microsoft SQL Server\\MSSQL11.SQLEXPRESS\\MSSQL\\DATA\\master.mdf</strong>.', 'Step 5: It displays a list of all accounts on your SQL Server, click to select the locked sa account, and then click the <strong>Reset </strong>button.', 'Step 6: Type a new password in the box and click <strong>OK</strong>.', 'Step 7: Once prompted with <strong>Password successfully changed</strong>, your SQL Server SA password is reset to the new one, and the account gets unlocked in the meantime.', 'Step 8: Exit <strong>SQL Password Refixer </strong>software.', 'Step 9: <a href="how-to-stop-start-sql-server-service.html">Start SQL Server service</a>. Then you can successfully connect to SQL Server with SA login.', 'This method works when Windows Authentication login has been enabled on SQL Server.', 'Step 1: Open <strong>SQL Server Management Studio</strong> and select <strong>Windows Authentication</strong> to login.', 'Step 2: Go to <strong>Security -> Logins -> sa</strong>, and double-click on sa account.', 'Step 3: After sa <strong>Login Properties </strong>dialog opens, select the <strong>General</strong> page, uncheck the box beside<strong> Enforce password policy</strong>, and click <strong>OK</strong>.', 'Step 4: Select the <strong>Status</strong> page, make sure the box besides <strong>Login is locked out</strong> is unchecked. Then the SA account can be unlocked and you can successfully connect to SQL Server with SA login.', 'In addition to the two methods above, some people find SA account can automatically unlock after 20 minutes since the lockout. Hence, once SA account is locked out, you might as well wait 20-30 minutes before attempting to login SQL Server.', 'Latest Articles', 'Hot Articles']}
======== AI 返回的原始数据 ========
{
  "h2": [
    "Method 1: Reset SQL Server SA Password to Unlock Account",
    "Method 2: Disable Password Policy to Unlock SA Account"
  ],
  "h3": [],
  "p": [
    "Updated: <time>January 11, 2024</time>",
    "After multiple failed login attempts, your <strong>SQL Server SA account becomes locked</strong> with error 18486: \"Login failed - account currently locked out.\" Discover professional solutions to regain administrative access.",
    "SQL Server enforces password policies by default, locking accounts after repeated failed attempts. This guide details two verified methods to <strong><a href=\"unlock-sa-account-if-locked-out.html\">unlock SQL Server SA accounts</a></strong> across versions 2008-2016+ while maintaining system security.",
    "Step 1: Install <strong><a href=\"../sql-password-refixer/\">SQL Password Refixer</a></strong> on your local machine",
    "Step 2: <a href=\"how-to-stop-start-sql-server-service.html\">Stop SQL Server services</a> through Configuration Manager",
    "Step 3: Launch SQL Password Refixer with administrator privileges",
    "Step 4: Select <strong>Open File</strong> and locate the <strong>master.mdf</strong> database file",
    "Note: Default path: <strong>C:/Program Files/Microsoft SQL Server\\MSSQL11.SQLEXPRESS\\MSSQL\\DATA\\master.mdf</strong>",
    "Step 5: Identify the locked SA account in the user list and click <strong>Reset Password</strong>",
    "Step 6: Create a strong new password meeting complexity requirements",
    "Step 7: Confirm successful password reset notification appears",
    "Step 8: Close the password recovery tool securely",
    "Step 9: <a href=\"how-to-stop-start-sql-server-service.html\">Restart SQL Server services</a> to apply changes",
    "Prerequisite: Requires Windows Authentication access to SQL Server",
    "Step 1: Connect via SSMS using Windows Authentication credentials",
    "Step 2: Navigate to <strong>Security → Logins → SA</strong> properties",
    "Step 3: Under <strong>General</strong> settings, disable <strong>Enforce password policy</strong>",
    "Step 4: In <strong>Status</strong> settings, uncheck <strong>Login is locked out</strong>",
    "Important: Some environments automatically unlock accounts after 15-30 minutes. Monitor login attempts before retrying.",
    "Latest SQL Server Management Guides",
    "Top-Performing Database Recovery Solutions"
  ]
}
======== 数据校验结果 ========
原始数量: {'h2': 2, 'h3': 0, 'p': 21}
优化数量: {'h2': 2, 'h3': 0, 'p': 21}
======== 开始内容替换 ========
替换 p标签: 原长度25 ⇒ 新长度38
替换 p标签: 原长度297 ⇒ 新长度226
替换 p标签: 原长度462 ⇒ 新长度301
替换 h2: Method 1: Unlock SQL Server SA account by resettin... ⇒ Method 1: Reset SQL Server SA Password to Unlock A...
替换 p标签: 原长度69 ⇒ 新长度114
替换 p标签: 原长度41 ⇒ 新长度118
替换 p标签: 原长度44 ⇒ 新长度65
替换 p标签: 原长度144 ⇒ 新长度98
替换 p标签: 原长度149 ⇒ 新长度115
替换 p标签: 原长度134 ⇒ 新长度97
替换 p标签: 原长度52 ⇒ 新长度68
替换 p标签: 原长度157 ⇒ 新长度62
替换 p标签: 原长度43 ⇒ 新长度49
替换 p标签: 原长度96 ⇒ 新长度108
替换 h2: Method 2: Unlock SQL Server SA account by removing... ⇒ Method 2: Disable Password Policy to Unlock SA Acc...
替换 p标签: 原长度83 ⇒ 新长度66
替换 p标签: 原长度85 ⇒ 新长度65
替换 p标签: 原长度71 ⇒ 新长度70
替换 p标签: 原长度134 ⇒ 新长度97
替换 p标签: 原长度189 ⇒ 新长度89
替换 p标签: 原长度240 ⇒ 新长度119
替换 p标签: 原长度15 ⇒ 新长度35
替换 p标签: 原长度12 ⇒ 新长度42
✅ 成功保存到: ..\输出文件夹\unlock-sa-account-if-locked-out_optimized.html
进度: 6文件处理完成 (6成功 0失败)

==============================
处理完成统计:
• 总处理文件: 6
• 成功数量: 6
• 失败文件: 0
输出目录: C:/Users/Admin/Desktop/Github仓库/python/文章ai优化demo/输出文件夹

C:\Users\Admin\Desktop\Github仓库\python\文章ai优化demo\工具>
```

###### Tue Apr 1 16:08:53 CST 2025

转义符的问题还不怎么好替换,因为转义符和特殊符号有点重合了.

###### Tue Apr 1 16:49:22 CST 2025

记日以后在para里面就叫project\_log了.

###### Tue Apr 1 17:23:47 CST 2025

整理了下PARA系统,以后的笔记就存放在这吧,思源的笔记看下提取出来.

###### Tue Apr 1 17:45:16 CST 2025

把Google drive的文件也整理完了,也可以滚了.

###### Tue Apr 1 17:56:41 CST 2025

网页的文章还是存在pocket吧,刚刚存了一篇直接创建了80多个文件吓死我了.

###### Tue Apr 1 20:43:25 PDT 2025

这个生成吉卜力风格的确实可以哈哈哈哈. 把照片存到resource文件夹吧.

![2c126f1d-6df6-4c82-ab60-8d73fa4a4df7](../Resources/gibuli-pics/2c126f1d-6df6-4c82-ab60-8d73fa4a4df7.png)

##### Wed Apr 2

###### Wed Apr 2 11:43:31 CST 2025

统一记录下吧,因为改的有点多,就是先把图片文件存在了git lfs里面,然后添加了git-sizer来统计文件数量和大小,就这些,搞了蛮久的.

###### Wed Apr 2 13:52:13 CST 2025

刚刚试了下,现在所有图片都可以内嵌到这里面了哈哈哈,都存到GitLFS里面了.

###### Wed Apr 2 15:09:19 CST 2025

现在应该是到了绝望之谷那个阶段了,感觉处理的东西太多,然后知识的储备太少了.

###### Wed Apr 2 15:49:28 CST 2025

刚刚优化了下优化文章的那个代码,试了下只优化p标签,然后觉得还是没有之前的好,因为有一些faq是用h3标签表示的,还是得优化h3标签,觉得h2标签可以不优化了,一级目录的跳转问题还是存在的.然后就这样吧,还有很长的路要走哈哈哈.

###### Wed Apr 2 17:39:09 CST 2025

就把pandoc当成是另一种转换文档的方式吧,有十分好的再用它.

###### Wed Apr 2 17:43:38 CST 2025

发现很多网站都选择在地址栏隐藏自己的html后缀,不知道这样是为了啥. 记在code-notes里面吧.

##### Fri Apr 4

###### Fri Apr 4 14:18:36 PDT 2025

刚刚扫完墓回来了,感觉很多东西值得记录,待会晚上再记录吧.

##### Sat Apr 5

###### Sat Apr 5 22:42:36 PDT 2025

明早就要回去上班了,然后简单复盘下这两天的一个小计吧.(说计不带吧文明你我他哈哈哈)

首先是,4月3日晚上到4月4日早晨火车时间:

3日请假一天,理由自己知道就行,然后晚上去坐火车,还得是地铁来的快,还比公交便宜,唯一一个感到不爽的点是出站的时候那个b栅机把我卡住了,说我的票是无效票,然后差点吧裤子挂烂了,而且好像都是五号线是这样的,下次还是直接用手机的码来乘车吧,或者再在手机上开一个新的公交卡,下次不带手表的话还是更加方便的,然后就是上火车之后了,人是真的多哈哈哈,甚至大家都是站在过道,画面太美我不敢看哈哈哈(我明天也要经历这个哈哈哈,习惯了也还好)然后在车上还是很难睡着的,只有睡意很强烈的估计才能睡着哈哈哈,我反正是肯定睡不着,但后就是到早上了,去了老哥那里,一起回了抚州哈哈哈,这段路途可以说是最轻松的了,byd特斯拉坐着还是很不错的,但就是太贵了,我不会把钱浪费在这玩意上哈哈哈,毕竟还有很多其他的东西需要钱哈哈哈,我的钱还不多.

4月4日扫墓: 和老哥一起去老家扫墓了,先是去婆婆那里拿了东西,其实不去那边拿的话时间会更快一点,但是没办法,老人家只是准备了东西,但是人去不了,但是东西其实也不是她处理的了,所以下次再去的话可能还是需要优化下.老妈以后不知道会不会去哈哈哈,还是好好阳伤吧.然后我和老哥去的,山上的路还是有点不好走的,途中一辆大巴车还差点被困在山里面了,也是蛮搞笑的哈哈哈,嫂子还学会了一点抚丢话,然后就是烧纸了,还是之前那句话吧,真正的思念比起这种形式的来的会具象很多,只是大家都喜欢这种形式罢了,而且对环境不友好,容易把林子点着了,还好是我们那没有山,隐患没那么大.然后就是一些其他东西了,生发大伯这段时间没回来,只是派了丹丹姐姐回来,肯定也是发生了一些事情,我也不好多问,但是哥哥肯定是知道一点的,然后我不应该把这件事情告诉家里人的,无效的,希望能好起来吧,然后就是吃席,还是熟悉的味道哈哈哈,能力大伯还是那么硬朗,东兰大妈也还是那么能干,劳动人民万岁,乡村的生活确实比城市里面有意思多了,但是隔绝了外界有利也有弊,我还是蛮向往的,有山有水有树林,热闹完之后一切又回归平静,峰峰和俊俊哥哥还是印象里面熟悉的味道,但也是多了很多沧桑,给我的感觉就是一眼可以看出来是什么样的人--善良的人,回顾完了村子里面的人之后,接着哥哥嫂子就带着我和小乐言回去婆婆那里了,也是给老人家看看孩子,看见孩子也就看到了希望,bullshit,只不过是多长出了一根韭菜罢了哈哈哈,但是我还是挺好奇当爸爸的感觉的,虽然还是自己一个人,但是这样挺好......

回去之后... 回去之后就在婆婆那里逗留了一会,老哥可能是因为起来的太早了,睡得不够,开车的时候都快睡着了哈哈哈,嫂子车技一般,还需要多加联系,至于我嘛hhh,还是没有上路,不敢开,等有了我自己的车也会开的,差不多到下午边上,老哥醒来之后,还玩了一下吃过早早的晚饭过后也准备离开,不过老哥是真的胖了很多,要注意控制体重了,不然呵呵呵,我也依稀能看出一点嫂子和老哥之间的关系,但愿不是我想的那样吧,我喜欢把事情想的最坏哈哈哈,小乐言在农村还是好好的,到了婆婆那里,可能在老哥老丈人那边也是一样哈哈,搞死人,也是感受到了带孩子的累,做叔叔的哈哈哈,然后就是老妈和大爸了,看起来风平浪静实则暗流涌动,还是要多加注意,但是我和他已经回不到从前了,然后老妈感觉也变了一点,希望她以后能对婆婆好一点吧,别那么尖酸,这次给我的印象很不好两人.planb综合考虑还是先不执行,回去等到五月之后再说吧,我也是时候做出改变了.

###### Sat Apr 5 23:17:56 PDT 2025

现在此时此刻...

五号这天把米粉吃了下,熟悉的味道,爽!然后就是给婆婆买了爱吃的东西,中午给家人做菜了,还是有点淡了哈哈哈,厨艺这段时间没有自己做饭还是有点生疏了,不过带火的锅做出来的饭是真的很不错的,我还是很喜欢的,也要看一下别人的口味,之后就是河边散步了,和老伙计视频了下,也看见了那边的发展,考上还是很好的,起码可以离自己的梦想更加进一步,而我现在还是以赚钱为主要目的吧,起码要那个之后,才可能自己继续学习,也是,现在自己的专业也不好确定,再想想吧,然后就是打牌了,找个时间好好研究下规则哈哈哈,开不了点,哦对了补充一点,嫂子和婆婆把我教会了部分麻将的规则哈哈,还是蛮简单,下次找机会实战下.

明天就走了,现记录这些吧,这些天还是放纵为主,未知的事情对我来说还是更加有趣哈哈哈,就这样!

##### Sun Apr 6

###### Sun Apr 6 19:22:23 PDT 2025

火车小记: 早上十二点左右上车,先到南昌,玩到下午五点再上了现在的这班,也算是坐上卧铺了,就是少一百块哈哈哈,睡一下准备明天上班吧,早晨五点多还要起来呢,今天就早点睡,也是习惯了哈哈哈,打牌有点无聊了.

##### Mon Apr 7

###### Mon Apr 7 09:40:13 CST 2025

回来了,开干!

###### Mon Apr 7 11:21:48 CST 2025

其实我也不是对其他社交媒体产生鄙视,只是接受信息的渠道太多了,我不想在一些容易上瘾的软件中浪费太多的时间,所以现在使用的社交媒体软件很少.等我那天自控力变强了再搞回来吧.

###### Mon Apr 7 11:42:58 CST 2025

怎么就用了两个G了呜呜呜呜.

f017af49-2fdd-4813-93ea-768791b5e7ba

###### Mon Apr 7 16:16:31 CST 2025

发现一个自动化工作流程的好东西,上面是我的授权码,感觉还可以,可能有很多可以探索的功能哈哈哈.

###### Mon Apr 7 17:35:44 CST 2025

以功能为主导和以结果为主导.

##### Tue Apr 8

###### Tue Apr 8 08:40:01 CST 2025

key之后就保存在公司电脑的文件里面吧,存在git里面容易泄漏.

###### Tue Apr 8 08:51:34 CST 2025

这啥意思,电脑上给用,手机上不给用. 这个ai mode感觉不错,就是不知道后面会不会收费哈哈哈.

###### Tue Apr 8 10:47:17 CST 2025

?q={{ $keywords}}

###### Tue Apr 8 11:09:53 CST 2025

这个生成关键词的有点意思,下次写文章可以用它生成的关键词再交给ai处理.

###### Tue Apr 8 11:38:23 CST 2025

又找到一个谷歌日历自动化的,感觉还不赖.

这个atom又是什么鬼,感觉还行,但是没那么多插件.

###### Tue Apr 8 17:08:10 CST 2025

这个zed还是太难编译和安装了,现在还是vscode对我来说是最好的选择吧.

##### Wed Apr 9

###### Wed Apr 9 08:53:52 CST 2025

刚吃完早餐,今天梦梦姐要来面试,看下早点回去吧.

###### Wed Apr 9 11:23:24 CST 2025

openrouter的模型还是不太兼容我这个优化文章的demo哈哈哈.

###### Wed Apr 9 17:39:58 CST 2025

ai优化文章的n8n搞定了,效果感觉比脚本还要好哈哈哈.

###### Wed Apr 9 18:04:07 CST 2025

xb....

##### Sun Apr 13

###### Sun Apr 13 23:45:11 PDT 2025

最近这段时间感冒了请假,日志明天启动.

##### Mon Apr 14

###### Mon Apr 14 08:45:42 CST 2025

DAddy is home baby!

###### Mon Apr 14 08:53:00 CST 2025

对官网主页的seo优化建议:

On-Page Technical Audit 页面技术审核 Critical Issues 关键问题

```text
The meta tag "Keywords" is outdated and should be removed as it's no longer used by major search engines for ranking purposes.
元标记“关键词”已经过时，应该删除，因为主要搜索引擎不再使用它来进行排名。
The lang attribute is specified for the`<html>` tag, but it's set to "en" without considering the actual content language; ensure it matches the primary language of the content.
`<html>` 标签指定了 lang 属性，但将其设置为“en”而不考虑实际内容语言；确保它与内容的主要语言相匹配。
The viewport meta tag contains maximum-scale=5.0, user-scalable=1, which can negatively impact accessibility; consider changing to maximum-scale=1.0, user-scalable=no or removing maximum-scale and user-scalable to allow for better user experience.
视口元标记包含 maximum-scale=5.0, user-scalable=1 ，这可能会对可访问性产生负面影响；请考虑更改为 maximum-scale=1.0, user-scalable=no 或删除 maximum-scale 和 user-scalable ，以获得更好的用户体验。
The page contains multiple instances of the same image (e.g., icons) without proper optimization; consider using image sprites or optimizing images further.
该页面包含同一图像（例如，图标）的多个实例，且未经过适当的优化；请考虑使用图像精灵或进一步优化图像。
The cookie banner does not provide clear options for users to manage their cookie preferences beyond accepting or rejecting; consider adding more granular controls.
除了接受或拒绝之外，cookie 横幅没有为用户提供明确的选项来管理他们的 cookie 偏好；考虑添加更细粒度的控制。
```

Quick Wins 快速获胜

```text
The page uses loading="lazy" for many images, which is a good practice for improving page load times; consider applying it to all suitable images.
该页面对许多图像使用了 loading="lazy" ，这是提高页面加载时间的好做法；考虑将其应用于所有合适的图像。
The page links to various internal pages using descriptive anchor text, which is beneficial for SEO; continue this practice throughout the site.
该页面使用描述性锚文本链接到各个内部页面，这有利于 SEO；在整个网站中延续这种做法。
The header tags (H1, H2, H3) are used to structure the content, improving readability and SEO; ensure this structure is maintained across the site.
标题标签（H1、H2、H3）用于构建内容，提高可读性和 SEO；确保整个网站维护此结构。
The site uses a clear and consistent navigation structure, aiding both users and search engines; maintain this consistency across all pages.
该网站使用清晰、一致的导航结构，帮助用户和搜索引擎；在所有页面上保持一致性。
```

Opportunities for Improvement 改进的机会

```text
Consider adding more schema markup to provide search engines with additional context about the content, such as product information, reviews, or FAQs.
考虑添加更多架构标记，为搜索引擎提供有关内容的更多背景信息，例如产品信息、评论或常见问题解答。
The site could benefit from more internal linking to help users and search engines discover related content and products.
网站可以从更多的内部链接中受益，以帮助用户和搜索引擎发现相关内容和产品。
While the page has a clear structure, some sections (like the "Why Choose iSumsoft" and "Top iSumsoft Awards") could be further enhanced with more detailed content or multimedia elements to improve engagement.
虽然页面结构清晰，但某些部分（例如“为什么选择 iSumsoft”和“顶级 iSumsoft 奖项”）可以进一步增强更详细的内容或多媒体元素，以提高参与度。
The use of descriptive alt tags for images is good; continue this practice and ensure all images have appropriate alt text.
对图像使用描述性 alt 标签是很好的；继续这种做法并确保所有图像都有适当的 alt 文本。
The page contains various calls-to-action (CTAs) like "Download" and "Learn More"; consider optimizing their placement and design to improve conversion rates.
该页面包含各种号召性用语 (CTA)，例如“下载”和“了解更多”；考虑优化其位置和设计以提高转化率。
```

On-Page SEO Content Audit 页面 SEO 内容审核 Analysis 分析 Content Quality Assessment 内容质量评估

```text
The content is relevant to the target audience, focusing on password recovery, data recovery, and backup tools for Windows.
内容与目标受众相关，重点关注 Windows 的密码恢复、数据恢复和备份工具。
The overall quality is good, with clear descriptions of products and services.
整体质量良好，产品和服务描述清晰。
The content is accurate and up-to-date, with mentions of the latest iOS and Windows versions.
内容准确且最新，并提及了最新的 iOS 和 Windows 版本。
```

Keyword Research and Analysis 关键词研究与分析

```text
Primary keywords: password recovery tools, data recovery, backup software, Windows, iOS.
主要关键词：密码恢复工具、数据恢复、备份软件、Windows、iOS。
Secondary keywords: password refixer, password reset software, iPhone unlocking tools, system optimization utilities.
次要关键词：密码修复程序、密码重置软件、iPhone 解锁工具、系统优化实用程序。
Keyword density:  关键词密度：
    "password" appears 14 times.
    “密码”出现了14次。
    "recovery" appears 7 times.
    “恢复”出现了7次。
    "Windows" appears 6 times.
    “Windows”出现了 6 次。
    "iOS" appears 5 times.  “iOS”出现了 5 次。
Keyword placement: keywords are used in the title, meta description, headings, and throughout the content.
关键词放置：关键词用于标题、元描述、标题和整个内容。
```

Readability Analysis 可读性分析

```text
Flesch-Kincaid Grade Level: 9.3
Flesch-Kincaid 年级水平：9.3
Flesch Reading Ease: 60.2
弗莱什阅读难度：60.2
Gunning-Fog Index: 10.3  喷雾指数：10.3
The content is generally clear and understandable, but some technical terms may require additional explanation.
内容总体清晰易懂，但一些技术术语可能需要额外解释。
```

Recommendations 建议 Content Quality Improvement 内容质量改进

```text
Add more detailed product descriptions and features.
添加更详细的产品描述和功能。
Include customer testimonials and success stories.
包括客户评价和成功案例。
Provide tutorials and guides for using the software.
提供使用该软件的教程和指南。
Consider adding a blog section for industry insights and news.
考虑添加博客部分以提供行业见解和新闻。
```

Keyword Optimization 关键词优化

```text
Use more specific long-tail keywords, such as "Windows 11 password recovery" or "iPhone 14 passcode unlocking".
使用更具体的长尾关键词，例如“Windows 11 密码恢复”或“iPhone 14 密码解锁”。
Optimize meta tags, including title, description, and keywords.
优化元标签，包括标题、描述和关键词。
Use header tags (H1, H2, H3) to structure the content and highlight important keywords.
使用标题标签（H1、H2、H3）来构建内容并突出显示重要关键字。
Increase keyword density for primary keywords.
增加主要关键词的关键词密度。
```

Readability Enhancement 可读性增强

```text
Simplify technical terms and jargon.
简化技术术语和行话。
Use shorter sentences and paragraphs.
使用较短的句子和段落。
Add images, diagrams, or videos to illustrate complex concepts.
添加图像、图表或视频来阐明复杂的概念。
Consider adding a glossary or FAQ section.
考虑添加词汇表或常见问题解答部分。
```

Technical SEO 技术搜索引擎优化

```text
Optimize images by adding alt tags and descriptive text.
通过添加 alt 标签和描述性文本来优化图像。
Use lazy loading for images to improve page load times.
使用图像延迟加载来提高页面加载时间。
Ensure mobile-friendliness and responsiveness.
确保移动友好性和响应能力。
Improve internal linking to help users and search engines navigate the site.
改善内部链接以帮助用户和搜索引擎浏览网站。
```

User Engagement 用户参与度

```text
Add clear calls-to-action (CTAs) to encourage downloads and purchases.
添加清晰的行动号召 (CTA) 来鼓励下载和购买。
Use social proof, such as customer reviews and ratings.
使用社会证明，例如客户评论和评级。
Create a newsletter or mailing list to keep users informed about new products and updates.
创建新闻通讯或邮件列表，让用户了解新产品和更新内容。
Consider adding a community forum or discussion section.
考虑添加社区论坛或讨论部分。
```

###### Mon Apr 14 11:05:12 CST 2025

感觉真的是这样,有的时候会自己感到莫名的空虚和无助,当脱离了所有的社交和电子产品之后.

###### Mon Apr 14 11:11:53 CST 2025

对ai的使用也要节制,抹杀了自己的创造力也不是什么好事,只是搜集信息可以稍微使用下.

###### Mon Apr 14 11:21:02 CST 2025

现在的很多社交媒体都ai泛滥了,希望还能有一些互联网净土.

###### Mon Apr 14 11:23:44 CST 2025

不要用ai来取代真正的思考,不然脑子真的会生锈的,而且ai缺乏主观性,所有观点都是客观的,当成一个工具来用好得多.

###### Mon Apr 14 14:26:36 CST 2025

The boisterous sea of liberty is never without a wave. 自由那喧嚣的大海，从不可能没有波浪。

###### Mon Apr 14 17:01:15 CST 2025

这个谷歌的笔记本还真的还可以,尤其是这个语音功能,适合总结回忆自己的笔记.

###### Mon Apr 14 17:16:51 CST 2025

这个面包和马戏可以代指很多东西啊.

###### Mon Apr 14 17:36:55 CST 2025

OnePlus is the poster child for this shift. The original OnePlus phone was a “flagship killer” that shipped with Cyanogen OS (built on the beloved custom ROM CyanogenMod). It delivered on the promise because it really did have killer features for its wallet-friendly price. OnePlus encouraged modding and tinkering, which earned it a lot of power users. Forums always buzzed with OnePlus discussions and resources. 一加手机是这一转变的典型代表。最初的一加手机是一款“旗舰杀手”，搭载的是 Cyanogen OS（基于备受喜爱的定制 ROM CyanogenMod 构建）。它兑现了承诺，因为它确实以亲民的价格提供了杀手级功能。一加鼓励用户进行改装和修改，这为其赢得了大量重度用户。论坛上总是充斥着关于一加的讨论和资源。

##### Tue Apr 15

###### Tue Apr 15 08:56:26 CST 2025

astro 的媒体文件都要放在public文件夹啊,我还画蛇添足的创建了一个resources文件夹哈哈哈,fts.

###### Tue Apr 15 10:11:58 CST 2025

这样看来我们网站还算好的哈哈哈,没有收集用户的数据还可以匿名浏览哈哈哈,但是就是有点过时了/

###### Tue Apr 15 11:20:37 CST 2025

刚刚试了一下部署网站,很方便快捷,但是域名还是很难看哈哈哈,算是知道怎么搞了.

###### Tue Apr 15 13:38:01 CST 2025

加装了那条4GB的内存条,感觉可以打开更多网页了.就是不知道待会会不会又歇逼.

###### Tue Apr 15 13:52:20 CST 2025

长长的文章内存这么大吗? 我类个乖乖.

###### Tue Apr 15 16:40:14 CST 2025

给网站添加了评论板块, 感觉还有很多地方需要改进!

###### Tue Apr 15 16:45:32 CST 2025

感觉要整理一下我的书签页了,好乱......

###### Tue Apr 15 17:35:29 CST 2025

今天不要忘记提交更新了...

##### Wed Apr 16

###### Wed Apr 16 13:31:56 CST 2025

下午醒了,这时间还是远远不够...

###### Wed Apr 16 14:36:03 CST 2025

在虚拟机上把windows11预览版搞到手吧. 下载的是真的慢慢慢!!!

###### Wed Apr 16 16:29:07 CST 2025

RIP Blue Screen of Death: Microsoft Finally Found a New Way to Annoy Us 这个标题不错!

###### Wed Apr 16 17:54:49 CST 2025

这个更新的是真的烦死,西吧!

##### Thu Apr 17

###### Thu Apr 17 11:51:31 CST 2025

查找关键词v http://localhost:5678/webhook/76a63718-b3cb-4141-bc55-efa614d13f1d?q=BSOD

###### Thu Apr 17 12:00:51 CST 2025

ok,这篇文章差不多了/

###### Thu Apr 17 13:04:09 PDT 2025

刚刚笔记本上面的git出错了,不知道为啥,应该是网络问题吧,重新拉取了一下现在好了.

###### Thu Apr 17 13:46:23 CST 2025

刚刚设置了一下任务栏和开始菜单,发现很多快捷的方式里面都有,很方便.

###### Thu Apr 17 14:46:17 CST 2025

开干!

###### Thu Apr 17 17:38:55 CST 2025

添加了一个新的tools页面,之后还添加了一个回到顶部按钮,原来js代码是可以直接导入到astro文件里面的,学到了.

###### Thu Apr 17 18:04:52 CST 2025

原来这个就是禅定模式哈哈哈,只能敲代码不能干别的了哈哈哈.

###### Thu Apr 17 19:45:00 PDT 2025

今天写的这个文章用了ai配图,感觉内容和图片很合适,不知道流量怎么样.

##### Fri Apr 18

###### Fri Apr 18 09:05:36 CST 2025

刚刚看完科技周刊,一如既往的大信息量,按摩还是周六去吧.

###### Fri Apr 18 11:17:18 CST 2025

给博客网站添加了rss订阅的链接还有美化,把rss.xml.js代码修改了下,没有延用astro的插件了,才能导入自己的样式表.

###### Fri Apr 18 11:18:29 CST 2025

手机端header右边的链接不会展示了,但是底部还是可以看见链接的.

##### Sun Apr 20

###### Sun Apr 20 22:57:00 CST 2025

吓我一跳, 还以为周五的日志不见了. 原来是没拉取同步...... 简单记录下这个周末吧,没有游戏的周末还是比较充实的 自己刷了手机,然后听取朋友的建议去做了推拿,可以看code-notes获取一些信息. 复盘一下去老街那边的事情吧: 首先是跟着缺德导航,还以为要那么久才能到哈哈哈,还好自己对地铁和交通也算比较熟悉了 然后就是去坐地铁,去的过程很顺利,但是找那家推拿店找了蛮久的...... 还是走错了,希望下次不会了,然后就是推拿了. 一句话评价:中规中矩. 下次可能再也不会去了,去看脊博的视频学学吧 还有一件x事情,就是回来的时候碰到个liar, 先是博取我的同情心,然后一步一步把我拉到一个陌生的地方,fts 后面还不知道要发生什么,可能就是一种套路吧, 不要贪小便宜,下次这种就直接拒绝好了,太tmsb了 PS.自己写的还是英文博客的名字哈哈哈,写字能力也变差了 这种套路我觉得应该就是收集你的信息然后找你打电话,太低级的方式了 你要收集信息不如做个钓鱼网站,比这强,还不用站街... (完)

##### Mon Apr 21

###### Mon Apr 21 09:21:10 CST 2025

new week, 上完这周就差不多五一了, 还没想好去哪里玩哈哈哈.

###### Mon Apr 21 09:25:45 CST 2025

先优化一下x的个人资料吧.

###### Mon Apr 21 09:42:01 CST 2025

可以了,但是只能添加一个网站,还是有点不人性化了哈哈哈.看下ai配图的那篇文章吧.

###### Mon Apr 21 09:45:13 CST 2025

索引了,但是发现有点问题啊哈哈, ai写的怎么那么多破折号呢?下次注意!

###### Mon Apr 21 09:55:07 CST 2025

添加了一些firefox扩展,我越来越喜欢这个浏览器了哈哈哈

###### Mon Apr 21 10:24:25 CST 2025

看了一下介绍轨迹球滑鼠的视频, 感觉比人体工学的要更舒服, 有钱买一个试试水哈哈哈.

###### Mon Apr 21 10:49:34 CST 2025

brave浏览器, 看广告可以赚钱, 有点意思, 但是不想看广告, 感觉这个有点AD sense的味道.

###### Mon Apr 21 11:03:36 CST 2025

没有添加tag只是简单的配文图到x,看下效果怎么样.

###### Mon Apr 21 11:11:51 CST 2025

看了一下关于intj的介绍, 没想到诺兰也是intj哈哈哈, good.

###### Mon Apr 21 11:21:25 CST 2025

其实测试性格这玩意也就图一乐, 具体还是要看人的主观, 让chat分析了一下我的人格特点, 记录一下吧, 见code-notes.

###### Mon Apr 21 11:33:21 CST 2025

一大堆推广的邮件, sucks, 全删了, 以后收码还是谨慎点吧.

###### Mon Apr 21 14:34:15 CST 2025

之前的phone link/your phone用不了了, 不知道为啥,可能是这个精简版系统的锅吧哈哈哈.

###### Mon Apr 21 17:20:54 CST 2025

马上抢票了, 西吧, 今天..............

###### Mon Apr 21 17:47:25 CST 2025

修复了博客评论系统（Giscus）不显示他人评论的问题。 原因是更改了 GitHub 仓库名，导致之前配置的 repo 和 repo-id 映射失效。 重新使用 giscus.app 配置并获取新的参数后恢复正常。 🚩经验教训：

```text
改 repo 名后，记得更新所有第三方服务配置！

repo-id 可以通过 DOM 元素或 Giscus 配置器轻松重新获取。
```

###### Mon Apr 21 18:03:02 CST 2025

把一些无关紧要的图片删掉了,免得他说我没有懒加载......

##### Tue Apr 22

###### Tue Apr 22 08:44:51 CST 2025

周二了, 昨天美仁关于对我八字的分析只有一两个点说中了,而且我觉得这玩意也不是固定的,还是带点心理作用的哈哈哈.

预期效应,心理产生的生理反馈,认知调节,情绪调节,心理>行动, 不是虚的, 不是贬义, 偏哲学.

我一开始的理解是这个是营销来的, 就是为了让你产生一些无脑行为的一些话术和自己的一些冒险举动, 但是其实这很正常, 你的认知随着你的心理产生调节然后产生行动. 只要这个行动是积极的,正向的,那么这个就不是myth, 但是如果这个引导你作出一些无意义的举动, 那么我觉得 kind of myth......

###### Tue Apr 22 09:27:07 CST 2025

结构性同化, 感觉这个天干地支确实有说法,但是对我也只是只有一两个点说中了,可能因为我也在不断变化吧哈哈哈

###### Tue Apr 22 09:45:35 CST 2025

nice手机可以直接连接,芜湖!!! 哈哈哈还有这种说法嘛

###### Tue Apr 22 10:32:10 CST 2025

这个八字这么准吗???

###### Tue Apr 22 11:28:21 CST 2025

今天把MCP整明白.

###### Tue Apr 22 13:50:09 CST 2025

中午睡不够!睡不够!唉, 优化文章, 把mcp搞定吧.

###### Tue Apr 22 14:25:56 CST 2025

更新了十几篇文章, 害得是工作流啊, 快快快哈哈哈!

###### Tue Apr 22 14:42:38 CST 2025

今天原来是世界地球日,感觉国家不怎么重视啊,好歹环保的口号可以喊一喊吧.

###### Tue Apr 22 15:59:51 CST 2025

lb is back,把skill in tech的账户登录回来了,可以继续推广了.

###### Tue Apr 22 17:13:21 CST 2025

感觉这样好不自在哈哈哈.

###### Tue Apr 22 21:01:10 CST 2025

back to laptop.

##### Wed Apr 23

###### Wed Apr 23 00:14:49 CST 2025

刚刚试了下notion, 觉得还是别有那么多笔记软件为好...

###### Wed Apr 23 10:10:59 CST 2025

成功了! 可以集成notion来实现这个, 那我觉得我可以用claude来实现我之前构建第二大脑的那个计划了,还是等chat出MCP?无所谓了哈哈哈,感觉这个还是蛮好用的.

###### Wed Apr 23 10:49:51 CST 2025

把火狐上面的书签整理完毕了,现在好看多了哈哈哈.

###### Wed Apr 23 13:58:31 CST 2025

可以有时没事看看其他开发者的star里面的内容,可以找到一些好用的轮子哈哈哈.

###### Wed Apr 23 17:08:46 CST 2025

这个mcp工具还是要看一段时间,现在感觉还没有那么成熟.

###### Wed Apr 23 17:18:09 CST 2025

coze的那个刚出现在也爆满哈哈哈,无法访问...

###### Wed Apr 23 17:46:53 CST 2025

还是只是适合处理较短的文档,或者是模型还不够厉害,我的长日志还是处理不好,而且删除了很多东西...

###### Wed Apr 23 21:12:45 CST 2025

成功还是离职了，我也快了吧哈哈哈，先搞出自己的一套系统来。

##### Thu Apr 24

###### Thu Apr 24 09:07:47 CST 2025

day 1. 还是建成工作区吧, 形成自己的工作流......

###### Thu Apr 24 09:53:31 CST 2025

找个时间设置一下领英和其他招聘软件吧.

###### Thu Apr 24 10:26:55 CST 2025

刚刚想把PARA笔记整合到notion, 但是免费版的notion限制还是有点多, 还是用github吧. 总结一下notion的限制到code-notes.

###### Thu Apr 24 10:41:14 CST 2025

今天发工资了, 4972, 越来越少了哈哈哈, 不过够用...

###### Thu Apr 24 13:41:35 CST 2025

吃饭也还好吧哈哈哈, 晚饭就自己煮了...

###### Thu Apr 24 15:23:46 CST 2025

综合看下来, 还是Gork写的有点东西, 都是比较符合我的胃口的东西, 然后Gemini写的有点过于学术化了, 长篇大论的感觉, chat写的又太过于简单了, 而且信息来源也有点不准确, 一般般吧, 综合考虑下来还是使用Gork的比较好!

###### Thu Apr 24 17:34:57 CST 2025

简单的框架有了个大概, 放弃之前自动全部生成的想法了, 先用ai生成一个大概的md文件, 然后再去配置图片, 然后转md为html, 就是代码部分肯定会显示异常, 到时候自己再自行修改吧, 感觉也不需要ai做太多事情哈哈哈, 可以做最后的一个校验吧.

###### Thu Apr 24 17:49:55 CST 2025

把博客更新了哈哈哈, 就这样.

##### Fri Apr 25

###### Fri Apr 25 00:15:07 CST 2025

刚刚看了一个up猪去厂里面招聘的视频, 麻了......

还好自己还没进过厂哈哈哈, 之前在家里面抄那个东西就感觉自己都快抄抑郁了, 真是验证了那句话, 你不干有的是人干!

###### Fri Apr 25 00:36:46 CST 2025

博客还有很多需要更改的地方, 结合那个seo的报告让chat给我给出更改建议吧. 周末有活干了,哈哈哈.

###### Fri Apr 25 11:28:20 CST 2025

突然知道为什么各大网站要为自己的网站添加双色favicon了, 暗色模式下有些favicon直接隐形了哈哈哈, 特别是黑色的, 也是从ux来考虑的吧.

###### Fri Apr 25 13:34:42 CST 2025

看见isumsoft里面有一个tag的文件夹, 应该是想给文章加tag, 但是里面是空的, 可能是没有添加tag的功能吧, 但是我觉得这个tag还是有必要的, 不然文章太多了, 还是要分类一下.

###### Fri Apr 25 13:35:33 CST 2025

law of attraction, 这个东西我觉得还是有点道理的, 但是也不能太过于迷信了, 还是要看自己的努力吧.

###### Fri Apr 25 14:37:06 CST 2025

目前接入了Chat生成图片api的服务商: Adobe, Airtable, Figma, Gamma, HeyGen, OpusClip, Quora, Wix, Photoroom, PlayGround.

###### Fri Apr 25 15:08:35 CST 2025

刚才测试了, n8n那个自动优化文章的可以用, 昨天那个应该是抓取网站的请求数量达到限制了, 报错了.

![1745564997895](image/log/1745564997895.png)

###### Fri Apr 25 18:03:18 CST 2025

是啊, 谷歌只会奖励有价值的内容, 那是不是证明我们现在写的大部分都是没有价值的内容呢? 哈哈哈, 还是要找新东西,新观点来写文章, 局限于产品肯定不会被谷歌奖励的......

![1745575538479](image/log/1745575538479.png)

准备下班了, 这周也是过上单休了哈哈哈......

##### Sat Apr 26

###### Sat Apr 26 19:58:34 CST 2025

今天感觉过的挺费的... 虽然说早上是起得还算是蛮早的, 但是却没有干多少事哈哈哈, 之前的计划有点泡汤了, 看下明天要不要请假看看吧之前的计划完成...

###### Sat Apr 26 20:00:05 CST 2025

打牌, 打牌, 打牌, 还是要打牌, 这个周末就这样了, 先把之前的计划完成吧...

###### Sat Apr 26 20:51:23 CST 2025

又开始打牌了...

###### Sat Apr 26 23:13:45 CST 2025

把简历稍微优化了下，感觉还有很多需要优化的，慢慢来吧，五一之后肯定是要搞定的了。

##### Sun Apr 27

###### Sun Apr 27 08:39:50 CST 2025

FTS, 讨厌调休.

###### Sun Apr 27 08:48:19 CST 2025

![1745714901503](image/log/1745714901503.png)

那如果谷歌真的卖给Chat了,那自己的AI-Gemini还怎么办呢?

还是有很多X因素的,如果真的收购了,感觉又要离AGI近一步了哈哈哈.

###### Sun Apr 27 09:18:57 CST 2025

一个想法: 可不可以把之前的博客网站重新做,通过astro来,然后界面都更加现代化,然后管理的也更加方便,但是就是要花费很长一段时间应该,而且还要考虑域名等问题.

###### Sun Apr 27 10:16:51 CST 2025

谁偷偷把我模型改了? 好像是我自己哈哈哈哈, 无语.

###### Sun Apr 27 11:02:01 CST 2025

还是不能以文件的形式输出, 唉!

###### Sun Apr 27 13:35:27 CST 2025

下次还是随身带两张洗脸巾吧, 可以午休之后洗把脸, 舒服点.

###### Sun Apr 27 14:02:25 CST 2025

那个自动写文章还是太难制作了吗? 还是先分析下变量再制作吧.

###### Sun Apr 27 14:19:40 CST 2025

你现在的能力，要么被你自己放大，要么被别人复制。

###### Sun Apr 27 17:26:41 CST 2025

文章提交了,感觉你有了文章那些东西还不是要自己改? ai生成文章只是完成了一部分的工作内容, 还是有些东西要自己搞.

###### Sun Apr 27 17:58:42 CST 2025

直觉是逻辑的隐形姐妹，两者皆是理性的产物，而我们并不总是能看到她，因为她常常在幕后默默地做着一切。

##### Mon Apr 28

###### Mon Apr 28 09:12:09 CST 2025

刚刚桌面任务栏罢工了，应该是那个微软拼音无法正常使用的问题导致的，后面先是启用英文输入法，再注销，然后把微软拼音删除了之后重启才弄回来了，真是麻烦。

###### Mon Apr 28 09:29:46 CST 2025

中午吃完饭去买一瓶水吧。OK 不用买了哈哈哈，自己洗干净了。

###### Mon Apr 28 09:45:48 CST 2025

还是把分辨率调高吧，感觉对眼睛好一点。

###### Mon Apr 28 10:15:42 CST 2025

把自己的文件稍微整理了下，感觉还是有点乱的。

###### Mon Apr 28 11:02:07 CST 2025

都是完美的了现在哈哈哈。

###### Mon Apr 28 12:00:21 CST 2025

吃饭去了。

###### Mon Apr 28 13:30:59 CST 2025

好像一个人也没啥哈哈哈，和平时一样。

###### Mon Apr 28 14:08:22 CST 2025

换了一种workflow还真感觉用不完了哈哈哈.

###### Mon Apr 28 14:10:47 CST 2025

搜狗输入法的系统占用还是太高了，卸载了。

###### Mon Apr 28 15:24:03 CST 2025

那个substore还是有点不会用, 电脑端的订阅之前我记得可以导入, 不知道为什么现在不行了.

###### Mon Apr 28 16:00:56 CST 2025

二手的iphonese也要199啊,西吧.

###### Mon Apr 28 17:31:48 CST 2025

这个cursor真有点东西吧啊哈哈哈, 还可以, 以后用它来帮我网站优化吧.

###### Mon Apr 28 17:37:39 CST 2025

明天记得带小风扇哈哈哈.

###### Mon Apr 28 18:01:22 CST 2025

chatgpt brain wash?

##### Tue Apr 29

###### Tue Apr 29 08:53:57 CST 2025

不用带小风扇了哈哈哈, 上勇好像好了. 把自己的键盘带来工作了.

###### Tue Apr 29 08:56:37 CST 2025

怎么还在装修, 吵死了, 还好有耳机.

###### Tue Apr 29 09:32:17 CST 2025

我还以为聪哥终于硬起来了呢？哈哈哈， 还是带上我的耳机吧。

###### Tue Apr 29 10:54:40 CST 2025

以后餐饮这一块的花销就放在花呗和白条了，这样就不用记账了哈哈哈。

###### Tue Apr 29 11:13:42 CST 2025

这个路透社也是卷钱来的，150块一周，牛！

###### Tue Apr 29 11:23:59 CST 2025

原来这个修复的软件不是新的软件，是之前一个软件的升级版，不过换汤不换药。

###### Tue Apr 29 11:26:06 CST 2025

工作环境真的很重要，还是要找一个适合自己的工作环境。我比较喜欢那种安静的环境，能让我更专注的工作。

###### Tue Apr 29 11:52:16 CST 2025

这个扣子空间在chrome上面是可以直接使用的，感觉还行，还没给他复杂的任务。

###### Tue Apr 29 11:55:45 CST 2025

网站的图标还么设置亮色和暗色，这个感觉对ux还是很大影响的。

###### Tue Apr 29 13:46:09 CST 2025

刚刚试了下扣子的分析功能，总体来说还行，就是不知道信息的真伪。

###### Tue Apr 29 14:24:09 CST 2025

记一下刚刚自己想到未来的几个看法吧：

看到阮一峰博客文章说未来就是永恒感的丧失，觉得并非没有道理，更多的是瞬间。

然后就是我联想到的一些东西了，比如：现在的ai就有点像是我们之前的计算机也就是互联网那个时代, 现在进入了一个全新的ai化, 以后提到的更多的可能就是ai+了,就好比之前提到的互联网+, 最近也是各种ai工具层出不穷,MCP工具就有点像我说的那个ai+, 以后的画面已经可以想象的到了, 参考底特律变人里面的场景, 不过可能机器人还是早了点, 但是带屏幕的会说话的东西可能还是会先出来哈哈哈.

一点小见解, 记录一下.

###### Tue Apr 29 15:08:19 CST 2025

刚刚, firefox又不知道为啥自己把我之前的配置文件删除了, 我感觉应该是缓存不够, 直接自爆了哈哈哈, 第二次了, 待会问问GPT是什么原因.

###### Tue Apr 29 15:13:59 CST 2025

想到一个新轮子但是感觉有点鸡肋, 就是把任务栏上面的图标做成群组, 像手机app那种分组文件夹一样, 然后让用户去分组, 便于管理, 而且比现在更美观, 就是不知道怎么做哈哈哈. 首先想到的是windhawk.

###### Tue Apr 29 15:49:12 CST 2025

哈哈哈给了一个复杂的, 等会看看效果怎么样.

###### Tue Apr 29 16:13:55 CST 2025

27分钟了......

###### Tue Apr 29 16:30:40 CST 2025

感觉复杂任务这个模型还是有点不行, 应该是ds家的模型, 给我的感觉就是太容易overthink了.

###### Tue Apr 29 16:38:11 CST 2025

这么久的时间, 感觉输出的是一堆垃圾哈哈哈哈.

###### Tue Apr 29 17:02:41 CST 2025

这个wifu和Unhinged 模式都这么颠吗哈哈哈哈哈哈.

###### Mon Apr 28 23:40:58 CST 2025

点到这一点了, 就也谈谈吧, 感觉我不适合恋爱.

###### Tue Apr 29 00:11:16 CST 2025

睡了, 又超过十二点了......

#### May 2025

##### Thu May 1

###### Thu May 1 10:42:56 CST 2025

准备回家了, 看望一下舅妈吧, 欣波现在肯定很难受...

###### Thu May 1 10:43:48 CST 2025

昨天的log没有记录, 就是请假了玩一天哈哈哈, 但是家里人感觉看见我没去上班很惊讶, 不知道为什么, 可能我还是摆脱不了原生家庭吧, 但是其实我也不算是完整的原生家庭吧哈哈哈.

##### Fri May 2

###### Fri May 2 08:27:42 CST 2025

到家了, 昨天坐了半天的火车, 还没睡好, 今天直接爽睡哈哈哈, 就是现在的家还是给我的更多是一种束缚, 还有一点虚假的感觉, 但愿之后不是吧. 昨天还结识了一位南城的老表, 应该是带女朋友来这边玩.

###### Fri May 2 09:58:53 CST 2025

协作 (Collaborate)： 共同完成单个智能体难以完成的复杂任务（例如，分布式问题求解、机器人集群协作）。

##### Sat May 3

###### Sat May 3 10:46:52 CST 2025

还有两天假期就结束了, 昨天看了雷霆特工队, 感觉是漫威算是创新的一种电影, 还可以吧, 里面有些地方还是可以和我引起共鸣的, 但就是第三幕有点拉跨了, 后面的彩蛋也是为了后面的神奇四侠做准备的.

##### Tue May 6

###### Tue May 6 08:43:30 CST 2025

果然, 太久没有更新log就容易冲突.

###### Tue May 6 08:46:16 CST 2025

原来29号的log没有提交, 还好没有丢失, 我还以为没有记录呢哈哈哈.

###### Tue May 6 08:57:56 CST 2025

感觉不上班的时间, 自己被困在一个信息监狱里面了, 不管是自己还是别人的, 不过现在下班还是有东西值得期待的, 还算不错.

###### Tue May 6 09:07:50 CST 2025

手泥好多, 今天洗干净...

###### Tue May 6 09:09:15 CST 2025

记一个prompt:

```text
Enable “Deep research” mode (you’ll need a paid plan)
启用“深度研究”模式（您需要付费计划）

Paste your website link and prompt: “Please analyze this entire small business website and suggest some topics that are missing that we could make additional pages for”
粘贴您的网站链接并提示：“请分析整个小型企业网站，并提出一些缺失的主题，以便我们可以为其制作额外的页面”

Answer the follow-up questions and let it do its thing
回答后续问题并让它发挥作用

这个prompt是用来分析一个网站的, 然后建议一些缺失的主题, 可以为其制作额外的页面.
```

###### Tue May 6 09:12:25 CST 2025

![1746493957083](image/log/1746493957083.png)

###### Tue May 6 09:49:28 CST 2025

现在的MCP只是集成了一些应用的简单增删改查的功能, 感觉还是不是很智能. 还有一点就是速度太慢.

###### Tue May 6 10:03:59 CST 2025

哪吒还在冲呢哈哈哈, 感觉已经快成为一种病态了, 唉, 为啥一定要赢呢? 真的是拍的好不如拍的巧...

###### Tue May 6 10:12:40 CST 2025

最近这几天睡眠时间有点短......

###### Tue May 6 10:46:12 CST 2025

这个fellou浏览器感觉也是有了mcp之后的产物吧, 但是现在只能在ios设备上安装, 等windows出来试试.

###### Tue May 6 11:45:09 CST 2025

刷了一会推特, 确实充斥着很多ai的内容, 还有很多打广告的内容, 好烦.

###### Tue May 6 12:00:41 CST 2025

吃饭去了...

###### Tue May 6 13:35:14 CST 2025

一个人吃饭, 很快, 中午可以多休息一会, 还是不错的

###### Tue May 6 14:17:24 CST 2025

可以制定一个减肥计划, 然后在手机上打卡, 让chat试试吧.

###### Tue May 6 14:25:20 CST 2025

可以, 减重计划已经有了, 看下这两天来准备一下减重所需要的物品吧.

###### Tue May 6 14:31:18 CST 2025

感觉可以先去买一周所需要的东西. 器械类的今天就下单吧.

###### Tue May 6 15:29:28 CST 2025

编写prompt的时候可以把需要强调的词语大写, 让chat更加关注这些词语.

###### Tue May 6 16:16:31 CST 2025

可以用老妈的这个事情, 来稍微训练一下自己写提示词的能力.

###### Tue May 6 16:31:37 CST 2025

看上了一款按摩仪, 待会回去看看评价怎么样, 五点以后就不喝水了, 免得麻烦.

###### Tue May 6 16:32:43 CST 2025

那家庭不和睦是我的原因吗?

###### Tue May 6 16:44:30 CST 2025

![1746521076794](image/log/1746521076794.png)

###### Tue May 6 16:53:40 CST 2025

阅读完毕了, 感觉这个提示词就像是ai的启动器.

###### Tue May 6 17:52:09 CST 2025

也算是找到了之前为什么会返回空值的原因了, 就是每一次ai返回的值名称都是不一样的.

###### Tue May 6 18:03:06 CST 2025

下播!

##### Wed May 7

###### Wed May 7 23:58:54 CST 2025

今天没有去上班了, 感觉还是要给自己一个喘气的时间, 收拾一下继续向前.

##### Thu May 8

###### Thu May 8 08:46:23 CST 2025

到了, 感觉除了那两件事没有什么其他的事情了, 老板也不找我做事......

###### Thu May 8 09:37:24 CST 2025

原来chat生成文件也是用过执行代码来生成, 只不过是直接在浏览器上面执行.

###### Thu May 8 10:28:33 CST 2025

试试这个空调伴侣.

###### Thu May 8 10:31:48 CST 2025

15次就上限了嘛.

###### Thu May 8 10:50:17 CST 2025

这个曹应该是很早那一批的员工了,开了一万也没有干下去吗?可能去了更好的.

###### Thu May 8 11:02:28 CST 2025

一会把成功的显示器拿过来组个双显吧, 可以一边自动化一边写文章了, 看下能不能提高效率.

###### Thu May 8 11:48:53 CST 2025

今天就搞这些吧,感觉熟练了之后就是分分钟的事情了哈哈哈.

###### Thu May 8 12:57:58 CST 2025

OK, 把成功的显示器换上了, 就是双显还是有点别扭......

###### Thu May 8 14:00:39 CST 2025

更换字体的那个还是要切换成英文才能成功, 不知道为什么, 待会再去问问chat把.

###### Thu May 8 14:27:12 CST 2025

这个sora是生成了一次图像之后第二次就不能用了吗? 那应该就是了, 换了一个帐号可以进去.

###### Thu May 8 15:00:30 CST 2025

So degrees have been a weak signal for a long time. Several of the best developers I've worked with had no CS degree at all. As a result we have interview processes that are baffling to people from other industries. Imagine a surgeon having to do interview surgery, or an accountant having to solve accounting puzzles. AFAIK we are very unusual in this regard and I think it's because degrees are such a weak indicator and the same is true for certificates in our industry. 所以，长期以来，学位一直是一个很弱的指标。我合作过的几位最优秀的开发人员根本没有计算机科学学位。结果，我们的面试流程让其他行业的人感到困惑。想象一下，外科医生要经历一场面试手术，或者会计师要解决会计难题。据我所知，我们在这方面非常不寻常，我认为这是因为学位本身就是一个非常弱的指标，在我们这个行业，证书也是如此。

###### Thu May 8 16:33:24 CST 2025

刚刚运行Claude的MCP工具崩溃了, 应该是显卡或者内存的问题, 不过还好是数据还在.

###### Thu May 8 16:43:54 CST 2025

把isumsoft的文章文件夹都导入到mcp工具了里面了.

###### Thu May 8 17:05:14 CST 2025

给每一天都加了一个副标题, 不然看着有点吓人.

###### Thu May 8 17:15:36 CST 2025

想到一个不错的点子, 在划分的大目录下面再去细分小目录, 让文章面包屑导航更加精确, 感觉有利于索引.

##### Thu May 9

###### Fri May 9 08:45:57 CST 2025

在家记录的日志好像又忘记更新了, 回去再合并吧, 周五周五!

###### Fri May 9 09:14:57 CST 2025

把popular的那几篇文章试着优化下吧.

###### Fri May 9 09:25:10 CST 2025

![1746753912386](image/log/1746753912386.png)

###### Fri May 9 09:41:25 CST 2025

装修的噪音, 地铁施工的噪音, 这就是工业化带来的东西吗?

###### Fri May 9 10:08:59 CST 2025

终于, 有了个赛博电子搭子陪我了哈哈哈

###### Fri May 9 10:41:07 CST 2025

关注什么是对的, 而不是谁是对的, 这么多年来一直以为老妈是对的, 但是现在看来是我错了.

###### Fri May 9 11:11:23 CST 2025

我需要升级我的笔记本......

###### Fri May 9 11:31:08 CST 2025

空调伴侣到了哈哈哈哈.

###### Fri May 9 12:00:24 CST 2025

吃饭去了, 一个人...

###### Fri May 9 13:34:58 CST 2025

起! 这次睡了应该有一个小时吧.

###### Fri May 9 13:52:23 CST 2025

坏, 吃坏肚子了......

###### Fri May 9 14:02:23 CST 2025

![1746770544969](image/log/1746770544969.png)

###### Fri May 9 14:55:22 CST 2025

写作多使用bullet point, 让文章更加简洁明了.

###### Fri May 9 15:04:13 CST 2025

权利的分配.

###### Fri May 9 15:23:36 CST 2025

谷歌的这个代理(ADK)感觉像是coze空间里面的那种代理, 但又不完全是, 只是给我的感觉更多像那个一点吧.

###### Fri May 9 15:33:27 CST 2025

开始优化文章吧.

###### Fri May 9 17:02:06 CST 2025

OK了, 自己学习了.

###### Fri May 9 18:03:32 CST 2025

下播!

##### Mon May 12

###### Mon May 12 15:15:26 CST 2025

前两天周末的日志好像记录了一些但是没有上传, 虽然也没什么重要的要记录的.

###### Mon May 12 17:59:51 CST 2025

上周更新的文章好像没被收录不知道为何, 明天再看看吧.

###### Mon May 12 18:06:23 CST 2025

下播!

##### Tue May 13

###### Tue May 13 08:51:18 CST 2025

今天洗了个全身澡, 还是蛮舒服的, 就是耽误了点时间.

###### Tue May 13 09:01:07 CST 2025

把剩下的一些密码改一下导入keypassxc吧.

###### Tue May 13 10:33:58 CST 2025

大功告成, 这下密码不用担心忘记了, 而且可以设置复杂度较高的密码了.

##### Wed May 14

###### Wed May 14 09:44:55 CST 2025

这次从上班开始跑, 我就不信还跑不完.

###### Wed May 14 11:00:29 CST 2025

这个火狐的mac主题还是不错的, 就是少了垂直标签页的兼容, 不过用起来还是很不错的.

###### Wed May 14 11:40:39 CST 2025

跑了一上午了,也才百分之八十,这个的速度确实不如那个xenu,但愿报告结果能有用点吧.

###### Wed May 14 15:50:42 CST 2025

跑完了, 把404页面都改完了, 感觉还有很多需要技术seo的地方.

###### Wed May 14 16:31:26 CST 2025

用那个工具优化了一下系统, 希望可以让cpu占用少一点......

###### Wed May 14 17:06:05 CST 2025

isum没有启用brotli来压缩.

###### Wed May 14 17:14:21 CST 2025

缺少h1的页面: /downloads.html; /store.html.

这两个页面感觉很相似,

一个有下载免费试用版的,

一个就只是购买的界面.

###### Wed May 14 17:18:03 CST 2025

还发现了一处错误, 上面两个页面的第一个伪元素框里面没有图标.

###### Wed May 14 18:04:01 CST 2025

这个AVIF图像有点东西, 但是东西不多哈哈哈. 准备下播!

##### Thu May 15

###### Thu May 15 11:13:43 CST 2025

Day'3 还没有更新我更新过的文章不知道是老板没上传还是谷歌没有索引.

###### Thu May 15 11:24:27 CST 2025

花儿没有水就会枯萎, 人没有爱就会死去.

###### Thu May 15 11:57:22 CST 2025

感觉这个标签跳级不是很大的问题, 但是可能也会影响一点seo吧, 暂时先不改.

###### Thu May 15 14:09:01 CST 2025

修复的404页面好像还没有更新, 周一再来看看吧!

###### Thu May 15 15:57:41 CST 2025

合并了两个css样式, 感觉靠ai合并还是没那么靠谱...

###### Thu May 15 16:10:35 CST 2025

shareus的那个网站... 唉/

##### Fri May 16

###### Fri May 16 09:09:26 CST 2025

昨天下播都没记录了. 还是要有静下心来做一件事情的能力.

###### Fri May 16 11:19:22 CST 2025

整理一下仓库吧.

###### Fri May 16 11:37:42 CST 2025

倒霉, 忘记设置内存了......

###### Fri May 16 11:38:49 CST 2025

不过好像之前的数据还在哈哈哈哈.

###### Fri May 16 13:33:14 CST 2025

还想把成功电脑上面的内存拿来用呢, 结果是DDR4的, 我的两DDR3哈哈哈.

###### Fri May 16 13:35:38 CST 2025

下次给ai喂数据的时候可以先在笔记本里面编一下prompt.

###### Fri May 16 14:14:27 CST 2025

那不是还是搞不了吗哈哈哈

##### Tue May 20

###### Tue May 20 14:59:00 CST 2025

这几天有点lost了, 想办法让自己乐观一点.

###### Tue May 20 15:11:28 CST 2025

一些文章的标题结构有点太混乱了, 感觉编写的时候没有考虑到这一块.

###### Tue May 20 15:53:31 CST 2025

下班之后试着用一下戒掉手机滚动的那个瘾吧, 不知道b站有没有类似的插件...

找到了, 可以简化推送流, 以后也不刷b站了吧, 就看看小黑盒, 但是也只是完成每天任务, 分享一篇帖子.

###### Tue May 20 17:08:02 CST 2025

上班就不会感到lost了吗? 看来我还需要加强...

###### Tue May 20 17:21:51 CST 2025

PowerToys还是nb哈哈哈, 有点像手机root之后的插件.

###### Tue May 20 17:26:39 CST 2025

开始Index了, 加了内存之后Index的速度都变快了哈哈哈.

###### Tue May 20 17:30:16 CST 2025

感觉启用了这个之后可以把everything卸掉了/

##### Wed May 21

###### Wed May 21 08:53:06 CST 2025

在屋子里面记录的又忘记提交了, 唉, 罢了...

###### Wed May 21 10:42:34 CST 2025

OpenRouter免费的也只有10次一天了, 唉.

###### Wed May 21 13:36:01 CST 2025

京东可以帮我节省伙食费嘛哈哈哈哈.

###### Wed May 21 16:03:29 CST 2025

完成文章!

###### Wed May 21 16:57:11 CST 2025

下周一再来跑一遍那个软件吧.

###### Wed May 21 17:22:21 CST 2025

所以我现在只是学会了怎么做博客网站, 而不是那种商业性质的网站.

##### Thu May 22

###### Thu May 22 08:36:46 CST 2025

back.

###### Thu May 22 10:13:06 CST 2025

对自己的梦境有了更进一步的了解, 念头还是接受吧.

###### Thu May 22 13:41:20 CST 2025

发现可以先把文章搞定, 然后就可以自己想其他东西了.

###### Thu May 22 14:11:58 CST 2025

GPT的作图能力还是要更优于其他两个的.

###### Thu May 22 15:36:09 CST 2025

Linux.do社区还是注册不了, 可能是我没有邀请码吧.

###### Thu May 22 18:05:41 CST 2025

最后记录一个有趣的现象吧, 很多重复命名的图片文件爬虫抓取的时间都比较长, 但是感觉没有优化的必要.

##### Mon May 26

###### Mon May 26 14:42:46 CST 2025

好像又没有记录我早上记录的日志了.

###### Mon May 26 17:57:52 CST 2025

日志这次必须两边同步了! 不然又忘记了!

###### Mon May 26 23:55:17 CST 2025

现在算是同步了哈哈哈，就是搞到床上来了。

###### Mon May 26 23:57:37 CST 2025

也算是革命成功了哈哈哈，用了这几天的体验还行。

##### Tue May 27

###### Tue May 27 09:04:26 CST 2025

总算是把日志两边同步了, 这下可以好好记录了, 待会看下再整理一下我的笔记系统吧.

###### Tue May 27 10:21:55 CST 2025

这下算是把显示器全部调好了哈哈哈, 看着是真的舒服.

###### Tue May 27 10:30:45 CST 2025

终于是发了...

###### Tue May 27 11:01:31 CST 2025

把两处拼写单词错误修改好了, 这个py文件还是有点用的哈哈哈, chat给的重定向不太正规.

###### Tue May 27 13:41:37 CST 2025

还是很困啊.

###### Tue May 27 14:22:52 CST 2025

订阅还是要把魔戒和机场分开来, 魔戒还是备用管, 不然一下子就没了, 这次下载steam就给我一个教训.

###### Tue May 27 15:10:09 CST 2025

刚刚看了其他家的ai, 感觉不如chat哈哈哈.

###### Tue May 27 16:00:41 CST 2025

刚刚发现了一个大阮博客里面提到的卷积神经网络的应用--OCR, 吸引力法则发力了哈哈哈.

###### Tue May 27 18:13:19 CST 2025

部分外部链接可以通过ifixit添加.

###### Tue May 27 18:26:54 CST 2025

早上练习三十分钟打字吧.

##### Wed May 28

###### Wed May 28 08:44:24 CST 2025

daddy is home, 早上这么一搞还是蛮舒服的, ps: 刚刚坐的巴士还挺高级的哈哈哈.

###### Wed May 28 14:25:04 CST 2025

把订阅信息重置了, 应该是泄漏了, 魔戒的流量用的好快...

###### Wed May 28 14:55:16 CST 2025

明天晚上就要回家了, 晚上赶紧收拾下行李吧.

###### Wed May 28 16:53:17 CST 2025

文章搞定了, 明天再提交SVN, 今天就不提交了哈哈哈.

###### Wed May 28 18:03:59 CST 2025

准备下班了.

##### Thu May 29

###### Thu May 29 08:40:43 CST 2025

行李收拾好了, 感觉放假就带个游戏本就好了, 轻薄本就先暂时放家里面了.

###### Thu May 29 08:43:43 CST 2025

重置订阅信息就恢复正常了, 看来真的是订阅泄漏了......

###### Thu May 29 11:41:49 CST 2025

火狐浏览器怎么又寄了啊啊啊啊.

###### Thu May 29 11:57:54 CST 2025

傻逼火狐, 转chrome了, 书签全没了......

###### Thu May 29 13:59:19 CST 2025

笔记本上的备份找回来了一些, 唉, 这火狐还是有点不稳定的, 还是先备份到chrome吧.

###### Thu May 29 15:56:28 CST 2025

那两篇文章的图片正常加载了, 应该是才被index吧, 好吧还没有index, 可能还要蛮久.

###### Thu May 29 16:58:21 CST 2025

南孚电池这个全球网站做的比国内的也好太多了...

##### Fri May 30

###### Fri May 30 07:33:42 CST 2025

到老哥这边了。

#### Jun 2025

##### Wed Jun 4

###### Wed Jun 4 11:06:05 CST 2025

简单回顾一下端午节假期吧.

先是接到老妈的电话要回去办事情(房子过户问题), 然后周四晚上就坐绿皮回去了, 车上遇到一个小孩, 17岁, 感觉蛮和善的, 就是看不出是男生还是女生.

然后就是煎熬的十几个小时, 有两个老爷爷, 后来让座, 三个人轮流坐, 就这样到了南昌, 下车直接打车去找我哥, 他这次起的还是蛮早的, 可能是要弄那个招标的事情, 也是看他一直在电脑边上工作.

在他家撸了一会狗子, 然后嫂子起床打扫卫生, 带小乐言, 也是会说一点话了, 感觉看见我还蛮亲的哈哈哈.

后面就是去青云谱那边的办事大厅搞这个事情了, 大妈也来了, 过户这个还是很麻烦的, 我觉得希望不大, 还交了那么多钱... 签了那么多字... 可能后面还是要去公证吧. 哥请我们一家吃了顿饭, 那个鱼头是真的大(4.8 斤)哈哈哈, 后面打包了. 吃的也是蛮开心的, 这次也了解到了很多之前不了解的事情, 也算是有点收获吧.

然后就回家了, 下午四点左右到家. 玩了会电脑, 然后就睡觉了, 巨困无比!

然后就是过节, 不过以后都不用去他家庭那边吃饭了, 这也算是一件好事哈哈哈.

然后他俩又吵架了, 我调解, 不过昨天看下来, 情况还算是比较稳定的, 顺其自然吧.

差不多就这些事情记录了, 昨天休息了一天调整, 今天正式上班, 加油!

###### Wed Jun 4 11:17:33 CST 2025

轻薄本感觉还是可以带着的, 或者放家里面, 因为之后可能还要用到吧, 电子阳痿之后就能派上大用场了哈哈哈, 想一下如果下次回家, 基本上就不用带多少东西了, 食物, 衣服, 还有一些必要的电子产品, 可以轻装上阵了哈哈哈.

###### Wed Jun 4 15:36:47 CST 2025

习惯一下typora这个打字的环境吧.\*\*\*\*

###### Wed Jun 4 15:52:19 CST 2025

打字机模式吗? 有点意思哈哈哈, 这个外观和实时渲染真的做的还可以唉. 以后的笔记就用typora+github了吧, 之前是vsc+github, 但是vsc的那个md有点一言难尽...

###### Wed Jun 4 18:09:46 CST 2025

准备下班了o7

##### Thu Jun 5

###### Thu Jun 5 09:13:47 CST 2025

今天算来的比较早, 也可以按正常的时间下班了 \\o/

如何判断自己的电脑是32位还是64位/下载软件问题/安装驱动问题等/

美滋滋, 点了份11块的烧鸭饭哈哈哈, 我爱京东.

预算差不多就这样了, 现在还能套出来的就cs的那部分了哈哈哈, 吃饭以后就用京东吧.

卧槽, 这个审查这么严格吗? 刚刚试了下修改, 有64都不行, 还是过不去吗?

最近 1 年左右增加的限制，修改 wifi 热点和蓝牙名字需要联网校验。 起因是品葱上有人号召把 wifi 热点改成反党口号去机场火车站

又开始装修了, 吵死了......

更新内容的文章基本上全部索引了, 待会查一下重定向的文章.

重定向的拼写错误也都改过来了.

加了music和听书感觉豪爽哈哈哈, 准备xb了...... 同步日志

##### Fri Jun 6

刚到公司, 楼下又有人吵起来了, 好像是交通事故, 但是好像没有撞上, 有个人得理不饶人. world sucks.

突然想到一个点, 妈妈和外婆有点像, 洗拖鞋哈哈哈, 以后我还是自己洗吧, 老妈不想看到我邋里邋遢的......

天塌了, 银行还欠着10w......

分析一下这个问题: 我觉得主要有三个方面因素导致, 一是他自己的原因, 吃着碗里的, 想着锅里的, 二是家里的环境因素导致的, 家里比较乱, 三就是大环境, 现在赚钱感觉没有以前那么简单, 需要的东西太多了......

完成文章.

<a href=" ../iphone-tips/how-to-delete-junk-files-on-iphone.html>

不知道100KB的图像要不要也优化下...... 优化完成, 还是蛮简单地哈哈哈

OK肖婷姐更新的图片有空格哈哈哈, 现在知道为啥那么多的有了. 准备同步日志下了.

##### Mon Jun 9

周末也是过完了, 把*底特律:化身成人*通关了, 全场差不多17+hs, 虽然最后的结局很惨, 但是也没有办法, 可能作者的想法就是和那个什么卡姆斯基一样吧, ai如果不能通关图灵测试, 就要迎来毁灭, 否则就是人类自掘坟墓...... 但是底特律的dvents我觉得是渴望和平的, 没想到我马库斯直接被杀了, 唉.

然后就是下了个巫师3, 下班玩玩吧.

开始工作!

周末两天爽开空调, 用了20度电了我日......

11.8的烧鸭饭爽吃!

更新了一下首页的相关文章, 感觉这个一个月更新一次就行吧.

isumsoft和isumsoft it是否可以分开了, 感觉本站也是博客网站吧.

醒了.

把侧边栏的最新文章更新了下, 这个也一个月一次吧.

房子的事总算是搞完了, 妈妈应该没那么多心事了吧, 就大爸和我.

这个房屋分配协议ai拟的还真的还行.

win11 如何删除程序卸载后遗留的右键菜单

how-to-completely-delete-the-uninstalled-app-right-click-menu-option.html

就是房产证上面是我哥的名字, 不知道以后会不会有什么问题.

《The Great Dictator》中的**结尾演讲全文** (听录)

To those who can hear me, I say – do not despair.

The misery that is now upon us is but the passing of greed – the bitterness of men who fear the way of human progress.

The hate of men will pass, and dictators die, and the power they took from the people will return to the people. And so long as men die, liberty will never perish.

Soldiers! Don’t give yourselves to these unnatural man, machine man with machine mind and machine hearts, you are not machines, you are not cattle, you are a man, you're the people have power, to make this life bright and beautiful. To make this life a wonderful adventure, and of youth or her, And let us Unite!

##### Tue Jun 10

电报的电话好像被封禁了, 用美区重新注册了一个, 还好可以收到码......

cannot type now fuck......

还得是B站上的神医啊， chat有个几把用。。。

顺便把病急乱投医的那些傻逼软件都卸载了， qnmd

哈哈哈，模拟聊天，真有智华的。

电报的新号差点又被封禁了，还好这个解封了，之前那个应该是登不上了。

这个固态的分数也太低了吧。。。加起来都没有100分，我那个新的7000多分。

我用 CrystalDiskInfo 查看了公司电脑的 SSD SMART 信息，Reallocated Sectors Count 和 Uncorrectable Sectors 项的当前值和最差值都是 100，说明没有出现坏块或数据损坏的迹象，属于完全健康状态。

文章完成了，看下找时间翻译完然后整合吧。

直接让chat处理了，我就整合筛选一下数据吧。

准备下班了，同步笔记！

##### Wen Jun 11

到公司了，今天把那篇文章搞完吧，来的稍微有点晚了TvT。

流量看有那么一点点回流了，再看看后续吧。

感觉银轴还是有点吵了，不如茶轴哈哈哈，有时间买套青轴或者红轴来玩玩哈哈哈。

记录一些键帽客制化的厂商：指尖文创、Domikey、键设局、JTK **键帽馆**，回去有时间看看。

矮轴给我一种笔记本键盘的感觉哈哈哈，不知道手感怎么样，如果有机会可以体验一下可以试试。

这个PBT注塑键帽感觉和ABS差不多哈哈哈。

铝厂 IQUNIX

跑一遍网站。

感觉俄语歌适合唱那种比较伤感，孤独的感觉。

shit蓝屏了，感觉是内存的问题。

Fence 5的破解版终于被我找到了哈哈哈。

完成文章!

这个IP地址是会随时变的呵呵.

Startisback++的破解版也找到了哈哈. 准备下班了,没啥事做了.

准备同步笔记！

##### Fri Jun 13

日志恢复，我有焦虑症，看下有什么方法吧。。。。

收录文章的速度好像变快了。

优化了下那个隐藏的一个BUG，但是还是没有那个点击隐藏，显示的效果，感觉有这个也不需要点击的那个功能了，多此一举。

Last year, I want to travel aboard, found my U.S.A visas last a decade, start from 2016, same year, we played that Bo10, so close to win, lost one single round, I'm 18 that year, so that visa mean a piece of trash for me.

And then I started going back through the visas. I suddenly realized that a LOL pro's visas may just looks like a book written full with regrets, we have to sign vary kinds of visas, they may become a beautiful and unforgotable memory, but more just like one and other trophies, sometime one step is hard like never.

I definetily will be neverous after this win, cause this is the first time I reach the MSI, I don't know what will happen next.

BUT, when we look around the world this morning, the direction of wind gonna change everyday, so IF we decide which way we wanna go, do the direction of wind today really matters? At least this time, this visas will take me to the right place.

Thanks for everyone who trust me, I promise that will try my best to WIN THE GAME, no matter what's the result is, Cheer for AL(Anyone's Legends) TODAY! (Doraemon smile

成功翻译嘿嘿。

目前还发现的BUG，首页页头的隐藏项目，分辨率切换的时候页头会消失。

以后真的会变成模型之间相互竞争吗？

##### Mon Jun 16

周五的日志好像忘记同步了，算了。。。

看了一下很多关于道教的东西，感觉这种东西可以不信，但是保持敬畏之心，毕竟是老祖宗留下来的东西。

感觉还是需要邀请码

找到邀请码了，哈哈哈，希望能注册成功!

那两个电报频道也加上了哈哈哈，希望审核可以通过。

把rammap下载回来了。

准备下班去火车站接hg，同步笔记！

##### Tue Jun 17

以后就当没有这个人罢了，就算我妈原谅他了，，我也不能原谅。工作吧

##### Wed Jun 25

今天还是把PARA的日志重新捡起来吧，小记一下这段时间“消失”去了哪里哈哈哈，首先是QQ邮箱，很不错，发现了很多新的功能，感觉可以用来做一些小项目的记录。 然后就是notion的第二大脑，感觉还是有点复杂了，七月份试试看看能不能正式启用吧。 然后就是关于HG了，这几天来了，然后面试还算是比较顺利，也住下来了，买了个小桌子，但是房间还是有点小了，可能要再换个大点的房间吧。 最后就是关于最近的工作了，还是生产文章吧。

##### Thu Jun 26

T佬模型的最大token值是1048576，但是我的那份分析报告的token是5847179，好像是有点大了，导入不了哈哈哈，还是自己看报告吧。

##### Fri Jun 27

文章提交了，最新文章也更新完了，然后现在就是找欺骗指数低一点的ip先来连接公司给的视频账号来继续发视频了。（现在就是不知道做什么类型的视频了。。。）

##### Mon Jun 30

又到了周一！这周末打瓦了，撸都没空大，然后就是请hg简单吃了点好的哈哈。

今天上班网站内部的活就改了几处错误，然后网站分析报告里面有些网页速度有点慢，目前还不知道是什么原因，可能是服务器的问题吧。然后就是看到了蛮多和我们网站很像的网站，之后多研究研究吧，估计是一个产业链，和我第一次来公司看到的那个地址感觉有点关系应该，但是我们目前的网站流量有点太差了。六月可能就只有120k差不多的流量吧，五月还有160k，下降了大概40k左右，再说吧！

还有一件事就是有了自己的小手账本，感觉还不错哈哈哈，希望能多记录一些东西哈哈哈。

#### Jul 2025

##### Wed Jul 2

财务大脑也是开始使用了，还是有很多欠款的，慢慢还吧，老妈那边也还有。。。

##### Thu Jul 3

教资考试是明天才开始报名，明天再去缴费吧，不过网上的预测还是蛮准确的，就相差了一天。

##### Tue Jul 15

这几天发生了蛮多事情的，主要就是家里面的事情了，他两的关系还是那样，我觉得还是要搬出去，先过完今年吧，我觉得他现在已经是入不敷出了，然后才想着回来，他自己现在说话的语气我感觉都有点那个啥了，哎！然后这段时间也就接一下老妈的视频吧，他的电话也接，但是要演好这出戏。

然后反省一下自己这几天，还是在家就是感觉有点接受不到最新的信息了，没有上班的时间的那种状态，还是要加强一下自己在这方面的能力，毕竟现在是信息时代，信息就是一切。

##### Wed Jul 16

今天的流量上涨的好快，感觉今天可以突破六千，可能和谷歌的核心更新有关吧，希望能保持这个势头。然后我对于resource页面的更新也差不多完成了，总体来说还行，至少比以前更好看了，然后该有的部分也都有，agument还是蛮好用的！总体来说还是需要再次检查一下，以免有什么遗漏的地方。

这个叼毛的骚扰电话我真的是服了！

##### Thu Jul 17

流量来源还是搞清了，很多是Googlebot的爬虫流量，可能是因为谷歌的核心更新导致的，之后再看看吧。如果能保留一半的流量也还是不错的，至少说明Google还是认可我们网站的。

今天也是摸了一天🐟，感觉更新完resource界面没啥写文章的动力了，明天看下跑一遍网站吧。

跟聪哥交流了下，应该是提交了，不过还好内容不算多，今天流量差不多也是7k左右吧，因为谷歌爬虫的加持哈哈哈，不过不知道能不能把这个写进简历哈哈哈。

##### Fri Jul 18

刚刚查看谷歌的更新排名已经结束了，接下来就看周末流量的一个变化了，如果还是和之前一样那说明还是不行，希望有上涨吧！结束了的话我就可以跑网站了。

这样看来就是全部的六月到七月的更新全部结束了，只是那个六月的状态还没有更新过来。

把图片和视频那些排除出去之后，网站跑起来就顺畅多了哈哈哈，几十分钟就跑完了，但是加上视频图片那些就要很久了不知道为啥，然后还是有一些404的页面，有些是之前的文章里面加的一些链接失效了，直接删除就好，还有一些就是有空格的，删掉了，还是要隔一段时间就跑一跑，防止404。

然后还有一个很困扰我的就是关于标题结构这一个部分的错误，我发现很多页面都有这个问题，不知道优化之后会不会好转，我觉得有些你想要样式的直接在style里面加上就好了，有些没必要用那个该死的h标签啊，反倒会造成结构混乱。。。后面看看怎么办吧，西八。

看阮大的博客了解到的一篇文章，好像和我之前看到的那个笔记本是一个型号的，只是依稀记得之前好像是在blibli上看到过类似的测评视频，当时的技术还不算十分成熟，所以当时也就可能只是当一个乐子看看罢了，现在看起来好像还真不错！有时间可以多了解了解，名字叫Framework laptop，我看的是13版本的，看起来还不错，操作系统应该也是可以自定义的，如果能安装macOS我觉得很多苹果用户会选择哈哈哈。

##### Sun Jul 20

昨天和今天帮hg把数据搞出来了，但是电脑还是寄了，哎，让他先用着我的吧

这两天也把我自己的小游戏本也tweak了一下哈哈哈，让他变得更好用吧，只是手段，不是目的！

##### Tue Jul 22

怎么记得之前好像提交过更新，但是打开来看还是没提交哈哈哈，就把今天的一起提交了吧。

今天把上周更新的错误标题结构的都改回来了，然后网站的流量还是那样，稍微有一点上涨吧，但是远远不够，还得继续更新网站的UI我觉得，这次看见了很多之前没有看见的数据，然后resource页面的更新也差不多完成了，但是Google还没有收录，可能还需要一段时间吧。这周的目标就放在firefox上吧，chrome的那个更新导致这件事情的讨论度肯定很高，然后趁机水几篇文章哈哈哈，还有几篇，可以分时发布，这周和下周就干这个吧！

##### Wed Jul 23

昨天流量刚好破了五千，也算是有所上升吧，希望这次更新之后能保持，谷歌爬虫这几天肯定还回来的，有些页面还是没有收录。。。 Google Special-case Crawlers 这个不知道是什么爬虫来的，我觉得可能是Adsense，因为谷歌最近不是把ad block的那个扩展给封杀了嘛，可能就是想加强Adsense的收入吧，然后访问网站哪些可以加入Adsense的页面，我觉得。

时间都记错了，西八哈哈哈；

确认了，应该就是AD的那个bot来访问的，因为我看他爬取的页面好像都包含了Adsense的广告，就是那个留白的部分！

##### Thu Jul 24

昨天又忘记commit了，西八！和今天的一起吧。

然后就是找到了昨天那个错误外链的出处，联系了那位reddit用户，看下能不能改过来哈哈哈，感觉应该不是我们的人！看下他能不能改过来吧。

腹泻相比于昨天应该算是好了点，然后今天要把小米15寄出去了，待会在小一加上也下载一个小米商城吧，不知道快递能不能在我下班之后再来取。

看了一下那几个404错误，好像都是之前的一些错误，还是不管的为好，然后下周收录了之后再看看跑一次！

##### Fri Jul 25

周五的我忘记提交了吗？我真忘了哈哈哈，周一再去看看吧，我已经可以开启我的vibecoding了哈哈哈！

##### Sat Jul 25

周六了

##### Sun Jul 27

周日了，老板也算是发工资了，4400左右，请了几天假也算凑合吧，lj真是说来就来，西八，看下今天怎么打发打发他吧，真是一个asshole。

##### Mon Jul 28

今天也是请假了，看下怎么搞搞副业吧哈哈哈，换新的手机也到了。 周五了，这周也差不多结束了，那篇文章直接提交吧，然后就是今天他们说的那个poolhub关闭了，对于他们的影响是显而易见的，还好我只是做内容哈哈哈，偶尔优化下UI。

然后今天下了班给母亲打个电话吧，看看她的情况怎么样了，最近也没怎么联系她，可能是因为我自己有点忙吧。

然后关于手机送修，不知道他是直接给我换一个后盖还是直接换新，希望是换新的，因为我有首发权益，如果实在不给换的话就先这样用着吧。那个快递大哥不是骗子来的，别把人像的太坏哈哈哈。

最后就是关于公司网站这一块了，我上周提交的更新还是没有同步上去，如果下周还是没同步，可能是老板没有上传我这个文件吧，哎，最后就是视频这一块了，下周把剪映专业版拷贝过来再重回视频这一块吧。差不多就这些了，happy weekend！

##### Thu Jul 31

又是因为前两天家里面记录的忘记commit了,导致有两天的没有记录上,不过也没啥影响吧, 主要是记录一下最近的事情.

老妈那边目前算是趋于稳定了,我觉得他也不敢再闹了,背着那么多债,唉!

然后就是我自己的事情啦,手机已经换了个新的,然后教资那些计划也准备开启了,先把这玩意拿下吧,不然科目1和3就白考了.

明天上完班就可以休息了,然后工作方面的话最近是把网站有关公司方面的网页做了一些优化,感觉之前也太没有可信度了吧,啥照片都没,纯文字,就按照自己的想法来做了,希望能有点效果吧.流量最近还是有所回升的,差不多可以到每日5.8,9这个样子,和之前3k比还是有蛮大提升吧,就是不知道和Google bot还有没有关系了.就先记录这些吧!

#### Aug 2025

##### Fri Aug 1

八月了！今天把网站做出的那些更新全部提交吧，然后下午给老妈打个电话，看看她的情况怎么样了，最近也没怎么联系她，可能是因为我自己有点忙吧。

刚刚试了下更新下载页面的功能,感觉还是有很多bug的,下周看看把它弄完吧.

##### Mon Aug 4

周末的日志没有记录了，大致也就是玩玩游戏看看电影，没啥好记的，开始开源节流吧，new week，这周争取不请假吧！

##### Tue Aug 5

还得是komorebi好用，以后工作流就用这个了哈哈哈。

小米电脑管家在公司的台式机使用效果还是不理想,卸载了吧.

把下载页面稍微更新了下，感觉还是有些需要优化的部分，还没有debug，明天再来看看吧，今天老板一天都没有来，也不知道为啥不回我RTX消息，可能不喜欢我更新的内容？不管了，就按照我自己喜欢的来更新吧，最近文章也没啥好写的了，就这样吧！

那个女拳的事情看的我真是生气！

##### Wed Aug 6

学习了下svn的进阶使用,可以方便的恢复之前版本的文件,因为有一个css文件里面的东西有点不知道是啥时候添加的,就直接恢复了,幸好备份了我新修改的download的css,它好像直接就把源文件覆盖了.

操，把那个搞好的网页搞没了，我恨你cleanup！

##### Thu Aug 7

agument恢复正常了哈哈哈，而且之前的历史记录也都还在，昨天误删的部分也恢复了，感觉还是蛮不错的。中午吃点好的哈哈哈！

然后接下来就是代码管理了，把我负责的代码管理好！

话说昨天的log是不是忘记提交了？算了，今天的就行了。

今天就只睡了七个小时，晚上早点睡吧！

##### Fri Aug 8

GPT-5发布了，感觉大家对这玩意的态度还是褒贬不一的，但是很多互联网厂商直接就把它整上来用了，目前copilot，agument和一些公益站都端上来了，感觉还是蛮不错的，毕竟是最新的模型嘛。 早上自己也试了下，感觉代码能力还是不错的，但就是网页版肯定会降智，而且在电报群里面还有人说可能会给你换成gpt4.1nano，这个openai也太黑了，不把普通用户当人看是吧，然后agument的额度用的也差不多了，看下等老板来，拿他的那个手机号也注册一个试试看哈哈哈，不过好像停止开放注册了，可能是因为太多人注册使用然后服务器维护的成本增加了不少吧哈哈，白嫖党还是太多了哈哈。

芜湖还有一下午就周末了，然后待会把代码整合一下发布吧，老板还是没来哎，看不到我的大作了，话说之前的他好像也没看，不知道为啥哎，就这样吧，把代码整理下提交，然后周一来看看效果，还有就是可以摸鱼了哈哈！

##### Mon Aug 11

又是新的一周,这周写写文章吧,感觉最近的文章都没有什么质量,都是一些小更新,可能是因为我最近的精力都放在了网站的UI上面了,所以文章的质量就下降了.

##### Tue Aug 12

周二了，该死，下班还是会忘记提交，下次在待办事项里面加上提交当日日志这个选项吧。

把公益站分组稍微优化了下，看下其他标签页也优化下吧，不过可以等下了班再优化哈哈！

想睡觉zzz

现在两个agument的帐号了，感觉还是我的那个更好哈哈哈，老板给的手机号只是注册了个7天的试用，不过也还先用着再说吧。

搞定文章，接下来看看那个product的页面吧，看看能不能优化下。

准备下班咯, 成功把博客网站部署到新的domain上去了哈哈哈, 感觉还是蛮不错的, 之前的那个domain有点长了, 现在这个短一点, 也好记一点.

##### Wed Aug 13

昨天晚上优化了下我的博客网站, 只是把header简单优化了下, 顺便更新了移动端适配,下午有空的时候来看看agu优化了哪些地方吧哈哈, 这个域名真不赖哈哈, 以后就用这个域名了吧!

然后是网站上个月的流量, 有大幅度提升! 上个月是257.73k, 然后6月好像是只有162.4k, 有可能是由于谷歌核心更新带来的流量暂时提升吧, 具体要看8月份流量的情况了哈哈, 还是有点小开心的, 不知道自己的优化有没有起作用, 肯定是大家努力的结果吧! 继续加油!

对了, 昨天还在B4U公益站中了1000刀的额度哈哈哈, 这下真的狂刷都用不完了!

好了, 先记录这些吧, 早上不知道为啥常去的那家早餐店没有开门, 门口还坐着一个女的, 还有警察在, 估计是有点事情发生了吧. 看下明天会不会开门吧, 不然先回归一段时间泡沫箱肠粉了.

准备写一篇博客: 名字就叫" 当主流信息平台成为垃圾场, 信息筛选显得尤为重要 ".

##### Thu Aug 14

这个**spotify**难怪没啥人去弄，全是坑，一是美区兑换，只能绑定美区的付款方式，但是订单结算的时候又不能用我的Paypal来结算，然后就去找虚拟随机卡来试试，发现还是不行！试了我一个小时，然后MS Awards的奖励还是发送到我的Outlook邮箱，真的是离了大谱。。。。。。以后这个软件的福利我还是不参加了，免得自己受气，听音乐还是自己做音乐库吧，正好这两天耳朵有点疼，不听了！

先让ai干着吧，吃饭去喽！

感觉添加亮暗色切换会触碰到石山代码啊啊啊啊！

把文章类型的亮暗色切换做了下，感觉还是有点不美观，之后再看看吧！下班！

##### Fri Aug 15

悲）今天没咋摸鱼了，L站被D了，不过还是扛住了今天，芜湖！起飞！

##### Mon Aug 18

工作周了，希望老妈的检查结果一切顺利！这周本来是想要添加亮暗色功能的，但是可能聪哥不让，然后后面再看看做个什么功能吧，实在不行就还是优化一下UI吧，毕竟现在的UI还是有点丑的哈哈哈。

今天纯属的摸鱼了！

##### Tue Aug 19

今天老妈的检查结果出来了，感觉还行，希望能一切顺利吧！她也是今天回家了，好好休息吧。

然后就是今天的工作了，主要还是亮暗色模式这一块，感觉还是有点麻烦的，可能是因为我之前没有接触过这个东西吧，之后再看看怎么优化吧，今天就先这样了。

老板账号的那个Agument额度也用完了，也过期了，明天再看看能不能注册一个新的账号吧，毕竟现在的Agument还是蛮好用的。

继续摸鱼！

##### Wed Aug 20

周三了，下班可以回家打箱子了！

今天看下把products页面给整出来吧。

##### Thu Aug 21

Products页面给了一个新的样式，感觉还是蛮不错的，之前的样式有点丑了哈哈哈。

今天注册成功了一个新的Agument账号，但是很快就被封禁了，估计还是IP的问题吧，之后再看看能不能注册一个新的账号。

明天就要提交这周的工作了，看下有哪些需要提交的吧。首先是文章方面：就把那篇微软更新导致部分用户磁盘大量写入数据后故障的文章提交吧，分类就放在Windows tips，但是这种感觉是时效性比较强的文章。然后就是页面的样式了，就把products的那个页面看下再完善下提交上去吧，就是这两项了。

摸鱼！下班！

##### Fri Aug 22

这个Qoder还是不错的，先平替agu再说吧哈哈哈，我用着现在还不错！

这周工作基本上全部提交上去了，没有新文章，还是优化seo为主吧。

##### Tue Aug 26

这个周末请假了一天，今天开始工作。

新建了一个vibe-coding的工作区，感觉还行哎哈哈哈！

如果硬要说相同的网页的话，我觉得products，downloads，store这三个页面差不多是完全一样的。

老妈科目一一次过了，哈哈可以学会开车来了。

把startisback搞回来了，哈哈哈效果还可以，只不过有了yasb感觉这个也没啥必要了，但是还是留着吧。

之前的那个products页面还是被否定了，还是先这样吧，感觉聪哥要打我AI的主意啊。小心点!

##### Wed Aug 27

周三了，上午把store页面的hero部分优化了下，感觉这次应该可以了吧！但是还没大改，估计大改又要挨屌了，还是先这样吧。拉尿去了！

##### Thu Aug 28

原来那两个人没有离职啊，西巴，把优化后的商店页面提交上去了，看下待会他们怎么说吧。

##### Wed Sep 3

这几天的log都没有记了，不是懒吧，就是有点忙，然后迁移博客的乱七八糟的事情。

#### Wed Sep 17

Cherry的笔记也是上线了, 以后的笔记可以在这里面管理了, 就是感觉打字卡卡的, 可能是电脑配置的原因吧.

感觉是实时预览的问题, 改成源码就没有那么多问题了!

#### Thu Sep 25

台风在昨天也是过去了，这次的“晔加沙”说是有17级风力，好在对我的影响还算是比较小的，因为靠近内陆，也是经历过牛马城的第一次“五停”了哈哈，还是蛮有意思的！

这几天给网站更新的就是新文章，新的页脚移动端折叠显示还有一些404页面的修改，前几天聪哥说我走的时间有点早了，哈哈哈，确实是，但是其实也是真没啥事可以干了吧，所以提前了点走，以后还是严格遵守八个小时吧，免得惹人说，哎，竖子不足以为谋！

#### Fri Sep 26

我说最近怎么看流量还有点起势，原来是把我自己开发的也算进去了，待会看下把我自己的代码里面的给移除吧，这样得到的流量才是真正的用户来的流量，话说看见Github会不会起疑心啊哈哈。

#### Sun Sep 28

原来上个月感觉是lb补给我的一些，原来只是假象，哈哈哈，我多虑了，骑驴找马吧，那我也不必客气了。

#### Fri Oct 17

今天周五了，重新把笔记捡起来吧，感觉有一个月没有记，脑子有点不清晰，前两天室友也买了机械革命的笔记本，希望可以安全下车，应该过两天就会到，到时候帮他验一下机，鸡哥的旷世X，内存比我多了一倍，但是价格还是贵了点我觉得哈哈哈，不过那些零件的品牌应该和我的大差不差吧，七彩虹的那个是真不敢恭维，i9的处理器能卖到6700，很难不怀疑有没有缩缸，等他笔记本到了就可以一起猛攻了哈哈哈。工作这周的话就添加了两篇新文章吧，然后公司发布了一个新产品，目前好像是还没有上线，功能我觉得还是一般啊，我就研究关键词，写写文章吧，已经开始摆了哈哈哈，博客最近还行，常刷L站还是有一点访问量的，索引网页的数量也从之前的0变成了4，有四个页面网络上是可以找到的哈哈哈，继续加油吧！

#### Tue Oct 21

周末又过去了，周一还是要请假，最近感觉hg的打呼声音是越来越响了，可能和胖有关吧，不知我晚上会不会打呼，他的电脑也终于是搞好了哈哈，可以愉快的玩耍了。 32G还是爽啊哈哈哈，大容量，我也买了，明天自己装上去试试，刚刚把一些用不上的软件还是卸载了，感觉最近工作效率低有可能和这个原因有关，坚持日志吧！

现在看那些文件感觉还是有点后背冒冷汗😰的感觉，不知其他人是不是这样，反正肯定是一种不好的感觉。

#### Wed Oct 22

周三打箱子！还有几分钟就下班了，明天把那篇文章交上去吧，然后今天头不痛了，智华也是从青海回来了，找到工作就好！今天上班是把自己的那几个小玩意搞了下，目前应该算是有两个站了吧哈哈哈，还有一个免费的域名还没有用！博客现在算是比较完善了，好耶！就这样吧，准备xb了！

#### Thu Oct 23

掉的梦魇武器箱，开了一个狗屎，服了(*￣︿￣)，今天把那篇文章交上去吧！

文章也是完成了，这次是直接用github的copliot完成的，可以白嫖一些免费的额度，还凑合吧，然后就是把自己的网站首页的图标直接换成了小米笔记备份的logo了，感觉还是有点问题哈哈哈，待会再看看怎么调整吧。刚刚看到LOL上了新的符文大乱斗，回去看看和hg玩下！包好玩的，cs也是开启了锻刀纪元，垃圾红色的价格疯涨，等价格稳定看看自己练一把刀或者直接买一把把，优先还是海豹短刀哈哈。

#### Fri Oct 24

终于到周五了，咦哈哈哈，然后刚刚试用了下codex的cli，感觉用来处理html之类的文档还是有点不行啊，可能是我打开方式不对吧，也有可能是他没理解我所说的Saas的含义是什么哈哈，感觉需要给于更加精细化的指令才能做到更好的设计和优化！不过我的博客算是完成了哈哈哈，舒服！可以坐等下班了~

#### Mon Oct 27

周末总是那么快！周末去外面搓了一顿，hg birth lol，那家店还是不错的，然后周日躺尸了一天，这周看下把demo提交上去吧！今天感觉啥都没干，其实还是有点想请假的哈哈哈，周一必不上班。

#### Tue Oct 28

上周的流量跌了点，徘徊在4500上下，感觉和站内访问减少有点关系吧，然后就是最近新东西也还没上架，我现在就有点担心，如果上架了我的新index页面，会不会减少网页的流量，如果是这样，那不就赖我头上了，西八！刚刚发了工资，请假三天，上个月只有4471......

下午把博客站修好了，js组件还是自己搓出来比较好，不然后续维护还是有很多麻烦事的......

#### Wen-Mon Oct 29-3

十月也是终于过去了，老妈也是再次踏上了拿驾照的第二阶段。 上个月请假太多了哈哈哈，不过够花，现在降低消费，物欲也没有那么高了。

然后现在卡里面也是有2k了，但是hb，bt，ff还都没还完，加油吧！明天构思下那篇文章。

#### Wed Nov 12

好久没记日志了，昨天睡了九个小时，但是中途好像醒了一两次，一次是12点10分，一次是五点多，还有一次七点多，总体来说还是不错的哈哈。

这周isumsoft的流量有点难绷，低了大概百分之25，不清楚是什么原因，新产品的网页已经加进去了，但是还是没有看见主页的入口，可能不想这么快上线吧。

老妈今天考科目二，希望可以过，其实过不了也没事哈哈，拖延一下她想要买车的念头，钱还是需要花在刀刃上。

然后今天工作就把昨天用codex找出来的一些问题给修复了吧，还有就是isumsoft的新文章这一块。

把isunshare的错误链接改了，下周收录了再跑一遍看看👀。

不出意外的话还是出意外了，老妈半坡起步还是挂了，等十天下次再考吧。

准备下班了，又水一天嘿嘿嘿！明天构思下那篇文章。

#### Thu Nov 13

早上早早的把那篇文章搞定了，把内存还是尽可能小一点吧，用着太卡了不然。

codex真神了哈哈哈，换成wsl的直接就修好了，下午再来看看怎么搞一下我的小网站哈哈。

再试一下更新这个私密页面的效果怎么样，是真好使啊啊哈哈哈，完美哈哈哈，可以存一些自己的东西了，密码设置的复杂一些。

#### Thu Nov 27

又有一段时间没有更新日志了, 最近在体验gemini3还有大香蕉的可玩性, 效果还是很不错的!

老妈第二次科目二还是挂了, 目前有点不想考的意思了, 唉!
