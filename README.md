# 빙고 게임

## 데모

https://silly-mestorf-8e28c2.netlify.com/

## 요구 사항

### 화면 상세

- 게임 (재)시작 버튼
- 1P용 5x5 빙고판과 완성 줄 표시 목록
- 2P용 5x5 빙고판과 완성 줄 표시 목록

### 게임의 시작

1. 처음에 빙고판의 내용은 비어있으며, cell을 눌러도 반응하지 않습니다.
2. '게임 시작'을 누르면 빙고판마다 1에서 25까지의 숫자가 임의로 배치됩니다.
3. '게임 시작' 버튼은 '게임 재시작'으로 텍스트가 바뀝니다.
4. 이후 '게임 재시작' 버튼을 누르면 완성 줄 목록이 초기화되며, 빙고판은 2의 상태로 돌아갑니다. (숫자는 새롭게 채워짐)

### 게임의 진행

1. 게임이 시작되면 1P부터 번갈아가며 cell을 클릭할 수 있습니다. (자기 차례가 아닌데 cell을 클릭할 경우 '잘못된 차레입니다.' 알림이 뜹니다.)
2. cell을 클릭하면 모든 빙고판에서 해당하는 숫자에 특정한 표시를 합니다.
3. 빙고판에서 가로, 세로, 대각선으로 다섯개의 cell이 연달아 표시된 경우, 완성 줄 목록에 완성된 순서로 표기합니다.
4. 5줄을 완성한 플레이어가 생기면, 결과에 따라 '1/2P가 빙고를 완성했습니다.', '무승부입니다.' 알림이 뜹니다. 확인을 누르면 UI가 완전히 초기화됩니다.

## Stack

- react
- redux

## 결과

![](https://gitlab.com/yonghyunlee/bingo/raw/master/images/onePlayer.gif)

![](https://gitlab.com/yonghyunlee/bingo/raw/master/images/twoPlayer.gif)

## 설치

```bash
git clone https://gitlab.com/yonghyunlee/bingo
cd bingo
yarn install
```

## 시작

```bash
yarn start
```