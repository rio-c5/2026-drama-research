// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
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
              "left": 145.43,
              "top": -6.34,
              "angle": 0,
              "width": 122.05,
              "height": 186.94,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": 4.33,
              "top": -2.26,
              "angle": 0,
              "width": 115.73,
              "height": 185.13,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -137.86,
              "top": -1.8,
              "angle": 0,
              "width": 124.5,
              "height": 190.05,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 144.05,
              "top": 206.6,
              "angle": 0,
              "width": 115.06,
              "height": 182.84,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": 3.4,
              "top": 201.6,
              "angle": 0,
              "width": 116.36,
              "height": 180.83,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -137.32,
              "top": 206.52,
              "angle": 0,
              "width": 111.81,
              "height": 173.03,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 75,
              "angle": 0,
              "width": 435.05,
              "height": 508.97,
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
          "title": "ScreenA"
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
              "left": 143.09,
              "top": 0,
              "angle": 0,
              "width": 121.39,
              "height": 177.78,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 119.06,
              "height": 180.64,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -141.51,
              "top": -3.43,
              "angle": 0,
              "width": 126.14,
              "height": 188.93,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 139.91,
              "top": 212.57,
              "angle": 0,
              "width": 115.33,
              "height": 184.89,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": 1.52,
              "top": 202.95,
              "angle": 0,
              "width": 120.08,
              "height": 178.14,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -140.55,
              "top": 201.53,
              "angle": 0,
              "width": 118.22,
              "height": 182.95,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 75,
              "angle": 0,
              "width": 432,
              "height": 493.5,
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
          "title": "ScreenB"
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
              "left": 151.32,
              "top": -5.97,
              "angle": 0,
              "width": 130.95,
              "height": 189.66,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "3"
            },
            {
              "type": "aoi",
              "left": -1.65,
              "top": -2.26,
              "angle": 0,
              "width": 134.92,
              "height": 185.14,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "2"
            },
            {
              "type": "aoi",
              "left": -150,
              "top": -4.68,
              "angle": 0,
              "width": 126.14,
              "height": 198.25,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "1"
            },
            {
              "type": "aoi",
              "left": 150.33,
              "top": 195.81,
              "angle": 0,
              "width": 120.97,
              "height": 193.23,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "6"
            },
            {
              "type": "aoi",
              "left": -1.15,
              "top": 199.09,
              "angle": 0,
              "width": 129.95,
              "height": 185.81,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "5"
            },
            {
              "type": "aoi",
              "left": -153.14,
              "top": 197.09,
              "angle": 0,
              "width": 120.03,
              "height": 191.79,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "rgba(0, 0, 0, 0.2)",
              "label": "4"
            },
            {
              "type": "image",
              "left": 0,
              "top": 63,
              "angle": 0,
              "width": 449.68,
              "height": 478.88,
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
          "title": "ScreenC"
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
      "messageHandlers": {},
      "title": "Closing",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()