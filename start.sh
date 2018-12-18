#!/bin/bash

file='backend/config/baseConfig.json'
export ui_port=8080
export apigetway_url=61.153.188.154:5050
export algorithm_url=115.239.250.115:8898
export cdc_url=61.153.188.154:8083
export discovery_url=115.239.250.88:8889
export aggregator_url=115.239.250.88:8844
export scheduling_url=115.239.250.88:8811
echo ==============================配置信息替换开始 ==============================
sed -i "_bak" "s/ui_port/${ui_port}/g" "$file"
sed -i "_bak" "s/apigetway_url/${apigetway_url}/g" "$file"
sed -i "_bak" "s/algorithm_url/${algorithm_url}/g" "$file"
sed -i "_bak" "s/cdc_url/${cdc_url}/g" "$file"
sed -i "_bak" "s/discovery_url/${discovery_url}/g" "$file"
sed -i "_bak" "s/aggregator_url/${aggregator_url}/g" "$file"
sed -i "_bak" "s/scheduling_url/${scheduling_url}/g" "$file"
echo ==============================配置信息替换结束 ==============================

exit 0