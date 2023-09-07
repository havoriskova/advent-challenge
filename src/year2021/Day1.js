
function Day1() {

  //input from the Advent of Code page:
  const inputDay1 = '131\n140\n136\n135\n155\n175\n178\n186\n187\n189\n194\n195\n203\n193\n178\n179\n180\n188\n204\n214\n215\n252\n253\n261\n281\n294\n293\n299\n300\n301\n307\n333\n324\n322\n323\n335\n319\n312\n313\n312\n320\n323\n324\n336\n341\n347\n357\n358\n363\n357\n334\n348\n364\n365\n367\n370\n369\n373\n344\n328\n330\n327\n339\n340\n341\n335\n342\n347\n349\n355\n348\n359\n360\n341\n342\n322\n321\n324\n323\n322\n324\n327\n340\n341\n353\n383\n387\n391\n422\n424\n422\n426\n429\n427\n428\n445\n421\n423\n429\n414\n411\n407\n409\n402\n422\n425\n423\n427\n424\n430\n428\n432\n433\n434\n429\n430\n406\n407\n411\n420\n412\n419\n422\n424\n425\n426\n428\n430\n432\n431\n432\n433\n449\n450\n453\n457\n459\n462\n482\n470\n471\n488\n495\n496\n499\n503\n516\n526\n531\n532\n541\n555\n554\n567\n558\n557\n560\n561\n566\n580\n581\n582\n594\n595\n598\n599\n582\n589\n593\n589\n592\n593\n590\n606\n615\n623\n627\n628\n630\n636\n641\n657\n658\n693\n695\n698\n707\n713\n714\n720\n721\n723\n721\n720\n707\n679\n699\n676\n667\n663\n664\n666\n660\n663\n673\n677\n662\n660\n663\n683\n681\n674\n689\n698\n699\n704\n705\n696\n697\n702\n693\n694\n700\n699\n681\n684\n690\n669\n673\n688\n691\n692\n691\n688\n685\n656\n638\n634\n651\n665\n670\n672\n685\n689\n709\n711\n714\n715\n735\n734\n738\n737\n738\n744\n765\n769\n776\n809\n819\n812\n814\n821\n794\n793\n796\n794\n815\n827\n831\n834\n840\n850\n846\n849\n842\n847\n846\n849\n850\n857\n885\n887\n888\n887\n883\n894\n895\n913\n917\n913\n915\n917\n918\n920\n929\n959\n961\n958\n954\n956\n962\n966\n959\n966\n967\n969\n972\n978\n993\n998\n1006\n1007\n1010\n1011\n1015\n1037\n1047\n1051\n1029\n1050\n1052\n1054\n1033\n1040\n1036\n1021\n1031\n1033\n1058\n1070\n1066\n1064\n1052\n1051\n1057\n1058\n1059\n1060\n1071\n1080\n1081\n1083\n1086\n1075\n1083\n1092\n1095\n1101\n1113\n1078\n1080\n1075\n1077\n1080\n1083\n1090\n1092\n1091\n1092\n1093\n1097\n1099\n1103\n1104\n1105\n1109\n1084\n1101\n1103\n1109\n1101\n1099\n1096\n1099\n1103\n1104\n1105\n1119\n1123\n1095\n1096\n1095\n1132\n1149\n1164\n1165\n1182\n1180\n1198\n1207\n1210\n1213\n1218\n1239\n1235\n1236\n1242\n1243\n1276\n1279\n1282\n1283\n1299\n1301\n1294\n1298\n1304\n1301\n1303\n1313\n1312\n1316\n1317\n1319\n1320\n1315\n1318\n1326\n1330\n1332\n1331\n1334\n1319\n1316\n1308\n1306\n1309\n1312\n1310\n1329\n1318\n1321\n1335\n1310\n1311\n1313\n1329\n1331\n1335\n1341\n1355\n1356\n1357\n1360\n1378\n1373\n1374\n1373\n1377\n1378\n1383\n1379\n1380\n1376\n1370\n1369\n1380\n1381\n1382\n1381\n1383\n1377\n1401\n1403\n1408\n1417\n1406\n1407\n1409\n1411\n1414\n1420\n1419\n1426\n1456\n1452\n1453\n1454\n1453\n1450\n1442\n1430\n1434\n1435\n1439\n1440\n1441\n1442\n1463\n1464\n1471\n1469\n1471\n1472\n1433\n1436\n1434\n1440\n1446\n1447\n1452\n1454\n1441\n1434\n1420\n1404\n1396\n1412\n1423\n1424\n1437\n1450\n1452\n1457\n1458\n1422\n1423\n1433\n1436\n1453\n1484\n1485\n1460\n1457\n1458\n1464\n1465\n1467\n1468\n1475\n1476\n1471\n1470\n1471\n1473\n1470\n1473\n1474\n1490\n1482\n1484\n1508\n1515\n1522\n1521\n1514\n1518\n1520\n1522\n1530\n1528\n1523\n1535\n1537\n1539\n1541\n1533\n1528\n1531\n1538\n1539\n1541\n1547\n1551\n1550\n1545\n1546\n1548\n1551\n1566\n1577\n1586\n1587\n1588\n1613\n1615\n1631\n1638\n1639\n1640\n1645\n1648\n1642\n1640\n1643\n1673\n1679\n1669\n1673\n1666\n1669\n1674\n1682\n1683\n1700\n1698\n1709\n1717\n1729\n1743\n1745\n1746\n1744\n1714\n1722\n1727\n1734\n1735\n1745\n1752\n1751\n1772\n1788\n1794\n1798\n1804\n1798\n1793\n1796\n1806\n1809\n1815\n1816\n1815\n1813\n1812\n1817\n1818\n1821\n1825\n1821\n1853\n1827\n1822\n1825\n1834\n1833\n1830\n1836\n1837\n1838\n1840\n1841\n1846\n1841\n1842\n1845\n1862\n1863\n1896\n1898\n1884\n1885\n1893\n1892\n1895\n1896\n1894\n1903\n1902\n1907\n1915\n1919\n1922\n1923\n1921\n1924\n1925\n1927\n1931\n1932\n1939\n1940\n1939\n1959\n1965\n1975\n1973\n1974\n1982\n1983\n1988\n1992\n1995\n1994\n1995\n1994\n2000\n2001\n2029\n2030\n2005\n2006\n2009\n2013\n2017\n2014\n2041\n2042\n2052\n2047\n2048\n2052\n2051\n2053\n2052\n2069\n2058\n2059\n2060\n2061\n2063\n2062\n2065\n2066\n2070\n2072\n2075\n2061\n2038\n2037\n2024\n2022\n2023\n2011\n2032\n2037\n2026\n2027\n2028\n2034\n2038\n2039\n2029\n2042\n2031\n2033\n2046\n2048\n2041\n2049\n2050\n2052\n2063\n2064\n2065\n2067\n2086\n2070\n2078\n2087\n2086\n2089\n2075\n2076\n2101\n2103\n2115\n2095\n2109\n2112\n2115\n2126\n2152\n2129\n2132\n2117\n2116\n2119\n2128\n2127\n2139\n2140\n2141\n2145\n2146\n2125\n2136\n2132\n2121\n2125\n2126\n2134\n2135\n2142\n2148\n2149\n2133\n2137\n2156\n2160\n2161\n2162\n2164\n2176\n2177\n2179\n2183\n2184\n2186\n2187\n2190\n2195\n2216\n2210\n2209\n2206\n2214\n2211\n2216\n2223\n2224\n2225\n2230\n2242\n2246\n2248\n2268\n2272\n2273\n2278\n2279\n2280\n2281\n2275\n2276\n2282\n2283\n2278\n2285\n2288\n2289\n2286\n2290\n2285\n2291\n2294\n2287\n2293\n2315\n2314\n2315\n2325\n2323\n2328\n2308\n2312\n2322\n2361\n2364\n2366\n2364\n2369\n2368\n2384\n2387\n2390\n2396\n2370\n2371\n2377\n2378\n2377\n2379\n2395\n2384\n2381\n2395\n2401\n2412\n2411\n2412\n2414\n2420\n2422\n2408\n2425\n2427\n2428\n2438\n2442\n2445\n2456\n2462\n2461\n2469\n2467\n2472\n2471\n2469\n2449\n2448\n2442\n2459\n2460\n2474\n2477\n2478\n2480\n2483\n2468\n2444\n2442\n2444\n2460\n2456\n2445\n2437\n2430\n2432\n2457\n2463\n2467\n2474\n2477\n2475\n2478\n2477\n2478\n2480\n2485\n2471\n2495\n2509\n2514\n2522\n2523\n2533\n2515\n2518\n2539\n2535\n2543\n2580\n2586\n2601\n2602\n2600\n2602\n2598\n2597\n2598\n2605\n2597\n2596\n2600\n2602\n2599\n2605\n2613\n2614\n2611\n2603\n2602\n2601\n2607\n2608\n2606\n2598\n2599\n2602\n2597\n2605\n2611\n2612\n2613\n2645\n2657\n2662\n2668\n2669\n2652\n2655\n2661\n2663\n2662\n2664\n2677\n2695\n2702\n2738\n2739\n2738\n2740\n2728\n2720\n2714\n2720\n2712\n2724\n2725\n2736\n2745\n2742\n2747\n2749\n2744\n2746\n2750\n2753\n2759\n2760\n2761\n2731\n2733\n2735\n2736\n2737\n2741\n2739\n2740\n2744\n2745\n2755\n2744\n2746\n2748\n2752\n2750\n2755\n2736\n2740\n2742\n2753\n2752\n2755\n2780\n2781\n2783\n2786\n2788\n2786\n2796\n2790\n2789\n2798\n2816\n2817\n2815\n2817\n2819\n2820\n2825\n2823\n2827\n2853\n2856\n2861\n2862\n2854\n2873\n2887\n2884\n2888\n2884\n2885\n2893\n2902\n2901\n2902\n2904\n2908\n2909\n2911\n2914\n2929\n2931\n2935\n2934\n2935\n2934\n2917\n2918\n2921\n2926\n2932\n2937\n2947\n2928\n2946\n2971\n2973\n2972\n2969\n2972\n2973\n2978\n2977\n2968\n2961\n2962\n2982\n2987\n2989\n2990\n2993\n2995\n2987\n2991\n2992\n3002\n3003\n3004\n3005\n3011\n3012\n3031\n3029\n3036\n3041\n3069\n3070\n3087\n3077\n3090\n3087\n3066\n3078\n3080\n3081\n3071\n3074\n3075\n3074\n3069\n3070\n3078\n3086\n3080\n3086\n3088\n3096\n3098\n3103\n3117\n3114\n3143\n3148\n3149\n3150\n3149\n3151\n3165\n3169\n3172\n3183\n3184\n3185\n3190\n3204\n3218\n3230\n3231\n3248\n3249\n3252\n3249\n3246\n3268\n3273\n3274\n3277\n3289\n3257\n3269\n3279\n3267\n3284\n3312\n3315\n3314\n3317\n3310\n3315\n3314\n3304\n3305\n3308\n3322\n3326\n3331\n3336\n3339\n3345\n3348\n3349\n3348\n3350\n3348\n3350\n3362\n3363\n3373\n3368\n3349\n3347\n3344\n3362\n3364\n3365\n3374\n3380\n3390\n3387\n3389\n3391\n3392\n3390\n3388\n3389\n3395\n3415\n3416\n3414\n3415\n3416\n3417\n3420\n3418\n3422\n3421\n3428\n3421\n3422\n3424\n3421\n3422\n3419\n3416\n3392\n3396\n3408\n3399\n3400\n3403\n3392\n3398\n3393\n3415\n3436\n3458\n3459\n3467\n3469\n3472\n3480\n3489\n3491\n3490\n3521\n3518\n3517\n3518\n3502\n3510\n3505\n3506\n3508\n3509\n3510\n3506\n3504\n3505\n3522\n3525\n3531\n3524\n3522\n3517\n3523\n3526\n3512\n3516\n3521\n3535\n3544\n3539\n3514\n3519\n3525\n3523\n3530\n3529\n3534\n3526\n3523\n3525\n3522\n3509\n3510\n3523\n3522\n3516\n3518\n3522\n3539\n3540\n3546\n3551\n3556\n3566\n3545\n3573\n3574\n3576\n3581\n3582\n3602\n3604\n3606\n3590\n3596\n3598\n3599\n3607\n3573\n3592\n3599\n3607\n3609\n3617\n3621\n3606\n3602\n3599\n3609\n3602\n3598\n3607\n3612\n3613\n3630\n3632\n3634\n3636\n3642\n3651\n3655\n3662\n3687\n3688\n3689\n3684\n3664\n3663\n3667\n3645\n3647\n3649\n3660\n3673\n3665\n3663\n3633\n3656\n3658\n3669\n3672\n3673\n3675\n3683\n3684\n3685\n3683\n3687\n3699\n3703\n3707\n3717\n3749\n3763\n3767\n3771\n3774\n3790\n3801\n3808\n3813\n3814\n3819\n3835\n3834\n3835\n3836\n3837\n3836\n3837\n3839\n3844\n3845\n3831\n3830\n3828\n3829\n3830\n3846\n3844\n3825\n3811\n3806\n3809\n3807\n3826\n3836\n3847\n3848\n3849\n3850\n3863\n3869\n3868\n3869\n3870\n3871\n3867\n3868\n3872\n3871\n3874\n3875\n3874\n3876\n3879\n3884\n3901\n3904\n3901\n3915\n3905\n3904\n3889\n3914\n3917\n3931\n3932\n3930\n3932\n3937\n3943\n3939\n3941\n3943\n3930\n3929\n3945\n3954\n3972\n3996\n3997\n4000\n4001\n3995\n4025\n4027\n4034\n4035\n4050\n4074\n4071\n4077\n4078\n4085\n4087\n4088\n4091\n4090\n4091\n4092\n4089\n4091\n4096\n4094\n4095\n4107\n4109\n4130\n4131\n4124\n4136\n4139\n4153\n4161\n4173\n4149\n4154\n4148\n4150\n4128\n4160\n4164\n4168\n4169\n4158\n4165\n4174\n4171\n4195\n4200\n4201\n4195\n4198\n4201\n4202\n4196\n4203\n4211\n4209\n4210\n4217\n4220\n4203\n4193\n4194\n4197\n4193\n4195\n4196\n4195\n4197\n4218\n4222\n4236\n4223\n4225\n4242\n4262\n4265\n4256\n4260\n4270\n4271\n4276\n4272\n4275\n4297\n4304\n4297\n4299\n4302\n4303\n4301\n4306\n4337\n4341\n4342\n4343\n4345\n4346\n4351\n4350\n4338\n4331\n4337\n4331\n4345\n4309\n4311\n4327\n4328\n4335\n4360\n4362\n4364\n4360\n4357\n4359\n4367\n4368\n4352\n4351\n4347\n4360\n4356\n4357\n4362\n4363\n4357\n4362\n4367\n4385\n4388\n4392\n4395\n4397\n4398\n4387\n4395\n4399\n4402\n4403\n4424\n4434\n4443\n4444\n4445\n4456\n4457\n4466\n4470\n4469\n4470\n4471\n4505\n4499\n4500\n4476\n4483\n4475\n4476\n4486\n4496\n4495\n4504\n4503\n4516\n4518\n4517\n4525\n4527\n4530\n4532\n4533\n4535\n4537\n4541\n4544\n4546\n4549\n4551\n4552\n4555\n4556\n4563\n4580\n4583\n4600\n4589\n4581\n4585\n4583\n4585\n4592\n4585\n4595\n4605\n4598\n4601\n4600\n4603\n4598\n4628\n4630\n4626\n4630\n4632\n4631\n4632\n4619\n4633\n4643\n4630\n4640\n4660\n4671\n4675\n4682\n4697\n4695\n4700\n4704\n4705\n4710\n4721\n4727\n4732\n4728\n4729\n4735\n4743\n4744\n4754\n4760\n4766\n4758\n4762\n4760\n4763\n4782\n4786\n4787\n4789\n4801\n4804\n4782\n4752\n4755\n4757\n4758\n4757\n4766\n4778\n4779\n4769\n4781\n4777\n4785\n4786\n4788\n4796\n4795\n4796\n4797\n4805\n4804\n4814\n4812\n4815\n4806\n4805\n4807\n4805\n4806\n4807\n4810\n4845\n4846\n4855\n4853\n4859\n4862\n4867\n4873\n4879\n4881\n4880\n4883\n4880\n4886\n4892\n4898\n4903\n4902\n4905\n4909\n4914\n4915\n4917\n4939\n4941\n4933\n4932\n4940\n4945\n4961\n4966\n4955\n4960\n4979\n4980\n4981\n4970\n4968\n4970\n4989\n4996\n5003\n4983\n4984\n5006\n5014\n5018\n5023\n5042\n5043\n5050\n5051\n5076\n5052\n5055\n5068\n5059\n5058\n5035\n5059\n5060\n5061\n5068\n5044\n5043\n5044\n5045\n5047\n5048\n5051\n5044\n5045\n5049\n5072\n5080\n5078\n5101\n5100\n5092\n5112\n5111\n5107\n5113\n5116\n5123\n5129\n5127\n5151\n5176\n5188\n5189\n5202\n5204\n5197\n5199\n5196\n5201\n5200\n5203\n5207\n5209\n5217\n5218\n5204\n5206\n5207\n5208\n5195\n5201\n5202\n5199\n5229\n5228\n5229\n5233\n5232\n5227\n5228\n5229\n5238\n5236\n5238\n5243\n5245\n5244\n5245\n5230\n5244\n5258\n5259\n5268\n5271\n5274\n5271\n5272\n5277\n5300\n5327\n5358\n5359\n5360\n5361\n5364\n5370\n5375\n5376\n5384\n5383\n5384\n5385\n5389\n5390\n5395\n5397\n5413\n5418\n5434\n5433\n5449\n5445\n5447\n5453\n5454\n5458\n5460\n5448\n5452\n5464\n5469\n5480\n5481\n5482\n5486\n5496\n5499\n5500\n5527\n5501\n5476\n5474\n5475\n5463\n5462\n5458\n5459\n5470\n5473\n5481\n5493\n5494\n5495\n5496\n5497\n5498\n5495\n5498\n5496\n5490\n5491\n5493\n5495\n5489\n5514\n5533\n5541\n5531\n5537\n5513\n5531\n5532\n5533\n5532\n5526\n5535\n5553\n5551\n5554\n5553\n5555\n5551\n5557\n5556\n5558\n5555\n5554\n5552\n5566\n5574\n5577\n5583\n5584\n5588\n5590\n5603\n5610\n5617\n5619\n5618\n5619\n5618\n5630\n5635\n5638\n5650\n5659\n5660\n5672\n5670\n5676\n5673\n5675\n5680\n5682\n5685\n5688\n5682\n5683\n5696\n5700\n5722\n5714\n5713\n5710\n5712\n5740\n5741\n5739\n5740\n5746\n5756\n5769\n5770\n5757\n5748\n5766\n5770\n';
  
  const depthsArr = inputDay1.split('\n');
  const depthsArrNum = depthsArr.map((str) => parseInt(str));
  //console.log(depthsArr);
  //console.log(depthsArrNum);
  let increase = 0;
  let decrease = 0;

  let increase2 = 0;
  let decrease2 = 0;

  function day1Part1() {

    for (let i = 0; i < depthsArr.length; i++) {
      if (depthsArrNum[i] < depthsArrNum[i+1]) {
        increase++
      } else {
        decrease++
      }
    }

    console.log(increase + " and " + decrease);
  }

  function day1Part2() {

    for (let i = 0; i < (depthsArr.length - 1); i++) {
      if ((depthsArrNum[i] + depthsArrNum[i + 1] + depthsArrNum[i + 2]) < (depthsArrNum[i + 1] + depthsArrNum[i + 2] + depthsArrNum[i + 3])) {
        increase2++
      } else {
        decrease2++
      }
    }

    console.log(increase2 + " and " + decrease2);
  }

  day1Part1();
  day1Part2();
  

  return (
    <div className="container--day">
        <h3>Day 1: Sonar Sweep</h3>
        <div>
          <p className="day1--puzzle-input"></p>
          <p>Result of part one: {increase}</p>
          <p>Result of part two: {increase2}</p>
        </div>
    </div>
  );
}

export default Day1;
