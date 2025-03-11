// rotatedPolygon.js
// Массив координат в формате [latitude, longitude] (WGS84)
const rotatedPolygon = [
  [28.382549, -14.718294],
  [28.595590, -13.762719],
  [28.794559, -12.801342],
  [28.979318, -11.834510],
  [29.149736, -10.862580],
  [29.305691, -9.885928],
  [29.447071, -8.904939],
  [29.573772, -7.920013],
  [29.685701, -6.931560],
  [29.782776, -5.940000],
  [29.864924, -4.945764],
  [29.932082, -3.949287],
  [29.984201, -2.951016],
  [30.021241, -1.951400],
  [30.043173, -0.950892],
  [30.049981, 0.050050],
  [30.041660, 1.050970],
  [30.018216, 2.051409],
  [29.979667, 3.050911],
  [29.926042, 4.049023],
  [29.857382, 5.045295],
  [29.773739, 6.039284],
  [29.675176, 7.030552],
  [29.561765, 8.018672],
  [29.433591, 9.003222],
  [29.290749, 9.983795],
  [29.133343, 10.959992],
  [28.961485, 11.931428],
  [28.775299, 12.897731],
  [28.574917, 13.858543],
  [28.360477, 14.813519],
  [28.132127, 15.762333],
  [27.890022, 16.704672],
  [27.634324, 17.640240],
  [27.365200, 18.568757],
  [27.082824, 19.489962],
  [26.787376, 20.403609],
  [26.479039, 21.309469],
  [26.158003, 22.207332],
  [25.824459, 23.097003],
  [25.478604, 23.978304],
  [25.120637, 24.851076],
  [24.750758, 25.715172],
  [24.369172, 26.570466],
  [23.976084, 27.416845],
  [23.571700, 28.254210],
  [23.156227, 29.082479],
  [22.729874, 29.901583],
  [22.292849, 30.711468],
  [21.845359, 31.512091],
  [21.387612, 32.303424],
  [20.919815, 33.085450],
  [20.442173, 33.858163],
  [19.954890, 34.621569],
  [19.458169, 35.375682],
  [18.952212, 36.120529],
  [19.810914, 36.671585],
  [20.616414, 37.303082],
  [21.419595, 37.941285],
  [22.220333, 38.586535],
  [23.018498, 39.239184],
  [23.813955, 39.899591],
  [24.606566, 40.568127],
  [25.396187, 41.245172],
  [26.182667, 41.931117],
  [26.965851, 42.626365],
  [27.745578, 43.331330],
  [28.521680, 44.046438],
  [29.293982, 44.772125],
  [30.062302, 45.508844],
  [30.826451, 46.257057],
  [31.586231, 47.017242],
  [32.341438, 47.789887],
  [33.091856, 48.575496],
  [33.837263, 49.374587],
  [34.577424, 50.187689],
  [35.312097, 51.015347],
  [36.041027, 51.858118],
  [36.763950, 52.716573],
  [37.480588, 53.591295],
  [38.190654, 54.482880],
  [38.893846, 55.391935],
  [39.589849, 56.319077],
  [40.278335, 57.264933],
  [40.958961, 58.230138],
  [41.631372, 59.215333],
  [42.295194, 60.221164],
  [42.950040, 61.248278],
  [43.595507, 62.297323],
  [44.231176, 63.368941],
  [44.856608, 64.463770],
  [45.471353, 65.582434],
  [46.074939, 66.725544],
  [46.666879, 67.893688],
  [47.246670, 69.087430],
  [47.813791, 70.307301],
  [48.367706, 71.553793],
  [48.907862, 72.827353],
  [49.433691, 74.128373],
  [49.944612, 75.457185],
  [50.440030, 76.814048],
  [50.919341, 78.199141],
  [51.718280, 77.328996],
  [52.561950, 76.577486],
  [53.402943, 75.803324],
  [54.241021, 75.004885],
  [55.075924, 74.180407],
  [55.907372, 73.327984],
  [56.735057, 72.445549],
  [57.558646, 71.530854],
  [58.377770, 70.581461],
  [59.192029, 69.594717],
  [60.000980, 68.567737],
  [60.804139, 67.497380],
  [61.600969, 66.380227],
  [62.390879, 65.212559],
  [63.173216, 63.990329],
  [63.947254, 62.709135],
  [64.712190, 61.364201],
  [65.467133, 59.950349],
  [66.211091, 58.461983],
  [66.942961, 56.893072],
  [67.661517, 55.237151],
  [68.365395, 53.487330],
  [69.053078, 51.636321],
  [69.722883, 49.676499],
  [70.372946, 47.599990],
  [71.001205, 45.398815],
  [71.605395, 43.065085],
  [72.183036, 40.591271],
  [72.731436, 37.970555],
  [73.247692, 35.197273],
  [73.728722, 32.267451],
  [74.171287, 29.179419],
  [74.572056, 25.934478],
  [74.927675, 22.537570],
  [75.234862, 18.997869],
  [75.490528, 15.329203],
  [75.691896, 11.550203],
  [75.836643, 7.684083],
  [75.923012, 3.757995],
  [75.949925, -0.198028],
  [75.917039, -4.152464],
  [75.824771, -8.073868],
  [75.674273, -11.932440],
  [75.467362, -15.701379],
  [75.206413, -19.357908],
  [74.894239, -22.883874],
  [74.533956, -26.265924],
  [74.128856, -29.495331],
  [73.682295, -32.567546],
  [73.197600, -35.481596],
  [72.677993, -38.239410],
  [72.126542, -40.845158],
  [71.546128, -43.304642],
  [70.939423, -45.624769],
  [70.308885, -47.813119],
  [69.615790, -45.690170]
];
