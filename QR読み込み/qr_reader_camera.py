import sys
import os
import cv2
import numpy as np
import datetime
import time
from pyzbar.pyzbar import decode
from PIL import Image, ImageGrab, ImageDraw, ImageFont
 
 
def qrdecode(img, result, count_all):
    # img_d = ImageDraw.Draw(img)
    img_d = img
    for x in decode(img):
        result.append([datetime.datetime.now(), count_all, x[0].decode("utf-8"), x.rect.top, x.rect.left, x.rect.top + x.rect.height, x.rect.left + x.rect.width])
        # img_d.rectangle([(x.rect.left, x.rect.top), (x.rect.left + x.rect.width, x.rect.top + x.rect.height)], outline=(255, 0, 0), width=4)
        # font_path = os.path.join(cv2.__path__[0],'qt','fonts','DejaVuSans.ttf')
        # font = ImageFont.truetype(font_path, size=24)
        # img_d.text((x.rect.left, x.rect.top), x[0].decode("utf-8"), 'red', font=font)
    # img.save("result.png")
    return result

def main():
    cap = cv2.VideoCapture(1)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1080)
    # cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1280)
    # cap2 = cv2.VideoCapture(0)
    result = [['time','frame',  'code', 'top', 'left', 'bottom', 'right']]
    t0 = time.time()
    count = 1
    count_all = 0
    while True:
        try:
            ret, frame = cap.read()
            # ret2, frame2 = cap2.read()
            cv2.imshow("Image", frame)
            # cv2.imshow("Image2", frame2)
            if count >= 10:
                result = qrdecode(frame, result, count_all)
                print(datetime.datetime.now(), np.array(result)[-1,:])
                count = 0
            count += 1
            count_all += 1
        except:
            result = np.array(result)
            dt = datetime.datetime.now()
            np.savetxt('result_'+str(dt.year) + '_' + str(dt.month) + '_' + str(dt.day) + '_' + str(dt.hour) + '_' + str(dt.minute) + '_' + str(dt.second) + '.csv', result, delimiter=',', fmt='%s')
            break

        if cv2.waitKey(1) & 0xFF == ord('q'):
            result = np.array(result)
            dt = datetime.datetime.now()
            np.savetxt('result_'+str(dt.year) + '_' + str(dt.month) + '_' + str(dt.day) + '_' + str(dt.hour) + '_' + str(dt.minute) + '_' + str(dt.second) + '.csv', result, delimiter=',', fmt='%s')
            break

if __name__ == '__main__':
   main()
