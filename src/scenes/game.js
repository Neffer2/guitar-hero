let mContext;
export class Game extends Phaser.Scene {
    left; 
    left2;
    // 0 segundos demora en inicar la canción
    initAvg = 0;
    tabLength = 1210;
    velocity = 200;
    tab = [
        { note: 1, seg: 1.269841, pos: 0 },
        { note: 2, seg: 1.632653, pos: 0 },
        { note: 3, seg: 2.448980, pos: 0 },
        { note: 4, seg: 2.675737, pos: 0 },
        { note: 5, seg: 2.902494, pos: 0 },
        { note: 6, seg: 3.129252, pos: 0 },
        { note: 7, seg: 3.537415, pos: 0 },
        { note: 8, seg: 4.263039, pos: 0 },
        { note: 9, seg: 4.489796, pos: 0 },
        { note: 10, seg: 4.716553, pos: 0 },
        { note: 11, seg: 4.943311, pos: 0 },
        { note: 12, seg: 5.396825, pos: 0 },
        { note: 13, seg: 6.303855, pos: 0 },
        { note: 14, seg: 6.485261, pos: 0 },
        { note: 15, seg: 6.802721, pos: 0 },
        { note: 16, seg: 7.165533, pos: 0 },


        { note: 17, seg: 8.677175, pos: 2 },
        { note: 18, seg: 9.039987, pos: 2 },
        { note: 19, seg: 9.720259, pos: 2 },
        { note: 20, seg: 9.992368, pos: 2 },
        { note: 21, seg: 10.173774, pos: 2 },
        { note: 22, seg: 10.445883, pos: 2 },
        { note: 23, seg: 10.854046, pos: 2 },
        { note: 24, seg: 11.625021, pos: 2 },
        { note: 25, seg: 11.806427, pos: 2 },
        { note: 26, seg: 12.078536, pos: 2 },
        { note: 27, seg: 12.305293, pos: 2 },
        { note: 28, seg: 12.758808, pos: 2 },
        { note: 29, seg: 13.620486, pos: 2 },
        { note: 30, seg: 13.801892, pos: 2 },
        { note: 31, seg: 14.164704, pos: 2 },
        { note: 32, seg: 14.572867, pos: 2 },
        { note: 33, seg: 15.525248, pos: 2 },
        { note: 34, seg: 15.706654, pos: 2 },
        { note: 35, seg: 16.024114, pos: 2 },
        { note: 36, seg: 16.477629, pos: 2 },


        { note: 1, seg: 17.838173, pos: 2 },
        { note: 1, seg: 18.291688, pos: 1 },
        { note: 1, seg: 18.563797, pos: 0 },
        { note: 1, seg: 19.244069, pos: 1 },
        { note: 1, seg: 19.380123, pos: 1 },
        { note: 1, seg: 19.516177, pos: 1 },
        { note: 1, seg: 19.742935, pos: 2 },
        { note: 1, seg: 20.060395, pos: 1 },
        { note: 1, seg: 20.241801, pos: 2 },
        { note: 1, seg: 20.468558, pos: 1 },
        { note: 1, seg: 20.695316, pos: 2 },
        { note: 1, seg: 20.922073, pos: 1 },
        { note: 1, seg: 21.148831, pos: 2 },

        { note: 1, seg: 21.420939, pos: 2 },
        { note: 1, seg: 21.602345, pos: 1 },
        { note: 1, seg: 21.919806, pos: 0 },
        { note: 1, seg: 22.055860, pos: 1 },
        { note: 1, seg: 22.282617, pos: 1 },
        { note: 1, seg: 22.917538, pos: 1 },
        { note: 1, seg: 23.053592, pos: 2 },
        { note: 1, seg: 23.189647, pos: 1 },
        { note: 1, seg: 23.416404, pos: 2 },
        { note: 1, seg: 23.733865, pos: 1 },
        { note: 1, seg: 23.869919, pos: 2 },
        { note: 1, seg: 24.096676, pos: 1 },
        { note: 1, seg: 24.368785, pos: 2 },


        // { note: 1, seg: 24.595543, pos: 0 },
        // { note: 1, seg: 24.822300, pos: 1 },
        // { note: 1, seg: 25.049057, pos: 2 },
        // { note: 1, seg: 25.275815, pos: 0 },
        // { note: 1, seg: 25.638626, pos: 0 },
        // { note: 1, seg: 25.729329, pos: 0 },
        // { note: 1, seg: 26.001438, pos: 1 },
        // { note: 1, seg: 26.591007, pos: 2 },
        // { note: 1, seg: 26.727062, pos: 0 },
        // { note: 1, seg: 26.863116, pos: 1 },
        // { note: 1, seg: 27.089874, pos: 0 },
        // { note: 1, seg: 27.452685, pos: 1 },
        // { note: 1, seg: 27.588740, pos: 0 },


        // { note: 1, seg: 27.815497, pos: 75 },
        // { note: 1, seg: 28.087606, pos: 76 },
        // { note: 1, seg: 28.314363, pos: 77 },
        // { note: 1, seg: 28.541121, pos: 78 },
        // { note: 1, seg: 28.767878, pos: 79 },
        // { note: 1, seg: 28.994636, pos: 80 },
        // { note: 1, seg: 29.357447, pos: 81 },
        // { note: 1, seg: 29.720259, pos: 82 },
        // { note: 1, seg: 30.309828, pos: 83 },
        // { note: 1, seg: 30.445883, pos: 84 },
        // { note: 1, seg: 30.581937, pos: 85 },
        // { note: 1, seg: 30.854046, pos: 86 },
        // { note: 1, seg: 30.990100, pos: 87 },
        // { note: 1, seg: 31.126155, pos: 88 },
        // { note: 1, seg: 31.307561, pos: 89 },
        // { note: 1, seg: 31.443615, pos: 90 },
        // { note: 1, seg: 31.579670, pos: 91 },
        // { note: 1, seg: 31.806427, pos: 92 },
        // { note: 1, seg: 31.942481, pos: 93 },
        // { note: 1, seg: 32.259942, pos: 94 },
        // { note: 1, seg: 32.395996, pos: 95 },
        // { note: 1, seg: 32.532050, pos: 96 },
        // { note: 1, seg: 32.668105, pos: 97 },
        // { note: 1, seg: 32.985565, pos: 98 },
        // { note: 1, seg: 33.121620, pos: 99 },
        // { note: 1, seg: 33.348377, pos: 100 },
        // { note: 1, seg: 33.983298, pos: 101 },
        // { note: 1, seg: 34.164704, pos: 102 },
        // { note: 1, seg: 34.255406, pos: 103 },
        // { note: 1, seg: 34.482164, pos: 104 },
        // { note: 1, seg: 34.844976, pos: 105 },
        // { note: 1, seg: 34.981030, pos: 106 },
        // { note: 1, seg: 35.253139, pos: 107 },
        // { note: 1, seg: 35.479896, pos: 108 },
        // { note: 1, seg: 35.661302, pos: 109 },
        // { note: 1, seg: 35.933411, pos: 110 },
        // { note: 1, seg: 36.160168, pos: 111 },
        // { note: 1, seg: 36.341574, pos: 112 },
        // { note: 1, seg: 36.659035, pos: 113 },
        // { note: 1, seg: 36.840441, pos: 114 },
        // { note: 1, seg: 37.021846, pos: 115 },
        // { note: 1, seg: 37.702119, pos: 116 },
        // { note: 1, seg: 37.838173, pos: 117 },
        // { note: 1, seg: 37.974227, pos: 118 },
        // { note: 1, seg: 38.200985, pos: 119 },
        // { note: 1, seg: 38.518445, pos: 120 },
        // { note: 1, seg: 38.654499, pos: 121 },
        // { note: 1, seg: 38.881257, pos: 122 },
        // { note: 1, seg: 39.153366, pos: 123 },
        // { note: 1, seg: 39.380123, pos: 124 },
        // { note: 1, seg: 39.606880, pos: 125 },
        // { note: 1, seg: 39.833638, pos: 126 },
        // { note: 1, seg: 40.060395, pos: 127 },
        // { note: 1, seg: 40.377855, pos: 128 },
        // { note: 1, seg: 40.513910, pos: 129 },
        // { note: 1, seg: 40.740667, pos: 130 },
        // { note: 1, seg: 41.420939, pos: 131 },
        // { note: 1, seg: 41.556994, pos: 132 },
        // { note: 1, seg: 41.693048, pos: 133 },
        // { note: 1, seg: 41.874454, pos: 134 },
        // { note: 1, seg: 42.237266, pos: 135 },
        // { note: 1, seg: 42.373320, pos: 136 },
        // { note: 1, seg: 42.600078, pos: 137 },
        // { note: 1, seg: 42.826835, pos: 138 },
        // { note: 1, seg: 43.053592, pos: 139 },
        // { note: 1, seg: 43.280350, pos: 140 },
        // { note: 1, seg: 43.507107, pos: 141 },
        // { note: 1, seg: 43.733865, pos: 142 },
        // { note: 1, seg: 44.051325, pos: 143 },
        // { note: 1, seg: 44.187379, pos: 144 },
        // { note: 1, seg: 44.414137, pos: 145 },
        // { note: 1, seg: 45.094409, pos: 146 },
        // { note: 1, seg: 45.230463, pos: 147 },
        // { note: 1, seg: 45.366518, pos: 148 },
        // { note: 1, seg: 45.593275, pos: 149 },
        // { note: 1, seg: 45.910735, pos: 150 },
        // { note: 1, seg: 46.092141, pos: 151 },
        // { note: 1, seg: 46.318899, pos: 152 },
        // { note: 1, seg: 46.545656, pos: 153 },
        // { note: 1, seg: 46.772413, pos: 154 },
        // { note: 1, seg: 46.999171, pos: 155 },
        // { note: 1, seg: 47.225928, pos: 156 },
        // { note: 1, seg: 47.407334, pos: 157 },
        // { note: 1, seg: 47.860849, pos: 158 },
        // { note: 1, seg: 48.541121, pos: 159 },
        // { note: 1, seg: 48.813230, pos: 160 },
        // { note: 1, seg: 49.039987, pos: 161 },
        // { note: 1, seg: 49.266744, pos: 162 },
        // { note: 1, seg: 49.720259, pos: 163 },
        // { note: 1, seg: 50.400531, pos: 164 },
        // { note: 1, seg: 50.627289, pos: 165 },
        // { note: 1, seg: 50.854046, pos: 166 },
        // { note: 1, seg: 51.126155, pos: 167 },
        // { note: 1, seg: 51.579670, pos: 168 },
        // { note: 1, seg: 52.441348, pos: 169 },
        // { note: 1, seg: 52.622753, pos: 170 },
        // { note: 1, seg: 52.940214, pos: 171 },
        // { note: 1, seg: 53.348377, pos: 172 },
        // { note: 1, seg: 53.801892, pos: 173 },
        // { note: 1, seg: 54.300758, pos: 174 },
        // { note: 1, seg: 54.799624, pos: 175 },
        // { note: 1, seg: 55.253139, pos: 176 },
        // { note: 1, seg: 55.933411, pos: 177 },
        // { note: 1, seg: 56.160168, pos: 178 },
        // { note: 1, seg: 56.386926, pos: 179 },
        // { note: 1, seg: 56.659035, pos: 180 },
        // { note: 1, seg: 57.067198, pos: 181 },
        // { note: 1, seg: 57.792821, pos: 182 },
        // { note: 1, seg: 58.064930, pos: 183 },
        // { note: 1, seg: 58.246336, pos: 184 },
        // { note: 1, seg: 58.518445, pos: 185 },
        // { note: 1, seg: 58.971960, pos: 186 },
        // { note: 1, seg: 59.833638, pos: 187 },
        // { note: 1, seg: 59.969692, pos: 188 },
        // { note: 1, seg: 60.332504, pos: 189 },
        // { note: 1, seg: 60.740667, pos: 190 },
        // { note: 1, seg: 61.693048, pos: 191 },
        // { note: 1, seg: 61.829103, pos: 192 },
        // { note: 1, seg: 61.965157, pos: 193 },
        // { note: 1, seg: 62.146563, pos: 194 },
        // { note: 1, seg: 62.509375, pos: 195 },
        // { note: 1, seg: 62.645429, pos: 196 },
        // { note: 1, seg: 62.917538, pos: 197 },
        // { note: 1, seg: 63.552459, pos: 198 },
        // { note: 1, seg: 63.643162, pos: 199 },
        // { note: 1, seg: 63.824567, pos: 200 },
        // { note: 1, seg: 64.051325, pos: 201 },
        // { note: 1, seg: 64.368785, pos: 202 },
        // { note: 1, seg: 64.550191, pos: 203 },
        // { note: 1, seg: 64.776948, pos: 204 },
        // { note: 1, seg: 65.049057, pos: 205 },
        // { note: 1, seg: 65.230463, pos: 206 },
        // { note: 1, seg: 65.457221, pos: 207 },
        // { note: 1, seg: 65.683978, pos: 208 },
        // { note: 1, seg: 65.910735, pos: 209 },
        // { note: 1, seg: 66.228196, pos: 210 },
        // { note: 1, seg: 66.364250, pos: 211 },
        // { note: 1, seg: 66.591007, pos: 212 },
        // { note: 1, seg: 67.225928, pos: 213 },
        // { note: 1, seg: 67.407334, pos: 214 },
        // { note: 1, seg: 67.498037, pos: 215 },
        // { note: 1, seg: 67.724794, pos: 216 },
        // { note: 1, seg: 68.087606, pos: 217 },
        // { note: 1, seg: 68.223660, pos: 218 },
        // { note: 1, seg: 68.450418, pos: 219 },
        // { note: 1, seg: 68.677175, pos: 220 },
        // { note: 1, seg: 68.903933, pos: 221 },
        // { note: 1, seg: 69.130690, pos: 222 },
        // { note: 1, seg: 69.357447, pos: 223 },
        // { note: 1, seg: 69.584205, pos: 224 },
        // { note: 1, seg: 69.947016, pos: 225 },
        // { note: 1, seg: 70.083071, pos: 226 },
        // { note: 1, seg: 70.309828, pos: 227 },
        // { note: 1, seg: 70.990100, pos: 228 },
        // { note: 1, seg: 71.126155, pos: 229 },
        // { note: 1, seg: 71.216858, pos: 230 },
        // { note: 1, seg: 71.443615, pos: 231 },
        // { note: 1, seg: 71.761075, pos: 232 },
        // { note: 1, seg: 71.897130, pos: 233 },
        // { note: 1, seg: 72.123887, pos: 234 },
        // { note: 1, seg: 72.350645, pos: 235 },
        // { note: 1, seg: 72.622753, pos: 236 },
        // { note: 1, seg: 72.849511, pos: 237 },
        // { note: 1, seg: 73.030917, pos: 238 },
        // { note: 1, seg: 73.257674, pos: 239 },
        // { note: 1, seg: 73.620486, pos: 240 },
        // { note: 1, seg: 73.756540, pos: 241 },
        // { note: 1, seg: 73.983298, pos: 242 },
        // { note: 1, seg: 74.705410, pos: 243 },
        // { note: 1, seg: 74.841464, pos: 244 },
        // { note: 1, seg: 74.932167, pos: 245 },
        // { note: 1, seg: 75.158925, pos: 246 },
        // { note: 1, seg: 75.249628, pos: 247 },
        // { note: 1, seg: 75.385682, pos: 248 },
        // { note: 1, seg: 75.567088, pos: 249 },
        // { note: 1, seg: 75.703142, pos: 250 },
        // { note: 1, seg: 75.839197, pos: 251 },
        // { note: 1, seg: 76.065954, pos: 252 },
        // { note: 1, seg: 76.202009, pos: 253 },
        // { note: 1, seg: 76.292712, pos: 254 },
        // { note: 1, seg: 76.519469, pos: 255 },
        // { note: 1, seg: 76.655523, pos: 256 },
        // { note: 1, seg: 76.746226, pos: 257 },
        // { note: 1, seg: 77.021846, pos: 258 },
        // { note: 1, seg: 77.339307, pos: 259 },
        // { note: 1, seg: 78.019579, pos: 260 },
        // { note: 1, seg: 78.291688, pos: 261 },
        // { note: 1, seg: 78.518445, pos: 262 },
        // { note: 1, seg: 78.745202, pos: 263 },
        // { note: 1, seg: 79.198717, pos: 264 },
        // { note: 1, seg: 79.969692, pos: 265 },
        // { note: 1, seg: 80.196450, pos: 266 },
        // { note: 1, seg: 80.468558, pos: 267 },
        // { note: 1, seg: 80.695316, pos: 268 },
        // { note: 1, seg: 81.103479, pos: 269 },
        // { note: 1, seg: 82.010509, pos: 270 },
        // { note: 1, seg: 82.191914, pos: 271 },
        // { note: 1, seg: 82.509375, pos: 272 },
        // { note: 1, seg: 82.917538, pos: 273 },
        // { note: 1, seg: 84.278082, pos: 274 },
        // { note: 1, seg: 84.776948, pos: 275 },
        // { note: 1, seg: 85.502572, pos: 276 },
        // { note: 1, seg: 85.729329, pos: 277 },
        // { note: 1, seg: 85.956087, pos: 278 },
        // { note: 1, seg: 86.137493, pos: 279 },
        // { note: 1, seg: 86.591007, pos: 280 },
        // { note: 1, seg: 87.316631, pos: 281 },
        // { note: 1, seg: 87.543388, pos: 282 },
        // { note: 1, seg: 87.770146, pos: 283 },
        // { note: 1, seg: 87.996903, pos: 284 },
        // { note: 1, seg: 88.405066, pos: 285 },
        // { note: 1, seg: 89.312096, pos: 286 },
        // { note: 1, seg: 89.493502, pos: 287 },
        // { note: 1, seg: 89.856314, pos: 288 },
        // { note: 1, seg: 90.219125, pos: 289 },
        // { note: 1, seg: 91.216858, pos: 290 },
        // { note: 1, seg: 91.352912, pos: 291 },
        // { note: 1, seg: 91.670372, pos: 292 },
        // { note: 1, seg: 92.078536, pos: 293 },
        // { note: 1, seg: 93.030917, pos: 294 },
        // { note: 1, seg: 93.212323, pos: 295 },
        // { note: 1, seg: 93.529783, pos: 296 },
        // { note: 1, seg: 93.983298, pos: 297 },
        // { note: 1, seg: 94.890327, pos: 298 },
        // { note: 1, seg: 95.026382, pos: 299 },
        // { note: 1, seg: 95.389193, pos: 300 },
        // { note: 1, seg: 95.842708, pos: 301 },
        // { note: 1, seg: 96.795089, pos: 302 },
        // { note: 1, seg: 96.976495, pos: 303 },
        // { note: 1, seg: 97.248604, pos: 304 },
        // { note: 1, seg: 97.656767, pos: 305 },
        // { note: 1, seg: 98.699851, pos: 306 },
        // { note: 1, seg: 98.835905, pos: 307 },
        // { note: 1, seg: 98.971960, pos: 308 },
        // { note: 1, seg: 99.244069, pos: 309 },
        // { note: 1, seg: 99.334772, pos: 310 },
        // { note: 1, seg: 99.470826, pos: 311 },
        // { note: 1, seg: 99.652232, pos: 312 },
        // { note: 1, seg: 99.742935, pos: 313 },
        // { note: 1, seg: 99.878989, pos: 314 },
        // { note: 1, seg: 100.060395, pos: 315 },
        // { note: 1, seg: 100.196450, pos: 316 },
        // { note: 1, seg: 100.332504, pos: 317 },
        // { note: 1, seg: 100.513910, pos: 318 },
        // { note: 1, seg: 100.649964, pos: 319 },
        // { note: 1, seg: 100.786019, pos: 320 },
        // { note: 1, seg: 100.967425, pos: 321 },
        // { note: 1, seg: 101.103479, pos: 322 },
        // { note: 1, seg: 101.194182, pos: 323 },
        // { note: 1, seg: 101.420939, pos: 324 },
        // { note: 1, seg: 101.511642, pos: 325 },
        // { note: 1, seg: 101.647697, pos: 326 },
        // { note: 1, seg: 101.919806, pos: 327 },
        // { note: 1, seg: 102.055860, pos: 328 },
        // { note: 1, seg: 102.146563, pos: 329 },
        // { note: 1, seg: 102.373320, pos: 330 },
        // { note: 1, seg: 102.464023, pos: 331 },
        // { note: 1, seg: 102.600078, pos: 332 },
        // { note: 1, seg: 102.826835, pos: 333 },
        // { note: 1, seg: 102.962889, pos: 334 },
        // { note: 1, seg: 103.098944, pos: 335 },
        // { note: 1, seg: 103.280350, pos: 336 },
        // { note: 1, seg: 103.507107, pos: 337 },
        // { note: 1, seg: 103.688513, pos: 338 },
        // { note: 1, seg: 103.960622, pos: 339 },
        // { note: 1, seg: 104.187379, pos: 340 },
        // { note: 1, seg: 104.414137, pos: 341 },
        // { note: 1, seg: 104.640894, pos: 342 },
        // { note: 1, seg: 104.822300, pos: 343 },
        // { note: 1, seg: 105.049057, pos: 344 },
        // { note: 1, seg: 105.275815, pos: 345 },
        // { note: 1, seg: 105.502572, pos: 346 },
        // { note: 1, seg: 105.729329, pos: 347 },
        // { note: 1, seg: 105.956087, pos: 348 },
        // { note: 1, seg: 106.228196, pos: 349 },
        // { note: 1, seg: 106.566291, pos: 350 },
        // { note: 1, seg: 106.929102, pos: 351 },
        // { note: 1, seg: 107.246563, pos: 352 },
        // { note: 1, seg: 107.836132, pos: 353 },
        // { note: 1, seg: 108.017538, pos: 354 },
        // { note: 1, seg: 108.108241, pos: 355 },
        // { note: 1, seg: 108.334998, pos: 356 },
        // { note: 1, seg: 108.652458, pos: 357 },
        // { note: 1, seg: 108.788513, pos: 358 },
        // { note: 1, seg: 109.015270, pos: 359 },
        // { note: 1, seg: 109.287379, pos: 360 },
        // { note: 1, seg: 109.468785, pos: 361 },
        // { note: 1, seg: 109.740894, pos: 362 },
        // { note: 1, seg: 109.922300, pos: 363 },
        // { note: 1, seg: 110.194408, pos: 364 },
        // { note: 1, seg: 110.511869, pos: 365 },
        // { note: 1, seg: 110.647923, pos: 366 },
        // { note: 1, seg: 110.874681, pos: 367 },
        // { note: 1, seg: 111.554953, pos: 368 },
        // { note: 1, seg: 111.691007, pos: 369 },
        // { note: 1, seg: 111.827062, pos: 370 },
        // { note: 1, seg: 112.053819, pos: 371 },
        // { note: 1, seg: 112.416631, pos: 372 },
        // { note: 1, seg: 112.552685, pos: 373 },
        // { note: 1, seg: 112.779442, pos: 374 },
        // { note: 1, seg: 113.006200, pos: 375 },
        // { note: 1, seg: 113.232957, pos: 376 },
        // { note: 1, seg: 113.459715, pos: 377 },
        // { note: 1, seg: 113.686472, pos: 378 },
        // { note: 1, seg: 113.913229, pos: 379 },
        // { note: 1, seg: 114.230690, pos: 380 },
        // { note: 1, seg: 114.366744, pos: 381 },
        // { note: 1, seg: 114.593501, pos: 382 },
        // { note: 1, seg: 115.228422, pos: 383 },
        // { note: 1, seg: 115.364476, pos: 384 },
        // { note: 1, seg: 115.500531, pos: 385 },
        // { note: 1, seg: 115.772640, pos: 386 },
        // { note: 1, seg: 116.135452, pos: 387 },
        // { note: 1, seg: 116.226154, pos: 388 },
        // { note: 1, seg: 116.452912, pos: 389 },
        // { note: 1, seg: 116.725021, pos: 390 },
        // { note: 1, seg: 116.906427, pos: 391 },
        // { note: 1, seg: 117.133184, pos: 392 },
        // { note: 1, seg: 117.359941, pos: 393 },
        // { note: 1, seg: 117.586699, pos: 394 },
        // { note: 1, seg: 117.949510, pos: 395 },
        // { note: 1, seg: 118.085565, pos: 396 },
        // { note: 1, seg: 118.312322, pos: 397 },
        // { note: 1, seg: 118.947243, pos: 398 },
        // { note: 1, seg: 119.083297, pos: 399 },
        // { note: 1, seg: 119.219352, pos: 400 },
        // { note: 1, seg: 119.446109, pos: 401 },
        // { note: 1, seg: 119.763569, pos: 402 },
        // { note: 1, seg: 119.944975, pos: 403 },
        // { note: 1, seg: 120.126381, pos: 404 },
        // { note: 1, seg: 120.353139, pos: 405 },
        // { note: 1, seg: 120.579896, pos: 406 },
        // { note: 1, seg: 120.806653, pos: 407 },
        // { note: 1, seg: 121.078762, pos: 408 },
        // { note: 1, seg: 121.305520, pos: 409 },
        // { note: 1, seg: 121.759034, pos: 410 },
        // { note: 1, seg: 121.985792, pos: 411 },
        // { note: 1, seg: 122.484658, pos: 412 },
        // { note: 1, seg: 122.711415, pos: 413 },
        // { note: 1, seg: 122.938173, pos: 414 },
        // { note: 1, seg: 123.164930, pos: 415 },
        // { note: 1, seg: 123.573093, pos: 416 },
        // { note: 1, seg: 124.253365, pos: 417 },
        // { note: 1, seg: 124.434771, pos: 418 },
        // { note: 1, seg: 124.706880, pos: 419 },
        // { note: 1, seg: 124.978989, pos: 420 },
        // { note: 1, seg: 125.387152, pos: 421 },
        // { note: 1, seg: 126.248830, pos: 422 },
        // { note: 1, seg: 126.384885, pos: 423 },
        // { note: 1, seg: 126.747696, pos: 424 },
        // { note: 1, seg: 127.201211, pos: 425 },
        // { note: 1, seg: 127.700077, pos: 426 },
        // { note: 1, seg: 128.153592, pos: 427 },
        // { note: 1, seg: 128.652458, pos: 428 },
        // { note: 1, seg: 129.105973, pos: 429 },
        // { note: 1, seg: 129.786245, pos: 430 },
        // { note: 1, seg: 130.058354, pos: 431 },
        // { note: 1, seg: 130.239760, pos: 432 },
        // { note: 1, seg: 130.466517, pos: 433 },
        // { note: 1, seg: 130.920032, pos: 434 },
        // { note: 1, seg: 131.645656, pos: 435 },
        // { note: 1, seg: 131.917764, pos: 436 },
        // { note: 1, seg: 132.099170, pos: 437 },
        // { note: 1, seg: 132.371279, pos: 438 },
        // { note: 1, seg: 132.824794, pos: 439 },
        // { note: 1, seg: 133.641120, pos: 440 },
        // { note: 1, seg: 133.777175, pos: 441 },
        // { note: 1, seg: 134.094635, pos: 442 },
        // { note: 1, seg: 134.502798, pos: 443 },
        // { note: 1, seg: 135.999397, pos: 444 },
        // { note: 1, seg: 136.498263, pos: 445 },
        // { note: 1, seg: 136.770372, pos: 446 },
        // { note: 1, seg: 137.359941, pos: 447 },
        // { note: 1, seg: 137.541347, pos: 448 },
        // { note: 1, seg: 137.677402, pos: 449 },
        // { note: 1, seg: 137.949510, pos: 450 },
        // { note: 1, seg: 138.266971, pos: 451 },
        // { note: 1, seg: 138.403025, pos: 452 },
        // { note: 1, seg: 138.629783, pos: 453 },
        // { note: 1, seg: 138.856540, pos: 454 },
        // { note: 1, seg: 139.083297, pos: 455 },
        // { note: 1, seg: 139.264703, pos: 456 },
        // { note: 1, seg: 139.536812, pos: 457 },
        // { note: 1, seg: 139.763569, pos: 458 },
        // { note: 1, seg: 140.081030, pos: 459 },
        // { note: 1, seg: 140.217084, pos: 460 },
        // { note: 1, seg: 140.443842, pos: 461 },
        // { note: 1, seg: 141.078762, pos: 462 },
        // { note: 1, seg: 141.214817, pos: 463 },
        // { note: 1, seg: 141.350871, pos: 464 },
        // { note: 1, seg: 141.622980, pos: 465 },
        // { note: 1, seg: 141.985792, pos: 466 },
        // { note: 1, seg: 142.348603, pos: 467 },
        // { note: 1, seg: 142.575361, pos: 468 },
        // { note: 1, seg: 142.666064, pos: 469 },
        // { note: 1, seg: 142.802118, pos: 470 },
        // { note: 1, seg: 142.983524, pos: 471 },
        // { note: 1, seg: 143.119579, pos: 472 },
        // { note: 1, seg: 143.255633, pos: 473 }
    ];
    initPositions = [];
    positions = [];
    notes = [];
    width;
    height;
    leftFret;
    middleFret;
    rightFret
    flame;

    constructor ()
    {
        super('Game');
    }

    create(){
        this.add.image((this.width/2), (this.height/2), 'bg');
        this.add.image((this.width/2), (this.height/2), 'neck');

        this.leftFret = this.physics.add.sprite(this.positions[0], (this.height - 100), 'fret')
                        .setSize(200, 120, true)
                        .setImmovable(true)
                        .setInteractive();

        this.middleFret = this.physics.add.sprite(this.positions[1], (this.height - 100), 'fret')
                        .setSize(200, 120, true)
                        .setImmovable(true)
                        .setInteractive();

        this.rightFret = this.physics.add.sprite(this.positions[2], (this.height - 100), 'fret')
                        .setSize(200, 120, true)
                        .setImmovable(true)
                        .setInteractive();

        this.flame = this.add.sprite(((this.width/2) - 226), ((this.height/2) + 400), 'hit');    
        this.flame.alpha = 0;

        // Touhchpoints
        this.leftFret.on('pointerdown', () => {
            console.log('Left Fret');
            mContext.notes.forEach(note => {
                if (note.getBounds().contains(mContext.leftFret.x, mContext.leftFret.y)) {
                    mContext.deleteNote(note);
                    this.playFlame(0);
                }
            });
        });

        this.middleFret.on('pointerdown', () => {
            console.log('Middle Fret');
            mContext.notes.forEach(note => {
                if (note.getBounds().contains(mContext.middleFret.x, mContext.middleFret.y)) {
                    mContext.deleteNote(note);
                    this.playFlame(1);
                }
            });
        });

        this.rightFret.on('pointerdown', () => {
            console.log('Right Fret');
            mContext.notes.forEach(note => {
                if (note.getBounds().contains(mContext.rightFret.x, mContext.rightFret.y)) {
                    mContext.deleteNote(note);
                    this.playFlame(2);
                }
            });
        });

        // Scanner
        this.input.keyboard.on('keydown', key => {
            if (key.code === 'KeyA') {
                console.log('A');                
                mContext.notes.forEach(note => {
                    if (note.getBounds().contains(mContext.leftFret.x, mContext.leftFret.y)) {
                        mContext.deleteNote(note);
                        this.playFlame(0);
                    }
                });
            }

            if (key.code === 'KeyS') {
                console.log('S');
                mContext.notes.forEach(note => {
                    if (note.getBounds().contains(mContext.middleFret.x, mContext.middleFret.y)) {
                        mContext.deleteNote(note);
                        this.playFlame(1);
                    }
                });
            }

            if (key.code === 'KeyD') {
                console.log('D');
                mContext.notes.forEach(note => {
                    if (note.getBounds().contains(mContext.rightFret.x, mContext.rightFret.y)) {
                        mContext.deleteNote(note);
                        this.playFlame(2);
                    }
                });
            }
        })

        window.videoState = function(event) {
            console.log('Video started');
            console.log(event.data);

            /**
             * Indica la posicion en donde se debe crear la nota para que caiga en los segundos esperados
             * -(((elem.seg + mContext.initAvg) * mContext.velocity) - mContext.tabLength)
            */
            mContext.tab.forEach((elem) => {
                let note = mContext.physics.add.sprite(
                    (mContext.initPositions[elem.pos]),  // X
                    (-(((elem.seg + mContext.initAvg) * mContext.velocity) - mContext.tabLength)), // Y
                    'notes');
                note.setScale(0.1);
                note.setVelocityY(mContext.velocity);        
                mContext.tweens.add({
                    targets: note,
                    x: mContext.positions[elem.pos],
                    scale: 1,
                    ease: 'Linear',
                    duration: (elem.seg * 1000),
                    repeat: 0,
                    yoyo: false,
                });
                mContext.notes.push(note);
            });
        }

        window.gameStarted = function() {
            console.log('Game started');            
        }
    }

    update(){
        
    }

    init(){     
        mContext = this; 
        this.height = this.sys.game.config.height;
        this.width = this.sys.game.config.width;
        this.positions = [((this.width/2) - 226), (this.width/2), ((this.width/2) + 226)];
        this.initPositions = [((this.width/2) - 67), ((this.width/2) + 2), ((this.width/2) + 89)];
        
        // Animations
        this.anims.create({
            key: 'hit',
            frames: this.anims.generateFrameNumbers('hit', { start: 0, end: 5 }),
            frameRate: 25,
            repeat: 0
        });
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    deleteNote(note){
        mContext.notes.splice(mContext.notes.indexOf(note), 1);
        note.destroy();
    } 
    
    playFlame(posX){
        this.flame.x = this.positions[posX];
        this.flame.alpha = 1;
        this.flame.anims.play('hit', false);

        this.flame.on('animationcomplete', () => {
            this.flame.alpha = 0;
        });
    }

    noteTripAnim(note){

    }
}
