<frontmatter>
title: CS3281&2 - {{ year }} Batch
pageNav: 2
</frontmatter>

# CS3281 - {{ year }} Batch

{% set projects = [
    {name: 'CATcher', students: [
        ['ISAAC NG JUN JIE', 'Izn432'],
        ['KOO YU CONG', 'yucongkoo'],
        ['LOH ZE QING, NORBERT', 'NorbertLoh'],
        ['SOH ZHENG YANG, MARCUS', 'HollaG'],
        ['TNG WEN XI', 'wx-03']
    ]},
    {name: 'MarkBind', students: [
        ['ADRIAN LEONARDO LIANG', 'AgentHagu'],
        ['CHAN GER TECK', 'gerteck'],
        ['CHEAH GEE NUNG, IAN', 'IanCheah'],
        ['JAVIER TAN MENG WEE', 'Incogdino'],
        ['YU CHENBO', 'yyccbb']
    ]},
    {name: 'RepoSense', students: [
        ['ALEXANDER LISWANDY', 'Airiinnn'],
        ['CHEN YIXUN', 'CYX22222003'],
        ['HING YEN XING', 'JoanneHing'],
        ['NG YIN JOE', 'joeng03'],
        ['WONG LI YUAN', 'lyuanww']
    ]},
    {name: 'TEAMMATES', students: [
        ['DHIRAPUTTA PATHAMA TENGARA', 'DhiraPT'],
        ['LI MINGYANG', 'mingyang143'],
        ['POH JUN KANG', 'InfinityTwo'],
        ['TENG WEI LOON', 'BunnyHoppp'],
        ['WONG XING HUI BERTRAND', 'peasantbird']
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
  <span id="mod">cs3281</span>
</include>
  {% endfor %}
{% endfor %}
