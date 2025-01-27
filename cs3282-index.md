<frontmatter>
title: CS3282 - {{ year }} Batch
pageNav: 2
</frontmatter>

# CS3282 - {{ year }} Batch

{% set projects = [
    {name: 'CATcher', students: [
        ['ARIF KHALID', 'Arif-Khalid', 'A1', 'B1', 'C1'],
        ['Li Zhaoqi', 'Eclipse-Dominator', 'A2', 'B2', 'C2'],
        ['NGUYEN KHOI NGUYEN', 'nknguyenhc', 'A2', 'B2', 'C2']
    ]},
    {name: 'MarkBind', students: [
        ['Lee Hyung Woon', 'lhw-1', 'A2', 'B2', 'C2']
    ]},
    {name: 'RepoSense', students: [
        ['Chang Si Kai', 'sikai00', 'A1', 'B1', 'C1'],
        ['JONAS ONG SI WEI', 'jonasongg', 'A2', 'B2', 'C2'],
        ['POON YIP HANG, RYAN', 'sopa301', 'A2', 'B2', 'C2']
    ]},
    {name: 'TEAMMATES', students: [
        ['DOMINIC BERZIN CHUA WAY GIN', 'domoberzin', 'A1', 'B1', 'C1'],
        ['Qiu Jiasheng, Jason', 'jasonqiu212', 'A2', 'B2', 'C2'],
        ['XENOS FIORENZO ANONG', 'xenosf', 'A1', 'B1', 'C1'],
        ['ZHU YUANXI', 'yuanxi1', 'A1', 'B1', 'C1']
    ]}
] %}

{% for project in projects %}
**{{ project.name }}:**
{% for student in project.students %}* [{{ student[0] }}](#{{ student[0] | lower | replace(' ', '-') | replace(',', '')}})
{% endfor %}
{% endfor %}

{% for project in projects %}
# {{ project.name }}
  {% for student in project.students %}

<include src="students/{{ student[1] }}/studentInfo.md" boilerplate >
  <span id="name">{{ student[0] }}</span>
  <span id="folder">{{ student[1] }}</span>
  <span id="mod">cs3282</span>
</include>
  {% endfor %}
{% endfor %}
