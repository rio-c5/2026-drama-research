// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験・調査について",
          "content": "この実験は、慶應義塾大学メディア・コミュニケーション研究所の李光鎬 ゼミ（ドラマ・サムネイル班）が行う研究プロジェクトの一環として行われています。"
        },
        {
          "required": true,
          "type": "text",
          "title": "1.本実験・調査の目的",
          "content": "ドラマの選択志向を調べることが本実験・調査の目的です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2.本実験・調査の手続き",
          "content": "この後、画像を見て選択していただいた後、簡単な質問をします。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3.潜在的なリスク・苦痛など",
          "content": "実験による多少の疲労は除き、潜在的なリスクや苦痛はありません。また、いつ、いかなる理由でも自由に実験を中止することができます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4.謝礼",
          "content": "この実験への参加に対する謝金の支払いはありません。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5.匿名性の確保",
          "content": "本実験・調査によって得られた情報は匿名性が維持されます。収集されたデータは個人が特定できるデータとして公表されることは決してありません。"
        },
        {
          "required": true,
          "type": "text",
          "title": "6.所要時間",
          "content": "所要時間は約5～10分です。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は、Escを押した後、ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み、理解した上で、実験・調査への参加に同意します。",
              "coding": "informedConsent"
            }
          ],
          "name": "esc"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Explanation"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 768,
          "height": 78.11,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "準備ができたら、スタートボタンを押してください。\n実験が始まります。",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "circle",
          "left": 0,
          "top": 135.75,
          "angle": 0,
          "width": 97.72,
          "height": 97.72,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#fcbb0a"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 135,
          "angle": 0,
          "width": 67.88,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "start",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": 32,
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "aoi",
          "left": 0,
          "top": 137.83,
          "angle": 0,
          "width": 79.08,
          "height": 79.08,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "rgba(0, 0, 0, 0.2)",
          "label": "startBtn"
        }
      ],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "click @startBtn": "start"
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
}
      },
      "title": "ParticipantID"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "それでは実験を始めます。",
          "content": "次のページでは、ドラマ配信サイトの模擬画面が表示されます。\n最も視聴したいと感じた作品を1つ選んでください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Start"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "SetA",
      "skip": "${this.state.participantID % 3 != 0}",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 128.36,
              "top": -30.02,
              "angle": 0,
              "width": 108.91,
              "height": 149.58,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": 129.57,
              "top": 169.68,
              "angle": 0,
              "width": 110.44,
              "height": 153.02,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": 0.84,
              "top": -27.41,
              "angle": 0,
              "width": 99.94,
              "height": 152.82,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -124.16,
              "top": -24.32,
              "angle": 0,
              "width": 107.92,
              "height": 162.93,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 3.77,
              "top": 166.18,
              "angle": 0,
              "width": 95.95,
              "height": 156.05,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -125.3,
              "top": 169.19,
              "angle": 0,
              "width": 97.79,
              "height": 154,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 389.84999999999997,
              "height": 456.09,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"模擬画面A.png\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenA-1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 120.32,
              "top": -26.86,
              "angle": 0,
              "width": 109.02,
              "height": 153.27,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": 116.12,
              "top": 152.85,
              "angle": 0,
              "width": 105.38,
              "height": 147.36,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": 0,
              "top": -25,
              "angle": 0,
              "width": 99.94,
              "height": 153.97,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -121.18,
              "top": -25,
              "angle": 0,
              "width": 102.01,
              "height": 153.78,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": -3.1,
              "top": 155.68,
              "angle": 0,
              "width": 102.08,
              "height": 156.97,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -118.68,
              "top": 155.19,
              "angle": 0,
              "width": 98.95,
              "height": 156.03,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 359.68,
              "height": 449.28000000000003,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"A-2.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "A-2.JPG": "embedded\u002Fb94584e9d53609b6c1164f44df3333a4223baee940718f7af9508a141faecf44.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenA-2"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 122.84,
              "top": -33.03,
              "angle": 0,
              "width": 100.09,
              "height": 155.56,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": 124.35,
              "top": 162.18,
              "angle": 0,
              "width": 111.02,
              "height": 159.99,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": 0,
              "top": -27.93,
              "angle": 0,
              "width": 99.94,
              "height": 161.77,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -122.6,
              "top": -31.15,
              "angle": 0,
              "width": 103.17,
              "height": 150.71,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": -3.66,
              "top": 163.19,
              "angle": 0,
              "width": 105.02,
              "height": 162,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -125.3,
              "top": 163.18,
              "angle": 0,
              "width": 97.79,
              "height": 165.95,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 373.19,
              "height": 466.32000000000005,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"A-3.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "A-3.JPG": "embedded\u002F34bab98989f84c54c6f0eb1063eb8ea2df2c9eb2af46c029297479ee16233eb8.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenA-3"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 125.32,
              "top": -34.36,
              "angle": 0,
              "width": 114.93,
              "height": 158.21,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": 127.31,
              "top": 164.34,
              "angle": 0,
              "width": 114.92,
              "height": 163.62,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -1.6,
              "top": -33.48,
              "angle": 0,
              "width": 103.11,
              "height": 156.01,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -134.64,
              "top": -35.32,
              "angle": 0,
              "width": 110.93,
              "height": 162.93,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": -2.73,
              "top": 162.35,
              "angle": 0,
              "width": 108.82,
              "height": 163.66,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -127.79,
              "top": 166.34,
              "angle": 0,
              "width": 102.71,
              "height": 159.65,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 378.08000000000004,
              "height": 468.52000000000004,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"A-4.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "A-4.JPG": "embedded\u002Fbdf1bc3e2d9b3e6a3afe98a51a107cb431412e1e8c24a7593ce036438ff23f9b.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenA-4"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 125,
              "top": -25,
              "angle": 0,
              "width": 108.91,
              "height": 149.58,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": 124.59,
              "top": 169.68,
              "angle": 0,
              "width": 100.57,
              "height": 153.02,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -0.68,
              "top": -30.58,
              "angle": 0,
              "width": 102.95,
              "height": 159.13,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -125,
              "top": -26.85,
              "angle": 0,
              "width": 107.92,
              "height": 166.61,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 0.79,
              "top": 166.18,
              "angle": 0,
              "width": 101.85,
              "height": 156.05,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -125.3,
              "top": 169.19,
              "angle": 0,
              "width": 97.79,
              "height": 154,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 378.08000000000004,
              "height": 471.24,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"A-5.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "A-5.JPG": "embedded\u002F6abffec26db415236ec454bf69bda928a1a7d9275cf9dea566ebb151118a57cf.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenA-5"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "回答ありがとうございました。",
              "content": "次の画面からは、アンケートを行います。\n正確に回答して下さい。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "SurveyA"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問文を読んでいただき、あなたに当てはまる選択肢を選ぶ、または数値を入力してください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたの性別を選択してください。",
              "options": [
                {
                  "label": "男",
                  "coding": "1"
                },
                {
                  "label": "女",
                  "coding": "2"
                },
                {
                  "label": "その他",
                  "coding": "3"
                },
                {
                  "label": "回答しない",
                  "coding": "4"
                }
              ],
              "name": ""
            },
            {
              "required": true,
              "type": "input",
              "label": "あなたの年齢を半角で入力してください。",
              "attributes": {
                "type": "number",
                "min": "0",
                "max": "100"
              },
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "InformationA"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問文を読んでいただき、あなたに最も当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "1. 動画(YouTubeや配信サービスなど)を見る時は、倍速再生をすることが多い。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "1.-(youtube)"
            },
            {
              "required": true,
              "type": "radio",
              "label": "2. 結果がどうなるかわからないことに対して、じっくり時間をかけて遠回りすることを楽しめる。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "2."
            },
            {
              "required": true,
              "type": "radio",
              "label": "3. 移動中などのちょっとした隙間時間も、無駄にせず、有効に使いたい。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "3."
            },
            {
              "required": true,
              "type": "radio",
              "label": "4. 「悩んでいる時間」そのものがもったいないと感じる。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "4."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Time performanceA"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問文を読んでいただき、あなたに最も当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "先ほどの実験で、何を基準に作品を選びましたか？",
              "options": [
                {
                  "label": "サムネイル",
                  "coding": "1"
                },
                {
                  "label": "タイトル",
                  "coding": "2"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "FeedbackA"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "SetB",
      "skip": "${this.state.participantID % 3 != 1}",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 112.7,
              "top": -18.34,
              "angle": 0,
              "width": 93.7,
              "height": 146.92,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -8.9,
              "top": -19.22,
              "angle": 0,
              "width": 101.39,
              "height": 142.41,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -131.2,
              "top": -16.83,
              "angle": 0,
              "width": 103.95,
              "height": 147.94,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 111.85,
              "top": 166.17,
              "angle": 0,
              "width": 100.15,
              "height": 154.3,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -9.84,
              "top": 165.21,
              "angle": 0,
              "width": 97.54,
              "height": 158.15,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -132.8,
              "top": 165.2,
              "angle": 0,
              "width": 102.86,
              "height": 156.18,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": -10.54,
              "top": 50,
              "angle": 0,
              "width": 368.64,
              "height": 421.12,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"模擬画面B.png\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenB-1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 122.68,
              "top": -23.31,
              "angle": 0,
              "width": 103.72,
              "height": 168.71,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": 0,
              "top": -24.95,
              "angle": 0,
              "width": 101.39,
              "height": 164.81,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -128.15,
              "top": -29.48,
              "angle": 0,
              "width": 109.97,
              "height": 163.94,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 125.45,
              "top": 170.32,
              "angle": 0,
              "width": 99.25,
              "height": 163.59,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -1.31,
              "top": 162.39,
              "angle": 0,
              "width": 104.31,
              "height": 153.81,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -126.68,
              "top": 171.31,
              "angle": 0,
              "width": 105.01,
              "height": 168.31,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 378.08000000000004,
              "height": 469.88000000000005,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"B-2.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png",
            "B-2.JPG": "embedded\u002F80c139aa913fd2d5799d2b5aac5ca936657412357297cef31274ad577c234595.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenB-2"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 119.86,
              "top": -28.19,
              "angle": 0,
              "width": 101.96,
              "height": 153.25,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -1.74,
              "top": -28.63,
              "angle": 0,
              "width": 104.83,
              "height": 157.49,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -121.68,
              "top": -28.93,
              "angle": 0,
              "width": 101,
              "height": 155.75,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 119.81,
              "top": 161.74,
              "angle": 0,
              "width": 101.92,
              "height": 163.1,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -1.68,
              "top": 160.67,
              "angle": 0,
              "width": 102.91,
              "height": 151.05,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -122.87,
              "top": 160,
              "angle": 0,
              "width": 98.64,
              "height": 156.18,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 365.64000000000004,
              "height": 458.04,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"B-3.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png",
            "B-3.JPG": "embedded\u002F090fd5ee72b61b6ccdfebb86827bf68b60c692ce6804528db5afbaf151cee1e5.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenB-3"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 123.34,
              "top": -29.19,
              "angle": 0,
              "width": 110.8,
              "height": 155.24,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -1.68,
              "top": -29.42,
              "angle": 0,
              "width": 104.93,
              "height": 162.68,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -121.17,
              "top": -30.32,
              "angle": 0,
              "width": 102.03,
              "height": 160.88,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 124.31,
              "top": 163.24,
              "angle": 0,
              "width": 108.86,
              "height": 160.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -0.69,
              "top": 165.21,
              "angle": 0,
              "width": 98.93,
              "height": 158.15,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -125,
              "top": 164.2,
              "angle": 0,
              "width": 102.86,
              "height": 156.18,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 370.51000000000005,
              "height": 462.97,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"B-4.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png",
            "B-4.JPG": "embedded\u002Ffa4a69ed3657493d5937de41b11c034dcb61df77a1e832c1adb461ce9cb44d19.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenB-4"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 120.32,
              "top": -29.82,
              "angle": 0,
              "width": 96.93,
              "height": 149.94,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -4.66,
              "top": -28.31,
              "angle": 0,
              "width": 99.04,
              "height": 148.99,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -122.67,
              "top": -28.93,
              "angle": 0,
              "width": 98.99,
              "height": 155.75,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 119.81,
              "top": 164.24,
              "angle": 0,
              "width": 95.99,
              "height": 158.13,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -1.69,
              "top": 161.73,
              "angle": 0,
              "width": 96.96,
              "height": 165.07,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -122.2,
              "top": 164.23,
              "angle": 0,
              "width": 94,
              "height": 158.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 364.98,
              "height": 454.08000000000004,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"B-5.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png",
            "B-5.JPG": "embedded\u002F435b84235d70b5cda8f23939963e52f979574a7af38b25b2cc6126a3f0bb01c4.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenB-5"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "回答ありがとうございました。",
              "content": "次の画面からは、アンケートを行います。\n正確に回答して下さい。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "SurveyB"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問文を読んでいただき、あなたに当てはまる選択肢を選ぶ、または数値を入力してください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたの性別を選択してください。",
              "options": [
                {
                  "label": "男",
                  "coding": "1"
                },
                {
                  "label": "女",
                  "coding": "2"
                },
                {
                  "label": "その他",
                  "coding": "3"
                },
                {
                  "label": "回答しない",
                  "coding": "4"
                }
              ],
              "name": ""
            },
            {
              "required": true,
              "type": "input",
              "label": "あなたの年齢を半角で入力してください。",
              "attributes": {
                "type": "number",
                "min": "0",
                "max": "100"
              },
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "InformationB"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問文を読んでいただき、あなたに最も当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "1. 動画(YouTubeや配信サービスなど)を見る時は、倍速再生をすることが多い。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "1.-(youtube)"
            },
            {
              "required": true,
              "type": "radio",
              "label": "2. 結果がどうなるかわからないことに対して、じっくり時間をかけて遠回りすることを楽しめる。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "2."
            },
            {
              "required": true,
              "type": "radio",
              "label": "3. 移動中などのちょっとした隙間時間も、無駄にせず、有効に使いたい。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "3."
            },
            {
              "required": true,
              "type": "radio",
              "label": "4. 「悩んでいる時間」そのものがもったいないと感じる。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "4."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Time performanceB"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問文を読んでいただき、あなたに最も当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "先ほどの実験で、何を基準に作品を選びましたか？",
              "options": [
                {
                  "label": "サムネイル",
                  "coding": "1"
                },
                {
                  "label": "タイトル",
                  "coding": "2"
                },
                {
                  "label": "ランキング",
                  "coding": "3"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "FeedbackB"
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "SetC",
      "skip": "${this.state.participantID % 3 != 2}",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 134.18,
              "top": -28,
              "angle": 0,
              "width": 114.15,
              "height": 147.22,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -1.85,
              "top": -27.99,
              "angle": 0,
              "width": 112.14,
              "height": 155.18,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -134.87,
              "top": -29.65,
              "angle": 0,
              "width": 104.12,
              "height": 160.5,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 132.2,
              "top": 146.04,
              "angle": 0,
              "width": 114.1,
              "height": 157.22,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -0.35,
              "top": 150.49,
              "angle": 0,
              "width": 117.08,
              "height": 152.17,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -131.36,
              "top": 147.54,
              "angle": 0,
              "width": 107.14,
              "height": 156.22,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 37.41,
              "angle": 0,
              "width": 400.40000000000003,
              "height": 426.40000000000003,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"模擬画面C.png\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png",
            "模擬画面C.png": "embedded\u002F1083083325715ef887890aa5dd96044da0c311176b8694698cc6672a73d9d819.png"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenC-1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 120.86,
              "top": -23.49,
              "angle": 0,
              "width": 110.07,
              "height": 171.86,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -5.54,
              "top": -27.99,
              "angle": 0,
              "width": 104.82,
              "height": 155.18,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -128.65,
              "top": -27.13,
              "angle": 0,
              "width": 107,
              "height": 164.72,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 120.36,
              "top": 163.14,
              "angle": 0,
              "width": 113.05,
              "height": 160.03,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -5.53,
              "top": 164.65,
              "angle": 0,
              "width": 106.81,
              "height": 162.89,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -126.37,
              "top": 161.54,
              "angle": 0,
              "width": 104.43,
              "height": 156.22,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 381.23,
              "height": 464.98,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"C-2.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png",
            "模擬画面C.png": "embedded\u002F1083083325715ef887890aa5dd96044da0c311176b8694698cc6672a73d9d819.png",
            "C-2.JPG": "embedded\u002Fe9b1ee2ba022cc0d998370445a6963fef77e7cd7cb944d8cd02dcf3a2d3735ae.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenC-2"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 118.82,
              "top": -30.95,
              "angle": 0,
              "width": 104.05,
              "height": 153.07,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -5.04,
              "top": -27.99,
              "angle": 0,
              "width": 105.81,
              "height": 155.18,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -127.69,
              "top": -29.44,
              "angle": 0,
              "width": 97.01,
              "height": 160.08,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 119.39,
              "top": 160,
              "angle": 0,
              "width": 102.98,
              "height": 157.22,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -4.17,
              "top": 161.45,
              "angle": 0,
              "width": 102.12,
              "height": 148.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -124.17,
              "top": 160.48,
              "angle": 0,
              "width": 98.09,
              "height": 155.95,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 367.25,
              "height": 458.25,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"C-3.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png",
            "模擬画面C.png": "embedded\u002F1083083325715ef887890aa5dd96044da0c311176b8694698cc6672a73d9d819.png",
            "C-3.JPG": "embedded\u002Fa984fce7ab0eec999680e3949893b41605e8277b7e94db22a0ab79ae3a2307c5.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenC-3"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 122.35,
              "top": -30.95,
              "angle": 0,
              "width": 109.08,
              "height": 153.07,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -4.54,
              "top": -27.99,
              "angle": 0,
              "width": 106.8,
              "height": 155.18,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -125.69,
              "top": -29.65,
              "angle": 0,
              "width": 104.94,
              "height": 160.5,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 123.39,
              "top": 160.04,
              "angle": 0,
              "width": 110.91,
              "height": 157.22,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -2.18,
              "top": 161.29,
              "angle": 0,
              "width": 102.11,
              "height": 153.58,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -126.98,
              "top": 161.98,
              "angle": 0,
              "width": 98.46,
              "height": 158.93,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 374.53000000000003,
              "height": 463.64000000000004,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"C-4.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png",
            "模擬画面C.png": "embedded\u002F1083083325715ef887890aa5dd96044da0c311176b8694698cc6672a73d9d819.png",
            "C-4.JPG": "embedded\u002F1bfa48b46f1b642d1d6db4dc608d268fd72391c6f974307675ef435a8ad65da5.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenC-4"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -225,
              "angle": 0,
              "width": 593.76,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "最も視聴したいと感じる作品を1つ選んで\nクリックしてください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "aoi",
              "left": 116.22,
              "top": -28.94,
              "angle": 0,
              "width": 103.96,
              "height": 149.08,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -5.88,
              "top": -23.95,
              "angle": 0,
              "width": 104.16,
              "height": 147.15,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -123.33,
              "top": -24.43,
              "angle": 0,
              "width": 94.97,
              "height": 150.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 118.31,
              "top": 161.15,
              "angle": 0,
              "width": 97.11,
              "height": 152.06,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -6.63,
              "top": 161.14,
              "angle": 0,
              "width": 95.12,
              "height": 145.99,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -124.48,
              "top": 158.15,
              "angle": 0,
              "width": 93.5,
              "height": 151.98,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 50,
              "angle": 0,
              "width": 362.88,
              "height": 449.28000000000003,
              "stroke": null,
              "strokeWidth": 0,
              "fill": "black",
              "src": "${ this.files[\"C-5.JPG\"] }",
              "autoScale": undefined
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "模擬画面.png": "embedded\u002Fc774df55c67c17c29a51bca198701bdcdb08d9dc0949c6e961b777e5db72e1c4.png",
            "模擬画面A.png": "embedded\u002Ff9f13bbbab6d6c8523d7d119a0aa5b1ba2fc465ef3b30c022d7310b94dd3389e.png",
            "模擬画面B.png": "embedded\u002F1a0b5bb057554737b179f9c1e8fb00ed4e82d16af649706bc122e83fe2894f18.png",
            "模擬画面C.png": "embedded\u002F1083083325715ef887890aa5dd96044da0c311176b8694698cc6672a73d9d819.png",
            "C-5.JPG": "embedded\u002Fc392317197733c0b6ecb79cec7c602077cf5577f5ebae4c7158ca3215cee9491.JPG"
          },
          "responses": {
            "click @1": "1",
            "click @2": "2",
            "click @3": "3",
            "click @4": "4",
            "click @5": "5",
            "click @6": "6"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ScreenC-5"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "回答ありがとうございました。",
              "content": "次の画面からは、アンケートを行います。\n正確に回答して下さい。"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "SurveyC"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問文を読んでいただき、あなたに当てはまる選択肢を選ぶ、または数値を入力してください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "あなたの性別を選択してください。",
              "options": [
                {
                  "label": "男",
                  "coding": "1"
                },
                {
                  "label": "女",
                  "coding": "2"
                },
                {
                  "label": "その他",
                  "coding": "3"
                },
                {
                  "label": "回答しない",
                  "coding": "4"
                }
              ],
              "name": ""
            },
            {
              "required": true,
              "type": "input",
              "label": "あなたの年齢を半角で入力してください。",
              "attributes": {
                "type": "number",
                "min": "0",
                "max": "100"
              },
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "InformationC"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問文を読んでいただき、あなたに最も当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "1. 動画(YouTubeや配信サービスなど)を見る時は、倍速再生をすることが多い。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "1.-(youtube)"
            },
            {
              "required": true,
              "type": "radio",
              "label": "2. 結果がどうなるかわからないことに対して、じっくり時間をかけて遠回りすることを楽しめる。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "2."
            },
            {
              "required": true,
              "type": "radio",
              "label": "3. 移動中などのちょっとした隙間時間も、無駄にせず、有効に使いたい。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "3."
            },
            {
              "required": true,
              "type": "radio",
              "label": "4. 「悩んでいる時間」そのものがもったいないと感じる。",
              "options": [
                {
                  "label": "非常にあてはまる",
                  "coding": "5"
                },
                {
                  "label": "あてはまる",
                  "coding": "4"
                },
                {
                  "label": "どちらでもない",
                  "coding": "3"
                },
                {
                  "label": "あてはまらない",
                  "coding": "2"
                },
                {
                  "label": "全くあてはまらない",
                  "coding": "1"
                }
              ],
              "name": "4."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Time performanceC"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "以下の質問文を読んでいただき、あなたに最も当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "先ほどの実験で、何を基準に作品を選びましたか？",
              "options": [
                {
                  "label": "サムネイル",
                  "coding": "1"
                },
                {
                  "label": "タイトル",
                  "coding": "2"
                },
                {
                  "label": "SNSバッジ (「Xでトレンド入り」など)",
                  "coding": "4"
                }
              ],
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "FeedbackC"
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験・調査の目的",
          "content": "この実験は、動画配信サービスにおいて、「公式ランキング情報」と「SNSトレンド情報」という異なる2つのナッジが、コンテンツ選定にかかる時間にどう影響するかを検証することを目的としていました。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "この実験の目的に気づいていましたか？",
          "options": [
            {
              "label": "はい",
              "coding": "1"
            },
            {
              "label": "いいえ",
              "coding": "2"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Debriefing"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "実験にご参加いただきありがとうございました。",
          "content": "この画面は閉じていただいて大丈夫です。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "KqaIZt94tkrw",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "Closing",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()