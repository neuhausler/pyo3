window.BENCHMARK_DATA = {
  "lastUpdate": 1658594421451,
  "repoUrl": "https://github.com/neuhausler/pyo3",
  "entries": {
    "pyo3-bench": [
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c9ce569d29fdb73ca2b48af6d6c93889c7a43bf1",
          "message": "Merge pull request #1639 from messense/bench\n\nAdd automated continuous benchmarking",
          "timestamp": "2021-06-04T14:34:01+01:00",
          "tree_id": "3f99c52f863a9d4c968b11d43426c16fae5cd388",
          "url": "https://github.com/PyO3/pyo3/commit/c9ce569d29fdb73ca2b48af6d6c93889c7a43bf1"
        },
        "date": 1622814252340,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78575,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 225894,
            "range": "± 14689",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2373429,
            "range": "± 20862",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2801614,
            "range": "± 91891",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7034521,
            "range": "± 180645",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11429267,
            "range": "± 73365",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5763765,
            "range": "± 281272",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1779291,
            "range": "± 48245",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 800692,
            "range": "± 23745",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4518,
            "range": "± 24857",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3454,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1747304,
            "range": "± 36147",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9714936,
            "range": "± 175763",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9633397,
            "range": "± 85671",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4353522,
            "range": "± 50683",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1138108,
            "range": "± 3629",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 600755,
            "range": "± 768",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15366b9b483d64807f2e8f7988266a1a48655065",
          "message": "Merge pull request #1651 from davidhewitt/tuple-get-set\n\npyclass: allow `#[pyo3(get, set, name = \"foo\")]`",
          "timestamp": "2021-06-04T19:26:51+01:00",
          "tree_id": "fb83de96b67e334a1dced6fbfd2042e1f625b341",
          "url": "https://github.com/PyO3/pyo3/commit/15366b9b483d64807f2e8f7988266a1a48655065"
        },
        "date": 1622831664927,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79179,
            "range": "± 3941",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 237604,
            "range": "± 13798",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2445092,
            "range": "± 22418",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2805914,
            "range": "± 14337",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7221368,
            "range": "± 335574",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11401843,
            "range": "± 88549",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5672151,
            "range": "± 160795",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1789150,
            "range": "± 46292",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 810828,
            "range": "± 23517",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4642,
            "range": "± 23599",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1778355,
            "range": "± 58424",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7275540,
            "range": "± 110662",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9808923,
            "range": "± 49782",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4411359,
            "range": "± 71777",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1139731,
            "range": "± 3595",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 600984,
            "range": "± 899",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81934c568416c7811adee7842d210f3d0e266d67",
          "message": "Merge pull request #1652 from messense/pytest-bench\n\nRun pytest pyo3-benchmarks on CI",
          "timestamp": "2021-06-05T07:21:02+01:00",
          "tree_id": "2644963a566155a11e204c7bf836614219654bc6",
          "url": "https://github.com/PyO3/pyo3/commit/81934c568416c7811adee7842d210f3d0e266d67"
        },
        "date": 1622874564643,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 100083,
            "range": "± 4550",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 297696,
            "range": "± 14263",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3054406,
            "range": "± 104753",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3578794,
            "range": "± 134745",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 11791246,
            "range": "± 1856091",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14993101,
            "range": "± 856181",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 10104904,
            "range": "± 1561022",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 121,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 127,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2344451,
            "range": "± 114958",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1110799,
            "range": "± 57227",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5527,
            "range": "± 23287",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4867,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2330598,
            "range": "± 89139",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11468413,
            "range": "± 628637",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12284645,
            "range": "± 426152",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6603090,
            "range": "± 548319",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1463562,
            "range": "± 72697",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 746122,
            "range": "± 19743",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3292ccf5e44fa6980e6531c4a3178ed2a2c9122d",
          "message": "Merge pull request #1653 from PyO3/pytuple_fast\n\nPyTuple: use fast macros on !abi3",
          "timestamp": "2021-06-05T08:10:42+01:00",
          "tree_id": "73ebdab1506c66871160d4aaa401db4fa715a0dd",
          "url": "https://github.com/PyO3/pyo3/commit/3292ccf5e44fa6980e6531c4a3178ed2a2c9122d"
        },
        "date": 1622877770588,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 97911,
            "range": "± 6502",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 278397,
            "range": "± 6466",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2833543,
            "range": "± 22750",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3341838,
            "range": "± 50189",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8136792,
            "range": "± 421192",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13832223,
            "range": "± 221539",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6336250,
            "range": "± 251964",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 117,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2051235,
            "range": "± 56790",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 931643,
            "range": "± 30217",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4935,
            "range": "± 22800",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3961,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2036521,
            "range": "± 52877",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8611317,
            "range": "± 214721",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11556784,
            "range": "± 190923",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5324583,
            "range": "± 106951",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 941729,
            "range": "± 23930",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 496132,
            "range": "± 12004",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f49f4440b46e479cbdc78daf26dea844043bcfc9",
          "message": "Merge pull request #1654 from messense/pathlib\n\nAdd support for extracting PathBuf from pathlib.Path",
          "timestamp": "2021-06-05T15:49:30+08:00",
          "tree_id": "e2c481e19f9fa455e0db4289474f19e7032c89b0",
          "url": "https://github.com/PyO3/pyo3/commit/f49f4440b46e479cbdc78daf26dea844043bcfc9"
        },
        "date": 1622880245416,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78978,
            "range": "± 1537",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 224159,
            "range": "± 15044",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2350474,
            "range": "± 14314",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2776454,
            "range": "± 12278",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6758561,
            "range": "± 151005",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11379982,
            "range": "± 57409",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5355474,
            "range": "± 162388",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1777492,
            "range": "± 38448",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 791788,
            "range": "± 23919",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4390,
            "range": "± 26989",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3502,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1845924,
            "range": "± 45821",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7037817,
            "range": "± 82313",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9630431,
            "range": "± 63964",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4273865,
            "range": "± 65886",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 808975,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 401816,
            "range": "± 1128",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3d3be600b8ac12a352d55d0091cf9253405005e",
          "message": "Merge pull request #1655 from davidhewitt/bench-tuple-new\n\nbench_tuple: add benchmark for `PyTuple::new`",
          "timestamp": "2021-06-05T09:27:40+01:00",
          "tree_id": "9540b00d11dfcbb930cc96780dae4d7226856eaa",
          "url": "https://github.com/PyO3/pyo3/commit/b3d3be600b8ac12a352d55d0091cf9253405005e"
        },
        "date": 1622882406978,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 77647,
            "range": "± 1438",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 229379,
            "range": "± 14718",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2383061,
            "range": "± 15911",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3129736,
            "range": "± 8620",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7313234,
            "range": "± 181663",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11587012,
            "range": "± 74581",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5833254,
            "range": "± 251480",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1793230,
            "range": "± 69729",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 798230,
            "range": "± 24186",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4466,
            "range": "± 25972",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3502,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1728333,
            "range": "± 43509",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7130158,
            "range": "± 67042",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9705180,
            "range": "± 41042",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4321164,
            "range": "± 39014",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 788205,
            "range": "± 8836",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1491561,
            "range": "± 54170",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 451831,
            "range": "± 3819",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97d6f15b32c3090498911b8bff2edcef496bf228",
          "message": "Merge pull request #1626 from alonblade/cross-sysconfig\n\nbuild.rs: if found more than one candidate, filter on arch",
          "timestamp": "2021-06-05T09:29:00+01:00",
          "tree_id": "50ed56c788d832ec3b1e3e752b53c2a3fb79a8d5",
          "url": "https://github.com/PyO3/pyo3/commit/97d6f15b32c3090498911b8bff2edcef496bf228"
        },
        "date": 1622882447619,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79000,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 230369,
            "range": "± 13148",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2430818,
            "range": "± 12468",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2865974,
            "range": "± 31843",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8020636,
            "range": "± 469475",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11966360,
            "range": "± 199481",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6364268,
            "range": "± 616612",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1805425,
            "range": "± 62844",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 805106,
            "range": "± 25571",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4628,
            "range": "± 23026",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3504,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1777482,
            "range": "± 67775",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7249559,
            "range": "± 94438",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9771569,
            "range": "± 45701",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4444887,
            "range": "± 66315",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 798096,
            "range": "± 10550",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1669685,
            "range": "± 87894",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 397057,
            "range": "± 1094",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5810eaffa95b5e2ae4986c2be461291737b0421",
          "message": "Merge pull request #1619 from birkenfeld/fastcall\n\nImplement METH_FASTCALL for pyfunctions.",
          "timestamp": "2021-06-05T12:32:16+01:00",
          "tree_id": "d75fc0f08b3b7bf3f8abb4754ebdd92551d55ba6",
          "url": "https://github.com/PyO3/pyo3/commit/a5810eaffa95b5e2ae4986c2be461291737b0421"
        },
        "date": 1622893471296,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94399,
            "range": "± 5671",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 266379,
            "range": "± 6450",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2813394,
            "range": "± 140124",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3367059,
            "range": "± 166870",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7970525,
            "range": "± 414155",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13453213,
            "range": "± 362645",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6317643,
            "range": "± 371932",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 114,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2015570,
            "range": "± 142074",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 913548,
            "range": "± 48464",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4871,
            "range": "± 22115",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3981,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2012458,
            "range": "± 120936",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7773420,
            "range": "± 341270",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10700190,
            "range": "± 456912",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4849460,
            "range": "± 264492",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 893582,
            "range": "± 104210",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1586289,
            "range": "± 92860",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 452666,
            "range": "± 18279",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51fbf61717e82100036ac365bd6937f4ed9201c9",
          "message": "Merge pull request #1658 from davidhewitt/pyo3-text-signature\n\ntext_signature: move to `#[pyo3(text_signature = \"...\")]`",
          "timestamp": "2021-06-05T17:31:32+01:00",
          "tree_id": "07fc4331eb0e8899106ebb1706f536fd776a8566",
          "url": "https://github.com/PyO3/pyo3/commit/51fbf61717e82100036ac365bd6937f4ed9201c9"
        },
        "date": 1622912307683,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 97992,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 279904,
            "range": "± 3117",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2874741,
            "range": "± 30020",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3311596,
            "range": "± 11492",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9236436,
            "range": "± 563495",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14071193,
            "range": "± 119319",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7188779,
            "range": "± 405348",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 117,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2184390,
            "range": "± 11572",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 973645,
            "range": "± 20280",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5070,
            "range": "± 20876",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4148,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2099761,
            "range": "± 11896",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9728875,
            "range": "± 92676",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12245486,
            "range": "± 52558",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5411473,
            "range": "± 79988",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 966358,
            "range": "± 1553",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1913198,
            "range": "± 26631",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 483042,
            "range": "± 1688",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd0aa2cdee6f76ec24b9d972f615480135d9a3bb",
          "message": "Merge pull request #1659 from davidhewitt/pyo3-pass-module\n\npyfunction: document `#[pyo3(pass_module)]`",
          "timestamp": "2021-06-05T18:44:48+01:00",
          "tree_id": "45449bbfa4e07e497bf6fa25c328a26adc78ff72",
          "url": "https://github.com/PyO3/pyo3/commit/bd0aa2cdee6f76ec24b9d972f615480135d9a3bb"
        },
        "date": 1622915615698,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92349,
            "range": "± 2186",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 289643,
            "range": "± 9719",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2808957,
            "range": "± 25136",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3280068,
            "range": "± 32106",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9007766,
            "range": "± 476027",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14065632,
            "range": "± 160824",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6774513,
            "range": "± 363348",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2204636,
            "range": "± 5907",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 973523,
            "range": "± 24502",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5052,
            "range": "± 23838",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4120,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2066754,
            "range": "± 19867",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8411158,
            "range": "± 211898",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11232207,
            "range": "± 166724",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5208281,
            "range": "± 117023",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 920051,
            "range": "± 16231",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1885232,
            "range": "± 28003",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 473175,
            "range": "± 5627",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c6d46c86be72ee756fe8a32b62ec87ffad745a5",
          "message": "Merge pull request #1663 from davidhewitt/ci-3.10-dev\n\nci: use latest Python 3.10 beta",
          "timestamp": "2021-06-05T19:42:05+01:00",
          "tree_id": "8424abcfdeca1ff089aa9083dd8333274857dc52",
          "url": "https://github.com/PyO3/pyo3/commit/4c6d46c86be72ee756fe8a32b62ec87ffad745a5"
        },
        "date": 1622919052027,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82226,
            "range": "± 4392",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 237907,
            "range": "± 21052",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2422617,
            "range": "± 92527",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2960451,
            "range": "± 125239",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7442213,
            "range": "± 317595",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11735439,
            "range": "± 435215",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5883252,
            "range": "± 262678",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 103,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 109,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1906880,
            "range": "± 116167",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 840599,
            "range": "± 39677",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4548,
            "range": "± 21853",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3563,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1782819,
            "range": "± 95883",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7550786,
            "range": "± 326585",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9885445,
            "range": "± 418172",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4424052,
            "range": "± 217825",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 852526,
            "range": "± 38172",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1552374,
            "range": "± 79871",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 423473,
            "range": "± 18600",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2c173dbee2cd726f7d12125f9fcb116588c6e7",
          "message": "Merge pull request #1660 from PyO3/method_defs",
          "timestamp": "2021-06-06T07:47:21+02:00",
          "tree_id": "7e3f094a7dc43caec9191b6ba98aa0e0a35dd57f",
          "url": "https://github.com/PyO3/pyo3/commit/4d2c173dbee2cd726f7d12125f9fcb116588c6e7"
        },
        "date": 1622958926145,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96121,
            "range": "± 6606",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 270721,
            "range": "± 13260",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2701813,
            "range": "± 124045",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3148514,
            "range": "± 153533",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9834257,
            "range": "± 527276",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12807372,
            "range": "± 722197",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8078224,
            "range": "± 426137",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1967403,
            "range": "± 95039",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 910823,
            "range": "± 42978",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5420,
            "range": "± 24664",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4412,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2041149,
            "range": "± 104385",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10002438,
            "range": "± 439427",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11036495,
            "range": "± 502018",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5943843,
            "range": "± 321028",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 873445,
            "range": "± 37293",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1679278,
            "range": "± 94727",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 498921,
            "range": "± 36239",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c57afeb33228efd68a7de4d18caf562f54fe9622",
          "message": "Merge pull request #1661 from PyO3/optimize_forwarding\n\nOptimize f(*args, **kwds) function argument \"parsing\"",
          "timestamp": "2021-06-06T08:27:33+02:00",
          "tree_id": "9fadf1330c2eddccf638c7688d08e9a3cb725b9f",
          "url": "https://github.com/PyO3/pyo3/commit/c57afeb33228efd68a7de4d18caf562f54fe9622"
        },
        "date": 1622962345255,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91439,
            "range": "± 6978",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 270561,
            "range": "± 25281",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2729240,
            "range": "± 181676",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3174860,
            "range": "± 164908",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9932586,
            "range": "± 625631",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13138765,
            "range": "± 788935",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8383774,
            "range": "± 631976",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 114,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2149413,
            "range": "± 151738",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 915515,
            "range": "± 70356",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5311,
            "range": "± 24674",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4400,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1987454,
            "range": "± 102107",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9679169,
            "range": "± 552102",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10676399,
            "range": "± 553241",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5755517,
            "range": "± 295820",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 852601,
            "range": "± 39909",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1668235,
            "range": "± 96301",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 491266,
            "range": "± 27792",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b681143cc88e553c68fa51ecb36ed4a0f309a8e",
          "message": "Merge pull request #1664 from PyO3/pylist_opt\n\nPyList: remove get_parked_item, use macros for speed on !abi3",
          "timestamp": "2021-06-06T08:31:18+01:00",
          "tree_id": "3870ced28ecf7272d5825ef95c612b549b432577",
          "url": "https://github.com/PyO3/pyo3/commit/6b681143cc88e553c68fa51ecb36ed4a0f309a8e"
        },
        "date": 1622965128173,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78040,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226276,
            "range": "± 12429",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2429268,
            "range": "± 18762",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2749199,
            "range": "± 24986",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7640175,
            "range": "± 430368",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11690890,
            "range": "± 102421",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6027747,
            "range": "± 329471",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1401150,
            "range": "± 57340",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 635535,
            "range": "± 19682",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4354,
            "range": "± 20625",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3456,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1769762,
            "range": "± 52678",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7373380,
            "range": "± 107461",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9795141,
            "range": "± 52595",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4616326,
            "range": "± 73836",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 806486,
            "range": "± 911",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1647818,
            "range": "± 65507",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 402140,
            "range": "± 1057",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9a3da3e40d83fe09205656d3dd28080caf9ecad",
          "message": "Merge pull request #1668 from PyO3/pylist_fix",
          "timestamp": "2021-06-06T10:52:23+02:00",
          "tree_id": "0ac9a6e84eac6b15792b8a3f7088d5dc29981f33",
          "url": "https://github.com/PyO3/pyo3/commit/f9a3da3e40d83fe09205656d3dd28080caf9ecad"
        },
        "date": 1622970008989,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79121,
            "range": "± 1576",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 242376,
            "range": "± 14951",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2381423,
            "range": "± 20499",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2705775,
            "range": "± 9993",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7039686,
            "range": "± 120400",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11379047,
            "range": "± 42262",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5538717,
            "range": "± 97295",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1324546,
            "range": "± 43488",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 608181,
            "range": "± 23772",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4497,
            "range": "± 20333",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1779712,
            "range": "± 67795",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7204746,
            "range": "± 71733",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9696881,
            "range": "± 59073",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4568969,
            "range": "± 61602",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 806630,
            "range": "± 6603",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1698890,
            "range": "± 69786",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 402167,
            "range": "± 901",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd258803e7a4acced1bf7fa4be6e862cc0a7b36",
          "message": "Merge pull request #1666 from davidhewitt/bench-new-containers\n\nbenches: add benchmarks for container creation",
          "timestamp": "2021-06-06T17:58:58+08:00",
          "tree_id": "ef0c8c3c15676bf86f5d34b704903c371ec08c82",
          "url": "https://github.com/PyO3/pyo3/commit/abd258803e7a4acced1bf7fa4be6e862cc0a7b36"
        },
        "date": 1622974074935,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 105088,
            "range": "± 6172",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 310358,
            "range": "± 20415",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2932974,
            "range": "± 10668",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5863957,
            "range": "± 153548",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3453294,
            "range": "± 22141",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9071595,
            "range": "± 247269",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13949427,
            "range": "± 99751",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7160861,
            "range": "± 277440",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 24,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1598243,
            "range": "± 42425",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1771658,
            "range": "± 17721",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 839973,
            "range": "± 23019",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5325,
            "range": "± 21048",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4321,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2179548,
            "range": "± 9704",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9207123,
            "range": "± 85266",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12063959,
            "range": "± 40334",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5689344,
            "range": "± 64556",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1008099,
            "range": "± 3605",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1777493,
            "range": "± 6964",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 539134,
            "range": "± 26446",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a29097175903dedf65da28d7a44f2d033c3121be",
          "message": "Merge pull request #1650 from davidhewitt/pymodule-name\n\npymodule: accept `#[pyo3(name = \"...\")]` option",
          "timestamp": "2021-06-06T11:11:10+01:00",
          "tree_id": "2001810815903dada3323da68c4b03ed68180176",
          "url": "https://github.com/PyO3/pyo3/commit/a29097175903dedf65da28d7a44f2d033c3121be"
        },
        "date": 1622974815845,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 87919,
            "range": "± 4152",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 260780,
            "range": "± 12874",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2691965,
            "range": "± 143522",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5205353,
            "range": "± 284348",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3015461,
            "range": "± 106019",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9836873,
            "range": "± 487337",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12068100,
            "range": "± 391422",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7782242,
            "range": "± 344872",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 114,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1547525,
            "range": "± 97777",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1706607,
            "range": "± 77089",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 720486,
            "range": "± 41769",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5465,
            "range": "± 24917",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4327,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1991276,
            "range": "± 82089",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9634007,
            "range": "± 471710",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10775251,
            "range": "± 440771",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5805858,
            "range": "± 316365",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 873317,
            "range": "± 38817",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1606192,
            "range": "± 68116",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 484725,
            "range": "± 15787",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0b0bb9f39cc7345f6ab43feb3d1b50ce097f355",
          "message": "Merge pull request #1669 from PyO3/pymethod_cleanup\n\nReorganize method wrapper generation",
          "timestamp": "2021-06-07T23:19:23+01:00",
          "tree_id": "84c094321f446d555f75a7f7bfc1a8fb77b8556c",
          "url": "https://github.com/PyO3/pyo3/commit/c0b0bb9f39cc7345f6ab43feb3d1b50ce097f355"
        },
        "date": 1623104987112,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 95046,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 287528,
            "range": "± 3896",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2869039,
            "range": "± 135462",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5570102,
            "range": "± 158238",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3417777,
            "range": "± 22534",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8171398,
            "range": "± 160604",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12798714,
            "range": "± 738559",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6472116,
            "range": "± 368217",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 112,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 107,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1480822,
            "range": "± 95205",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1689134,
            "range": "± 122489",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 760396,
            "range": "± 38890",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4674,
            "range": "± 23166",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3953,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2012762,
            "range": "± 70024",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8741497,
            "range": "± 176515",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10743100,
            "range": "± 678195",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5043818,
            "range": "± 119122",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 895144,
            "range": "± 48669",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1688047,
            "range": "± 97815",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 447758,
            "range": "± 28581",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b081e37de5a6a63c9f19cfcc4e94ed7c9f58c0fc",
          "message": "Merge pull request #1665 from PyO3/kwds_varargs\n\nArgument parsing: use VARARGS for *any* function taking **kwds",
          "timestamp": "2021-06-07T23:23:05+01:00",
          "tree_id": "26321f31fbb34b78ae355d3a932459d2ce02031b",
          "url": "https://github.com/PyO3/pyo3/commit/b081e37de5a6a63c9f19cfcc4e94ed7c9f58c0fc"
        },
        "date": 1623105865935,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 95107,
            "range": "± 5646",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 274465,
            "range": "± 3844",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2844336,
            "range": "± 41921",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5695572,
            "range": "± 115070",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3290105,
            "range": "± 12817",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8877681,
            "range": "± 453979",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13278058,
            "range": "± 140157",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6937449,
            "range": "± 204681",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 123,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1540481,
            "range": "± 39861",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1740751,
            "range": "± 7461",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 809938,
            "range": "± 20898",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5080,
            "range": "± 21145",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4147,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2082912,
            "range": "± 11887",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8837412,
            "range": "± 104135",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11613365,
            "range": "± 48169",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5449343,
            "range": "± 94779",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 964967,
            "range": "± 1896",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1911059,
            "range": "± 20401",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 483953,
            "range": "± 1151",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05e4bdf69cde2bc49865fbafe756a8507dd45f1d",
          "message": "Merge pull request #1670 from mejrs/num-dependency\n\nAdd docs + slight refactor for num-complex and num-bigint dependencies",
          "timestamp": "2021-06-11T19:10:58+01:00",
          "tree_id": "722cf936bc22260d1a07ee643b7a71620cf6ed48",
          "url": "https://github.com/PyO3/pyo3/commit/05e4bdf69cde2bc49865fbafe756a8507dd45f1d"
        },
        "date": 1623436354176,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80049,
            "range": "± 1134",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 230553,
            "range": "± 14255",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2498966,
            "range": "± 29268",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4924538,
            "range": "± 116868",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2794413,
            "range": "± 11999",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9761127,
            "range": "± 847450",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13361783,
            "range": "± 147503",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7361669,
            "range": "± 523573",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 116,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1355379,
            "range": "± 30161",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1534708,
            "range": "± 39419",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 652793,
            "range": "± 17853",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4587,
            "range": "± 24279",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3457,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1821659,
            "range": "± 79974",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8056580,
            "range": "± 146631",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10325072,
            "range": "± 101127",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5027449,
            "range": "± 139410",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 817730,
            "range": "± 10305",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1693032,
            "range": "± 54069",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 456854,
            "range": "± 1337",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "159a93d7b73cf646efc54b2fec0dd7788d263541",
          "message": "Merge pull request #1673 from messense/detect-python-implementation\n\nDetect Python implementation from `SOABI` on Unix",
          "timestamp": "2021-06-12T05:34:33+08:00",
          "tree_id": "6e802774d11be47b54af9fe780a4ffc82a9f5e57",
          "url": "https://github.com/PyO3/pyo3/commit/159a93d7b73cf646efc54b2fec0dd7788d263541"
        },
        "date": 1623447784403,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 93367,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 269481,
            "range": "± 4531",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2837998,
            "range": "± 25544",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5651719,
            "range": "± 155400",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3226553,
            "range": "± 35530",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8991711,
            "range": "± 468210",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15042182,
            "range": "± 203254",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7439501,
            "range": "± 386243",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1511979,
            "range": "± 52402",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1698261,
            "range": "± 24705",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 754555,
            "range": "± 35538",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4931,
            "range": "± 22423",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4013,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2050558,
            "range": "± 27910",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8706946,
            "range": "± 125331",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11839281,
            "range": "± 334438",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5437373,
            "range": "± 130443",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 949620,
            "range": "± 11302",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1867035,
            "range": "± 27311",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 538590,
            "range": "± 9754",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a298db2c0617257c245bb9be0dfd1a743a26df58",
          "message": "Merge pull request #1674 from mejrs/make-clippy-happy\n\nallow useless conversion (on some platforms)",
          "timestamp": "2021-06-12T05:35:36+08:00",
          "tree_id": "1df10f27d7e8e5ef048af44f43ef8ea3545f33bd",
          "url": "https://github.com/PyO3/pyo3/commit/a298db2c0617257c245bb9be0dfd1a743a26df58"
        },
        "date": 1623448581110,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 93833,
            "range": "± 1842",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 285290,
            "range": "± 11138",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2994019,
            "range": "± 122849",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5822430,
            "range": "± 266249",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3416221,
            "range": "± 72208",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10198131,
            "range": "± 787638",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13278982,
            "range": "± 596148",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8296762,
            "range": "± 398101",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 116,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1626088,
            "range": "± 137702",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1748918,
            "range": "± 105705",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 763027,
            "range": "± 62806",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5233,
            "range": "± 20705",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4649,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2086244,
            "range": "± 79478",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9969082,
            "range": "± 400096",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11314896,
            "range": "± 403878",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6021200,
            "range": "± 223835",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 988453,
            "range": "± 27646",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1674817,
            "range": "± 64910",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 525752,
            "range": "± 22009",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9693604da76593c88ee6d2ad6334b1f13cfdcd2e",
          "message": "Merge pull request #1676 from aviramha/patch-1\n\nAdd ormsgpack as an example in the README",
          "timestamp": "2021-06-13T15:17:15+08:00",
          "tree_id": "f84262a99aafb9436276ab9b57d94d8258bda222",
          "url": "https://github.com/PyO3/pyo3/commit/9693604da76593c88ee6d2ad6334b1f13cfdcd2e"
        },
        "date": 1623569277584,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94127,
            "range": "± 2048",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 274523,
            "range": "± 2736",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2907900,
            "range": "± 11005",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5695786,
            "range": "± 128727",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3312370,
            "range": "± 13216",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9926205,
            "range": "± 392461",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15439786,
            "range": "± 109595",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7656395,
            "range": "± 256715",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 117,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1620517,
            "range": "± 37784",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1734859,
            "range": "± 56829",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 748627,
            "range": "± 24625",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5242,
            "range": "± 21650",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4150,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2186591,
            "range": "± 17134",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9203317,
            "range": "± 68372",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11824602,
            "range": "± 78171",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5500066,
            "range": "± 106438",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 990939,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1938458,
            "range": "± 7492",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 544057,
            "range": "± 359",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64a0391fb1bb9c8013096a7403bf49dfa3c59e5f",
          "message": "Merge pull request #1685 from mejrs/fix_ui_tests\n\nupdate error message for rust 1.53",
          "timestamp": "2021-06-20T00:28:39+08:00",
          "tree_id": "abdf654bea2bf74f2fe8a303fab111284daaa219",
          "url": "https://github.com/PyO3/pyo3/commit/64a0391fb1bb9c8013096a7403bf49dfa3c59e5f"
        },
        "date": 1624120671903,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 72160,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 208699,
            "range": "± 10562",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2085232,
            "range": "± 13278",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4359280,
            "range": "± 113612",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2415352,
            "range": "± 11796",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6554603,
            "range": "± 116804",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11721527,
            "range": "± 122052",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6533109,
            "range": "± 360220",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1217791,
            "range": "± 49189",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1368951,
            "range": "± 64761",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 594057,
            "range": "± 17852",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4051,
            "range": "± 20648",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3049,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1596540,
            "range": "± 59394",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7166085,
            "range": "± 61594",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10125025,
            "range": "± 79528",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4248320,
            "range": "± 191354",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 677346,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1377360,
            "range": "± 25669",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 387371,
            "range": "± 974",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cba18f176db5ecb355908c7532eaca76c3cc41a",
          "message": "Merge pull request #1657 from davidhewitt/pycell-init\n\npyclass: refactor `tp_new` / `tp_dealloc` / remove `PyCellInner`",
          "timestamp": "2021-06-23T08:22:23+01:00",
          "tree_id": "2b6bfb3e53b36240c509e849129f5a2e79315cca",
          "url": "https://github.com/PyO3/pyo3/commit/2cba18f176db5ecb355908c7532eaca76c3cc41a"
        },
        "date": 1624433651942,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91620,
            "range": "± 4874",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 291043,
            "range": "± 25383",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2914290,
            "range": "± 249886",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5568992,
            "range": "± 365061",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3248758,
            "range": "± 114568",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9928128,
            "range": "± 758160",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13442739,
            "range": "± 621119",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7568650,
            "range": "± 539169",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 112,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 117,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1572246,
            "range": "± 100414",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1681232,
            "range": "± 91120",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 753595,
            "range": "± 37606",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5888,
            "range": "± 21266",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4579,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2096073,
            "range": "± 75836",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9462717,
            "range": "± 545994",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11146337,
            "range": "± 439964",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5518039,
            "range": "± 264931",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 981848,
            "range": "± 41758",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1664990,
            "range": "± 118238",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 477900,
            "range": "± 54228",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc66afa159875c41d2659f65595e294ea343cd8d",
          "message": "Merge pull request #1689 from messense/bench-badge\n\nAdd a badge and link to benchmark tracking page",
          "timestamp": "2021-06-23T16:44:11+08:00",
          "tree_id": "d9e3222f50d04a68f4dadce076b1e1cb5f9e7686",
          "url": "https://github.com/PyO3/pyo3/commit/dc66afa159875c41d2659f65595e294ea343cd8d"
        },
        "date": 1624438452056,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96887,
            "range": "± 7166",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 283102,
            "range": "± 20249",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2789568,
            "range": "± 50605",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5636070,
            "range": "± 146397",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3269106,
            "range": "± 62426",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9708372,
            "range": "± 627692",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15612617,
            "range": "± 265690",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6880461,
            "range": "± 274425",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 116,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1564924,
            "range": "± 84812",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1885495,
            "range": "± 49200",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 841925,
            "range": "± 42879",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5562,
            "range": "± 27521",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3929,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2038049,
            "range": "± 39997",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8929416,
            "range": "± 204924",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11795274,
            "range": "± 177062",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5210224,
            "range": "± 128685",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 851197,
            "range": "± 7696",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1772678,
            "range": "± 90966",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 551702,
            "range": "± 18778",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41201924+aviramha@users.noreply.github.com",
            "name": "Aviram Hassan",
            "username": "aviramha"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13cd092c4e87171462f422de804f25dd630ea436",
          "message": "Update class.md - add example of `new` returning a `PyResult` (#1688)\n\n* Update class.md - add example of `new` returning a `PyResult`\r\n\r\n* Update class.md",
          "timestamp": "2021-06-23T17:40:01+08:00",
          "tree_id": "1e5539ded72723a593a410a2b51c34e9102f1480",
          "url": "https://github.com/PyO3/pyo3/commit/13cd092c4e87171462f422de804f25dd630ea436"
        },
        "date": 1624441733317,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94201,
            "range": "± 6989",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 266427,
            "range": "± 18505",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2652224,
            "range": "± 60869",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5247491,
            "range": "± 295687",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3193941,
            "range": "± 122070",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7962379,
            "range": "± 560706",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14485780,
            "range": "± 787089",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5810070,
            "range": "± 547065",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 108,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 113,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1442040,
            "range": "± 99271",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1686811,
            "range": "± 61495",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 745437,
            "range": "± 41616",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4894,
            "range": "± 23360",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3922,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1981329,
            "range": "± 42506",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8435362,
            "range": "± 494938",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11263632,
            "range": "± 676645",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4948236,
            "range": "± 169567",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 857827,
            "range": "± 23402",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1641650,
            "range": "± 136024",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 544199,
            "range": "± 27374",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14808292fed8bb3f3c10155062f1eaba2a49ee41",
          "message": "Merge pull request #1692 from GabrielMajeri/make-tracefunc-optional\n\nMake the `Py_tracefunc` parameters optional",
          "timestamp": "2021-06-24T07:29:47+01:00",
          "tree_id": "a37583ddc3b51a7adf5bc4abe12b5714dc4bbc02",
          "url": "https://github.com/PyO3/pyo3/commit/14808292fed8bb3f3c10155062f1eaba2a49ee41"
        },
        "date": 1624517151757,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78296,
            "range": "± 1416",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223224,
            "range": "± 13440",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2352257,
            "range": "± 15375",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4864355,
            "range": "± 112429",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2740622,
            "range": "± 11768",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7279658,
            "range": "± 128389",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13105489,
            "range": "± 89443",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6030200,
            "range": "± 206883",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1320099,
            "range": "± 41741",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1522844,
            "range": "± 55937",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 672237,
            "range": "± 41925",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4521,
            "range": "± 26237",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1776424,
            "range": "± 36941",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7493459,
            "range": "± 94775",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9935139,
            "range": "± 40753",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4451509,
            "range": "± 48607",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 749086,
            "range": "± 92969",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1676926,
            "range": "± 85749",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 474199,
            "range": "± 4522",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36ab8042fcf9b1fe7920fde0ec04c5ef1e4b430f",
          "message": "Merge pull request #1690 from davidhewitt/safety-docs\n\ndocs: implement final missing safety docs",
          "timestamp": "2021-06-24T07:51:28+01:00",
          "tree_id": "37ee98645fcdb85033ff9eacc691817e52c459df",
          "url": "https://github.com/PyO3/pyo3/commit/36ab8042fcf9b1fe7920fde0ec04c5ef1e4b430f"
        },
        "date": 1624518371254,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 86924,
            "range": "± 5130",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 265103,
            "range": "± 30195",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2755449,
            "range": "± 192397",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5402353,
            "range": "± 353829",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3013308,
            "range": "± 207808",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10077254,
            "range": "± 846042",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12505329,
            "range": "± 751104",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8143899,
            "range": "± 461239",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 108,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 113,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1537747,
            "range": "± 123327",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1718666,
            "range": "± 131321",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 767681,
            "range": "± 54972",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4354,
            "range": "± 21601",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3677,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2060689,
            "range": "± 164361",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8858562,
            "range": "± 570479",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10154637,
            "range": "± 476113",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5296255,
            "range": "± 392627",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 762994,
            "range": "± 50943",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1440533,
            "range": "± 153800",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 453018,
            "range": "± 39638",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a02353ce3421e2b16be790b262252d11f404a907",
          "message": "Merge pull request #1679 from messense/error-cause\n\nAdd support for setting and retrieving exception cause",
          "timestamp": "2021-06-24T07:58:34+01:00",
          "tree_id": "5a49884aaf7d910cf329ef78dd7134394a8f0eda",
          "url": "https://github.com/PyO3/pyo3/commit/a02353ce3421e2b16be790b262252d11f404a907"
        },
        "date": 1624519274636,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82363,
            "range": "± 4866",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226543,
            "range": "± 13707",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2337029,
            "range": "± 14953",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4796102,
            "range": "± 131603",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2728230,
            "range": "± 8257",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7273262,
            "range": "± 53231",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12710122,
            "range": "± 35831",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5635353,
            "range": "± 76644",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1307128,
            "range": "± 41673",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1525730,
            "range": "± 56571",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 632665,
            "range": "± 30236",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4490,
            "range": "± 26334",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3454,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1841985,
            "range": "± 34248",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7360111,
            "range": "± 154850",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9893028,
            "range": "± 86079",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4334134,
            "range": "± 34042",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 804888,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1512797,
            "range": "± 60181",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 423033,
            "range": "± 1467",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "59372212+mejrs@users.noreply.github.com",
            "name": "mejrs",
            "username": "mejrs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "455cc95c54f70a6db1e1490583e578de76a821fe",
          "message": "implement ffi/cpython/pystate (#1687)\n\n* dont reexport cpython items twice\r\n\r\n* add ffi module level doc\r\n\r\n* reorder to header file order\r\n\r\n* cargo fmt\r\n\r\n* implement cpython/pystate\r\n\r\n* fix import errors\r\n\r\n* make PyInterpreterState opaque\r\n\r\n* update changelog\r\n\r\n* fix formatting",
          "timestamp": "2021-06-24T20:05:15+08:00",
          "tree_id": "7ebb04f2e789117d0e45438079c859b991c0cb96",
          "url": "https://github.com/PyO3/pyo3/commit/455cc95c54f70a6db1e1490583e578de76a821fe"
        },
        "date": 1624536800148,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78217,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 219561,
            "range": "± 15175",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2306259,
            "range": "± 16441",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4710521,
            "range": "± 136813",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2725368,
            "range": "± 8179",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6796644,
            "range": "± 78315",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12639771,
            "range": "± 47676",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5206135,
            "range": "± 53324",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1297462,
            "range": "± 48019",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1514680,
            "range": "± 42854",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 630563,
            "range": "± 30680",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4611,
            "range": "± 26847",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3454,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1760087,
            "range": "± 45406",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7272373,
            "range": "± 43736",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9818147,
            "range": "± 37248",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4276266,
            "range": "± 29040",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 805611,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1659359,
            "range": "± 101434",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 420333,
            "range": "± 519",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf283d36cfe523acc1e3e3c80f89b527d5c8991",
          "message": "Merge pull request #832 from gilescope/macro\n\nNeed to be able to create structs via macro_rules",
          "timestamp": "2021-06-24T22:14:56+08:00",
          "tree_id": "f8b70d9f7d60d59b69ff99f2bc4dec45f7c2a66f",
          "url": "https://github.com/PyO3/pyo3/commit/3bf283d36cfe523acc1e3e3c80f89b527d5c8991"
        },
        "date": 1624544740855,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92647,
            "range": "± 2545",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 262152,
            "range": "± 14861",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2668973,
            "range": "± 78035",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5548045,
            "range": "± 258652",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3158015,
            "range": "± 142051",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8614141,
            "range": "± 382401",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15097224,
            "range": "± 683499",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6655521,
            "range": "± 400644",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 107,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 112,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1485681,
            "range": "± 54802",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1707807,
            "range": "± 106351",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 731446,
            "range": "± 29523",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4796,
            "range": "± 23620",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3853,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2079300,
            "range": "± 93413",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8545303,
            "range": "± 278957",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11438858,
            "range": "± 358233",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5047938,
            "range": "± 170870",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 935859,
            "range": "± 38657",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1631935,
            "range": "± 70530",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 477324,
            "range": "± 15684",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6009cc82cba1693da90c15f33a15e36efc982250",
          "message": "Merge pull request #1695 from messense/wrap-function-prelude\n\nAdd `wrap_pyfunction` macro to prelude",
          "timestamp": "2021-06-24T20:23:30+01:00",
          "tree_id": "5a1d9336d07c8a03c426d4d4aaa9559030822509",
          "url": "https://github.com/PyO3/pyo3/commit/6009cc82cba1693da90c15f33a15e36efc982250"
        },
        "date": 1624563157152,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 85409,
            "range": "± 4975",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 253863,
            "range": "± 19697",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2601710,
            "range": "± 87586",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5151206,
            "range": "± 181221",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2837544,
            "range": "± 89022",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8633886,
            "range": "± 611457",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12041327,
            "range": "± 705490",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6835627,
            "range": "± 348781",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 101,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 105,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1450698,
            "range": "± 65875",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1610354,
            "range": "± 140983",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 696869,
            "range": "± 42539",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4808,
            "range": "± 22692",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4184,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1947153,
            "range": "± 103337",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8901667,
            "range": "± 332094",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10542215,
            "range": "± 392648",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5182647,
            "range": "± 191323",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 874945,
            "range": "± 44596",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1597007,
            "range": "± 96897",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 446494,
            "range": "± 20555",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8b9a991d38c5912829dec45b31779ea42b19d2d",
          "message": "Merge pull request #1694 from mejrs/pyo3version\n\nautomagically update pyo3 version in toml examples",
          "timestamp": "2021-06-24T20:24:57+01:00",
          "tree_id": "b9db86f4724cd6496e95809bfdc133d7ff933663",
          "url": "https://github.com/PyO3/pyo3/commit/e8b9a991d38c5912829dec45b31779ea42b19d2d"
        },
        "date": 1624563879486,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80632,
            "range": "± 1160",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226819,
            "range": "± 14949",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2469238,
            "range": "± 34392",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4933162,
            "range": "± 119975",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3421504,
            "range": "± 161252",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8476241,
            "range": "± 592798",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13272257,
            "range": "± 230990",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7335399,
            "range": "± 659624",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1349825,
            "range": "± 57799",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1531030,
            "range": "± 237022",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 648840,
            "range": "± 20267",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4580,
            "range": "± 22530",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3509,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1834329,
            "range": "± 59165",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7812177,
            "range": "± 105429",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10183826,
            "range": "± 92571",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4716342,
            "range": "± 86061",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 805696,
            "range": "± 2648",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1520862,
            "range": "± 60299",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 421618,
            "range": "± 957",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e16bc16568489e3d0769862755f3eaa2ab521066",
          "message": "Merge pull request #1697 from scalexm/lifetime\n\nUse explicit lifetimes in proc-macro expansion",
          "timestamp": "2021-06-25T10:53:22+08:00",
          "tree_id": "2e23a9c7693dc752c705c51032a652ba56a4e0f9",
          "url": "https://github.com/PyO3/pyo3/commit/e16bc16568489e3d0769862755f3eaa2ab521066"
        },
        "date": 1624590159868,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 84441,
            "range": "± 3864",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 253238,
            "range": "± 18622",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2600295,
            "range": "± 105228",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5056185,
            "range": "± 451983",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3251904,
            "range": "± 246506",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10980416,
            "range": "± 1132991",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12056462,
            "range": "± 816583",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7282006,
            "range": "± 604802",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 99,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 111,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1482845,
            "range": "± 88945",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1516901,
            "range": "± 103901",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 717106,
            "range": "± 49110",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5042,
            "range": "± 21407",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4076,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1974448,
            "range": "± 130575",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9361523,
            "range": "± 590017",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10949355,
            "range": "± 613851",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5292195,
            "range": "± 290770",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1809822,
            "range": "± 329116",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1701273,
            "range": "± 129125",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 449369,
            "range": "± 19612",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b58fe202eb2513619d39a287bba5fc6473da8521",
          "message": "Merge pull request #1648 from davidhewitt/fix-cross-compile-config\n\npyo3-build-config: fix cross compilation",
          "timestamp": "2021-06-26T20:06:40+01:00",
          "tree_id": "57ebb5edbfae21fbb993d0ce4107add9abb8a64e",
          "url": "https://github.com/PyO3/pyo3/commit/b58fe202eb2513619d39a287bba5fc6473da8521"
        },
        "date": 1624734951449,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80286,
            "range": "± 1071",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 239186,
            "range": "± 13603",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2401694,
            "range": "± 17265",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4889866,
            "range": "± 432913",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2804349,
            "range": "± 14629",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8428441,
            "range": "± 779471",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13042352,
            "range": "± 125245",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5822016,
            "range": "± 186536",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1307507,
            "range": "± 42759",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1538291,
            "range": "± 51136",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 611445,
            "range": "± 20557",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4487,
            "range": "± 23192",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3456,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1785682,
            "range": "± 77855",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7441070,
            "range": "± 131299",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10183556,
            "range": "± 68305",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4605333,
            "range": "± 120691",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 805882,
            "range": "± 3409",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1514538,
            "range": "± 64324",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 421171,
            "range": "± 690",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11f1a1d6f0edef93c7fa0590d8d3e2c566342912",
          "message": "Merge pull request #1700 from messense/cross-compile\n\nAdd cross compilation test in CI",
          "timestamp": "2021-06-27T09:18:27+01:00",
          "tree_id": "597969835d54238b6d0ce8773007bb05ce42b71a",
          "url": "https://github.com/PyO3/pyo3/commit/11f1a1d6f0edef93c7fa0590d8d3e2c566342912"
        },
        "date": 1624782363306,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 81118,
            "range": "± 1609",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 229779,
            "range": "± 14443",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2494555,
            "range": "± 56493",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5018765,
            "range": "± 112967",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2828791,
            "range": "± 13646",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9926946,
            "range": "± 686738",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13458127,
            "range": "± 201926",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7505127,
            "range": "± 447571",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1325476,
            "range": "± 34376",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1519150,
            "range": "± 79447",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 625583,
            "range": "± 20990",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4605,
            "range": "± 23630",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3457,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1830552,
            "range": "± 72234",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10211655,
            "range": "± 148080",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10301170,
            "range": "± 56760",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4674668,
            "range": "± 133192",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 806714,
            "range": "± 2678",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1509674,
            "range": "± 39319",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 421457,
            "range": "± 524",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9249527b63d2e318f30eabe07327e707cee51b5e",
          "message": "Merge pull request #1699 from ohadravid/size_hints\n\nAdded `size_hint` impls for `{PyDict,PyList,PySet,PyTuple}Iterator`s",
          "timestamp": "2021-06-27T17:27:26+01:00",
          "tree_id": "fbbc4397c5c7b3ec495739b89b1cd5a87bdcc0f2",
          "url": "https://github.com/PyO3/pyo3/commit/9249527b63d2e318f30eabe07327e707cee51b5e"
        },
        "date": 1624811714820,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79178,
            "range": "± 7172",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 231718,
            "range": "± 24393",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2462760,
            "range": "± 174034",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4837529,
            "range": "± 366075",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2764336,
            "range": "± 174654",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9167565,
            "range": "± 620319",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11208562,
            "range": "± 645509",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7430082,
            "range": "± 521907",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 96,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 105,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1344356,
            "range": "± 134906",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1543637,
            "range": "± 148532",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 653316,
            "range": "± 60241",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4671,
            "range": "± 21999",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3851,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1845306,
            "range": "± 145353",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9146310,
            "range": "± 838072",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9827104,
            "range": "± 590375",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5312050,
            "range": "± 262244",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 810034,
            "range": "± 45261",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1531470,
            "range": "± 142440",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 424449,
            "range": "± 26842",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "021505401275cfe4065ff87c8e713f93c0f2f9d7",
          "message": "Merge pull request #1702 from ohadravid/to-python-set-non-default-hashbuilder\n\nMake `ToPyObject` impl for `HashSet` accept non-default hashers.",
          "timestamp": "2021-06-27T17:29:00+01:00",
          "tree_id": "b6308da7f890f2dda74e1a25cfd86fadc8c224fd",
          "url": "https://github.com/PyO3/pyo3/commit/021505401275cfe4065ff87c8e713f93c0f2f9d7"
        },
        "date": 1624812697289,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 95289,
            "range": "± 2019",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 272597,
            "range": "± 5220",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2829435,
            "range": "± 14166",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5779008,
            "range": "± 144765",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3391882,
            "range": "± 38422",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9701607,
            "range": "± 950283",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15540333,
            "range": "± 142917",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6893626,
            "range": "± 276709",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 114,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1519733,
            "range": "± 43405",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1735584,
            "range": "± 16305",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 721002,
            "range": "± 20543",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5093,
            "range": "± 21412",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4148,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2111931,
            "range": "± 16861",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8787561,
            "range": "± 108565",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11721510,
            "range": "± 68862",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5360652,
            "range": "± 84371",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 967531,
            "range": "± 6158",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1724823,
            "range": "± 5630",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 505777,
            "range": "± 723",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "542a6124b135ddf098783040889f7ea8ecdea685",
          "message": "Merge pull request #1696 from scalexm/unwrap\n\nUnwrap `syn::*::Group` in a few places",
          "timestamp": "2021-06-29T22:12:49+01:00",
          "tree_id": "b2465765caafe8316a4f69ad3f470f01fa54e2f8",
          "url": "https://github.com/PyO3/pyo3/commit/542a6124b135ddf098783040889f7ea8ecdea685"
        },
        "date": 1625001761298,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96489,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 291471,
            "range": "± 5263",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2871578,
            "range": "± 31827",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5852402,
            "range": "± 134493",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3374678,
            "range": "± 33105",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10431557,
            "range": "± 691905",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15804550,
            "range": "± 105179",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7398960,
            "range": "± 539560",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 114,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1631690,
            "range": "± 28000",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1745571,
            "range": "± 25386",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 735612,
            "range": "± 34751",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5038,
            "range": "± 20825",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4149,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2147618,
            "range": "± 11433",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9060976,
            "range": "± 104695",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11842844,
            "range": "± 61503",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5441156,
            "range": "± 86462",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 969880,
            "range": "± 2260",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1729737,
            "range": "± 7242",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 508234,
            "range": "± 744",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c179c8844f17d8c6fdeb249f9ac37634f614e22b",
          "message": "Merge pull request #1706 from davidhewitt/ignore-coverage-tests\n\ncoverage: ignore tests",
          "timestamp": "2021-06-30T08:58:01+01:00",
          "tree_id": "f669178a1c4353ad1e882a4206ee89457f31a317",
          "url": "https://github.com/PyO3/pyo3/commit/c179c8844f17d8c6fdeb249f9ac37634f614e22b"
        },
        "date": 1625040348930,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 84317,
            "range": "± 1375",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 206538,
            "range": "± 11618",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2389132,
            "range": "± 27710",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4887290,
            "range": "± 117625",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2482545,
            "range": "± 16580",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6811788,
            "range": "± 305669",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11309706,
            "range": "± 87865",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5199809,
            "range": "± 158479",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1353671,
            "range": "± 78756",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1512653,
            "range": "± 44195",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 620205,
            "range": "± 23566",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4430,
            "range": "± 26786",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1576200,
            "range": "± 48206",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 6538796,
            "range": "± 113060",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 8806610,
            "range": "± 59522",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4078708,
            "range": "± 93964",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 824664,
            "range": "± 2201",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1374561,
            "range": "± 59674",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 420960,
            "range": "± 634",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5715683892b99bf3f2e4fb928a7c7048f9c27b68",
          "message": "Merge pull request #1711 from mejrs/macro\n\nAdd full path for PyCell",
          "timestamp": "2021-07-03T08:19:30+01:00",
          "tree_id": "aedefb56c31e0b7e2409e69a8428e2072eadb899",
          "url": "https://github.com/PyO3/pyo3/commit/5715683892b99bf3f2e4fb928a7c7048f9c27b68"
        },
        "date": 1625297387052,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 101509,
            "range": "± 11106",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 304359,
            "range": "± 18939",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3137931,
            "range": "± 228350",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6220702,
            "range": "± 533515",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3603057,
            "range": "± 224337",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 12270578,
            "range": "± 1419543",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14137048,
            "range": "± 949742",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 9925397,
            "range": "± 1318158",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 118,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 130,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1667700,
            "range": "± 285874",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1788172,
            "range": "± 101806",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 801070,
            "range": "± 54437",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5381,
            "range": "± 21673",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4844,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2350212,
            "range": "± 129385",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 14057981,
            "range": "± 798942",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12970573,
            "range": "± 665320",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6930036,
            "range": "± 489246",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1047505,
            "range": "± 58004",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1875871,
            "range": "± 164915",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 548753,
            "range": "± 50275",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5715683892b99bf3f2e4fb928a7c7048f9c27b68",
          "message": "Merge pull request #1711 from mejrs/macro\n\nAdd full path for PyCell",
          "timestamp": "2021-07-03T08:19:30+01:00",
          "tree_id": "aedefb56c31e0b7e2409e69a8428e2072eadb899",
          "url": "https://github.com/PyO3/pyo3/commit/5715683892b99bf3f2e4fb928a7c7048f9c27b68"
        },
        "date": 1625319946054,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92503,
            "range": "± 1591",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 266477,
            "range": "± 6018",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2750207,
            "range": "± 34769",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5668177,
            "range": "± 145204",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3288924,
            "range": "± 36317",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8685291,
            "range": "± 478629",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13084328,
            "range": "± 156775",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6872163,
            "range": "± 406322",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 112,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 116,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1519713,
            "range": "± 69890",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1678975,
            "range": "± 30895",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 727716,
            "range": "± 27415",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4980,
            "range": "± 23454",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4082,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2064917,
            "range": "± 32213",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9148360,
            "range": "± 171484",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11420240,
            "range": "± 147149",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5162403,
            "range": "± 148205",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 977357,
            "range": "± 11389",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1849702,
            "range": "± 30576",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 494235,
            "range": "± 7691",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b88dd156e44dbfdc987af23a21d3e5139990b79",
          "message": "Merge pull request #1698 from PyO3/release-0.14\n\nrelease: 0.14.0",
          "timestamp": "2021-07-03T22:29:05+01:00",
          "tree_id": "b73bbf44caf02787877df5fcb66735badb30ba23",
          "url": "https://github.com/PyO3/pyo3/commit/4b88dd156e44dbfdc987af23a21d3e5139990b79"
        },
        "date": 1625348320460,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96503,
            "range": "± 3468",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 271395,
            "range": "± 4947",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3085613,
            "range": "± 49182",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5735884,
            "range": "± 128665",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3291802,
            "range": "± 32598",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10369750,
            "range": "± 503823",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13649367,
            "range": "± 175113",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8216157,
            "range": "± 478528",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 112,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1535583,
            "range": "± 32299",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1743105,
            "range": "± 12972",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 790493,
            "range": "± 20856",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5072,
            "range": "± 21874",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4133,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2130762,
            "range": "± 20405",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9164914,
            "range": "± 118746",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11986466,
            "range": "± 123593",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5673193,
            "range": "± 93465",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 959514,
            "range": "± 9404",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1749721,
            "range": "± 7502",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 504724,
            "range": "± 3262",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cdb6a0d635c01448dbc2c3cb4a1a94264a078d3",
          "message": "Merge pull request #1712 from messense/pathbuf-into-py\n\nImplement `IntoPy<PyObject>` for `&PathBuf` and `&OsString`",
          "timestamp": "2021-07-04T16:45:16+08:00",
          "tree_id": "0f88e040343bdb4bb9583633d521ba962cbc1784",
          "url": "https://github.com/PyO3/pyo3/commit/9cdb6a0d635c01448dbc2c3cb4a1a94264a078d3"
        },
        "date": 1625388779225,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 81383,
            "range": "± 4701",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 245317,
            "range": "± 18259",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2519212,
            "range": "± 87494",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5198666,
            "range": "± 239486",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2886462,
            "range": "± 151501",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7817523,
            "range": "± 418911",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12583608,
            "range": "± 594053",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6329644,
            "range": "± 308173",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 92,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 97,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1267477,
            "range": "± 95970",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1526873,
            "range": "± 147162",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 607496,
            "range": "± 45442",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4494,
            "range": "± 21850",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3399,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1825735,
            "range": "± 117375",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7329595,
            "range": "± 486870",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10480839,
            "range": "± 479848",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5172581,
            "range": "± 189465",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 837468,
            "range": "± 37623",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1777484,
            "range": "± 92926",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 457899,
            "range": "± 20738",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ed0383e41ea3b27203117978546f91f1867aac8",
          "message": "Merge pull request #1713 from PyO3/pypy_macros\n\nPyPy: the PyList/Tuple_GET/SET macros are defined as functions",
          "timestamp": "2021-07-04T15:59:56+01:00",
          "tree_id": "31b35cc785358bdef750ab0e12dc8825e1db1559",
          "url": "https://github.com/PyO3/pyo3/commit/4ed0383e41ea3b27203117978546f91f1867aac8"
        },
        "date": 1625412025828,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 77821,
            "range": "± 2390",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 206490,
            "range": "± 11779",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2154168,
            "range": "± 16895",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4401563,
            "range": "± 109503",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2479799,
            "range": "± 15983",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6808343,
            "range": "± 355545",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 10031612,
            "range": "± 74864",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5392214,
            "range": "± 226330",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1296229,
            "range": "± 40655",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1560918,
            "range": "± 47261",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 558122,
            "range": "± 21413",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4032,
            "range": "± 26263",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3048,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1599350,
            "range": "± 53932",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 6707507,
            "range": "± 116154",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 8950326,
            "range": "± 55876",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4049712,
            "range": "± 79558",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 682387,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1371799,
            "range": "± 52633",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 361156,
            "range": "± 2324",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fde42110814157bc32c88f2d72d70d19a2cd71c0",
          "message": "Merge pull request #1707 from nw0/doc\n\nDocument some undocumented items",
          "timestamp": "2021-07-04T16:35:17+01:00",
          "tree_id": "fd98655d0af98794be58dee7f31f3d851ec03881",
          "url": "https://github.com/PyO3/pyo3/commit/fde42110814157bc32c88f2d72d70d19a2cd71c0"
        },
        "date": 1625413861020,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80642,
            "range": "± 1365",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 237463,
            "range": "± 13465",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2408839,
            "range": "± 17752",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4890636,
            "range": "± 104217",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2778588,
            "range": "± 11555",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7240685,
            "range": "± 126450",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11214288,
            "range": "± 71383",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5361223,
            "range": "± 75596",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1368807,
            "range": "± 50735",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1499349,
            "range": "± 42343",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 624387,
            "range": "± 20319",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3946,
            "range": "± 18789",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3008,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1803325,
            "range": "± 47353",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7070980,
            "range": "± 80436",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9798432,
            "range": "± 36992",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4316429,
            "range": "± 35850",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 774481,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1480850,
            "range": "± 67813",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 415922,
            "range": "± 1778",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4001fdf56f7da188ba18dbdf21c5aa8c40566e50",
          "message": "Merge pull request #1716 from PyO3/release-0.14.1\n\nrelease: 0.14.1",
          "timestamp": "2021-07-04T22:23:06+01:00",
          "tree_id": "17467d1adb719ed0bd019328b9bbf00b6d376b8b",
          "url": "https://github.com/PyO3/pyo3/commit/4001fdf56f7da188ba18dbdf21c5aa8c40566e50"
        },
        "date": 1625434311647,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 73665,
            "range": "± 4748",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 212721,
            "range": "± 14039",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2201382,
            "range": "± 78230",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4499561,
            "range": "± 226738",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2568892,
            "range": "± 162824",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6687818,
            "range": "± 276219",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11957680,
            "range": "± 869667",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5385407,
            "range": "± 268416",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1320947,
            "range": "± 110614",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1421179,
            "range": "± 95971",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 604728,
            "range": "± 35258",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4139,
            "range": "± 21122",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3229,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1669910,
            "range": "± 82857",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 6567459,
            "range": "± 295217",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9125107,
            "range": "± 419176",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4023992,
            "range": "± 186024",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 754323,
            "range": "± 36581",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1402380,
            "range": "± 85152",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 372993,
            "range": "± 16842",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "584fc6fe42a8ec6fe7fa55ff98aec8bf8471e134",
          "message": "Merge pull request #1722 from davidhewitt/pymodule-doc-hidden\n\nmacros-backend: don't error on #[doc(hidden)]",
          "timestamp": "2021-07-09T10:41:55+08:00",
          "tree_id": "50cb1e6a505987853b900600f530c14e8ad8e5c3",
          "url": "https://github.com/PyO3/pyo3/commit/584fc6fe42a8ec6fe7fa55ff98aec8bf8471e134"
        },
        "date": 1625799123783,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94188,
            "range": "± 6058",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 297150,
            "range": "± 27465",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3067173,
            "range": "± 149361",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5950751,
            "range": "± 299963",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3576322,
            "range": "± 131684",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 11863057,
            "range": "± 857944",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14081315,
            "range": "± 1146215",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8973258,
            "range": "± 614716",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 122,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 128,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1733383,
            "range": "± 87662",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1833131,
            "range": "± 68703",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 823181,
            "range": "± 64051",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5353,
            "range": "± 23650",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4860,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2298665,
            "range": "± 91396",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11015409,
            "range": "± 654004",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13490267,
            "range": "± 736551",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6671999,
            "range": "± 258832",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 976609,
            "range": "± 82374",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1969602,
            "range": "± 116104",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 559156,
            "range": "± 31280",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8107c86682093e4e52ecf07a39f369ba61030b41",
          "message": "Merge pull request #1710 from mejrs/pyt\n\nImprove Py<...> documentation",
          "timestamp": "2021-07-15T08:23:17+01:00",
          "tree_id": "3e4cacdb94e4717dc90b5c16120f1189de80c045",
          "url": "https://github.com/PyO3/pyo3/commit/8107c86682093e4e52ecf07a39f369ba61030b41"
        },
        "date": 1626334372662,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 90704,
            "range": "± 2855",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 255950,
            "range": "± 16282",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2933240,
            "range": "± 51101",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5969321,
            "range": "± 163285",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3204399,
            "range": "± 67867",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8370347,
            "range": "± 533614",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13301161,
            "range": "± 385425",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6497751,
            "range": "± 338508",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 111,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 113,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1475486,
            "range": "± 87130",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1759204,
            "range": "± 47012",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 742371,
            "range": "± 28434",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4886,
            "range": "± 23428",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4008,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1979684,
            "range": "± 41637",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8373129,
            "range": "± 271740",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11098021,
            "range": "± 335251",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5011616,
            "range": "± 148291",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 929634,
            "range": "± 30859",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1762659,
            "range": "± 33485",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 460681,
            "range": "± 9768",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15a193da21a7207d7b0ffbba0ce6413903254ef1",
          "message": "Merge pull request #1726 from alex/patch-1\n\nworkaround an issue that causes function arguments to show up as if they are uncovered",
          "timestamp": "2021-07-15T20:03:59+01:00",
          "tree_id": "16d6922ab2cd97072494c0e01a278926727c4332",
          "url": "https://github.com/PyO3/pyo3/commit/15a193da21a7207d7b0ffbba0ce6413903254ef1"
        },
        "date": 1626377318591,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 90976,
            "range": "± 4194",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 275774,
            "range": "± 12770",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2729437,
            "range": "± 121501",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5361208,
            "range": "± 234586",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3171683,
            "range": "± 133392",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10110821,
            "range": "± 743198",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13165837,
            "range": "± 717158",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8147201,
            "range": "± 398321",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 108,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 112,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1520861,
            "range": "± 101029",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1678774,
            "range": "± 124120",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 726524,
            "range": "± 43857",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5127,
            "range": "± 23127",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4327,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2014251,
            "range": "± 59725",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9721995,
            "range": "± 397948",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10956885,
            "range": "± 332253",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5815662,
            "range": "± 225117",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 878132,
            "range": "± 32682",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1690579,
            "range": "± 66778",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 492796,
            "range": "± 17490",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "068946c9787d411be8c047267cb87c8182b6ccd9",
          "message": "Merge pull request #1727 from nihaals/fix-badge\n\nFix crates.io badge",
          "timestamp": "2021-07-16T10:41:02+08:00",
          "tree_id": "ede8ea23e140dfc79698b1ec37ba717dd956fa7c",
          "url": "https://github.com/PyO3/pyo3/commit/068946c9787d411be8c047267cb87c8182b6ccd9"
        },
        "date": 1626403710941,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78136,
            "range": "± 1907",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 224031,
            "range": "± 13574",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2538522,
            "range": "± 19073",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5197496,
            "range": "± 120075",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2892463,
            "range": "± 16578",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7277888,
            "range": "± 567262",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11762566,
            "range": "± 81953",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5789256,
            "range": "± 226721",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1303540,
            "range": "± 61544",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1606131,
            "range": "± 60218",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 658283,
            "range": "± 24745",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4537,
            "range": "± 26229",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3455,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1773211,
            "range": "± 59674",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7396406,
            "range": "± 135504",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9973074,
            "range": "± 88907",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4645748,
            "range": "± 90691",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 811852,
            "range": "± 1386",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1736835,
            "range": "± 81854",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 403036,
            "range": "± 652",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f2627aac2901dd2f384480c4ecfd46bfad0beca",
          "message": "Merge pull request #1725 from davidhewitt/build-errors\n\npyo3-build-config: improve error messaging",
          "timestamp": "2021-07-17T09:59:26+01:00",
          "tree_id": "f72d02488bc6dab09a59a68ef8b7f2f89066abe9",
          "url": "https://github.com/PyO3/pyo3/commit/5f2627aac2901dd2f384480c4ecfd46bfad0beca"
        },
        "date": 1626512925258,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 86216,
            "range": "± 4198",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 248843,
            "range": "± 19528",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2907235,
            "range": "± 89042",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5746429,
            "range": "± 189834",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3219276,
            "range": "± 109912",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7696184,
            "range": "± 405408",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13459044,
            "range": "± 557364",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6439639,
            "range": "± 288710",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 111,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1512221,
            "range": "± 71551",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1772370,
            "range": "± 37110",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 742647,
            "range": "± 40414",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4974,
            "range": "± 23367",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3789,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1975833,
            "range": "± 73383",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8115606,
            "range": "± 296487",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11192735,
            "range": "± 319289",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4911305,
            "range": "± 211720",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 925271,
            "range": "± 29811",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1711176,
            "range": "± 44102",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 476232,
            "range": "± 6596",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00d2d080ed3b3c25e166a7a7344cf33d97309e89",
          "message": "Merge pull request #1731 from davidhewitt/buf_and_str\n\npyo3-pytests: remove memory leak test",
          "timestamp": "2021-07-19T18:15:48+01:00",
          "tree_id": "f498fa2344170b263a18359b7979f3b35927472c",
          "url": "https://github.com/PyO3/pyo3/commit/00d2d080ed3b3c25e166a7a7344cf33d97309e89"
        },
        "date": 1626715551571,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82190,
            "range": "± 7556",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 262950,
            "range": "± 22591",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2808424,
            "range": "± 139837",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5658088,
            "range": "± 431363",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3400703,
            "range": "± 175623",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10734132,
            "range": "± 842362",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13141666,
            "range": "± 728302",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8366428,
            "range": "± 409226",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 114,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1556172,
            "range": "± 104648",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1701652,
            "range": "± 104041",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 721829,
            "range": "± 51419",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5370,
            "range": "± 22922",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4400,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2023949,
            "range": "± 109485",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9845151,
            "range": "± 471302",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11082075,
            "range": "± 506250",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5973879,
            "range": "± 254454",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 910100,
            "range": "± 39663",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1911035,
            "range": "± 91850",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 498492,
            "range": "± 26687",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bac1345f4de96480265a6fb4391a98187d52ee7e",
          "message": "Merge pull request #1730 from davidhewitt/pypy-pytests\n\npyo3-pytests: cover more tests on PyPy",
          "timestamp": "2021-07-19T18:16:06+01:00",
          "tree_id": "21b8a140b58c6a1999a50e8065c070ed8ef419bd",
          "url": "https://github.com/PyO3/pyo3/commit/bac1345f4de96480265a6fb4391a98187d52ee7e"
        },
        "date": 1626715560998,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 86760,
            "range": "± 8151",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 278864,
            "range": "± 19326",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2833157,
            "range": "± 213176",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5687323,
            "range": "± 442362",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3291215,
            "range": "± 241404",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10313647,
            "range": "± 1082994",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13263574,
            "range": "± 1211234",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8345261,
            "range": "± 747588",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 113,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 117,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1597312,
            "range": "± 123256",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1638544,
            "range": "± 157195",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 717890,
            "range": "± 69611",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5325,
            "range": "± 22976",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4418,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2135256,
            "range": "± 165528",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10135661,
            "range": "± 953586",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11395654,
            "range": "± 911718",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6188494,
            "range": "± 564145",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 891167,
            "range": "± 71405",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1727974,
            "range": "± 148669",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 503368,
            "range": "± 40924",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "614fab7a15d13e68ac110ba3cc2b886eca8d4938",
          "message": "Merge pull request #1729 from davidhewitt/print-config\n\npyo3-build-config: add print-config helper",
          "timestamp": "2021-07-19T20:36:11+01:00",
          "tree_id": "eda4ca0ee426b19ed89888775022910f997770c0",
          "url": "https://github.com/PyO3/pyo3/commit/614fab7a15d13e68ac110ba3cc2b886eca8d4938"
        },
        "date": 1626723847433,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94867,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 270684,
            "range": "± 3191",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2981108,
            "range": "± 20210",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5969359,
            "range": "± 135149",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3389883,
            "range": "± 17362",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8807853,
            "range": "± 337236",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14084010,
            "range": "± 191383",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6868989,
            "range": "± 226848",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 114,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 118,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1532566,
            "range": "± 56780",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1805922,
            "range": "± 8323",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 779266,
            "range": "± 27950",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5031,
            "range": "± 21087",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4145,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2091243,
            "range": "± 13650",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11912247,
            "range": "± 152809",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11860190,
            "range": "± 137503",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5425956,
            "range": "± 78559",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 985174,
            "range": "± 32708",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1977531,
            "range": "± 5559",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 487033,
            "range": "± 637",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7957521b78a48f07f9b6a67ff7a388d75494f972",
          "message": "Merge pull request #1732 from davidhewitt/no-bench-alert\n\nbench: don't alert on CI benchmark changes",
          "timestamp": "2021-07-20T08:40:37+08:00",
          "tree_id": "767d830d955ab81eeedfa6a6cf70d1e77d310934",
          "url": "https://github.com/PyO3/pyo3/commit/7957521b78a48f07f9b6a67ff7a388d75494f972"
        },
        "date": 1626742129973,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 85801,
            "range": "± 3397",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 269978,
            "range": "± 17430",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2831395,
            "range": "± 137180",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5360234,
            "range": "± 261437",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3170087,
            "range": "± 163780",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10323753,
            "range": "± 680526",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12766253,
            "range": "± 496377",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8006856,
            "range": "± 381390",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 109,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1555583,
            "range": "± 97027",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1726113,
            "range": "± 99883",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 729162,
            "range": "± 40551",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5187,
            "range": "± 22099",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4422,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2059568,
            "range": "± 90519",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9889748,
            "range": "± 833525",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11589292,
            "range": "± 953085",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5989229,
            "range": "± 281882",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 913336,
            "range": "± 44411",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1836490,
            "range": "± 91309",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 513529,
            "range": "± 28786",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f72a9657d33ff579e5d120ab13c5fe8da0643051",
          "message": "Merge pull request #1735 from davidhewitt/mdbook-0.4.10\n\nguide: bump mdbook to 0.4.10",
          "timestamp": "2021-07-21T07:52:41+01:00",
          "tree_id": "3dd2ae26a8d0d6eca84ef5755ca2133145c9c08e",
          "url": "https://github.com/PyO3/pyo3/commit/f72a9657d33ff579e5d120ab13c5fe8da0643051"
        },
        "date": 1626850914634,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79505,
            "range": "± 2437",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 228080,
            "range": "± 14119",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2599347,
            "range": "± 34286",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5243551,
            "range": "± 138841",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2903765,
            "range": "± 23746",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10092841,
            "range": "± 630648",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12023546,
            "range": "± 134491",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7301757,
            "range": "± 466858",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1319837,
            "range": "± 24452",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1590892,
            "range": "± 45624",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 654112,
            "range": "± 17876",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4469,
            "range": "± 21023",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3458,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2077770,
            "range": "± 616893",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7785190,
            "range": "± 142937",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10327670,
            "range": "± 77325",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5073271,
            "range": "± 109426",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 822775,
            "range": "± 10633",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1554612,
            "range": "± 32575",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 404989,
            "range": "± 3276",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14852634+Eric-Arellano@users.noreply.github.com",
            "name": "Eric Arellano",
            "username": "Eric-Arellano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ab7b1fad140bd3fb7c0e0b8f620a27c9576a3b9",
          "message": "Rewrite `module.md` for clarity and add tip on code organization (#1693)\n\n* Rewrite `module.md` for clarity and add tip on code organization\r\n\r\n* Add section on how to build the guide + add workaround proposed by David\r\n\r\n* Make more clear references to #1709",
          "timestamp": "2021-07-22T08:10:32+01:00",
          "tree_id": "03cc73534200abe08a0c08965346a37ab9f43f95",
          "url": "https://github.com/PyO3/pyo3/commit/9ab7b1fad140bd3fb7c0e0b8f620a27c9576a3b9"
        },
        "date": 1626939239272,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 76447,
            "range": "± 1856",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 217625,
            "range": "± 13855",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2402092,
            "range": "± 24800",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4879635,
            "range": "± 133508",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2770882,
            "range": "± 11392",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6642876,
            "range": "± 57646",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11144905,
            "range": "± 39729",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5281124,
            "range": "± 53625",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1381978,
            "range": "± 49418",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1575412,
            "range": "± 43323",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 633739,
            "range": "± 24069",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4520,
            "range": "± 25506",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3507,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1732378,
            "range": "± 41232",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7068660,
            "range": "± 41929",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9791934,
            "range": "± 90399",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4258429,
            "range": "± 43976",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 826261,
            "range": "± 3454",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1537647,
            "range": "± 74812",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 403857,
            "range": "± 934",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ivan.ivancps.cn@gmail.com",
            "name": "Ivan Carvalho",
            "username": "IvanIsCoding"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd0e0d808fdc2100628a88bdcebe93c2cf366a5d",
          "message": "Add optional support for conversion from `indexmap::IndexMap` (#1728)\n\n* Add support to IndexMap\r\n\r\n* Fix indexmap version to 1.6.2\r\n\r\n* Remove code duplication by mistake\r\n\r\n* Fix ambiguity in test\r\n\r\n* Minor change for doc.rs\r\n\r\n* Add to lib.rs docstring\r\n\r\n* Add indexmap to conversion table\r\n\r\n* Add indexmap flag in docs.rs action\r\n\r\n* Add indexmap feature to CI\r\n\r\n* Add note in changelog\r\n\r\n* Use with_gil in tests\r\n\r\n* Move code to src/conversions/indexmap.rs\r\n\r\n* Add PR number to CHANGELOG\r\n\r\nCo-authored-by: David Hewitt <1939362+davidhewitt@users.noreply.github.com>\r\n\r\n* Add round trip test\r\n\r\n* Fix issue in MSRV Ubuntu build\r\n\r\n* Fix Github workflow syntax\r\n\r\n* Yet Another Attempt to Fix MSRV Ubuntu build\r\n\r\n* Specify hashbrown to avoid ambiguity in CI\r\n\r\n* Add suggestions\r\n\r\n* More flexible version for indexmap\r\n\r\n* Add documentation\r\n\r\n* Address PR comments\r\n\r\n* Export indexmap for docs\r\n\r\nCo-authored-by: David Hewitt <1939362+davidhewitt@users.noreply.github.com>",
          "timestamp": "2021-07-22T08:15:26+01:00",
          "tree_id": "1e98c7c2cf0a72aabb5a6f2ba50b0e576afb5752",
          "url": "https://github.com/PyO3/pyo3/commit/bd0e0d808fdc2100628a88bdcebe93c2cf366a5d"
        },
        "date": 1626939295457,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 70279,
            "range": "± 4467",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 224696,
            "range": "± 13519",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2290557,
            "range": "± 209660",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4385495,
            "range": "± 353982",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2535631,
            "range": "± 168745",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8400804,
            "range": "± 741549",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 10364115,
            "range": "± 749881",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6903745,
            "range": "± 459633",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 14,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 96,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 94,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1415275,
            "range": "± 155119",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1456065,
            "range": "± 160564",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 596412,
            "range": "± 57616",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4744,
            "range": "± 22183",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3717,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2002963,
            "range": "± 166561",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8393200,
            "range": "± 504430",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9247607,
            "range": "± 410397",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4956975,
            "range": "± 283412",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 736668,
            "range": "± 35864",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1445704,
            "range": "± 112318",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 415227,
            "range": "± 24104",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "243e5eea13a14bd59cb76fa411492f620040d336",
          "message": "Merge pull request #1734 from davidhewitt/latest-tag\n\nguide: add latest symlink",
          "timestamp": "2021-07-24T08:38:07+01:00",
          "tree_id": "9cebdb9f037977b7b594fa792f0c1da4a5aab1a6",
          "url": "https://github.com/PyO3/pyo3/commit/243e5eea13a14bd59cb76fa411492f620040d336"
        },
        "date": 1627112823311,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78113,
            "range": "± 1848",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 222789,
            "range": "± 14299",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2506086,
            "range": "± 18406",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5146955,
            "range": "± 119654",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2904638,
            "range": "± 12400",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7701473,
            "range": "± 347759",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13097849,
            "range": "± 109091",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5944155,
            "range": "± 298002",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1297490,
            "range": "± 66129",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1577256,
            "range": "± 86821",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 642460,
            "range": "± 24770",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4520,
            "range": "± 23550",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3456,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1768952,
            "range": "± 66841",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7335989,
            "range": "± 141311",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10004104,
            "range": "± 118253",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4490707,
            "range": "± 82309",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 778861,
            "range": "± 1155",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1554905,
            "range": "± 58130",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 421607,
            "range": "± 315",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a0f46b35d2e362fb8c5baaf17b422e20f98cb1d",
          "message": "Merge pull request #1737 from davidhewitt/pypy-buffer\n\npypy: fix FFI definition of Py_Buffer",
          "timestamp": "2021-07-24T16:28:08+08:00",
          "tree_id": "d95fb16507f08984501047a53e164a65e0c97add",
          "url": "https://github.com/PyO3/pyo3/commit/1a0f46b35d2e362fb8c5baaf17b422e20f98cb1d"
        },
        "date": 1627117147888,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78628,
            "range": "± 5414",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 233225,
            "range": "± 17324",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2622561,
            "range": "± 221011",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4712728,
            "range": "± 338727",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3300067,
            "range": "± 341167",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9780202,
            "range": "± 588606",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11918652,
            "range": "± 809399",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7741489,
            "range": "± 533464",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 110,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1480997,
            "range": "± 111222",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1685710,
            "range": "± 125545",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 707049,
            "range": "± 47742",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5356,
            "range": "± 22629",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3985,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1834973,
            "range": "± 128874",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8856618,
            "range": "± 567813",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9843256,
            "range": "± 639192",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5532803,
            "range": "± 357996",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 785809,
            "range": "± 47703",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1516189,
            "range": "± 150199",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 480857,
            "range": "± 29327",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a71f820995b506b468067fa41cca63c885b3b35",
          "message": "Merge pull request #1724 from davidhewitt/err-new-no-gil\n\nerr: don't use with_gil internally in PyErr::new()",
          "timestamp": "2021-07-24T10:13:50+01:00",
          "tree_id": "197f2fc38b104193f9e54362115a253836375fc9",
          "url": "https://github.com/PyO3/pyo3/commit/4a71f820995b506b468067fa41cca63c885b3b35"
        },
        "date": 1627118600591,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92420,
            "range": "± 3286",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 255265,
            "range": "± 7603",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2914091,
            "range": "± 67350",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5986673,
            "range": "± 140955",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3227655,
            "range": "± 78765",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8578497,
            "range": "± 528120",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15079024,
            "range": "± 302023",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6275339,
            "range": "± 250840",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 114,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 117,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1542294,
            "range": "± 39823",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1796694,
            "range": "± 51446",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 734619,
            "range": "± 25012",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4951,
            "range": "± 24498",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3889,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1989464,
            "range": "± 56315",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10638356,
            "range": "± 289785",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11175379,
            "range": "± 274247",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5075707,
            "range": "± 127873",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 865437,
            "range": "± 22571",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1722567,
            "range": "± 44793",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 515896,
            "range": "± 14049",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbe0e846b0d3c0500de117db83317baaace79eaf",
          "message": "Merge pull request #1738 from davidhewitt/latest-links\n\ndocs: use pyo3.rs/latest instead of pyo3.rs/main",
          "timestamp": "2021-07-24T17:57:03+01:00",
          "tree_id": "94b0d69e9b5767e0cc73a12bfd3830e925f048a2",
          "url": "https://github.com/PyO3/pyo3/commit/bbe0e846b0d3c0500de117db83317baaace79eaf"
        },
        "date": 1627146405020,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 81946,
            "range": "± 1229",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 230532,
            "range": "± 12458",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2770726,
            "range": "± 88934",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5312598,
            "range": "± 140867",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2952358,
            "range": "± 35177",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 13820749,
            "range": "± 2604645",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14001258,
            "range": "± 267685",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 9446523,
            "range": "± 2252926",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1367543,
            "range": "± 41505",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1643613,
            "range": "± 45753",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 649181,
            "range": "± 17841",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4583,
            "range": "± 25290",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3511,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1906767,
            "range": "± 82664",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8528324,
            "range": "± 409070",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10413019,
            "range": "± 245346",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5397333,
            "range": "± 375260",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 767694,
            "range": "± 4518",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1578291,
            "range": "± 29020",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 454746,
            "range": "± 1184",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32414676c39ff3ad0552850a71a6ba969a743614",
          "message": "Merge pull request #1740 from davidhewitt/mod-tests\n\ntesting: use `mod tests` instead of `mod test`",
          "timestamp": "2021-07-26T19:31:36+01:00",
          "tree_id": "b0fb5c54c2ab9fc4d804982ecc2b3553de705979",
          "url": "https://github.com/PyO3/pyo3/commit/32414676c39ff3ad0552850a71a6ba969a743614"
        },
        "date": 1627324917562,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92738,
            "range": "± 2951",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 289921,
            "range": "± 8660",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2993229,
            "range": "± 61122",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5815860,
            "range": "± 173259",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3519319,
            "range": "± 154297",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 16869070,
            "range": "± 2371162",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14855080,
            "range": "± 665180",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 13677326,
            "range": "± 1351749",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 120,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 126,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1663507,
            "range": "± 69501",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1751987,
            "range": "± 95500",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 794623,
            "range": "± 36967",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5455,
            "range": "± 24288",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4712,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2286369,
            "range": "± 79469",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11512128,
            "range": "± 584950",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12888722,
            "range": "± 777594",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7559228,
            "range": "± 321041",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 958450,
            "range": "± 36511",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1771337,
            "range": "± 67961",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 538649,
            "range": "± 25112",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6d750ae5dfe3949662064350c5c3b216c427c1d",
          "message": "Merge pull request #1745 from davidhewitt/rust-1.54\n\nrust: updates for rust & clippy 1.54",
          "timestamp": "2021-07-31T16:01:21+01:00",
          "tree_id": "2c25aa7889f3ec305dc35434d1db6c386a137e29",
          "url": "https://github.com/PyO3/pyo3/commit/e6d750ae5dfe3949662064350c5c3b216c427c1d"
        },
        "date": 1627744233260,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79468,
            "range": "± 4409",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223747,
            "range": "± 13798",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2559062,
            "range": "± 30211",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5161553,
            "range": "± 116286",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2824488,
            "range": "± 15099",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8043279,
            "range": "± 316753",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12789224,
            "range": "± 142700",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6862011,
            "range": "± 428949",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1429883,
            "range": "± 62100",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1612624,
            "range": "± 41739",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 663260,
            "range": "± 19475",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4475,
            "range": "± 23437",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1830919,
            "range": "± 61332",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7755707,
            "range": "± 290163",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11547491,
            "range": "± 34524",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4463896,
            "range": "± 55530",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 745826,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1578004,
            "range": "± 43225",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 419563,
            "range": "± 1616",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb744e169577d1b5469a28441a6e3b8e428f4674",
          "message": "Merge pull request #1743 from davidhewitt/improve-readme\n\nreadme: slightly improve getting started notes",
          "timestamp": "2021-07-31T16:51:58+01:00",
          "tree_id": "8351e25aaa611d3d0dc6e9fb9232e7edb41b7cfa",
          "url": "https://github.com/PyO3/pyo3/commit/fb744e169577d1b5469a28441a6e3b8e428f4674"
        },
        "date": 1627747171013,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79306,
            "range": "± 2199",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 228533,
            "range": "± 13227",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2537776,
            "range": "± 20228",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5113522,
            "range": "± 119218",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2816386,
            "range": "± 16612",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7004298,
            "range": "± 367883",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12513201,
            "range": "± 89632",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5057376,
            "range": "± 255789",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1396807,
            "range": "± 56899",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1573427,
            "range": "± 82997",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 628091,
            "range": "± 19260",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4416,
            "range": "± 26928",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3418,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1791377,
            "range": "± 76281",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7176950,
            "range": "± 148812",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11487310,
            "range": "± 71005",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4314140,
            "range": "± 84769",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 745595,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1738582,
            "range": "± 69416",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 419180,
            "range": "± 658",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e7737d09930ec61594eb4805393c79c8b0dd108",
          "message": "Merge pull request #1744 from davidhewitt/no-profile\n\npyo3-pytests: don't set profile in Cargo.toml",
          "timestamp": "2021-07-31T18:55:52+01:00",
          "tree_id": "ed0a1573d54007ebd3cd46de652f13fd9c1ab6eb",
          "url": "https://github.com/PyO3/pyo3/commit/8e7737d09930ec61594eb4805393c79c8b0dd108"
        },
        "date": 1627754705740,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80591,
            "range": "± 2430",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223947,
            "range": "± 19334",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2688737,
            "range": "± 35689",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5753632,
            "range": "± 170968",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2820983,
            "range": "± 24109",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7405745,
            "range": "± 263125",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12787342,
            "range": "± 109240",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5461440,
            "range": "± 292205",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1502514,
            "range": "± 87258",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1817688,
            "range": "± 13368",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 633770,
            "range": "± 37405",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4914,
            "range": "± 25764",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3416,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1886004,
            "range": "± 59244",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7481340,
            "range": "± 134765",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11673566,
            "range": "± 77599",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4476458,
            "range": "± 94336",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 744871,
            "range": "± 3163",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1802572,
            "range": "± 22663",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 419559,
            "range": "± 1760",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fab135c1df3653d40d4a0e239c0093514a7f8478",
          "message": "Merge pull request #1747 from PyO3/pycell_doc\n\npycell: proofread docstrings",
          "timestamp": "2021-08-01T07:43:56+01:00",
          "tree_id": "6ed85578d7ca479ccc8392ead6f9a842ec96d0ea",
          "url": "https://github.com/PyO3/pyo3/commit/fab135c1df3653d40d4a0e239c0093514a7f8478"
        },
        "date": 1627800698655,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 81739,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 206573,
            "range": "± 11072",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2595028,
            "range": "± 32329",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5305665,
            "range": "± 127096",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2912167,
            "range": "± 48458",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 12321642,
            "range": "± 2106561",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13428530,
            "range": "± 224817",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8043194,
            "range": "± 1830314",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1436925,
            "range": "± 30516",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1459420,
            "range": "± 35863",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 575257,
            "range": "± 17791",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4585,
            "range": "± 22327",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3421,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1734435,
            "range": "± 90840",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8450969,
            "range": "± 367593",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12112941,
            "range": "± 166664",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4991921,
            "range": "± 227522",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 750330,
            "range": "± 4140",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1590913,
            "range": "± 91075",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 418289,
            "range": "± 1339",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a69d120b47431cb97f2d9e0123c02139f1927ad",
          "message": "Merge pull request #1748 from PyO3/more_doc\n\nsome more docstring proofreading",
          "timestamp": "2021-08-01T09:40:51+01:00",
          "tree_id": "5f1366e239cb41f7ffef3bdf531cb7ce984592e7",
          "url": "https://github.com/PyO3/pyo3/commit/9a69d120b47431cb97f2d9e0123c02139f1927ad"
        },
        "date": 1627807707722,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79228,
            "range": "± 2555",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 222415,
            "range": "± 14173",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2463183,
            "range": "± 21535",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5010306,
            "range": "± 132854",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2785705,
            "range": "± 13607",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6991697,
            "range": "± 154968",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12385581,
            "range": "± 77587",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 4908517,
            "range": "± 84687",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1386566,
            "range": "± 72442",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1571140,
            "range": "± 96941",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 612166,
            "range": "± 26804",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4564,
            "range": "± 26385",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1784270,
            "range": "± 47433",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7043499,
            "range": "± 73072",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11341078,
            "range": "± 38711",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4146909,
            "range": "± 43375",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 748292,
            "range": "± 3006",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1732975,
            "range": "± 90415",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 419312,
            "range": "± 617",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5093c2939a7be57b0f7a0f60b946102a8c562a86",
          "message": "Merge pull request #1749 from davidhewitt/building-distribution-rewrite\n\nguide: rewrite \"Building and Distribution\" chapter",
          "timestamp": "2021-08-01T19:36:10+01:00",
          "tree_id": "9c146cd716de4ae8396413d0b7db621d02787c97",
          "url": "https://github.com/PyO3/pyo3/commit/5093c2939a7be57b0f7a0f60b946102a8c562a86"
        },
        "date": 1627843510123,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79440,
            "range": "± 1894",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223513,
            "range": "± 13567",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2485942,
            "range": "± 18033",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5071630,
            "range": "± 112424",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2810003,
            "range": "± 26489",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7177073,
            "range": "± 382777",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12484167,
            "range": "± 151011",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5135396,
            "range": "± 213465",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1421823,
            "range": "± 32702",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1592613,
            "range": "± 39128",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 630033,
            "range": "± 35363",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4339,
            "range": "± 20110",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3419,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1801725,
            "range": "± 39811",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7397058,
            "range": "± 128180",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11531451,
            "range": "± 61339",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4378075,
            "range": "± 120557",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 748558,
            "range": "± 1318",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1562554,
            "range": "± 68523",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 419045,
            "range": "± 376",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f3592fca8829da6af882f61e7d83558e26a6d98",
          "message": "Merge pull request #1649 from FriendRat/enhanced_extract_type_errors\n\nWIP: Enhanced extract type errors (Issue #1640)",
          "timestamp": "2021-08-02T12:22:11+01:00",
          "tree_id": "68513b449d0e9564328ac7066c493bab661c93a2",
          "url": "https://github.com/PyO3/pyo3/commit/2f3592fca8829da6af882f61e7d83558e26a6d98"
        },
        "date": 1627903783670,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78594,
            "range": "± 4450",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223938,
            "range": "± 14337",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2533037,
            "range": "± 19909",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5016715,
            "range": "± 127071",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2773997,
            "range": "± 24444",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6960619,
            "range": "± 118128",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12345282,
            "range": "± 39910",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 4928570,
            "range": "± 88346",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1394510,
            "range": "± 69115",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1594421,
            "range": "± 47244",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 614872,
            "range": "± 25493",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4409,
            "range": "± 25351",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1942835,
            "range": "± 38126",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7091910,
            "range": "± 81807",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11401429,
            "range": "± 37927",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4220656,
            "range": "± 37014",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 744911,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1563574,
            "range": "± 72167",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 419909,
            "range": "± 801",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61aaed711d3ec50b7b88249d202f5ffd7ad2b2d2",
          "message": "Merge pull request #1752 from mejrs/with_gil\n\nremove some of python::acquire_gil usage",
          "timestamp": "2021-08-02T19:56:21+01:00",
          "tree_id": "79a3bba88442b73354a345dcfa5104092cf9c33f",
          "url": "https://github.com/PyO3/pyo3/commit/61aaed711d3ec50b7b88249d202f5ffd7ad2b2d2"
        },
        "date": 1627931218638,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 91889,
            "range": "± 4947",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 287820,
            "range": "± 25500",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2961246,
            "range": "± 150037",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5577764,
            "range": "± 320364",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3341582,
            "range": "± 148169",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10046566,
            "range": "± 905746",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14882036,
            "range": "± 752431",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8083397,
            "range": "± 734521",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 114,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 120,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1592972,
            "range": "± 87749",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1648262,
            "range": "± 108730",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 769689,
            "range": "± 58784",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5271,
            "range": "± 23223",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4512,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2346381,
            "range": "± 91234",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10243545,
            "range": "± 598249",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13061172,
            "range": "± 672769",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5637130,
            "range": "± 322149",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 952927,
            "range": "± 54168",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1711880,
            "range": "± 128074",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 492412,
            "range": "± 36126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96ce1ee30c6a4d27baa28c377d7ac05eb59e20f1",
          "message": "Merge pull request #1756 from davidhewitt/remove-pypy-workaround\n\npypy: remove workaround for 7.3.4",
          "timestamp": "2021-08-03T12:40:02+01:00",
          "tree_id": "faa4435b3aae64575559fdd0090bb8a44159c8ec",
          "url": "https://github.com/PyO3/pyo3/commit/96ce1ee30c6a4d27baa28c377d7ac05eb59e20f1"
        },
        "date": 1627991282685,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 87064,
            "range": "± 4586",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 258516,
            "range": "± 14879",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2607504,
            "range": "± 163107",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5282159,
            "range": "± 282874",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3024847,
            "range": "± 115280",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9387139,
            "range": "± 441343",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13600949,
            "range": "± 595202",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7670274,
            "range": "± 549043",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 113,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 117,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1436991,
            "range": "± 70932",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1666955,
            "range": "± 108809",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 685748,
            "range": "± 59610",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5436,
            "range": "± 22525",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4355,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1984564,
            "range": "± 117311",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10150740,
            "range": "± 529898",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11909792,
            "range": "± 456380",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5427134,
            "range": "± 408251",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 920926,
            "range": "± 52560",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1596641,
            "range": "± 96106",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 467492,
            "range": "± 38665",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7be6bdd97d715f68e080bbb03215ddb36d4079f6",
          "message": "Merge pull request #1754 from davidhewitt/sync-lib-readme-examples\n\ndocs: sync README and lib.rs examples",
          "timestamp": "2021-08-03T19:23:57+01:00",
          "tree_id": "75eacee9cbc025ea3dae01665c52ddc5014981a6",
          "url": "https://github.com/PyO3/pyo3/commit/7be6bdd97d715f68e080bbb03215ddb36d4079f6"
        },
        "date": 1628015573828,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 84330,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 209541,
            "range": "± 10926",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2273840,
            "range": "± 14486",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5190522,
            "range": "± 102652",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2499832,
            "range": "± 26685",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7064901,
            "range": "± 270754",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11202609,
            "range": "± 77166",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5513501,
            "range": "± 208125",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1410724,
            "range": "± 40799",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1455452,
            "range": "± 38221",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 572848,
            "range": "± 31788",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4067,
            "range": "± 25669",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3419,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1622390,
            "range": "± 36740",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 6731937,
            "range": "± 94116",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10302320,
            "range": "± 115094",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 3948660,
            "range": "± 64273",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 658923,
            "range": "± 1543",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1429133,
            "range": "± 53947",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 370834,
            "range": "± 2764",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcd35c1c3b381a61540391facc9a4ec2ae1c97ed",
          "message": "Merge pull request #1755 from davidhewitt/macos-link-args\n\nbuild: revert usage of cargo:rustc-cdylib-link-arg",
          "timestamp": "2021-08-03T22:30:52+01:00",
          "tree_id": "9f1da8e28992840c05ce93cc115b356fb15eb194",
          "url": "https://github.com/PyO3/pyo3/commit/fcd35c1c3b381a61540391facc9a4ec2ae1c97ed"
        },
        "date": 1628026756027,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 107263,
            "range": "± 7193",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 329667,
            "range": "± 24666",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3307004,
            "range": "± 236742",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6406277,
            "range": "± 416231",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3824355,
            "range": "± 322444",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 13008014,
            "range": "± 1502423",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 16467839,
            "range": "± 1161768",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 11003848,
            "range": "± 1592202",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 24,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 132,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 136,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1754622,
            "range": "± 110567",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1800265,
            "range": "± 126049",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 846927,
            "range": "± 46676",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 6103,
            "range": "± 24355",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 5016,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2377686,
            "range": "± 153925",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 12005730,
            "range": "± 732454",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 14394691,
            "range": "± 913466",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7217814,
            "range": "± 667472",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1053990,
            "range": "± 74120",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1891643,
            "range": "± 126073",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 549930,
            "range": "± 34264",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10cbba02d9357e8d1dd7d7a7cdc0bd0db8af2d75",
          "message": "Merge pull request #1758 from davidhewitt/config-file\n\npyo3-build-config: support \"config files\"",
          "timestamp": "2021-08-07T08:09:40+01:00",
          "tree_id": "22c82e3e5ac5dc2f0ccfa1d53e2b45d01bc856dd",
          "url": "https://github.com/PyO3/pyo3/commit/10cbba02d9357e8d1dd7d7a7cdc0bd0db8af2d75"
        },
        "date": 1628320722717,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79006,
            "range": "± 2345",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 221930,
            "range": "± 14818",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2478333,
            "range": "± 18357",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5044178,
            "range": "± 116592",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2810614,
            "range": "± 12072",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7078042,
            "range": "± 113953",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12375672,
            "range": "± 48776",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5019582,
            "range": "± 100264",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1392408,
            "range": "± 63196",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1590745,
            "range": "± 47164",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 625055,
            "range": "± 26398",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4537,
            "range": "± 25909",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3766,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1786932,
            "range": "± 43867",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7114343,
            "range": "± 73328",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11370890,
            "range": "± 59040",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4208110,
            "range": "± 33847",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 748187,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1565114,
            "range": "± 67644",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 418814,
            "range": "± 422",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a735698df3bd1e4a26cd33eea5d7e7eca5a38f3",
          "message": "Merge pull request #1762 from deantvv/fix-compiler-warning\n\nfix compiler warning",
          "timestamp": "2021-08-07T10:51:27+01:00",
          "tree_id": "685d6b807f8605cd84a84b7d73c0385a15d854fe",
          "url": "https://github.com/PyO3/pyo3/commit/9a735698df3bd1e4a26cd33eea5d7e7eca5a38f3"
        },
        "date": 1628330329346,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80101,
            "range": "± 4794",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223851,
            "range": "± 10764",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2464734,
            "range": "± 21433",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4949757,
            "range": "± 122984",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2782115,
            "range": "± 19196",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6960374,
            "range": "± 70854",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12323548,
            "range": "± 200263",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 4916254,
            "range": "± 54028",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1399676,
            "range": "± 53268",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1566160,
            "range": "± 100324",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 608698,
            "range": "± 27026",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4638,
            "range": "± 26446",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3416,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1775645,
            "range": "± 82417",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7076727,
            "range": "± 69446",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11513338,
            "range": "± 62425",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4211403,
            "range": "± 93380",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 749254,
            "range": "± 3519",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1568230,
            "range": "± 74301",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 418801,
            "range": "± 240",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9cccd74bfc51ad557cb6cf3b4ed79185d5b8b70",
          "message": "Merge pull request #1577 from davidhewitt/compile-errors-on-coverage\n\ncoverage: also run compile_error tests",
          "timestamp": "2021-08-08T08:47:31+01:00",
          "tree_id": "d6f5914fd911ce19f520557784c7013e67d50599",
          "url": "https://github.com/PyO3/pyo3/commit/e9cccd74bfc51ad557cb6cf3b4ed79185d5b8b70"
        },
        "date": 1628409463200,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 90531,
            "range": "± 3243",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 275817,
            "range": "± 9000",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2823115,
            "range": "± 97745",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5297400,
            "range": "± 209409",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3120128,
            "range": "± 86694",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9437093,
            "range": "± 880446",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14632505,
            "range": "± 693174",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7321860,
            "range": "± 603625",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 113,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 117,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1551057,
            "range": "± 64378",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1578260,
            "range": "± 103422",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 752577,
            "range": "± 37587",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4950,
            "range": "± 21133",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4528,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2110908,
            "range": "± 60722",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9723136,
            "range": "± 380374",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12665980,
            "range": "± 722793",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5520135,
            "range": "± 242136",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 947010,
            "range": "± 26043",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1579766,
            "range": "± 80206",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 490642,
            "range": "± 17766",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3de5591534ca3e8561b7bed27e01eca40b9c1050",
          "message": "Merge pull request #1767 from indygreg/packagecontext\n\nffi: define _Py_PackageContext",
          "timestamp": "2021-08-08T19:23:18+01:00",
          "tree_id": "1afdb935e0449b2fd238e31cd365e657c3580139",
          "url": "https://github.com/PyO3/pyo3/commit/3de5591534ca3e8561b7bed27e01eca40b9c1050"
        },
        "date": 1628448411095,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 82575,
            "range": "± 4645",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 232436,
            "range": "± 20956",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2799861,
            "range": "± 173637",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5256047,
            "range": "± 275364",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3129407,
            "range": "± 130818",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7650069,
            "range": "± 485439",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13305768,
            "range": "± 498502",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5462509,
            "range": "± 249969",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 107,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 111,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1479296,
            "range": "± 112207",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1635984,
            "range": "± 53173",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 636429,
            "range": "± 48922",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4550,
            "range": "± 21663",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3643,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2064596,
            "range": "± 128258",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8363826,
            "range": "± 333073",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11556549,
            "range": "± 833977",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4449915,
            "range": "± 289719",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 810518,
            "range": "± 30798",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1649091,
            "range": "± 84784",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 463678,
            "range": "± 26894",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac92b79f83b9bbaa6e03fdd4e9ea5ae396b2fc02",
          "message": "Merge pull request #1768 from indygreg/decodelocale-signature\n\nffi: fix Py_DecodeLocale() signature",
          "timestamp": "2021-08-08T23:08:45+01:00",
          "tree_id": "e7d80f364fd264e25dff3b4bce0ab3a55ef7e1ba",
          "url": "https://github.com/PyO3/pyo3/commit/ac92b79f83b9bbaa6e03fdd4e9ea5ae396b2fc02"
        },
        "date": 1628460968057,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79933,
            "range": "± 1260",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226274,
            "range": "± 15529",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2486386,
            "range": "± 14655",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5085624,
            "range": "± 109280",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2815993,
            "range": "± 30793",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7287957,
            "range": "± 271039",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12435323,
            "range": "± 94444",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5046292,
            "range": "± 125781",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1378859,
            "range": "± 49570",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1595433,
            "range": "± 44701",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 743176,
            "range": "± 22103",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4528,
            "range": "± 26385",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1839162,
            "range": "± 44272",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7145579,
            "range": "± 130822",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11228241,
            "range": "± 73944",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5018944,
            "range": "± 91980",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 808316,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1557168,
            "range": "± 100001",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 419677,
            "range": "± 1931",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "473cd5cc4f64fc2c6f4620703bb0158c2a27395d",
          "message": "Merge pull request #1765 from indygreg/frozen-public\n\nffi: make _frozen fields public",
          "timestamp": "2021-08-08T23:09:00+01:00",
          "tree_id": "fdec1fb436c8a5f3bdfd37aa92ef546d3357a98c",
          "url": "https://github.com/PyO3/pyo3/commit/473cd5cc4f64fc2c6f4620703bb0158c2a27395d"
        },
        "date": 1628460981476,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 78419,
            "range": "± 2718",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 222717,
            "range": "± 9996",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2461952,
            "range": "± 15027",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4958893,
            "range": "± 126308",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2882475,
            "range": "± 9525",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6820835,
            "range": "± 73053",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12235918,
            "range": "± 30883",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 4819103,
            "range": "± 65249",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1348339,
            "range": "± 80142",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1587195,
            "range": "± 46340",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 626175,
            "range": "± 24985",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4546,
            "range": "± 26126",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3416,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1802481,
            "range": "± 59572",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 6999173,
            "range": "± 33651",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10812190,
            "range": "± 31920",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4167304,
            "range": "± 29216",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 809210,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1546257,
            "range": "± 72638",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 419811,
            "range": "± 267",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edec1f12d6ca90a43db3bc7d03fed59844e3ca00",
          "message": "Merge pull request #1763 from deantvv/ffi-cleanup\n\nclean up ffi from pyframe to pyhash",
          "timestamp": "2021-08-08T23:09:19+01:00",
          "tree_id": "dce21304dee3ddd755f1a30611fd913084b4163f",
          "url": "https://github.com/PyO3/pyo3/commit/edec1f12d6ca90a43db3bc7d03fed59844e3ca00"
        },
        "date": 1628461044051,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 98969,
            "range": "± 5128",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 295824,
            "range": "± 25742",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3064213,
            "range": "± 173983",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6092441,
            "range": "± 357261",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3510990,
            "range": "± 171414",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 11545696,
            "range": "± 979389",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15833515,
            "range": "± 707232",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8873530,
            "range": "± 709522",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 126,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 132,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1656815,
            "range": "± 102514",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1790185,
            "range": "± 82903",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 865557,
            "range": "± 77804",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5427,
            "range": "± 24128",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4898,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2250728,
            "range": "± 68617",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11442752,
            "range": "± 466169",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13463522,
            "range": "± 422541",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6404934,
            "range": "± 286976",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 995651,
            "range": "± 37466",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1994892,
            "range": "± 51450",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 537415,
            "range": "± 29624",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91615338aea839bc8b4b130a73b9f99170d9f264",
          "message": "Merge pull request #1764 from awestlake87/master\n\nUpdated async-await guide for pyo3-asyncio 0.14",
          "timestamp": "2021-08-08T23:14:43+01:00",
          "tree_id": "b888caf2b025a1bee555051e57b3cf76b932a572",
          "url": "https://github.com/PyO3/pyo3/commit/91615338aea839bc8b4b130a73b9f99170d9f264"
        },
        "date": 1628462297578,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 92408,
            "range": "± 5801",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 260345,
            "range": "± 26563",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2773050,
            "range": "± 174356",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5238214,
            "range": "± 358414",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3010181,
            "range": "± 199908",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9950043,
            "range": "± 701051",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13394248,
            "range": "± 777476",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 7854980,
            "range": "± 515544",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 19,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 115,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 117,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1487037,
            "range": "± 93457",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1642329,
            "range": "± 94812",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 712350,
            "range": "± 61043",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4998,
            "range": "± 22643",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4347,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1913089,
            "range": "± 112210",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9997791,
            "range": "± 729497",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11718249,
            "range": "± 585251",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5688426,
            "range": "± 360727",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 909785,
            "range": "± 43126",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1790587,
            "range": "± 159805",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 475099,
            "range": "± 26156",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "575c44834576533d75456d43c6d9c8a3b3dc6765",
          "message": "Merge pull request #1769 from indygreg/force-acquire-gil\n\ngil: add unsafe variation for obtaining GILGuard without checks",
          "timestamp": "2021-08-09T07:49:06+01:00",
          "tree_id": "cec2d96b256f5d05226992ebe69c822a4cd0a9ac",
          "url": "https://github.com/PyO3/pyo3/commit/575c44834576533d75456d43c6d9c8a3b3dc6765"
        },
        "date": 1628492190776,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 79860,
            "range": "± 3853",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 223387,
            "range": "± 12831",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2469979,
            "range": "± 12431",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5104057,
            "range": "± 96678",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2800358,
            "range": "± 9900",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7126513,
            "range": "± 262416",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12379056,
            "range": "± 48091",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5116866,
            "range": "± 186110",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1388662,
            "range": "± 57444",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1593245,
            "range": "± 42673",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 629422,
            "range": "± 32399",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4353,
            "range": "± 19563",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1751411,
            "range": "± 48140",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7344042,
            "range": "± 143635",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11036459,
            "range": "± 48435",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4327749,
            "range": "± 62044",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 757104,
            "range": "± 4993",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1549744,
            "range": "± 40864",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 416640,
            "range": "± 2559",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccdc26f971b70ab1c296416bfa0a79cc90a02b11",
          "message": "Merge pull request #1760 from PyO3/release-0.14.2\n\nrelease: 0.14.2",
          "timestamp": "2021-08-09T09:03:51+01:00",
          "tree_id": "37d41cee123f3a5e50b35eb83b51b6e73df96acf",
          "url": "https://github.com/PyO3/pyo3/commit/ccdc26f971b70ab1c296416bfa0a79cc90a02b11"
        },
        "date": 1628496784089,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80182,
            "range": "± 1328",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226486,
            "range": "± 13315",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2532231,
            "range": "± 38042",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5194729,
            "range": "± 105864",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2794911,
            "range": "± 36473",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7792357,
            "range": "± 464574",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 13054595,
            "range": "± 120181",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5365260,
            "range": "± 300230",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1391270,
            "range": "± 68225",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1619292,
            "range": "± 56960",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 662831,
            "range": "± 18351",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4517,
            "range": "± 23584",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1749010,
            "range": "± 56127",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8184022,
            "range": "± 179227",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11079954,
            "range": "± 85347",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4601065,
            "range": "± 128403",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 841529,
            "range": "± 5368",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1552179,
            "range": "± 50509",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 453086,
            "range": "± 498",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a9ef543c1d7b288cad569d97fc1f5499533d4ff",
          "message": "Merge pull request #1771 from awestlake87/master\n\nProblems with the new Async/Await guide",
          "timestamp": "2021-08-10T07:48:58+01:00",
          "tree_id": "decda3b03d50d3db1947c8436dda437cd194a2ee",
          "url": "https://github.com/PyO3/pyo3/commit/6a9ef543c1d7b288cad569d97fc1f5499533d4ff"
        },
        "date": 1628578658558,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 68281,
            "range": "± 1656",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 195482,
            "range": "± 12055",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2217273,
            "range": "± 49103",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4427512,
            "range": "± 117603",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2413051,
            "range": "± 43457",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 6093646,
            "range": "± 114492",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12507210,
            "range": "± 48334",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 4464156,
            "range": "± 97634",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 12,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 84,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1348561,
            "range": "± 71243",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1406692,
            "range": "± 37320",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 539242,
            "range": "± 24301",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 3873,
            "range": "± 24236",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3417,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1713388,
            "range": "± 42412",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 6078078,
            "range": "± 92186",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 9726656,
            "range": "± 164894",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 3708721,
            "range": "± 77415",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 669890,
            "range": "± 7352",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1383762,
            "range": "± 69549",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 359249,
            "range": "± 5234",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "140c090504c98a84dc7b67af440e27993139abce",
          "message": "Merge pull request #1780 from davidhewitt/pin-trybuild\n\nci: downgrade trybuild to 1.0.43",
          "timestamp": "2021-08-11T09:26:41+01:00",
          "tree_id": "ec9db58ffc076468a5a73d65992922fb1b7dce2c",
          "url": "https://github.com/PyO3/pyo3/commit/140c090504c98a84dc7b67af440e27993139abce"
        },
        "date": 1628670986128,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 90768,
            "range": "± 2866",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 253730,
            "range": "± 13845",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2759023,
            "range": "± 61111",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5693476,
            "range": "± 180057",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3150851,
            "range": "± 71142",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8233310,
            "range": "± 336049",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14290088,
            "range": "± 426013",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 5777615,
            "range": "± 200745",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 17,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 108,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 115,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1516118,
            "range": "± 64542",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1769245,
            "range": "± 34305",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 683105,
            "range": "± 30986",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4893,
            "range": "± 23823",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3878,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2034154,
            "range": "± 48570",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8331380,
            "range": "± 234405",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12400978,
            "range": "± 275813",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5082453,
            "range": "± 128336",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 887867,
            "range": "± 24318",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1715356,
            "range": "± 35471",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 479711,
            "range": "± 10494",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdad08ce6af8218a3db79f4046619e1a0ac5a9c2",
          "message": "Merge pull request #1717 from messense/pyerr-fetch\n\nChange `PyErr::fetch` to return an `Option<PyErr>`",
          "timestamp": "2021-08-12T00:24:15+01:00",
          "tree_id": "e11d5171de82c9bece6fb5e954039f0b16a3ac3e",
          "url": "https://github.com/PyO3/pyo3/commit/bdad08ce6af8218a3db79f4046619e1a0ac5a9c2"
        },
        "date": 1628726411772,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 98040,
            "range": "± 4651",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 271521,
            "range": "± 6013",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3019829,
            "range": "± 17701",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5972503,
            "range": "± 134565",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3402928,
            "range": "± 23939",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8477504,
            "range": "± 337986",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15263339,
            "range": "± 184310",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6968377,
            "range": "± 251559",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 125,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1727749,
            "range": "± 38824",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1847772,
            "range": "± 6344",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 876181,
            "range": "± 21275",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5058,
            "range": "± 24085",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4098,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2211335,
            "range": "± 26022",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8621794,
            "range": "± 195762",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13139794,
            "range": "± 285200",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5289129,
            "range": "± 153769",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1003117,
            "range": "± 24478",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1934283,
            "range": "± 49602",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 625410,
            "range": "± 19991",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d197357478618ebabc36079466656d9c97f15d1b",
          "message": "Merge pull request #1785 from davidhewitt/pin-bitflags\n\nci: pin bitflags for MSRV job",
          "timestamp": "2021-08-12T10:31:13+08:00",
          "tree_id": "dada4d46bccfd93cd89d11cc87b72599bbb06ef0",
          "url": "https://github.com/PyO3/pyo3/commit/d197357478618ebabc36079466656d9c97f15d1b"
        },
        "date": 1628735933048,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 96362,
            "range": "± 3546",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 261571,
            "range": "± 11100",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2898467,
            "range": "± 88812",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5839905,
            "range": "± 252200",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3372436,
            "range": "± 127342",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8854518,
            "range": "± 382944",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15256925,
            "range": "± 478349",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6963333,
            "range": "± 457874",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 118,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1634346,
            "range": "± 82668",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1795499,
            "range": "± 61171",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 829278,
            "range": "± 37127",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5019,
            "range": "± 22535",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3977,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2094144,
            "range": "± 76437",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8162953,
            "range": "± 371077",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13012481,
            "range": "± 481547",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5387846,
            "range": "± 169353",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 995532,
            "range": "± 33514",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1914732,
            "range": "± 50134",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 612709,
            "range": "± 19432",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a7c4f495bd8fe04c643a67284a70067673d656c",
          "message": "Merge pull request #1784 from davidhewitt/gh-actions-pages-v3\n\nguide: allow using newer gh-actions-pages version",
          "timestamp": "2021-08-12T10:32:35+08:00",
          "tree_id": "0ef0f5881e4b7e04f55cfb4c4f09ef6638fe6f9f",
          "url": "https://github.com/PyO3/pyo3/commit/2a7c4f495bd8fe04c643a67284a70067673d656c"
        },
        "date": 1628736747188,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 97818,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 274043,
            "range": "± 3450",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3195675,
            "range": "± 19219",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6113109,
            "range": "± 121974",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3511156,
            "range": "± 19882",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 12019106,
            "range": "± 932642",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15824638,
            "range": "± 163414",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8493714,
            "range": "± 792510",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 120,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 125,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1757650,
            "range": "± 61364",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1877458,
            "range": "± 10307",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 884697,
            "range": "± 42708",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5146,
            "range": "± 21671",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4105,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2264637,
            "range": "± 26053",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 9350950,
            "range": "± 150276",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 13716026,
            "range": "± 114031",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5873627,
            "range": "± 147529",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1030622,
            "range": "± 6862",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 2005182,
            "range": "± 19515",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 628818,
            "range": "± 2692",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c734ef72a57dba0786d38693a927d9b8b10d475",
          "message": "Merge pull request #1783 from PyO3/davidhewitt-patch-1\n\nchangelog: fix missing PR number",
          "timestamp": "2021-08-12T10:33:10+08:00",
          "tree_id": "f56e99f6ddb7749a6019caf2ae2c63194aa859be",
          "url": "https://github.com/PyO3/pyo3/commit/4c734ef72a57dba0786d38693a927d9b8b10d475"
        },
        "date": 1628736955943,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 93885,
            "range": "± 7665",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 277310,
            "range": "± 20040",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3039208,
            "range": "± 166932",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5347090,
            "range": "± 336788",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3282530,
            "range": "± 163423",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 10616207,
            "range": "± 968857",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15129402,
            "range": "± 999572",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8700875,
            "range": "± 839883",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 117,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 122,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1686787,
            "range": "± 158947",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1736221,
            "range": "± 70925",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 882561,
            "range": "± 72315",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5400,
            "range": "± 22613",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4470,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2135970,
            "range": "± 158118",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10435202,
            "range": "± 624480",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12745772,
            "range": "± 723897",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6033952,
            "range": "± 380942",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1041364,
            "range": "± 118921",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1887830,
            "range": "± 102916",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 610264,
            "range": "± 29271",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b269c4d3d64ea2effb2c687493b05ff3520e502",
          "message": "Merge pull request #1678 from sansyrox/main\n\nAdd documentation to call async python from rust",
          "timestamp": "2021-08-12T08:58:46+01:00",
          "tree_id": "a5dbadda5e0bda4e15bca77d095992d390026a07",
          "url": "https://github.com/PyO3/pyo3/commit/0b269c4d3d64ea2effb2c687493b05ff3520e502"
        },
        "date": 1628755609934,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80502,
            "range": "± 1271",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 241919,
            "range": "± 12445",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2497239,
            "range": "± 21843",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5161201,
            "range": "± 106003",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2935281,
            "range": "± 19296",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 7811745,
            "range": "± 314389",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12815330,
            "range": "± 120364",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6121308,
            "range": "± 271419",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1467306,
            "range": "± 35977",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1595760,
            "range": "± 74947",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 738220,
            "range": "± 22272",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4311,
            "range": "± 20090",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3418,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1818158,
            "range": "± 56568",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7432026,
            "range": "± 71188",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11094636,
            "range": "± 40382",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4600301,
            "range": "± 73851",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 859205,
            "range": "± 5271",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1565087,
            "range": "± 95643",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 508104,
            "range": "± 920",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874e7e5cab2985a58958975c652d7d169b90acb1",
          "message": "Merge pull request #1787 from davidhewitt/ffi-pystate\n\nffi: cleanup pystate",
          "timestamp": "2021-08-13T12:36:37+01:00",
          "tree_id": "4d62ce03aa0e008c25704e15947026d363041eb9",
          "url": "https://github.com/PyO3/pyo3/commit/874e7e5cab2985a58958975c652d7d169b90acb1"
        },
        "date": 1628855079337,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 71585,
            "range": "± 1179",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 226224,
            "range": "± 12900",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2277815,
            "range": "± 14722",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 4736258,
            "range": "± 88252",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2922306,
            "range": "± 11657",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8576314,
            "range": "± 739602",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 11526656,
            "range": "± 121919",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6449820,
            "range": "± 530079",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 16,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 96,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1326419,
            "range": "± 73690",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1470656,
            "range": "± 40544",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 672742,
            "range": "± 37019",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4358,
            "range": "± 21321",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3018,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1869664,
            "range": "± 57396",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7074364,
            "range": "± 105951",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 10120777,
            "range": "± 49356",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4626929,
            "range": "± 82790",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 752213,
            "range": "± 6887",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1578633,
            "range": "± 56500",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 508486,
            "range": "± 1230",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "388c2552f8c8a0b1629564c44d41480892407fb1",
          "message": "Merge pull request #1786 from mejrs/with_gil2\n\ntests: switch to python_with_gil",
          "timestamp": "2021-08-13T12:39:17+01:00",
          "tree_id": "90b5411557f3b4d39105a908349603b8259be5cd",
          "url": "https://github.com/PyO3/pyo3/commit/388c2552f8c8a0b1629564c44d41480892407fb1"
        },
        "date": 1628856598422,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 101011,
            "range": "± 3012",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 298762,
            "range": "± 5050",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2921757,
            "range": "± 26004",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5927133,
            "range": "± 147955",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3523495,
            "range": "± 165899",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8637569,
            "range": "± 542800",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 14885972,
            "range": "± 231905",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6757665,
            "range": "± 180812",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 119,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1733788,
            "range": "± 76267",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1850326,
            "range": "± 84938",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 873138,
            "range": "± 44315",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5078,
            "range": "± 23689",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4114,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2107121,
            "range": "± 32163",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 8428235,
            "range": "± 134664",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 12958282,
            "range": "± 157347",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 5047809,
            "range": "± 85626",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1038850,
            "range": "± 41093",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1743036,
            "range": "± 28388",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 601983,
            "range": "± 8067",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e44920ef9ced41072f415b29de156b1cb6e518f9",
          "message": "Merge pull request #1790 from PyO3/davidhewitt-patch-1\n\nffi: fix PyPy symbols for `cpython/pystate.rs`",
          "timestamp": "2021-08-13T15:07:29+01:00",
          "tree_id": "b9469eef63f1caaca1b12ab6251a6f272822bd46",
          "url": "https://github.com/PyO3/pyo3/commit/e44920ef9ced41072f415b29de156b1cb6e518f9"
        },
        "date": 1628864190385,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 80280,
            "range": "± 1337",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 225436,
            "range": "± 13815",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 2527194,
            "range": "± 14030",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5161573,
            "range": "± 121486",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 2910504,
            "range": "± 12258",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 8037007,
            "range": "± 387480",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 12809012,
            "range": "± 126221",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 6214185,
            "range": "± 319022",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 18,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 100,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1461529,
            "range": "± 55856",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1619510,
            "range": "± 44120",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 745391,
            "range": "± 16313",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 4469,
            "range": "± 25789",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 3419,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 1838456,
            "range": "± 57803",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 7607731,
            "range": "± 179546",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 11106267,
            "range": "± 76747",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 4515406,
            "range": "± 102378",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 855241,
            "range": "± 12335",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1559290,
            "range": "± 54404",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 509814,
            "range": "± 874",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "254ea53f3f30cd40354bdb1654826266502b159a",
          "message": "Merge pull request #1789 from davidhewitt/example-word-count\n\nexamples: make `word-count` example comparison fairer",
          "timestamp": "2021-08-13T15:08:16+01:00",
          "tree_id": "156ea2411f777961284528c2407cc35a1b85ba13",
          "url": "https://github.com/PyO3/pyo3/commit/254ea53f3f30cd40354bdb1654826266502b159a"
        },
        "date": 1628864306596,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 98246,
            "range": "± 8645",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 289859,
            "range": "± 18344",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3082590,
            "range": "± 113822",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 5599623,
            "range": "± 307463",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3547654,
            "range": "± 220385",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 14810304,
            "range": "± 1451636",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15360825,
            "range": "± 960004",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 9525327,
            "range": "± 778177",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 22,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 122,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 128,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 1785869,
            "range": "± 92632",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1736588,
            "range": "± 83395",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 933813,
            "range": "± 55032",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5417,
            "range": "± 22971",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4757,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2303418,
            "range": "± 174942",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 11583668,
            "range": "± 633464",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 14260013,
            "range": "± 629137",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 6641831,
            "range": "± 466638",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1006413,
            "range": "± 40256",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1954450,
            "range": "± 142140",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 608973,
            "range": "± 28852",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e40b25237d43f45dad8db5e0520a41eba9962677",
          "message": "Merge pull request #2518 from mejrs/acquire_gil_tests\n\nUse Python::with_gil in tests",
          "timestamp": "2022-07-20T06:54:35+01:00",
          "tree_id": "c82ef0e988d3525fd56c7305dc33b8c431caea89",
          "url": "https://github.com/neuhausler/pyo3/commit/e40b25237d43f45dad8db5e0520a41eba9962677"
        },
        "date": 1658594374284,
        "tool": "cargo",
        "benches": [
          {
            "name": "call_0",
            "value": 94307,
            "range": "± 9049",
            "unit": "ns/iter"
          },
          {
            "name": "call_method_0",
            "value": 400001,
            "range": "± 42145",
            "unit": "ns/iter"
          },
          {
            "name": "iter_dict",
            "value": 3620548,
            "range": "± 60020",
            "unit": "ns/iter"
          },
          {
            "name": "dict_new",
            "value": 6219027,
            "range": "± 188441",
            "unit": "ns/iter"
          },
          {
            "name": "dict_get_item",
            "value": 3634976,
            "range": "± 129866",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashmap",
            "value": 9311460,
            "range": "± 377631",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreemap",
            "value": 15571890,
            "range": "± 781031",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_map",
            "value": 8657578,
            "range": "± 514385",
            "unit": "ns/iter"
          },
          {
            "name": "clean_gilpool_new",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "clean_acquire_gil",
            "value": 126,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "dirty_acquire_gil",
            "value": 137,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "iter_list",
            "value": 2257679,
            "range": "± 39192",
            "unit": "ns/iter"
          },
          {
            "name": "list_new",
            "value": 1862645,
            "range": "± 25426",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item",
            "value": 1303244,
            "range": "± 56926",
            "unit": "ns/iter"
          },
          {
            "name": "list_get_item_unchecked",
            "value": 1259028,
            "range": "± 83410",
            "unit": "ns/iter"
          },
          {
            "name": "first_time_init",
            "value": 5250,
            "range": "± 20525",
            "unit": "ns/iter"
          },
          {
            "name": "drop_many_objects",
            "value": 4104,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "iter_set",
            "value": 2862387,
            "range": "± 58449",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashset",
            "value": 10499036,
            "range": "± 287215",
            "unit": "ns/iter"
          },
          {
            "name": "extract_btreeset",
            "value": 4823976,
            "range": "± 254417",
            "unit": "ns/iter"
          },
          {
            "name": "extract_hashbrown_set",
            "value": 7700479,
            "range": "± 148340",
            "unit": "ns/iter"
          },
          {
            "name": "iter_tuple",
            "value": 1512755,
            "range": "± 81203",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_new",
            "value": 1846775,
            "range": "± 29063",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item",
            "value": 996801,
            "range": "± 22696",
            "unit": "ns/iter"
          },
          {
            "name": "tuple_get_item_unchecked",
            "value": 848874,
            "range": "± 9038",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "pytest-bench": [
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81934c568416c7811adee7842d210f3d0e266d67",
          "message": "Merge pull request #1652 from messense/pytest-bench\n\nRun pytest pyo3-benchmarks on CI",
          "timestamp": "2021-06-05T07:21:02+01:00",
          "tree_id": "2644963a566155a11e204c7bf836614219654bc6",
          "url": "https://github.com/PyO3/pyo3/commit/81934c568416c7811adee7842d210f3d0e266d67"
        },
        "date": 1622874153748,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1258933.7276361934,
            "unit": "iter/sec",
            "range": "stddev: 0.000003225143087800692",
            "extra": "mean: 794.322987817338 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2272155.2603255613,
            "unit": "iter/sec",
            "range": "stddev: 7.045510452491666e-7",
            "extra": "mean: 440.1107694799788 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 991422.1491071462,
            "unit": "iter/sec",
            "range": "stddev: 0.000004945194609547605",
            "extra": "mean: 1.0086520670337846 usec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1679874.1547820542,
            "unit": "iter/sec",
            "range": "stddev: 0.000003207227111322763",
            "extra": "mean: 595.2826865949888 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8797522.749861442,
            "unit": "iter/sec",
            "range": "stddev: 1.52958798607516e-7",
            "extra": "mean: 113.66836192787869 nsec\nrounds: 47620"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7277793.719307418,
            "unit": "iter/sec",
            "range": "stddev: 2.3282077642460128e-7",
            "extra": "mean: 137.40427917692986 nsec\nrounds: 72993"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 919449.3788503222,
            "unit": "iter/sec",
            "range": "stddev: 0.00001945081250894498",
            "extra": "mean: 1.087607456160771 usec\nrounds: 38760"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3139420.1634719465,
            "unit": "iter/sec",
            "range": "stddev: 0.000001651106978987027",
            "extra": "mean: 318.5301577775353 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3292ccf5e44fa6980e6531c4a3178ed2a2c9122d",
          "message": "Merge pull request #1653 from PyO3/pytuple_fast\n\nPyTuple: use fast macros on !abi3",
          "timestamp": "2021-06-05T08:10:42+01:00",
          "tree_id": "73ebdab1506c66871160d4aaa401db4fa715a0dd",
          "url": "https://github.com/PyO3/pyo3/commit/3292ccf5e44fa6980e6531c4a3178ed2a2c9122d"
        },
        "date": 1622877427344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1364516.7213912841,
            "unit": "iter/sec",
            "range": "stddev: 2.0381284597566228e-7",
            "extra": "mean: 732.8602019478245 nsec\nrounds: 117634"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2118773.0463285455,
            "unit": "iter/sec",
            "range": "stddev: 4.841018785750465e-8",
            "extra": "mean: 471.971267396598 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1203137.5228905878,
            "unit": "iter/sec",
            "range": "stddev: 2.43648519979363e-7",
            "extra": "mean: 831.1601799247842 nsec\nrounds: 129854"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1596079.946549438,
            "unit": "iter/sec",
            "range": "stddev: 5.6990266357423805e-8",
            "extra": "mean: 626.5350317578924 nsec\nrounds: 147038"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 7771254.115997332,
            "unit": "iter/sec",
            "range": "stddev: 1.194921433531564e-8",
            "extra": "mean: 128.67935922234332 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 6832597.407648445,
            "unit": "iter/sec",
            "range": "stddev: 1.8082357762521983e-8",
            "extra": "mean: 146.3572255671771 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1568223.5264077927,
            "unit": "iter/sec",
            "range": "stddev: 2.016723325298318e-7",
            "extra": "mean: 637.6641997525837 nsec\nrounds: 129854"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3034829.1385529335,
            "unit": "iter/sec",
            "range": "stddev: 3.1827610413624254e-8",
            "extra": "mean: 329.5078419063584 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f49f4440b46e479cbdc78daf26dea844043bcfc9",
          "message": "Merge pull request #1654 from messense/pathlib\n\nAdd support for extracting PathBuf from pathlib.Path",
          "timestamp": "2021-06-05T15:49:30+08:00",
          "tree_id": "e2c481e19f9fa455e0db4289474f19e7032c89b0",
          "url": "https://github.com/PyO3/pyo3/commit/f49f4440b46e479cbdc78daf26dea844043bcfc9"
        },
        "date": 1622879865813,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1354744.9771175578,
            "unit": "iter/sec",
            "range": "stddev: 1.0510182216477157e-7",
            "extra": "mean: 738.1463056815785 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2591697.5771573335,
            "unit": "iter/sec",
            "range": "stddev: 1.6805460713614043e-8",
            "extra": "mean: 385.847488076234 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1210709.7916000274,
            "unit": "iter/sec",
            "range": "stddev: 1.1223285230718124e-7",
            "extra": "mean: 825.9617679959774 nsec\nrounds: 125000"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1915903.0856977606,
            "unit": "iter/sec",
            "range": "stddev: 2.665817331269742e-7",
            "extra": "mean: 521.947068965002 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 9197032.63215519,
            "unit": "iter/sec",
            "range": "stddev: 2.1718638110038786e-9",
            "extra": "mean: 108.7307221792456 nsec\nrounds: 44248"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8517220.29471164,
            "unit": "iter/sec",
            "range": "stddev: 1.709460617240748e-8",
            "extra": "mean: 117.40919753128563 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1550398.720512912,
            "unit": "iter/sec",
            "range": "stddev: 9.74690418213532e-8",
            "extra": "mean: 644.9953723318181 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3706185.796902697,
            "unit": "iter/sec",
            "range": "stddev: 1.2055955339082257e-8",
            "extra": "mean: 269.8191765875907 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3d3be600b8ac12a352d55d0091cf9253405005e",
          "message": "Merge pull request #1655 from davidhewitt/bench-tuple-new\n\nbench_tuple: add benchmark for `PyTuple::new`",
          "timestamp": "2021-06-05T09:27:40+01:00",
          "tree_id": "9540b00d11dfcbb930cc96780dae4d7226856eaa",
          "url": "https://github.com/PyO3/pyo3/commit/b3d3be600b8ac12a352d55d0091cf9253405005e"
        },
        "date": 1622881993145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1626491.5312648271,
            "unit": "iter/sec",
            "range": "stddev: 1.227511617640193e-7",
            "extra": "mean: 614.8202931141969 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2576907.4299076917,
            "unit": "iter/sec",
            "range": "stddev: 1.727406721779368e-8",
            "extra": "mean: 388.0620577959349 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1432121.2761865587,
            "unit": "iter/sec",
            "range": "stddev: 8.795442683910723e-8",
            "extra": "mean: 698.2648862411934 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1914004.5800727576,
            "unit": "iter/sec",
            "range": "stddev: 3.91792330464035e-8",
            "extra": "mean: 522.4647894844827 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 9564236.097371455,
            "unit": "iter/sec",
            "range": "stddev: 2.3022964459866606e-9",
            "extra": "mean: 104.55618094525208 nsec\nrounds: 42195"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8751317.927104896,
            "unit": "iter/sec",
            "range": "stddev: 4.3531299557671175e-9",
            "extra": "mean: 114.2685031362711 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1915129.8935490192,
            "unit": "iter/sec",
            "range": "stddev: 9.685471537929625e-8",
            "extra": "mean: 522.1577937707671 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3677056.8393204464,
            "unit": "iter/sec",
            "range": "stddev: 2.4165910371665237e-8",
            "extra": "mean: 271.9566337150055 nsec\nrounds: 188644"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97d6f15b32c3090498911b8bff2edcef496bf228",
          "message": "Merge pull request #1626 from alonblade/cross-sysconfig\n\nbuild.rs: if found more than one candidate, filter on arch",
          "timestamp": "2021-06-05T09:29:00+01:00",
          "tree_id": "50ed56c788d832ec3b1e3e752b53c2a3fb79a8d5",
          "url": "https://github.com/PyO3/pyo3/commit/97d6f15b32c3090498911b8bff2edcef496bf228"
        },
        "date": 1622882083030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1125435.091888476,
            "unit": "iter/sec",
            "range": "stddev: 0.000002816901077339002",
            "extra": "mean: 888.5452454854626 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2123057.2564931884,
            "unit": "iter/sec",
            "range": "stddev: 5.818372980092973e-7",
            "extra": "mean: 471.0188559170627 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1011614.4686867943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030514755495905675",
            "extra": "mean: 988.518878440053 nsec\nrounds: 117648"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1555301.9673807872,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011902836807197488",
            "extra": "mean: 642.9619591389697 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8528357.64566276,
            "unit": "iter/sec",
            "range": "stddev: 7.274869508220332e-8",
            "extra": "mean: 117.25587053780538 nsec\nrounds: 47620"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 6861574.740467445,
            "unit": "iter/sec",
            "range": "stddev: 6.1647707640711e-7",
            "extra": "mean: 145.73913974898292 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1380709.2303080724,
            "unit": "iter/sec",
            "range": "stddev: 0.000002673854266665979",
            "extra": "mean: 724.2654557881632 nsec\nrounds: 136987"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2989411.5079884036,
            "unit": "iter/sec",
            "range": "stddev: 8.029662173706035e-7",
            "extra": "mean: 334.51399960419207 nsec\nrounds: 199961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5810eaffa95b5e2ae4986c2be461291737b0421",
          "message": "Merge pull request #1619 from birkenfeld/fastcall\n\nImplement METH_FASTCALL for pyfunctions.",
          "timestamp": "2021-06-05T12:32:16+01:00",
          "tree_id": "d75fc0f08b3b7bf3f8abb4754ebdd92551d55ba6",
          "url": "https://github.com/PyO3/pyo3/commit/a5810eaffa95b5e2ae4986c2be461291737b0421"
        },
        "date": 1622893037934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1212436.8375718137,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016062093147515506",
            "extra": "mean: 824.785233350986 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2079077.747976448,
            "unit": "iter/sec",
            "range": "stddev: 6.762069155258542e-7",
            "extra": "mean: 480.98249378752155 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1092370.7166956284,
            "unit": "iter/sec",
            "range": "stddev: 0.000001592214691839815",
            "extra": "mean: 915.4401383304693 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1598512.163939861,
            "unit": "iter/sec",
            "range": "stddev: 4.833192374155281e-7",
            "extra": "mean: 625.5817269075842 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8573309.320022672,
            "unit": "iter/sec",
            "range": "stddev: 6.115810003673317e-8",
            "extra": "mean: 116.64107320428944 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7265608.135492272,
            "unit": "iter/sec",
            "range": "stddev: 1.1942511727390256e-7",
            "extra": "mean: 137.6347280711139 nsec\nrounds: 81308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1611404.2063812052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012891080667141336",
            "extra": "mean: 620.5767591023855 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2965705.7622632207,
            "unit": "iter/sec",
            "range": "stddev: 5.647614215882646e-7",
            "extra": "mean: 337.18786695744177 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51fbf61717e82100036ac365bd6937f4ed9201c9",
          "message": "Merge pull request #1658 from davidhewitt/pyo3-text-signature\n\ntext_signature: move to `#[pyo3(text_signature = \"...\")]`",
          "timestamp": "2021-06-05T17:31:32+01:00",
          "tree_id": "07fc4331eb0e8899106ebb1706f536fd776a8566",
          "url": "https://github.com/PyO3/pyo3/commit/51fbf61717e82100036ac365bd6937f4ed9201c9"
        },
        "date": 1622911822941,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1168040.215851012,
            "unit": "iter/sec",
            "range": "stddev: 0.000004949262087554341",
            "extra": "mean: 856.1349056559831 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2001012.9608377994,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011870833162757176",
            "extra": "mean: 499.74688798627267 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1106759.5454975232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020620511888574524",
            "extra": "mean: 903.5386268572626 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1496663.047958536,
            "unit": "iter/sec",
            "range": "stddev: 0.000001990800216603968",
            "extra": "mean: 668.1530631523183 nsec\nrounds: 147038"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 7907631.681810399,
            "unit": "iter/sec",
            "range": "stddev: 2.8798950695422257e-7",
            "extra": "mean: 126.46011350022414 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 6469620.711853644,
            "unit": "iter/sec",
            "range": "stddev: 4.83911524002865e-7",
            "extra": "mean: 154.56856661899846 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1602317.3748044944,
            "unit": "iter/sec",
            "range": "stddev: 0.000004707259278942468",
            "extra": "mean: 624.0960846611391 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2859612.677728114,
            "unit": "iter/sec",
            "range": "stddev: 8.660558609147766e-7",
            "extra": "mean: 349.6977082900281 nsec\nrounds: 196040"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd0aa2cdee6f76ec24b9d972f615480135d9a3bb",
          "message": "Merge pull request #1659 from davidhewitt/pyo3-pass-module\n\npyfunction: document `#[pyo3(pass_module)]`",
          "timestamp": "2021-06-05T18:44:48+01:00",
          "tree_id": "45449bbfa4e07e497bf6fa25c328a26adc78ff72",
          "url": "https://github.com/PyO3/pyo3/commit/bd0aa2cdee6f76ec24b9d972f615480135d9a3bb"
        },
        "date": 1622915176465,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1252443.5711134293,
            "unit": "iter/sec",
            "range": "stddev: 2.1777586410193598e-7",
            "extra": "mean: 798.4391656951016 nsec\nrounds: 100001"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2116791.2202616017,
            "unit": "iter/sec",
            "range": "stddev: 6.26230944234808e-8",
            "extra": "mean: 472.4131460997291 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1150450.777944198,
            "unit": "iter/sec",
            "range": "stddev: 2.4372942592614567e-7",
            "extra": "mean: 869.2244980588854 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1600669.791147863,
            "unit": "iter/sec",
            "range": "stddev: 7.78564167453671e-8",
            "extra": "mean: 624.7384723136634 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8214074.767115638,
            "unit": "iter/sec",
            "range": "stddev: 1.4163617449162422e-8",
            "extra": "mean: 121.74225683993289 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 6955183.259692826,
            "unit": "iter/sec",
            "range": "stddev: 1.4243849003814717e-8",
            "extra": "mean: 143.77766374575808 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1686475.9332050548,
            "unit": "iter/sec",
            "range": "stddev: 2.0709112615664164e-7",
            "extra": "mean: 592.9524283809701 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3059880.6958585666,
            "unit": "iter/sec",
            "range": "stddev: 3.916679759177782e-8",
            "extra": "mean: 326.81012738616323 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c6d46c86be72ee756fe8a32b62ec87ffad745a5",
          "message": "Merge pull request #1663 from davidhewitt/ci-3.10-dev\n\nci: use latest Python 3.10 beta",
          "timestamp": "2021-06-05T19:42:05+01:00",
          "tree_id": "8424abcfdeca1ff089aa9083dd8333274857dc52",
          "url": "https://github.com/PyO3/pyo3/commit/4c6d46c86be72ee756fe8a32b62ec87ffad745a5"
        },
        "date": 1622918700487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1453333.7393801413,
            "unit": "iter/sec",
            "range": "stddev: 1.1254590151100189e-7",
            "extra": "mean: 688.0732022546372 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2584246.82469586,
            "unit": "iter/sec",
            "range": "stddev: 1.7542478706199574e-8",
            "extra": "mean: 386.95994145876364 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1328684.9490360657,
            "unit": "iter/sec",
            "range": "stddev: 9.489453361879529e-8",
            "extra": "mean: 752.623863712372 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1904934.622849662,
            "unit": "iter/sec",
            "range": "stddev: 2.5586382920444986e-8",
            "extra": "mean: 524.9523988920405 nsec\nrounds: 178540"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 10051585.17072535,
            "unit": "iter/sec",
            "range": "stddev: 2.66893181383287e-9",
            "extra": "mean: 99.48679566607743 nsec\nrounds: 46512"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8760041.214476377,
            "unit": "iter/sec",
            "range": "stddev: 3.4545348380325887e-9",
            "extra": "mean: 114.15471406088515 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1945641.0889775562,
            "unit": "iter/sec",
            "range": "stddev: 9.261700685402156e-8",
            "extra": "mean: 513.969408677273 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3696800.8839855003,
            "unit": "iter/sec",
            "range": "stddev: 1.2277381782216046e-8",
            "extra": "mean: 270.50415518292897 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2c173dbee2cd726f7d12125f9fcb116588c6e7",
          "message": "Merge pull request #1660 from PyO3/method_defs",
          "timestamp": "2021-06-06T07:47:21+02:00",
          "tree_id": "7e3f094a7dc43caec9191b6ba98aa0e0a35dd57f",
          "url": "https://github.com/PyO3/pyo3/commit/4d2c173dbee2cd726f7d12125f9fcb116588c6e7"
        },
        "date": 1622958511161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 1439161.299956149,
            "unit": "iter/sec",
            "range": "stddev: 1.086743849481157e-7",
            "extra": "mean: 694.8491458396428 nsec\nrounds: 123457"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2539695.282359841,
            "unit": "iter/sec",
            "range": "stddev: 2.1651688571852808e-8",
            "extra": "mean: 393.7480243968366 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1314551.1046663749,
            "unit": "iter/sec",
            "range": "stddev: 1.319524149709927e-7",
            "extra": "mean: 760.7159557739628 nsec\nrounds: 123442"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1925724.6808673644,
            "unit": "iter/sec",
            "range": "stddev: 2.6508142804529086e-8",
            "extra": "mean: 519.2850306876988 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 10227310.017386904,
            "unit": "iter/sec",
            "range": "stddev: 7.677608815424029e-9",
            "extra": "mean: 97.77742126718195 nsec\nrounds: 49503"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8764102.11045838,
            "unit": "iter/sec",
            "range": "stddev: 4.269365643362543e-9",
            "extra": "mean: 114.10181983235974 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 2000677.1000259463,
            "unit": "iter/sec",
            "range": "stddev: 1.0502084236018868e-7",
            "extra": "mean: 499.830782282174 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3672758.8897962617,
            "unit": "iter/sec",
            "range": "stddev: 1.391164948880755e-8",
            "extra": "mean: 272.27488381496073 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c57afeb33228efd68a7de4d18caf562f54fe9622",
          "message": "Merge pull request #1661 from PyO3/optimize_forwarding\n\nOptimize f(*args, **kwds) function argument \"parsing\"",
          "timestamp": "2021-06-06T08:27:33+02:00",
          "tree_id": "9fadf1330c2eddccf638c7688d08e9a3cb725b9f",
          "url": "https://github.com/PyO3/pyo3/commit/c57afeb33228efd68a7de4d18caf562f54fe9622"
        },
        "date": 1622961918771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2775038.506965529,
            "unit": "iter/sec",
            "range": "stddev: 7.577216631718821e-8",
            "extra": "mean: 360.35535993101865 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2570088.3378688567,
            "unit": "iter/sec",
            "range": "stddev: 1.2066472414836177e-7",
            "extra": "mean: 389.0916842292296 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1345708.360160749,
            "unit": "iter/sec",
            "range": "stddev: 1.1231287176417973e-7",
            "extra": "mean: 743.103059774814 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1923904.0650137607,
            "unit": "iter/sec",
            "range": "stddev: 2.078642896409954e-8",
            "extra": "mean: 519.7764369780134 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 10099133.980602393,
            "unit": "iter/sec",
            "range": "stddev: 4.1383228514728225e-8",
            "extra": "mean: 99.01839127205099 nsec\nrounds: 46083"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8517553.906042429,
            "unit": "iter/sec",
            "range": "stddev: 5.675623484206631e-9",
            "extra": "mean: 117.4045989060575 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1987445.684089552,
            "unit": "iter/sec",
            "range": "stddev: 7.045305897290591e-8",
            "extra": "mean: 503.1584047833235 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3652663.7866590274,
            "unit": "iter/sec",
            "range": "stddev: 1.3715517428974107e-8",
            "extra": "mean: 273.7728020995538 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b681143cc88e553c68fa51ecb36ed4a0f309a8e",
          "message": "Merge pull request #1664 from PyO3/pylist_opt\n\nPyList: remove get_parked_item, use macros for speed on !abi3",
          "timestamp": "2021-06-06T08:31:18+01:00",
          "tree_id": "3870ced28ecf7272d5825ef95c612b549b432577",
          "url": "https://github.com/PyO3/pyo3/commit/6b681143cc88e553c68fa51ecb36ed4a0f309a8e"
        },
        "date": 1622964738752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2840281.1155768917,
            "unit": "iter/sec",
            "range": "stddev: 7.803773919741461e-8",
            "extra": "mean: 352.07782585875805 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2593215.553799721,
            "unit": "iter/sec",
            "range": "stddev: 1.8008053466919655e-8",
            "extra": "mean: 385.62162660739216 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1384225.83245945,
            "unit": "iter/sec",
            "range": "stddev: 1.1088233038105772e-7",
            "extra": "mean: 722.4254717333447 nsec\nrounds: 112360"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1933242.0488724322,
            "unit": "iter/sec",
            "range": "stddev: 2.7431166071184966e-8",
            "extra": "mean: 517.2658025847825 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 10127647.933584487,
            "unit": "iter/sec",
            "range": "stddev: 5.063365364307096e-9",
            "extra": "mean: 98.73960929110747 nsec\nrounds: 46083"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8777399.878134275,
            "unit": "iter/sec",
            "range": "stddev: 4.141023958516314e-9",
            "extra": "mean: 113.92895548612638 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 2012364.2765127518,
            "unit": "iter/sec",
            "range": "stddev: 8.732277151339213e-8",
            "extra": "mean: 496.92792287731874 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3600983.5762542915,
            "unit": "iter/sec",
            "range": "stddev: 1.581750427307706e-8",
            "extra": "mean: 277.7019052778814 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "georg@python.org",
            "name": "Georg Brandl",
            "username": "birkenfeld"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9a3da3e40d83fe09205656d3dd28080caf9ecad",
          "message": "Merge pull request #1668 from PyO3/pylist_fix",
          "timestamp": "2021-06-06T10:52:23+02:00",
          "tree_id": "0ac9a6e84eac6b15792b8a3f7088d5dc29981f33",
          "url": "https://github.com/PyO3/pyo3/commit/f9a3da3e40d83fe09205656d3dd28080caf9ecad"
        },
        "date": 1622969616391,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2425902.3630603254,
            "unit": "iter/sec",
            "range": "stddev: 3.608481642238128e-7",
            "extra": "mean: 412.21774430298154 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2254969.854642379,
            "unit": "iter/sec",
            "range": "stddev: 1.1156665216736232e-7",
            "extra": "mean: 443.4649083852736 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1231066.45540948,
            "unit": "iter/sec",
            "range": "stddev: 4.7212265357706836e-7",
            "extra": "mean: 812.3038326695189 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1719355.2066918255,
            "unit": "iter/sec",
            "range": "stddev: 1.3269142955998484e-7",
            "extra": "mean: 581.6133839634399 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8863198.493392423,
            "unit": "iter/sec",
            "range": "stddev: 2.7582976619431173e-8",
            "extra": "mean: 112.82608651324155 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7716040.921927541,
            "unit": "iter/sec",
            "range": "stddev: 2.0202052881265186e-8",
            "extra": "mean: 129.60014210886638 nsec\nrounds: 68961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1793960.429140705,
            "unit": "iter/sec",
            "range": "stddev: 3.742065373473193e-7",
            "extra": "mean: 557.4258962216873 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3239573.267323015,
            "unit": "iter/sec",
            "range": "stddev: 7.184106264447794e-8",
            "extra": "mean: 308.682631162222 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd258803e7a4acced1bf7fa4be6e862cc0a7b36",
          "message": "Merge pull request #1666 from davidhewitt/bench-new-containers\n\nbenches: add benchmarks for container creation",
          "timestamp": "2021-06-06T17:58:58+08:00",
          "tree_id": "ef0c8c3c15676bf86f5d34b704903c371ec08c82",
          "url": "https://github.com/PyO3/pyo3/commit/abd258803e7a4acced1bf7fa4be6e862cc0a7b36"
        },
        "date": 1622973615706,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 4732306.0337725915,
            "unit": "iter/sec",
            "range": "stddev: 3.967981658955261e-7",
            "extra": "mean: 211.31346807738538 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2265462.7477574246,
            "unit": "iter/sec",
            "range": "stddev: 6.744538941730903e-7",
            "extra": "mean: 441.4109218924219 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1156137.7744451594,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015785834167146906",
            "extra": "mean: 864.9488167445344 nsec\nrounds: 128206"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1729264.7906201356,
            "unit": "iter/sec",
            "range": "stddev: 5.724952037391797e-7",
            "extra": "mean: 578.2804376886742 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 9568956.412267346,
            "unit": "iter/sec",
            "range": "stddev: 1.1305168343980627e-7",
            "extra": "mean: 104.50460394175913 nsec\nrounds: 47392"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 8097608.804239259,
            "unit": "iter/sec",
            "range": "stddev: 9.119592483514207e-8",
            "extra": "mean: 123.49324648486532 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 2100823.939209364,
            "unit": "iter/sec",
            "range": "stddev: 0.000001110984438153934",
            "extra": "mean: 476.00371517869587 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3603371.9820202114,
            "unit": "iter/sec",
            "range": "stddev: 2.4512083673925285e-7",
            "extra": "mean: 277.5178374559729 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a29097175903dedf65da28d7a44f2d033c3121be",
          "message": "Merge pull request #1650 from davidhewitt/pymodule-name\n\npymodule: accept `#[pyo3(name = \"...\")]` option",
          "timestamp": "2021-06-06T11:11:10+01:00",
          "tree_id": "2001810815903dada3323da68c4b03ed68180176",
          "url": "https://github.com/PyO3/pyo3/commit/a29097175903dedf65da28d7a44f2d033c3121be"
        },
        "date": 1622974407354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2429803.335995315,
            "unit": "iter/sec",
            "range": "stddev: 3.196033513281325e-7",
            "extra": "mean: 411.555941662403 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2168195.965158545,
            "unit": "iter/sec",
            "range": "stddev: 9.11476258471727e-8",
            "extra": "mean: 461.2129235864461 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1116641.2130543452,
            "unit": "iter/sec",
            "range": "stddev: 3.5252104552837345e-7",
            "extra": "mean: 895.5428013127897 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1651556.768374847,
            "unit": "iter/sec",
            "range": "stddev: 1.1145441066840032e-7",
            "extra": "mean: 605.48932930868 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8864350.29104332,
            "unit": "iter/sec",
            "range": "stddev: 1.3198889115942868e-8",
            "extra": "mean: 112.81142635013744 nsec\nrounds: 44053"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7490345.742038414,
            "unit": "iter/sec",
            "range": "stddev: 1.8138665381383414e-8",
            "extra": "mean: 133.5051858004127 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1489095.3075313154,
            "unit": "iter/sec",
            "range": "stddev: 2.6002539518233004e-7",
            "extra": "mean: 671.5486879465371 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3120597.1329622557,
            "unit": "iter/sec",
            "range": "stddev: 6.393735026014497e-8",
            "extra": "mean: 320.4514896963776 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0b0bb9f39cc7345f6ab43feb3d1b50ce097f355",
          "message": "Merge pull request #1669 from PyO3/pymethod_cleanup\n\nReorganize method wrapper generation",
          "timestamp": "2021-06-07T23:19:23+01:00",
          "tree_id": "84c094321f446d555f75a7f7bfc1a8fb77b8556c",
          "url": "https://github.com/PyO3/pyo3/commit/c0b0bb9f39cc7345f6ab43feb3d1b50ce097f355"
        },
        "date": 1623104453470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs",
            "value": 2614639.7985695414,
            "unit": "iter/sec",
            "range": "stddev: 3.138454529633771e-7",
            "extra": "mean: 382.46185977399097 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_and_kwargs_py",
            "value": 2343945.127936035,
            "unit": "iter/sec",
            "range": "stddev: 9.367116061518501e-8",
            "extra": "mean: 426.6311476676208 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args",
            "value": 1251044.9501443913,
            "unit": "iter/sec",
            "range": "stddev: 4.718701387104794e-7",
            "extra": "mean: 799.3317905040769 nsec\nrounds: 119048"
          },
          {
            "name": "tests/test_benchmarks.py::test_mixed_args_py",
            "value": 1740734.2313929177,
            "unit": "iter/sec",
            "range": "stddev: 1.352877836412293e-7",
            "extra": "mean: 574.470233287338 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args",
            "value": 8602328.83586035,
            "unit": "iter/sec",
            "range": "stddev: 2.489834139596264e-8",
            "extra": "mean: 116.24759051654063 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_no_args_py",
            "value": 7821403.528687116,
            "unit": "iter/sec",
            "range": "stddev: 5.60337046725917e-8",
            "extra": "mean: 127.85429064392459 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args",
            "value": 1856513.3974286066,
            "unit": "iter/sec",
            "range": "stddev: 7.495150904597545e-7",
            "extra": "mean: 538.6441064120872 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3299192.5838676216,
            "unit": "iter/sec",
            "range": "stddev: 2.9909921660684965e-7",
            "extra": "mean: 303.10446407081423 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b081e37de5a6a63c9f19cfcc4e94ed7c9f58c0fc",
          "message": "Merge pull request #1665 from PyO3/kwds_varargs\n\nArgument parsing: use VARARGS for *any* function taking **kwds",
          "timestamp": "2021-06-07T23:23:05+01:00",
          "tree_id": "26321f31fbb34b78ae355d3a932459d2ce02031b",
          "url": "https://github.com/PyO3/pyo3/commit/b081e37de5a6a63c9f19cfcc4e94ed7c9f58c0fc"
        },
        "date": 1623105309905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8421112.423042558,
            "unit": "iter/sec",
            "range": "stddev: 2.3429176818135506e-8",
            "extra": "mean: 118.74915685291356 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10152321.11378347,
            "unit": "iter/sec",
            "range": "stddev: 2.2007700914913342e-8",
            "extra": "mean: 98.49964247509021 nsec\nrounds: 101000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3515917.02352538,
            "unit": "iter/sec",
            "range": "stddev: 9.04564128484657e-8",
            "extra": "mean: 284.4208191800334 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2236816.281782544,
            "unit": "iter/sec",
            "range": "stddev: 1.2794571570321644e-7",
            "extra": "mean: 447.06398471091245 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3009810.9683423685,
            "unit": "iter/sec",
            "range": "stddev: 8.090404879360727e-8",
            "extra": "mean: 332.24677912287757 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2058594.3622558194,
            "unit": "iter/sec",
            "range": "stddev: 1.3350661562701716e-7",
            "extra": "mean: 485.76835647418136 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1863680.8343723617,
            "unit": "iter/sec",
            "range": "stddev: 9.882155470818518e-8",
            "extra": "mean: 536.5725619734278 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1602350.8935566337,
            "unit": "iter/sec",
            "range": "stddev: 1.538091997049149e-7",
            "extra": "mean: 624.0830295169206 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1869414.6535777568,
            "unit": "iter/sec",
            "range": "stddev: 1.067944823120306e-7",
            "extra": "mean: 534.926800796308 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1585973.893930681,
            "unit": "iter/sec",
            "range": "stddev: 1.4643708994502318e-7",
            "extra": "mean: 630.5274026436093 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2431916.692807664,
            "unit": "iter/sec",
            "range": "stddev: 1.115971934692109e-7",
            "extra": "mean: 411.1982959604741 nsec\nrounds: 61725"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4800947.842005563,
            "unit": "iter/sec",
            "range": "stddev: 5.908436665558958e-8",
            "extra": "mean: 208.29220247939224 nsec\nrounds: 199961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05e4bdf69cde2bc49865fbafe756a8507dd45f1d",
          "message": "Merge pull request #1670 from mejrs/num-dependency\n\nAdd docs + slight refactor for num-complex and num-bigint dependencies",
          "timestamp": "2021-06-11T19:10:58+01:00",
          "tree_id": "722cf936bc22260d1a07ee643b7a71620cf6ed48",
          "url": "https://github.com/PyO3/pyo3/commit/05e4bdf69cde2bc49865fbafe756a8507dd45f1d"
        },
        "date": 1623435712960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7494958.940577287,
            "unit": "iter/sec",
            "range": "stddev: 3.6623480337997285e-8",
            "extra": "mean: 133.42301244451957 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8662818.955673074,
            "unit": "iter/sec",
            "range": "stddev: 1.5264800890861394e-8",
            "extra": "mean: 115.43586505923143 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3158544.3496762733,
            "unit": "iter/sec",
            "range": "stddev: 6.877329805514339e-8",
            "extra": "mean: 316.60153833240656 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1946607.5201505108,
            "unit": "iter/sec",
            "range": "stddev: 1.094777856294704e-7",
            "extra": "mean: 513.7142385654198 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2952846.3157232823,
            "unit": "iter/sec",
            "range": "stddev: 9.56034159645646e-8",
            "extra": "mean: 338.6562973748487 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1921998.5353652893,
            "unit": "iter/sec",
            "range": "stddev: 1.2480819268201706e-7",
            "extra": "mean: 520.2917596448626 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1699082.5144545655,
            "unit": "iter/sec",
            "range": "stddev: 8.668626225548239e-8",
            "extra": "mean: 588.552934594435 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1447296.3196360013,
            "unit": "iter/sec",
            "range": "stddev: 8.461304260975546e-8",
            "extra": "mean: 690.9435106223506 nsec\nrounds: 76918"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1646230.5974409878,
            "unit": "iter/sec",
            "range": "stddev: 7.520456190082764e-8",
            "extra": "mean: 607.4483134708008 nsec\nrounds: 78119"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1485472.6230673683,
            "unit": "iter/sec",
            "range": "stddev: 1.3805654479587752e-7",
            "extra": "mean: 673.1864219314455 nsec\nrounds: 71424"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2126067.4189626304,
            "unit": "iter/sec",
            "range": "stddev: 8.672659657572244e-8",
            "extra": "mean: 470.3519705350129 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4380121.927962478,
            "unit": "iter/sec",
            "range": "stddev: 4.3815468550707036e-8",
            "extra": "mean: 228.3041468815091 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "159a93d7b73cf646efc54b2fec0dd7788d263541",
          "message": "Merge pull request #1673 from messense/detect-python-implementation\n\nDetect Python implementation from `SOABI` on Unix",
          "timestamp": "2021-06-12T05:34:33+08:00",
          "tree_id": "6e802774d11be47b54af9fe780a4ffc82a9f5e57",
          "url": "https://github.com/PyO3/pyo3/commit/159a93d7b73cf646efc54b2fec0dd7788d263541"
        },
        "date": 1623447345196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8769235.06233573,
            "unit": "iter/sec",
            "range": "stddev: 3.071835393547919e-9",
            "extra": "mean: 114.03503189176614 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10144488.047792792,
            "unit": "iter/sec",
            "range": "stddev: 2.8501471072508196e-9",
            "extra": "mean: 98.57569896958908 nsec\nrounds: 98030"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3653217.370958091,
            "unit": "iter/sec",
            "range": "stddev: 1.1549512970998572e-8",
            "extra": "mean: 273.73131638784776 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2223630.01473586,
            "unit": "iter/sec",
            "range": "stddev: 1.9545796832688053e-8",
            "extra": "mean: 449.7151025001287 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3285277.172676767,
            "unit": "iter/sec",
            "range": "stddev: 1.4610050705526345e-8",
            "extra": "mean: 304.3883202053309 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2132666.248590825,
            "unit": "iter/sec",
            "range": "stddev: 2.9269904365997546e-8",
            "extra": "mean: 468.8966220859153 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1949147.98246268,
            "unit": "iter/sec",
            "range": "stddev: 2.140265865166851e-8",
            "extra": "mean: 513.0446784942415 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1719143.991334053,
            "unit": "iter/sec",
            "range": "stddev: 2.4081582904441663e-8",
            "extra": "mean: 581.6848414334204 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1969638.8808142394,
            "unit": "iter/sec",
            "range": "stddev: 1.414363057403774e-8",
            "extra": "mean: 507.7072806296171 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1703678.208782337,
            "unit": "iter/sec",
            "range": "stddev: 2.890752266716421e-8",
            "extra": "mean: 586.9653053292501 nsec\nrounds: 151493"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2610734.856319595,
            "unit": "iter/sec",
            "range": "stddev: 1.2599641995253102e-8",
            "extra": "mean: 383.03391766498555 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5331024.843888633,
            "unit": "iter/sec",
            "range": "stddev: 4.09071878958719e-9",
            "extra": "mean: 187.58119297576997 nsec\nrounds: 50001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a298db2c0617257c245bb9be0dfd1a743a26df58",
          "message": "Merge pull request #1674 from mejrs/make-clippy-happy\n\nallow useless conversion (on some platforms)",
          "timestamp": "2021-06-12T05:35:36+08:00",
          "tree_id": "1df10f27d7e8e5ef048af44f43ef8ea3545f33bd",
          "url": "https://github.com/PyO3/pyo3/commit/a298db2c0617257c245bb9be0dfd1a743a26df58"
        },
        "date": 1623448136048,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8443575.525429038,
            "unit": "iter/sec",
            "range": "stddev: 2.312201431908671e-8",
            "extra": "mean: 118.43323921103374 nsec\nrounds: 86200"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9288018.872100748,
            "unit": "iter/sec",
            "range": "stddev: 3.993402175937698e-8",
            "extra": "mean: 107.6655865766565 nsec\nrounds: 90082"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3571643.38422005,
            "unit": "iter/sec",
            "range": "stddev: 7.579829864237082e-8",
            "extra": "mean: 279.9831596902248 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2259711.32541437,
            "unit": "iter/sec",
            "range": "stddev: 1.152018251193062e-7",
            "extra": "mean: 442.5344019624075 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3168331.173448379,
            "unit": "iter/sec",
            "range": "stddev: 7.900142198711523e-8",
            "extra": "mean: 315.62357129184454 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1999163.9376028453,
            "unit": "iter/sec",
            "range": "stddev: 4.755470693995073e-7",
            "extra": "mean: 500.209103010905 nsec\nrounds: 181786"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1905552.6041689236,
            "unit": "iter/sec",
            "range": "stddev: 1.059892177441136e-7",
            "extra": "mean: 524.7821539077013 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1669367.3677589188,
            "unit": "iter/sec",
            "range": "stddev: 1.4990041663539918e-7",
            "extra": "mean: 599.0293205156954 nsec\nrounds: 135117"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1875879.2973335055,
            "unit": "iter/sec",
            "range": "stddev: 1.0558501369844792e-7",
            "extra": "mean: 533.083339328763 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1693880.171502712,
            "unit": "iter/sec",
            "range": "stddev: 1.0950832367514635e-7",
            "extra": "mean: 590.3605324766202 nsec\nrounds: 75177"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2407747.6411262574,
            "unit": "iter/sec",
            "range": "stddev: 1.2816360060529627e-7",
            "extra": "mean: 415.325918264506 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4548795.001002169,
            "unit": "iter/sec",
            "range": "stddev: 6.965126200967545e-8",
            "extra": "mean: 219.83844068123076 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9693604da76593c88ee6d2ad6334b1f13cfdcd2e",
          "message": "Merge pull request #1676 from aviramha/patch-1\n\nAdd ormsgpack as an example in the README",
          "timestamp": "2021-06-13T15:17:15+08:00",
          "tree_id": "f84262a99aafb9436276ab9b57d94d8258bda222",
          "url": "https://github.com/PyO3/pyo3/commit/9693604da76593c88ee6d2ad6334b1f13cfdcd2e"
        },
        "date": 1623568742273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7796953.9885142045,
            "unit": "iter/sec",
            "range": "stddev: 2.7662424365666244e-8",
            "extra": "mean: 128.2552136992144 nsec\nrounds: 70917"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8957453.368043061,
            "unit": "iter/sec",
            "range": "stddev: 1.636557637521654e-8",
            "extra": "mean: 111.638873116279 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3293237.2109107054,
            "unit": "iter/sec",
            "range": "stddev: 6.823701982438574e-8",
            "extra": "mean: 303.6525873954093 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2045901.8513199466,
            "unit": "iter/sec",
            "range": "stddev: 1.230935764493062e-7",
            "extra": "mean: 488.7820006394361 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2892008.1493724664,
            "unit": "iter/sec",
            "range": "stddev: 7.732147510231045e-8",
            "extra": "mean: 345.78049173789805 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1952873.1037954972,
            "unit": "iter/sec",
            "range": "stddev: 1.2393540058331617e-7",
            "extra": "mean: 512.0660415963357 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1770228.4986780202,
            "unit": "iter/sec",
            "range": "stddev: 8.757478865533376e-8",
            "extra": "mean: 564.8988256300406 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1364910.0911939715,
            "unit": "iter/sec",
            "range": "stddev: 2.785903176397383e-7",
            "extra": "mean: 732.6489901801796 nsec\nrounds: 73525"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1803126.0767440416,
            "unit": "iter/sec",
            "range": "stddev: 1.1305731233860233e-7",
            "extra": "mean: 554.5923897933295 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1556769.290113049,
            "unit": "iter/sec",
            "range": "stddev: 1.0367093606804075e-7",
            "extra": "mean: 642.3559395415389 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2304218.9405100886,
            "unit": "iter/sec",
            "range": "stddev: 9.966353429329697e-8",
            "extra": "mean: 433.9865376590491 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4519944.600283368,
            "unit": "iter/sec",
            "range": "stddev: 4.72918057386218e-8",
            "extra": "mean: 221.24164971785325 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64a0391fb1bb9c8013096a7403bf49dfa3c59e5f",
          "message": "Merge pull request #1685 from mejrs/fix_ui_tests\n\nupdate error message for rust 1.53",
          "timestamp": "2021-06-20T00:28:39+08:00",
          "tree_id": "abdf654bea2bf74f2fe8a303fab111284daaa219",
          "url": "https://github.com/PyO3/pyo3/commit/64a0391fb1bb9c8013096a7403bf49dfa3c59e5f"
        },
        "date": 1624120224430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7648538.25678324,
            "unit": "iter/sec",
            "range": "stddev: 1.9378919283732838e-8",
            "extra": "mean: 130.74393647870562 nsec\nrounds: 67568"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8584867.440501085,
            "unit": "iter/sec",
            "range": "stddev: 1.6842733788555558e-8",
            "extra": "mean: 116.48403506880744 nsec\nrounds: 82638"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3241945.8362607537,
            "unit": "iter/sec",
            "range": "stddev: 7.447324539803702e-8",
            "extra": "mean: 308.45672645533006 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2006333.6882600163,
            "unit": "iter/sec",
            "range": "stddev: 1.2582058059551142e-7",
            "extra": "mean: 498.4215765561028 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2800094.9146673274,
            "unit": "iter/sec",
            "range": "stddev: 6.407625090125812e-8",
            "extra": "mean: 357.1307510905207 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1828614.6058222668,
            "unit": "iter/sec",
            "range": "stddev: 1.0475919641235969e-7",
            "extra": "mean: 546.8620871863283 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1720245.818381158,
            "unit": "iter/sec",
            "range": "stddev: 8.579094553526484e-8",
            "extra": "mean: 581.3122690458594 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1509499.614504319,
            "unit": "iter/sec",
            "range": "stddev: 8.453689515532295e-8",
            "extra": "mean: 662.4711860747665 nsec\nrounds: 71429"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1677206.4912359752,
            "unit": "iter/sec",
            "range": "stddev: 1.0333645534631198e-7",
            "extra": "mean: 596.2295073534495 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1494412.5086019512,
            "unit": "iter/sec",
            "range": "stddev: 1.1798418279949132e-7",
            "extra": "mean: 669.1592811518732 nsec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2175573.9261440514,
            "unit": "iter/sec",
            "range": "stddev: 9.631847320468106e-8",
            "extra": "mean: 459.64882552706723 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4258806.688066373,
            "unit": "iter/sec",
            "range": "stddev: 4.032087779703014e-8",
            "extra": "mean: 234.80755837152424 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cba18f176db5ecb355908c7532eaca76c3cc41a",
          "message": "Merge pull request #1657 from davidhewitt/pycell-init\n\npyclass: refactor `tp_new` / `tp_dealloc` / remove `PyCellInner`",
          "timestamp": "2021-06-23T08:22:23+01:00",
          "tree_id": "2b6bfb3e53b36240c509e849129f5a2e79315cca",
          "url": "https://github.com/PyO3/pyo3/commit/2cba18f176db5ecb355908c7532eaca76c3cc41a"
        },
        "date": 1624433052460,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8585975.10837199,
            "unit": "iter/sec",
            "range": "stddev: 2.044272935504336e-8",
            "extra": "mean: 116.46900758248609 nsec\nrounds: 44840"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9692725.483852701,
            "unit": "iter/sec",
            "range": "stddev: 2.1330561439002542e-8",
            "extra": "mean: 103.17015597579956 nsec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3288952.8215458067,
            "unit": "iter/sec",
            "range": "stddev: 7.258367630362294e-8",
            "extra": "mean: 304.04814366682825 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2025434.7716527565,
            "unit": "iter/sec",
            "range": "stddev: 1.2368951908814976e-7",
            "extra": "mean: 493.72115754851495 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2901611.3990384587,
            "unit": "iter/sec",
            "range": "stddev: 7.898597326436739e-8",
            "extra": "mean: 344.6360874965353 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1873250.2611394944,
            "unit": "iter/sec",
            "range": "stddev: 1.3483730190690998e-7",
            "extra": "mean: 533.8315017194692 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1810655.3379726366,
            "unit": "iter/sec",
            "range": "stddev: 1.515965138474261e-7",
            "extra": "mean: 552.2862242351813 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1519619.0385288864,
            "unit": "iter/sec",
            "range": "stddev: 1.3079258362149883e-7",
            "extra": "mean: 658.0596680125658 nsec\nrounds: 74069"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1819314.2589103957,
            "unit": "iter/sec",
            "range": "stddev: 1.0765589741277958e-7",
            "extra": "mean: 549.657649909916 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1521797.2196876383,
            "unit": "iter/sec",
            "range": "stddev: 1.4763057450800676e-7",
            "extra": "mean: 657.1177730273084 nsec\nrounds: 153823"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2520017.6494789445,
            "unit": "iter/sec",
            "range": "stddev: 8.957593821166359e-8",
            "extra": "mean: 396.82261757440733 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5128242.228293725,
            "unit": "iter/sec",
            "range": "stddev: 4.3201880254871843e-8",
            "extra": "mean: 194.99858927927835 nsec\nrounds: 58821"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6343231.882413679,
            "unit": "iter/sec",
            "range": "stddev: 4.047618331775764e-8",
            "extra": "mean: 157.64834370508638 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8077908.473266456,
            "unit": "iter/sec",
            "range": "stddev: 2.4951444737343007e-8",
            "extra": "mean: 123.79442071047323 nsec\nrounds: 68023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc66afa159875c41d2659f65595e294ea343cd8d",
          "message": "Merge pull request #1689 from messense/bench-badge\n\nAdd a badge and link to benchmark tracking page",
          "timestamp": "2021-06-23T16:44:11+08:00",
          "tree_id": "d9e3222f50d04a68f4dadce076b1e1cb5f9e7686",
          "url": "https://github.com/PyO3/pyo3/commit/dc66afa159875c41d2659f65595e294ea343cd8d"
        },
        "date": 1624438011920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6274788.027237393,
            "unit": "iter/sec",
            "range": "stddev: 2.4429062323281284e-7",
            "extra": "mean: 159.3679333325243 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 7991060.22684136,
            "unit": "iter/sec",
            "range": "stddev: 2.2209035545497662e-7",
            "extra": "mean: 125.13984022308081 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2706060.744148623,
            "unit": "iter/sec",
            "range": "stddev: 5.693640660104062e-7",
            "extra": "mean: 369.54085460268607 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1601121.4909020234,
            "unit": "iter/sec",
            "range": "stddev: 0.000001131925845150776",
            "extra": "mean: 624.5622244671953 nsec\nrounds: 52632"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2451024.6582979606,
            "unit": "iter/sec",
            "range": "stddev: 4.2338700747222466e-7",
            "extra": "mean: 407.9926314141159 nsec\nrounds: 34966"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1638564.5292063258,
            "unit": "iter/sec",
            "range": "stddev: 6.80484948741222e-7",
            "extra": "mean: 610.2902767486712 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1494177.3224117253,
            "unit": "iter/sec",
            "range": "stddev: 8.30309627063933e-7",
            "extra": "mean: 669.2646080225878 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1240911.5756403045,
            "unit": "iter/sec",
            "range": "stddev: 5.764312348081227e-7",
            "extra": "mean: 805.8591922506507 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1508081.3037436372,
            "unit": "iter/sec",
            "range": "stddev: 7.558225162683632e-7",
            "extra": "mean: 663.0942227832339 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1114738.6182970505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013517398753080526",
            "extra": "mean: 897.0712807345521 nsec\nrounds: 63292"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1960236.0599131528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010165589289089231",
            "extra": "mean: 510.1426407001841 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3813878.400427005,
            "unit": "iter/sec",
            "range": "stddev: 5.349436708543837e-7",
            "extra": "mean: 262.20028406994703 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4867044.307243269,
            "unit": "iter/sec",
            "range": "stddev: 3.028584576022492e-7",
            "extra": "mean: 205.463508625048 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6428506.384376055,
            "unit": "iter/sec",
            "range": "stddev: 7.971295473812854e-8",
            "extra": "mean: 155.5571294803981 nsec\nrounds: 64936"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41201924+aviramha@users.noreply.github.com",
            "name": "Aviram Hassan",
            "username": "aviramha"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "13cd092c4e87171462f422de804f25dd630ea436",
          "message": "Update class.md - add example of `new` returning a `PyResult` (#1688)\n\n* Update class.md - add example of `new` returning a `PyResult`\r\n\r\n* Update class.md",
          "timestamp": "2021-06-23T17:40:01+08:00",
          "tree_id": "1e5539ded72723a593a410a2b51c34e9102f1480",
          "url": "https://github.com/PyO3/pyo3/commit/13cd092c4e87171462f422de804f25dd630ea436"
        },
        "date": 1624441318490,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8488639.162976567,
            "unit": "iter/sec",
            "range": "stddev: 5.559393739732783e-8",
            "extra": "mean: 117.80451269049397 nsec\nrounds: 43104"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10045339.716794418,
            "unit": "iter/sec",
            "range": "stddev: 8.346794180962959e-8",
            "extra": "mean: 99.54864924362509 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3351752.5028130487,
            "unit": "iter/sec",
            "range": "stddev: 3.3066932531253713e-7",
            "extra": "mean: 298.3513845848008 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2108506.6992948637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010568810938200451",
            "extra": "mean: 474.26930174477695 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3147905.4162493395,
            "unit": "iter/sec",
            "range": "stddev: 2.1985754828377267e-7",
            "extra": "mean: 317.6715522770013 nsec\nrounds: 166639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1897983.3757824518,
            "unit": "iter/sec",
            "range": "stddev: 4.0132406784243894e-7",
            "extra": "mean: 526.8750046808904 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1890595.9024400392,
            "unit": "iter/sec",
            "range": "stddev: 4.952385010118045e-7",
            "extra": "mean: 528.9337603604599 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1551184.6415653774,
            "unit": "iter/sec",
            "range": "stddev: 2.9178628979418374e-7",
            "extra": "mean: 644.6685798736984 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1848363.544350012,
            "unit": "iter/sec",
            "range": "stddev: 3.525031853364213e-7",
            "extra": "mean: 541.0191101514354 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1656472.320601037,
            "unit": "iter/sec",
            "range": "stddev: 7.543967589993223e-7",
            "extra": "mean: 603.6925504658782 nsec\nrounds: 86200"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2428611.7870185487,
            "unit": "iter/sec",
            "range": "stddev: 3.055902791456838e-7",
            "extra": "mean: 411.7578632141163 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4910416.796675972,
            "unit": "iter/sec",
            "range": "stddev: 0.00000100321922819788",
            "extra": "mean: 203.64870059033944 nsec\nrounds: 55556"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6612566.508838303,
            "unit": "iter/sec",
            "range": "stddev: 6.182645269930389e-8",
            "extra": "mean: 151.22721240901174 nsec\nrounds: 72464"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8117225.418513678,
            "unit": "iter/sec",
            "range": "stddev: 5.5826584196743506e-8",
            "extra": "mean: 123.1948046827961 nsec\nrounds: 92593"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14808292fed8bb3f3c10155062f1eaba2a49ee41",
          "message": "Merge pull request #1692 from GabrielMajeri/make-tracefunc-optional\n\nMake the `Py_tracefunc` parameters optional",
          "timestamp": "2021-06-24T07:29:47+01:00",
          "tree_id": "a37583ddc3b51a7adf5bc4abe12b5714dc4bbc02",
          "url": "https://github.com/PyO3/pyo3/commit/14808292fed8bb3f3c10155062f1eaba2a49ee41"
        },
        "date": 1624516731252,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8747365.13529183,
            "unit": "iter/sec",
            "range": "stddev: 3.3451408243115113e-9",
            "extra": "mean: 114.32013921144403 nsec\nrounds: 83327"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10163801.31364412,
            "unit": "iter/sec",
            "range": "stddev: 3.5217316674997417e-9",
            "extra": "mean: 98.38838532363383 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3619556.9876116733,
            "unit": "iter/sec",
            "range": "stddev: 1.3754928272381376e-8",
            "extra": "mean: 276.2769044448642 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2122094.946968521,
            "unit": "iter/sec",
            "range": "stddev: 2.5428635214698035e-8",
            "extra": "mean: 471.23244953226856 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3218459.747694051,
            "unit": "iter/sec",
            "range": "stddev: 4.2369000299840833e-7",
            "extra": "mean: 310.7076298583198 nsec\nrounds: 53476"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1842336.3112159944,
            "unit": "iter/sec",
            "range": "stddev: 2.6386408220385185e-8",
            "extra": "mean: 542.7890629478569 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1978952.0748855672,
            "unit": "iter/sec",
            "range": "stddev: 1.4941565030565147e-8",
            "extra": "mean: 505.31794715548205 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1708050.981692474,
            "unit": "iter/sec",
            "range": "stddev: 1.919595709797245e-8",
            "extra": "mean: 585.4626183400292 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1930755.495293355,
            "unit": "iter/sec",
            "range": "stddev: 2.9069559730005158e-8",
            "extra": "mean: 517.9319714165196 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1726199.666315152,
            "unit": "iter/sec",
            "range": "stddev: 2.6121567496908412e-8",
            "extra": "mean: 579.3072606341386 nsec\nrounds: 156226"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2557385.5948345354,
            "unit": "iter/sec",
            "range": "stddev: 1.85502263292307e-8",
            "extra": "mean: 391.02433439014874 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5302942.391844972,
            "unit": "iter/sec",
            "range": "stddev: 4.97605013667586e-9",
            "extra": "mean: 188.57455467321302 nsec\nrounds: 49020"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6372101.692889809,
            "unit": "iter/sec",
            "range": "stddev: 7.983240431269154e-9",
            "extra": "mean: 156.93409305062275 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8404954.043877503,
            "unit": "iter/sec",
            "range": "stddev: 4.377893352317866e-9",
            "extra": "mean: 118.97745005852663 nsec\nrounds: 82645"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "36ab8042fcf9b1fe7920fde0ec04c5ef1e4b430f",
          "message": "Merge pull request #1690 from davidhewitt/safety-docs\n\ndocs: implement final missing safety docs",
          "timestamp": "2021-06-24T07:51:28+01:00",
          "tree_id": "37ee98645fcdb85033ff9eacc691817e52c459df",
          "url": "https://github.com/PyO3/pyo3/commit/36ab8042fcf9b1fe7920fde0ec04c5ef1e4b430f"
        },
        "date": 1624517929071,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 3136907.7237386545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012163086572207095",
            "extra": "mean: 318.7852777537785 nsec\nrounds: 46297"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 5426035.636326649,
            "unit": "iter/sec",
            "range": "stddev: 4.549776469043778e-7",
            "extra": "mean: 184.2966148812535 nsec\nrounds: 61729"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2902136.6954808915,
            "unit": "iter/sec",
            "range": "stddev: 9.303634780315227e-7",
            "extra": "mean: 344.5737072127464 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1705703.2636413744,
            "unit": "iter/sec",
            "range": "stddev: 5.58763419125677e-7",
            "extra": "mean: 586.2684449961489 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2543542.746187593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017938636786887424",
            "extra": "mean: 393.1524254895676 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1212945.4272020229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019718724110979366",
            "extra": "mean: 824.4393998059502 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1573173.4924326977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015399437893566904",
            "extra": "mean: 635.6577992257006 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1234000.8579274227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012455983951910017",
            "extra": "mean: 810.3722080708907 nsec\nrounds: 71429"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1461759.2395445763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027874412608694903",
            "extra": "mean: 684.1071860176008 nsec\nrounds: 35089"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1055386.7756585267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025319800688104955",
            "extra": "mean: 947.5199264040147 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2069573.74881661,
            "unit": "iter/sec",
            "range": "stddev: 0.00000171299607480449",
            "extra": "mean: 483.19128543822706 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 2270072.6179009015,
            "unit": "iter/sec",
            "range": "stddev: 0.000001099197896082703",
            "extra": "mean: 440.5145421843647 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 3938775.53608749,
            "unit": "iter/sec",
            "range": "stddev: 3.4811917359492454e-7",
            "extra": "mean: 253.88600869430786 nsec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6722019.695586961,
            "unit": "iter/sec",
            "range": "stddev: 3.09811670754944e-7",
            "extra": "mean: 148.76481255424733 nsec\nrounds: 71434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a02353ce3421e2b16be790b262252d11f404a907",
          "message": "Merge pull request #1679 from messense/error-cause\n\nAdd support for setting and retrieving exception cause",
          "timestamp": "2021-06-24T07:58:34+01:00",
          "tree_id": "5a49884aaf7d910cf329ef78dd7134394a8f0eda",
          "url": "https://github.com/PyO3/pyo3/commit/a02353ce3421e2b16be790b262252d11f404a907"
        },
        "date": 1624518934694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6993009.4632984195,
            "unit": "iter/sec",
            "range": "stddev: 8.574635948987544e-9",
            "extra": "mean: 142.99994948497886 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8469528.128725115,
            "unit": "iter/sec",
            "range": "stddev: 3.9270399195655095e-9",
            "extra": "mean: 118.07033223118253 nsec\nrounds: 81961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3022636.303631664,
            "unit": "iter/sec",
            "range": "stddev: 2.081030877670667e-8",
            "extra": "mean: 330.83702422196075 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1819720.9841513035,
            "unit": "iter/sec",
            "range": "stddev: 2.8264181619562864e-8",
            "extra": "mean: 549.5347961082681 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2696352.1808932666,
            "unit": "iter/sec",
            "range": "stddev: 1.802753310094569e-8",
            "extra": "mean: 370.8714340379025 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1524571.1610405664,
            "unit": "iter/sec",
            "range": "stddev: 3.201746517908513e-8",
            "extra": "mean: 655.922154081391 nsec\nrounds: 136968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1638493.5315984902,
            "unit": "iter/sec",
            "range": "stddev: 1.899016368207613e-8",
            "extra": "mean: 610.3167212536412 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1288280.9797210216,
            "unit": "iter/sec",
            "range": "stddev: 4.678430779576905e-8",
            "extra": "mean: 776.2281798313666 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1638368.47464349,
            "unit": "iter/sec",
            "range": "stddev: 1.988059362610328e-8",
            "extra": "mean: 610.3633068367366 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1420741.628319992,
            "unit": "iter/sec",
            "range": "stddev: 2.0573731184392825e-8",
            "extra": "mean: 703.8577458891142 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2128924.489791611,
            "unit": "iter/sec",
            "range": "stddev: 2.613173994662768e-8",
            "extra": "mean: 469.72074622494523 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4204509.4108191645,
            "unit": "iter/sec",
            "range": "stddev: 1.2646121612636023e-8",
            "extra": "mean: 237.8398767351 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5330856.218304446,
            "unit": "iter/sec",
            "range": "stddev: 8.86750184575805e-9",
            "extra": "mean: 187.58712654190327 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7004768.376139157,
            "unit": "iter/sec",
            "range": "stddev: 5.3977908557244274e-9",
            "extra": "mean: 142.75989530318722 nsec\nrounds: 68961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "59372212+mejrs@users.noreply.github.com",
            "name": "mejrs",
            "username": "mejrs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "455cc95c54f70a6db1e1490583e578de76a821fe",
          "message": "implement ffi/cpython/pystate (#1687)\n\n* dont reexport cpython items twice\r\n\r\n* add ffi module level doc\r\n\r\n* reorder to header file order\r\n\r\n* cargo fmt\r\n\r\n* implement cpython/pystate\r\n\r\n* fix import errors\r\n\r\n* make PyInterpreterState opaque\r\n\r\n* update changelog\r\n\r\n* fix formatting",
          "timestamp": "2021-06-24T20:05:15+08:00",
          "tree_id": "7ebb04f2e789117d0e45438079c859b991c0cb96",
          "url": "https://github.com/PyO3/pyo3/commit/455cc95c54f70a6db1e1490583e578de76a821fe"
        },
        "date": 1624536386468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8466364.02623036,
            "unit": "iter/sec",
            "range": "stddev: 6.126049505042053e-9",
            "extra": "mean: 118.11445821381976 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10223801.89410912,
            "unit": "iter/sec",
            "range": "stddev: 7.55025304903985e-9",
            "extra": "mean: 97.81097192191804 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3647636.4726857543,
            "unit": "iter/sec",
            "range": "stddev: 1.2356823381291331e-8",
            "extra": "mean: 274.1501263877705 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2249265.2371345297,
            "unit": "iter/sec",
            "range": "stddev: 2.44043460750747e-8",
            "extra": "mean: 444.58963019998265 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3293350.8071047044,
            "unit": "iter/sec",
            "range": "stddev: 1.8319716483279522e-8",
            "extra": "mean: 303.6421136321178 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2085043.1599765483,
            "unit": "iter/sec",
            "range": "stddev: 2.200982304682132e-8",
            "extra": "mean: 479.6063789920761 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1952509.6987430851,
            "unit": "iter/sec",
            "range": "stddev: 2.5645001732220026e-8",
            "extra": "mean: 512.1613483630641 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1677135.849617288,
            "unit": "iter/sec",
            "range": "stddev: 1.6712274706352553e-8",
            "extra": "mean: 596.2546207741125 nsec\nrounds: 79359"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1949731.51434374,
            "unit": "iter/sec",
            "range": "stddev: 1.6464705652871444e-8",
            "extra": "mean: 512.8911302113094 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1715768.3382947065,
            "unit": "iter/sec",
            "range": "stddev: 8.244669239621835e-8",
            "extra": "mean: 582.8292652808068 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2606103.5369843184,
            "unit": "iter/sec",
            "range": "stddev: 2.6358715486484638e-8",
            "extra": "mean: 383.71460911249085 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5339177.891590649,
            "unit": "iter/sec",
            "range": "stddev: 5.535632361798614e-9",
            "extra": "mean: 187.29475217058823 nsec\nrounds: 49752"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6452269.655809043,
            "unit": "iter/sec",
            "range": "stddev: 7.745176995561012e-9",
            "extra": "mean: 154.98422312522078 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8227842.521479351,
            "unit": "iter/sec",
            "range": "stddev: 6.6529388376905975e-9",
            "extra": "mean: 121.5385439608278 nsec\nrounds: 78741"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3bf283d36cfe523acc1e3e3c80f89b527d5c8991",
          "message": "Merge pull request #832 from gilescope/macro\n\nNeed to be able to create structs via macro_rules",
          "timestamp": "2021-06-24T22:14:56+08:00",
          "tree_id": "f8b70d9f7d60d59b69ff99f2bc4dec45f7c2a66f",
          "url": "https://github.com/PyO3/pyo3/commit/3bf283d36cfe523acc1e3e3c80f89b527d5c8991"
        },
        "date": 1624544205090,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7125001.515039475,
            "unit": "iter/sec",
            "range": "stddev: 2.766139678784118e-8",
            "extra": "mean: 140.3508473490904 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8732340.170253897,
            "unit": "iter/sec",
            "range": "stddev: 1.3851316866632887e-8",
            "extra": "mean: 114.51683975918823 nsec\nrounds: 89278"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3078258.247776763,
            "unit": "iter/sec",
            "range": "stddev: 3.5631711747657285e-7",
            "extra": "mean: 324.85903374813944 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1970795.6404421595,
            "unit": "iter/sec",
            "range": "stddev: 8.257452737336033e-8",
            "extra": "mean: 507.40928155062215 nsec\nrounds: 172385"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2796701.9137730137,
            "unit": "iter/sec",
            "range": "stddev: 6.673892018346004e-8",
            "extra": "mean: 357.5640274980972 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1771369.6353685295,
            "unit": "iter/sec",
            "range": "stddev: 8.416626140340166e-8",
            "extra": "mean: 564.5349113099892 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1667770.6947159632,
            "unit": "iter/sec",
            "range": "stddev: 5.90850575707025e-8",
            "extra": "mean: 599.6028130057072 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1355860.1571647343,
            "unit": "iter/sec",
            "range": "stddev: 1.0669031829698475e-7",
            "extra": "mean: 737.539188474377 nsec\nrounds: 185151"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1655437.802894636,
            "unit": "iter/sec",
            "range": "stddev: 5.7703997928277e-8",
            "extra": "mean: 604.0698105671365 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1470477.2022284628,
            "unit": "iter/sec",
            "range": "stddev: 9.141000930466505e-8",
            "extra": "mean: 680.0513455663532 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2170517.616754072,
            "unit": "iter/sec",
            "range": "stddev: 6.573114280779947e-8",
            "extra": "mean: 460.71959622983917 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4311042.782768239,
            "unit": "iter/sec",
            "range": "stddev: 3.513513082626408e-8",
            "extra": "mean: 231.9624393421069 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5015411.865824737,
            "unit": "iter/sec",
            "range": "stddev: 2.775305677669435e-8",
            "extra": "mean: 199.3854197327003 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7086786.928271357,
            "unit": "iter/sec",
            "range": "stddev: 1.2017080553130486e-8",
            "extra": "mean: 141.10767123692722 nsec\nrounds: 65786"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6009cc82cba1693da90c15f33a15e36efc982250",
          "message": "Merge pull request #1695 from messense/wrap-function-prelude\n\nAdd `wrap_pyfunction` macro to prelude",
          "timestamp": "2021-06-24T20:23:30+01:00",
          "tree_id": "5a1d9336d07c8a03c426d4d4aaa9559030822509",
          "url": "https://github.com/PyO3/pyo3/commit/6009cc82cba1693da90c15f33a15e36efc982250"
        },
        "date": 1624562690929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8759972.06020853,
            "unit": "iter/sec",
            "range": "stddev: 4.557163043355186e-9",
            "extra": "mean: 114.15561523791004 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10235043.237593701,
            "unit": "iter/sec",
            "range": "stddev: 3.740120865396203e-9",
            "extra": "mean: 97.70354426320455 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3657587.6343621854,
            "unit": "iter/sec",
            "range": "stddev: 1.3088303728201881e-8",
            "extra": "mean: 273.4042489110244 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2329208.297942978,
            "unit": "iter/sec",
            "range": "stddev: 2.320398318408019e-8",
            "extra": "mean: 429.3304299506723 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3307981.3553356547,
            "unit": "iter/sec",
            "range": "stddev: 1.618248385944719e-8",
            "extra": "mean: 302.29916453085275 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2145216.9774088925,
            "unit": "iter/sec",
            "range": "stddev: 3.424622602053356e-8",
            "extra": "mean: 466.15331247661663 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1980822.2624242618,
            "unit": "iter/sec",
            "range": "stddev: 1.8980607276189012e-8",
            "extra": "mean: 504.8408526954696 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1683411.1564258547,
            "unit": "iter/sec",
            "range": "stddev: 1.959249231654881e-8",
            "extra": "mean: 594.0319429290784 nsec\nrounds: 82638"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1968675.823526887,
            "unit": "iter/sec",
            "range": "stddev: 1.909592918640595e-8",
            "extra": "mean: 507.9556461504554 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1722443.1354147573,
            "unit": "iter/sec",
            "range": "stddev: 2.861472998618918e-8",
            "extra": "mean: 580.5706902245681 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2557098.239988248,
            "unit": "iter/sec",
            "range": "stddev: 2.0492703048390666e-8",
            "extra": "mean: 391.0682758921334 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5357642.658960547,
            "unit": "iter/sec",
            "range": "stddev: 5.484198919671529e-9",
            "extra": "mean: 186.64925297462685 nsec\nrounds: 49262"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6634692.359698617,
            "unit": "iter/sec",
            "range": "stddev: 5.070033565669263e-9",
            "extra": "mean: 150.72288898792465 nsec\nrounds: 62894"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8394476.516615134,
            "unit": "iter/sec",
            "range": "stddev: 4.10243238363891e-9",
            "extra": "mean: 119.12595121569859 nsec\nrounds: 81301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8b9a991d38c5912829dec45b31779ea42b19d2d",
          "message": "Merge pull request #1694 from mejrs/pyo3version\n\nautomagically update pyo3 version in toml examples",
          "timestamp": "2021-06-24T20:24:57+01:00",
          "tree_id": "b9db86f4724cd6496e95809bfdc133d7ff933663",
          "url": "https://github.com/PyO3/pyo3/commit/e8b9a991d38c5912829dec45b31779ea42b19d2d"
        },
        "date": 1624563486967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8392245.214603044,
            "unit": "iter/sec",
            "range": "stddev: 7.71383584224568e-9",
            "extra": "mean: 119.15762402404049 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10157565.939557651,
            "unit": "iter/sec",
            "range": "stddev: 4.972391158754317e-9",
            "extra": "mean: 98.4487825085288 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3636338.29588091,
            "unit": "iter/sec",
            "range": "stddev: 1.537968276523108e-8",
            "extra": "mean: 275.00191638815687 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2325184.9913762645,
            "unit": "iter/sec",
            "range": "stddev: 2.5445152473961983e-8",
            "extra": "mean: 430.07330759067867 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3283476.738659426,
            "unit": "iter/sec",
            "range": "stddev: 1.7475490446594806e-8",
            "extra": "mean: 304.5552259366025 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2103874.9720706553,
            "unit": "iter/sec",
            "range": "stddev: 3.026461406219821e-8",
            "extra": "mean: 475.3134160892257 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1899264.820231965,
            "unit": "iter/sec",
            "range": "stddev: 2.2334637487358414e-8",
            "extra": "mean: 526.5195192095263 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1655573.6454794856,
            "unit": "iter/sec",
            "range": "stddev: 2.9048969178659496e-8",
            "extra": "mean: 604.0202456292669 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1952959.5527021266,
            "unit": "iter/sec",
            "range": "stddev: 1.83999326686357e-8",
            "extra": "mean: 512.0433746909085 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1712747.8026442651,
            "unit": "iter/sec",
            "range": "stddev: 2.7053980077622786e-8",
            "extra": "mean: 583.8571203865944 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2544322.7980689453,
            "unit": "iter/sec",
            "range": "stddev: 2.295377029932499e-8",
            "extra": "mean: 393.03189074911813 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5350583.457236271,
            "unit": "iter/sec",
            "range": "stddev: 5.036862417385784e-9",
            "extra": "mean: 186.89550550748288 nsec\nrounds: 49752"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6293001.821914365,
            "unit": "iter/sec",
            "range": "stddev: 8.441508077760884e-9",
            "extra": "mean: 158.90667574842382 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8397819.784315765,
            "unit": "iter/sec",
            "range": "stddev: 4.883376966423555e-9",
            "extra": "mean: 119.07852581779319 nsec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e16bc16568489e3d0769862755f3eaa2ab521066",
          "message": "Merge pull request #1697 from scalexm/lifetime\n\nUse explicit lifetimes in proc-macro expansion",
          "timestamp": "2021-06-25T10:53:22+08:00",
          "tree_id": "2e23a9c7693dc752c705c51032a652ba56a4e0f9",
          "url": "https://github.com/PyO3/pyo3/commit/e16bc16568489e3d0769862755f3eaa2ab521066"
        },
        "date": 1624589670722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8334289.347731616,
            "unit": "iter/sec",
            "range": "stddev: 6.492021678591762e-9",
            "extra": "mean: 119.98623497160627 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10200960.235832313,
            "unit": "iter/sec",
            "range": "stddev: 3.7615335263659596e-9",
            "extra": "mean: 98.02998706801795 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3608105.406745747,
            "unit": "iter/sec",
            "range": "stddev: 1.4843971525639225e-8",
            "extra": "mean: 277.1537655561139 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2330792.85353423,
            "unit": "iter/sec",
            "range": "stddev: 2.2641321292014794e-8",
            "extra": "mean: 429.03855590825333 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3255567.244325382,
            "unit": "iter/sec",
            "range": "stddev: 1.7386208957688658e-8",
            "extra": "mean: 307.16613264307904 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2076244.8360653264,
            "unit": "iter/sec",
            "range": "stddev: 2.7255906015622834e-8",
            "extra": "mean: 481.6387656348672 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1960174.3212144359,
            "unit": "iter/sec",
            "range": "stddev: 1.9839944039237395e-8",
            "extra": "mean: 510.15870842596615 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1669150.2409420928,
            "unit": "iter/sec",
            "range": "stddev: 2.929430817448102e-8",
            "extra": "mean: 599.1072435971374 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1906632.4891822406,
            "unit": "iter/sec",
            "range": "stddev: 2.9512665974105733e-8",
            "extra": "mean: 524.4849260006168 nsec\nrounds: 175408"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1755732.5462157025,
            "unit": "iter/sec",
            "range": "stddev: 2.1306341940400124e-8",
            "extra": "mean: 569.5628312839783 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2533180.540188445,
            "unit": "iter/sec",
            "range": "stddev: 2.3334369264216302e-8",
            "extra": "mean: 394.7606513373098 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5294089.25185863,
            "unit": "iter/sec",
            "range": "stddev: 4.728645439226968e-9",
            "extra": "mean: 188.8899020069455 nsec\nrounds: 48779"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6422907.839563077,
            "unit": "iter/sec",
            "range": "stddev: 8.115748408407631e-9",
            "extra": "mean: 155.6927212687557 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8391282.83404105,
            "unit": "iter/sec",
            "range": "stddev: 4.021683473986469e-9",
            "extra": "mean: 119.17128998954666 nsec\nrounds: 77520"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b58fe202eb2513619d39a287bba5fc6473da8521",
          "message": "Merge pull request #1648 from davidhewitt/fix-cross-compile-config\n\npyo3-build-config: fix cross compilation",
          "timestamp": "2021-06-26T20:06:40+01:00",
          "tree_id": "57ebb5edbfae21fbb993d0ce4107add9abb8a64e",
          "url": "https://github.com/PyO3/pyo3/commit/b58fe202eb2513619d39a287bba5fc6473da8521"
        },
        "date": 1624734513866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7475065.233429208,
            "unit": "iter/sec",
            "range": "stddev: 1.8117945813751906e-7",
            "extra": "mean: 133.77809674854421 nsec\nrounds: 196117"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9454068.950769829,
            "unit": "iter/sec",
            "range": "stddev: 1.5104670182315923e-7",
            "extra": "mean: 105.77456174772037 nsec\nrounds: 116280"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3064346.61648168,
            "unit": "iter/sec",
            "range": "stddev: 3.5953571169724365e-7",
            "extra": "mean: 326.3338405066611 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1623266.829652748,
            "unit": "iter/sec",
            "range": "stddev: 5.180801295457139e-7",
            "extra": "mean: 616.0416647052027 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2681756.8521427717,
            "unit": "iter/sec",
            "range": "stddev: 7.203829039932315e-7",
            "extra": "mean: 372.8898834362937 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1189807.632373735,
            "unit": "iter/sec",
            "range": "stddev: 0.000003065605914713701",
            "extra": "mean: 840.4719996668218 nsec\nrounds: 44053"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1652391.7592056375,
            "unit": "iter/sec",
            "range": "stddev: 5.292437821123038e-7",
            "extra": "mean: 605.1833618929047 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1388283.235465358,
            "unit": "iter/sec",
            "range": "stddev: 5.033241478976762e-7",
            "extra": "mean: 720.3141077078457 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1700325.7937406125,
            "unit": "iter/sec",
            "range": "stddev: 3.62099687032276e-7",
            "extra": "mean: 588.1225843196072 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1596149.4231554684,
            "unit": "iter/sec",
            "range": "stddev: 6.26369411721238e-7",
            "extra": "mean: 626.5077601713665 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2306112.7572780116,
            "unit": "iter/sec",
            "range": "stddev: 3.124040166620862e-7",
            "extra": "mean: 433.6301409563377 nsec\nrounds: 121952"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4407053.8835406285,
            "unit": "iter/sec",
            "range": "stddev: 1.0031135407967405e-7",
            "extra": "mean: 226.90895696436806 nsec\nrounds: 46729"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5019036.38863606,
            "unit": "iter/sec",
            "range": "stddev: 1.1288035411515477e-7",
            "extra": "mean: 199.24143253158954 nsec\nrounds: 59524"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7252225.210801289,
            "unit": "iter/sec",
            "range": "stddev: 1.9043772815163747e-7",
            "extra": "mean: 137.88871290301313 nsec\nrounds: 90910"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11f1a1d6f0edef93c7fa0590d8d3e2c566342912",
          "message": "Merge pull request #1700 from messense/cross-compile\n\nAdd cross compilation test in CI",
          "timestamp": "2021-06-27T09:18:27+01:00",
          "tree_id": "597969835d54238b6d0ce8773007bb05ce42b71a",
          "url": "https://github.com/PyO3/pyo3/commit/11f1a1d6f0edef93c7fa0590d8d3e2c566342912"
        },
        "date": 1624781995998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6366359.427942575,
            "unit": "iter/sec",
            "range": "stddev: 2.2945465615871739e-7",
            "extra": "mean: 157.07564288797278 nsec\nrounds: 41842"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8373049.085346055,
            "unit": "iter/sec",
            "range": "stddev: 9.725419405429583e-8",
            "extra": "mean: 119.43080588769686 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 1821077.3885707196,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015856031271864336",
            "extra": "mean: 549.1254826819053 nsec\nrounds: 54645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1745263.1345085273,
            "unit": "iter/sec",
            "range": "stddev: 4.7159651599759414e-7",
            "extra": "mean: 572.9795010433702 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2545886.3500105566,
            "unit": "iter/sec",
            "range": "stddev: 4.564521007223584e-7",
            "extra": "mean: 392.79051085522866 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1538880.818547189,
            "unit": "iter/sec",
            "range": "stddev: 7.236396256406955e-7",
            "extra": "mean: 649.8229024286062 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1500401.9955610523,
            "unit": "iter/sec",
            "range": "stddev: 9.159093414777975e-7",
            "extra": "mean: 666.4880498415325 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1282634.8040353612,
            "unit": "iter/sec",
            "range": "stddev: 0.000001690956092739514",
            "extra": "mean: 779.6451467361348 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1510303.8683831198,
            "unit": "iter/sec",
            "range": "stddev: 0.000001158266975702367",
            "extra": "mean: 662.1184126812518 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1333596.4293431963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012255335374274598",
            "extra": "mean: 749.8520376906044 nsec\nrounds: 77514"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2033544.3906345381,
            "unit": "iter/sec",
            "range": "stddev: 4.783149680514232e-7",
            "extra": "mean: 491.7522354589967 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4213471.126789137,
            "unit": "iter/sec",
            "range": "stddev: 1.59458513206062e-7",
            "extra": "mean: 237.33401034647017 nsec\nrounds: 44844"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5175721.920387485,
            "unit": "iter/sec",
            "range": "stddev: 2.1447010108077834e-7",
            "extra": "mean: 193.20976191957044 nsec\nrounds: 64936"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6542563.711577692,
            "unit": "iter/sec",
            "range": "stddev: 7.339110633387915e-8",
            "extra": "mean: 152.84528268794648 nsec\nrounds: 25576"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9249527b63d2e318f30eabe07327e707cee51b5e",
          "message": "Merge pull request #1699 from ohadravid/size_hints\n\nAdded `size_hint` impls for `{PyDict,PyList,PySet,PyTuple}Iterator`s",
          "timestamp": "2021-06-27T17:27:26+01:00",
          "tree_id": "fbbc4397c5c7b3ec495739b89b1cd5a87bdcc0f2",
          "url": "https://github.com/PyO3/pyo3/commit/9249527b63d2e318f30eabe07327e707cee51b5e"
        },
        "date": 1624811337400,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7526748.464613759,
            "unit": "iter/sec",
            "range": "stddev: 3.445135988805196e-7",
            "extra": "mean: 132.85949499999995 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9232939.18057018,
            "unit": "iter/sec",
            "range": "stddev: 2.49951450718757e-7",
            "extra": "mean: 108.30787254658847 nsec\nrounds: 99001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3220937.492968421,
            "unit": "iter/sec",
            "range": "stddev: 4.94757869289028e-7",
            "extra": "mean: 310.46861424082095 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2016064.2734400134,
            "unit": "iter/sec",
            "range": "stddev: 0.000001133928064459699",
            "extra": "mean: 496.01593221726085 nsec\nrounds: 103093"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2803273.1839924636,
            "unit": "iter/sec",
            "range": "stddev: 7.689859680856196e-7",
            "extra": "mean: 356.72584666703716 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1520287.7798327203,
            "unit": "iter/sec",
            "range": "stddev: 6.000044923410165e-7",
            "extra": "mean: 657.7702019745157 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1716021.5897105793,
            "unit": "iter/sec",
            "range": "stddev: 8.524718086266841e-7",
            "extra": "mean: 582.7432510150719 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1238971.8387403535,
            "unit": "iter/sec",
            "range": "stddev: 0.000003375383812984738",
            "extra": "mean: 807.1208470861246 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1730792.1515037129,
            "unit": "iter/sec",
            "range": "stddev: 5.824319307872939e-7",
            "extra": "mean: 577.7701263154144 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1093223.3898399484,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015601990137589238",
            "extra": "mean: 914.7261294389183 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2212968.650798438,
            "unit": "iter/sec",
            "range": "stddev: 9.590177025670933e-7",
            "extra": "mean: 451.881683746625 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 2701998.682501924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012155352061538759",
            "extra": "mean: 370.0964054776913 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6061542.16196109,
            "unit": "iter/sec",
            "range": "stddev: 2.1356985753719093e-7",
            "extra": "mean: 164.97451857631748 nsec\nrounds: 60238"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7607026.127718172,
            "unit": "iter/sec",
            "range": "stddev: 1.1061321653333132e-7",
            "extra": "mean: 131.45741623731425 nsec\nrounds: 78734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "021505401275cfe4065ff87c8e713f93c0f2f9d7",
          "message": "Merge pull request #1702 from ohadravid/to-python-set-non-default-hashbuilder\n\nMake `ToPyObject` impl for `HashSet` accept non-default hashers.",
          "timestamp": "2021-06-27T17:29:00+01:00",
          "tree_id": "b6308da7f890f2dda74e1a25cfd86fadc8c224fd",
          "url": "https://github.com/PyO3/pyo3/commit/021505401275cfe4065ff87c8e713f93c0f2f9d7"
        },
        "date": 1624812289641,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7944090.958666782,
            "unit": "iter/sec",
            "range": "stddev: 2.301718560253789e-8",
            "extra": "mean: 125.87972685643615 nsec\nrounds: 68023"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8294977.659024144,
            "unit": "iter/sec",
            "range": "stddev: 4.0105722878879466e-8",
            "extra": "mean: 120.55487562550975 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3273876.681545514,
            "unit": "iter/sec",
            "range": "stddev: 8.088331985466114e-8",
            "extra": "mean: 305.44827959980626 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2123563.0464204783,
            "unit": "iter/sec",
            "range": "stddev: 1.0820230755266617e-7",
            "extra": "mean: 470.9066687167989 nsec\nrounds: 45451"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2970727.0415689913,
            "unit": "iter/sec",
            "range": "stddev: 8.718191461246002e-8",
            "extra": "mean: 336.61793426575946 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1910162.071195804,
            "unit": "iter/sec",
            "range": "stddev: 1.4375610842670415e-7",
            "extra": "mean: 523.515787000494 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1808204.8282341452,
            "unit": "iter/sec",
            "range": "stddev: 1.1305077908436552e-7",
            "extra": "mean: 553.0346918586796 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1509081.8153550988,
            "unit": "iter/sec",
            "range": "stddev: 1.218747542190034e-7",
            "extra": "mean: 662.6545955460614 nsec\nrounds: 84027"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1724193.4017265865,
            "unit": "iter/sec",
            "range": "stddev: 1.29083952045134e-7",
            "extra": "mean: 579.9813402593604 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1566541.8259040345,
            "unit": "iter/sec",
            "range": "stddev: 1.5760181425184068e-7",
            "extra": "mean: 638.3487395386353 nsec\nrounds: 144907"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2281766.568140298,
            "unit": "iter/sec",
            "range": "stddev: 1.1174699250742419e-7",
            "extra": "mean: 438.25692512235645 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4631259.536944326,
            "unit": "iter/sec",
            "range": "stddev: 7.375957184551763e-8",
            "extra": "mean: 215.92398180730393 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5379833.297416029,
            "unit": "iter/sec",
            "range": "stddev: 2.7468638046613073e-8",
            "extra": "mean: 185.87936553353256 nsec\nrounds: 58821"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7597850.511110937,
            "unit": "iter/sec",
            "range": "stddev: 2.444494415707696e-8",
            "extra": "mean: 131.61617203942117 nsec\nrounds: 68961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "542a6124b135ddf098783040889f7ea8ecdea685",
          "message": "Merge pull request #1696 from scalexm/unwrap\n\nUnwrap `syn::*::Group` in a few places",
          "timestamp": "2021-06-29T22:12:49+01:00",
          "tree_id": "b2465765caafe8316a4f69ad3f470f01fa54e2f8",
          "url": "https://github.com/PyO3/pyo3/commit/542a6124b135ddf098783040889f7ea8ecdea685"
        },
        "date": 1625001265987,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8753607.169424925,
            "unit": "iter/sec",
            "range": "stddev: 3.232465359962787e-9",
            "extra": "mean: 114.23861965074121 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10186172.690724803,
            "unit": "iter/sec",
            "range": "stddev: 3.421885612645571e-9",
            "extra": "mean: 98.17229987772578 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3642539.9528640183,
            "unit": "iter/sec",
            "range": "stddev: 1.1429333356987021e-8",
            "extra": "mean: 274.53370805601037 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2293728.9345056335,
            "unit": "iter/sec",
            "range": "stddev: 1.8770609640872332e-8",
            "extra": "mean: 435.9713063546733 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3273728.350311862,
            "unit": "iter/sec",
            "range": "stddev: 1.5515043152906193e-8",
            "extra": "mean: 305.46211933093065 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2123896.6631055227,
            "unit": "iter/sec",
            "range": "stddev: 2.1839495442384076e-8",
            "extra": "mean: 470.83269980601085 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1944254.1105491654,
            "unit": "iter/sec",
            "range": "stddev: 2.277394198238954e-8",
            "extra": "mean: 514.3360605872913 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1640803.9286145305,
            "unit": "iter/sec",
            "range": "stddev: 1.9526654183728966e-8",
            "extra": "mean: 609.4573413438756 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1916315.6742315623,
            "unit": "iter/sec",
            "range": "stddev: 8.773688322866527e-8",
            "extra": "mean: 521.8346921894208 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1716652.85242996,
            "unit": "iter/sec",
            "range": "stddev: 2.8686921991593627e-7",
            "extra": "mean: 582.5289595299001 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2553652.709449451,
            "unit": "iter/sec",
            "range": "stddev: 1.5774115147507363e-8",
            "extra": "mean: 391.5959270023933 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5230623.488382969,
            "unit": "iter/sec",
            "range": "stddev: 4.994141960769173e-9",
            "extra": "mean: 191.18179739386284 nsec\nrounds: 49505"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6369453.901503704,
            "unit": "iter/sec",
            "range": "stddev: 7.156765568380082e-9",
            "extra": "mean: 156.99933078468777 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8407376.89364194,
            "unit": "iter/sec",
            "range": "stddev: 3.26296165610089e-9",
            "extra": "mean: 118.94316296869208 nsec\nrounds: 79359"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c179c8844f17d8c6fdeb249f9ac37634f614e22b",
          "message": "Merge pull request #1706 from davidhewitt/ignore-coverage-tests\n\ncoverage: ignore tests",
          "timestamp": "2021-06-30T08:58:01+01:00",
          "tree_id": "f669178a1c4353ad1e882a4206ee89457f31a317",
          "url": "https://github.com/PyO3/pyo3/commit/c179c8844f17d8c6fdeb249f9ac37634f614e22b"
        },
        "date": 1625039961949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8800693.049159996,
            "unit": "iter/sec",
            "range": "stddev: 4.079697555960051e-9",
            "extra": "mean: 113.62741484268626 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10268658.635812545,
            "unit": "iter/sec",
            "range": "stddev: 3.1531081304411555e-9",
            "extra": "mean: 97.38370272749867 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3672755.8020964684,
            "unit": "iter/sec",
            "range": "stddev: 1.1640643812706641e-8",
            "extra": "mean: 272.2751127178175 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2300729.0152213546,
            "unit": "iter/sec",
            "range": "stddev: 1.970883543964585e-8",
            "extra": "mean: 434.64484230167795 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3299821.4320986103,
            "unit": "iter/sec",
            "range": "stddev: 1.1695205444641377e-7",
            "extra": "mean: 303.04670133727416 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2160635.9247098463,
            "unit": "iter/sec",
            "range": "stddev: 5.6720673263487254e-8",
            "extra": "mean: 462.82670234494003 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1936262.384768925,
            "unit": "iter/sec",
            "range": "stddev: 2.2679292501137965e-8",
            "extra": "mean: 516.4589302907203 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1666971.9512318813,
            "unit": "iter/sec",
            "range": "stddev: 1.8784035904170394e-8",
            "extra": "mean: 599.8901176838758 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1964459.7354360644,
            "unit": "iter/sec",
            "range": "stddev: 1.9545453067896887e-8",
            "extra": "mean: 509.04581140659093 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1715617.9308500097,
            "unit": "iter/sec",
            "range": "stddev: 2.662933815374651e-8",
            "extra": "mean: 582.8803616578177 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2586736.839765978,
            "unit": "iter/sec",
            "range": "stddev: 1.41683091406653e-8",
            "extra": "mean: 386.58745050015494 nsec\nrounds: 125001"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5341470.610882814,
            "unit": "iter/sec",
            "range": "stddev: 6.13226694799828e-9",
            "extra": "mean: 187.2143596489745 nsec\nrounds: 49020"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6415479.307374619,
            "unit": "iter/sec",
            "range": "stddev: 7.545646641152052e-9",
            "extra": "mean: 155.87299905254096 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8309400.1802167,
            "unit": "iter/sec",
            "range": "stddev: 5.706907252612102e-9",
            "extra": "mean: 120.34563004686164 nsec\nrounds: 79994"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5715683892b99bf3f2e4fb928a7c7048f9c27b68",
          "message": "Merge pull request #1711 from mejrs/macro\n\nAdd full path for PyCell",
          "timestamp": "2021-07-03T08:19:30+01:00",
          "tree_id": "aedefb56c31e0b7e2409e69a8428e2072eadb899",
          "url": "https://github.com/PyO3/pyo3/commit/5715683892b99bf3f2e4fb928a7c7048f9c27b68"
        },
        "date": 1625296856885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8784019.19309057,
            "unit": "iter/sec",
            "range": "stddev: 6.18742826457985e-9",
            "extra": "mean: 113.8431028004495 nsec\nrounds: 84746"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10049557.07615558,
            "unit": "iter/sec",
            "range": "stddev: 3.314010839914346e-9",
            "extra": "mean: 99.50687303145682 nsec\nrounds: 100001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3642177.5975659033,
            "unit": "iter/sec",
            "range": "stddev: 1.2830791990235001e-8",
            "extra": "mean: 274.56102104053275 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2269136.388562654,
            "unit": "iter/sec",
            "range": "stddev: 2.1991422611320953e-8",
            "extra": "mean: 440.69629531299967 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3275006.9355911165,
            "unit": "iter/sec",
            "range": "stddev: 2.2080038659332656e-7",
            "extra": "mean: 305.3428648141656 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2132802.1376559124,
            "unit": "iter/sec",
            "range": "stddev: 2.2687259438019752e-8",
            "extra": "mean: 468.86674687003995 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1977393.2853148659,
            "unit": "iter/sec",
            "range": "stddev: 1.4662293203985905e-8",
            "extra": "mean: 505.71629196231 nsec\nrounds: 96965"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1642037.577488819,
            "unit": "iter/sec",
            "range": "stddev: 2.2440902844443568e-8",
            "extra": "mean: 608.9994612237412 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1952821.692081828,
            "unit": "iter/sec",
            "range": "stddev: 1.6257864041101105e-8",
            "extra": "mean: 512.0795227000673 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1685383.124937265,
            "unit": "iter/sec",
            "range": "stddev: 2.4332738931150287e-8",
            "extra": "mean: 593.3369007933418 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2564391.779010634,
            "unit": "iter/sec",
            "range": "stddev: 1.626571825535291e-8",
            "extra": "mean: 389.9560153733634 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5252325.41238463,
            "unit": "iter/sec",
            "range": "stddev: 4.818680774819056e-9",
            "extra": "mean: 190.39185912619476 nsec\nrounds: 48781"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6383838.298345589,
            "unit": "iter/sec",
            "range": "stddev: 9.09209190780892e-9",
            "extra": "mean: 156.64557171837964 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8415506.174643122,
            "unit": "iter/sec",
            "range": "stddev: 3.4849986559494505e-9",
            "extra": "mean: 118.82826525786109 nsec\nrounds: 80646"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5715683892b99bf3f2e4fb928a7c7048f9c27b68",
          "message": "Merge pull request #1711 from mejrs/macro\n\nAdd full path for PyCell",
          "timestamp": "2021-07-03T08:19:30+01:00",
          "tree_id": "aedefb56c31e0b7e2409e69a8428e2072eadb899",
          "url": "https://github.com/PyO3/pyo3/commit/5715683892b99bf3f2e4fb928a7c7048f9c27b68"
        },
        "date": 1625319487100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7013595.421583227,
            "unit": "iter/sec",
            "range": "stddev: 1.0647513200521614e-7",
            "extra": "mean: 142.58022310819547 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8264485.432040519,
            "unit": "iter/sec",
            "range": "stddev: 1.0655903273343994e-7",
            "extra": "mean: 120.99966879043355 nsec\nrounds: 43477"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2984001.3545525004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010056110051739649",
            "extra": "mean: 335.12049130754036 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1975170.5759300557,
            "unit": "iter/sec",
            "range": "stddev: 6.135753238736456e-7",
            "extra": "mean: 506.28538729085614 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2772468.791982023,
            "unit": "iter/sec",
            "range": "stddev: 2.2090666643513121e-7",
            "extra": "mean: 360.6893620920529 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1777154.4789137836,
            "unit": "iter/sec",
            "range": "stddev: 3.1637918627540677e-7",
            "extra": "mean: 562.6972848249939 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1657674.559584353,
            "unit": "iter/sec",
            "range": "stddev: 0.000001090601667473716",
            "extra": "mean: 603.2547186166761 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1442809.7932951467,
            "unit": "iter/sec",
            "range": "stddev: 2.404097736885264e-7",
            "extra": "mean: 693.0920518055708 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1645223.8989941624,
            "unit": "iter/sec",
            "range": "stddev: 8.48472985657985e-7",
            "extra": "mean: 607.8200059040581 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1398423.5285933348,
            "unit": "iter/sec",
            "range": "stddev: 8.903830155705347e-7",
            "extra": "mean: 715.0909431610867 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2148991.431339643,
            "unit": "iter/sec",
            "range": "stddev: 5.927387257748977e-7",
            "extra": "mean: 465.33456830801356 nsec\nrounds: 106372"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4013001.7244076123,
            "unit": "iter/sec",
            "range": "stddev: 3.458571738300295e-7",
            "extra": "mean: 249.19002499218053 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5308827.179076306,
            "unit": "iter/sec",
            "range": "stddev: 1.5740981816416383e-7",
            "extra": "mean: 188.36552147357304 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6823397.558897364,
            "unit": "iter/sec",
            "range": "stddev: 8.345220006363875e-8",
            "extra": "mean: 146.55455605044526 nsec\nrounds: 66663"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b88dd156e44dbfdc987af23a21d3e5139990b79",
          "message": "Merge pull request #1698 from PyO3/release-0.14\n\nrelease: 0.14.0",
          "timestamp": "2021-07-03T22:29:05+01:00",
          "tree_id": "b73bbf44caf02787877df5fcb66735badb30ba23",
          "url": "https://github.com/PyO3/pyo3/commit/4b88dd156e44dbfdc987af23a21d3e5139990b79"
        },
        "date": 1625347859715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6778007.015097397,
            "unit": "iter/sec",
            "range": "stddev: 1.3117516027287924e-7",
            "extra": "mean: 147.5359936589401 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8492146.955521096,
            "unit": "iter/sec",
            "range": "stddev: 2.9958178861414845e-7",
            "extra": "mean: 117.75585199334621 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2875608.3706367086,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013096494178466468",
            "extra": "mean: 347.75250003131504 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1924592.7505748384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014913876510249686",
            "extra": "mean: 519.5904430697998 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2581005.2307975944,
            "unit": "iter/sec",
            "range": "stddev: 3.1382297157687085e-7",
            "extra": "mean: 387.44594085590296 nsec\nrounds: 136987"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1690437.8856681683,
            "unit": "iter/sec",
            "range": "stddev: 7.339920120662654e-7",
            "extra": "mean: 591.5627001016965 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1459848.7375401133,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015965011202260218",
            "extra": "mean: 685.0024761366911 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1337365.5381509485,
            "unit": "iter/sec",
            "range": "stddev: 6.69687887248569e-7",
            "extra": "mean: 747.738723238334 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1545387.6587598291,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010030380437865347",
            "extra": "mean: 647.0868292055981 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1465306.5606489123,
            "unit": "iter/sec",
            "range": "stddev: 6.342382833536422e-7",
            "extra": "mean: 682.4510493946543 nsec\nrounds: 75758"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2065616.6305887643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010776199958340474",
            "extra": "mean: 484.1169388313767 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4050611.104625528,
            "unit": "iter/sec",
            "range": "stddev: 3.553645544006371e-7",
            "extra": "mean: 246.87632907019926 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5380065.707855545,
            "unit": "iter/sec",
            "range": "stddev: 1.5411497702476324e-7",
            "extra": "mean: 185.87133583513926 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6764160.791437028,
            "unit": "iter/sec",
            "range": "stddev: 1.7132219529802256e-7",
            "extra": "mean: 147.83799954399348 nsec\nrounds: 65790"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9cdb6a0d635c01448dbc2c3cb4a1a94264a078d3",
          "message": "Merge pull request #1712 from messense/pathbuf-into-py\n\nImplement `IntoPy<PyObject>` for `&PathBuf` and `&OsString`",
          "timestamp": "2021-07-04T16:45:16+08:00",
          "tree_id": "0f88e040343bdb4bb9583633d521ba962cbc1784",
          "url": "https://github.com/PyO3/pyo3/commit/9cdb6a0d635c01448dbc2c3cb4a1a94264a078d3"
        },
        "date": 1625388393739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7880018.678010252,
            "unit": "iter/sec",
            "range": "stddev: 8.808868088950986e-8",
            "extra": "mean: 126.90325249982 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10341228.228238802,
            "unit": "iter/sec",
            "range": "stddev: 5.682742059749275e-8",
            "extra": "mean: 96.70031237387575 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3483438.1461804355,
            "unit": "iter/sec",
            "range": "stddev: 2.5039296672569963e-7",
            "extra": "mean: 287.0727017491461 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2161060.064348029,
            "unit": "iter/sec",
            "range": "stddev: 3.158212092954042e-7",
            "extra": "mean: 462.73586583599996 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3214788.364154112,
            "unit": "iter/sec",
            "range": "stddev: 4.267389110867718e-7",
            "extra": "mean: 311.06246717523004 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2013208.0071478512,
            "unit": "iter/sec",
            "range": "stddev: 9.97584527889089e-7",
            "extra": "mean: 496.7196615797193 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1914434.3682375064,
            "unit": "iter/sec",
            "range": "stddev: 2.594394454064996e-7",
            "extra": "mean: 522.3474967807222 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1565094.6805802502,
            "unit": "iter/sec",
            "range": "stddev: 6.43808429787771e-7",
            "extra": "mean: 638.9389807581608 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1749917.1939988367,
            "unit": "iter/sec",
            "range": "stddev: 3.157491590512033e-7",
            "extra": "mean: 571.4556114023939 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1653084.2702427316,
            "unit": "iter/sec",
            "range": "stddev: 6.379589371837346e-7",
            "extra": "mean: 604.9298381220048 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2456191.1752562504,
            "unit": "iter/sec",
            "range": "stddev: 2.760046261571413e-7",
            "extra": "mean: 407.1344323978678 nsec\nrounds: 121952"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5477493.6124783605,
            "unit": "iter/sec",
            "range": "stddev: 6.160021735821646e-8",
            "extra": "mean: 182.56525169128702 nsec\nrounds: 56180"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6682837.065112546,
            "unit": "iter/sec",
            "range": "stddev: 1.267446565929812e-7",
            "extra": "mean: 149.63704640070216 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7666110.330103221,
            "unit": "iter/sec",
            "range": "stddev: 8.482976989308325e-8",
            "extra": "mean: 130.44424837879404 nsec\nrounds: 86207"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4ed0383e41ea3b27203117978546f91f1867aac8",
          "message": "Merge pull request #1713 from PyO3/pypy_macros\n\nPyPy: the PyList/Tuple_GET/SET macros are defined as functions",
          "timestamp": "2021-07-04T15:59:56+01:00",
          "tree_id": "31b35cc785358bdef750ab0e12dc8825e1db1559",
          "url": "https://github.com/PyO3/pyo3/commit/4ed0383e41ea3b27203117978546f91f1867aac8"
        },
        "date": 1625411600923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8796007.353058811,
            "unit": "iter/sec",
            "range": "stddev: 3.398350755469676e-9",
            "extra": "mean: 113.68794498016223 nsec\nrounds: 57143"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10140548.046670318,
            "unit": "iter/sec",
            "range": "stddev: 3.550632391645682e-9",
            "extra": "mean: 98.61399949958809 nsec\nrounds: 100000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3655934.9608883704,
            "unit": "iter/sec",
            "range": "stddev: 1.3689011969531955e-8",
            "extra": "mean: 273.5278419062072 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2260960.7276436873,
            "unit": "iter/sec",
            "range": "stddev: 2.1926113498134908e-8",
            "extra": "mean: 442.28985836553295 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3280875.054362884,
            "unit": "iter/sec",
            "range": "stddev: 1.6932011442595777e-8",
            "extra": "mean: 304.7967336245272 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1955369.0144594335,
            "unit": "iter/sec",
            "range": "stddev: 5.406287240396468e-7",
            "extra": "mean: 511.41242016453396 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1920178.8990973353,
            "unit": "iter/sec",
            "range": "stddev: 2.1224856146741775e-8",
            "extra": "mean: 520.7848083688032 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1669911.1173062704,
            "unit": "iter/sec",
            "range": "stddev: 1.8910100012623756e-8",
            "extra": "mean: 598.8342670676283 nsec\nrounds: 79359"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1895210.7052598577,
            "unit": "iter/sec",
            "range": "stddev: 2.5567004817414198e-8",
            "extra": "mean: 527.6458164909794 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1715315.0475808126,
            "unit": "iter/sec",
            "range": "stddev: 2.611332800587411e-8",
            "extra": "mean: 582.9832842724269 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2543280.6658789525,
            "unit": "iter/sec",
            "range": "stddev: 2.067893524584789e-8",
            "extra": "mean: 393.1929391100396 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5136807.132668426,
            "unit": "iter/sec",
            "range": "stddev: 8.47638510475113e-9",
            "extra": "mean: 194.67345652118047 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6489029.181799106,
            "unit": "iter/sec",
            "range": "stddev: 3.5483359221040966e-9",
            "extra": "mean: 154.10625718949032 nsec\nrounds: 61729"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8407357.872447161,
            "unit": "iter/sec",
            "range": "stddev: 3.537292268926495e-9",
            "extra": "mean: 118.94343207119714 nsec\nrounds: 81968"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fde42110814157bc32c88f2d72d70d19a2cd71c0",
          "message": "Merge pull request #1707 from nw0/doc\n\nDocument some undocumented items",
          "timestamp": "2021-07-04T16:35:17+01:00",
          "tree_id": "fd98655d0af98794be58dee7f31f3d851ec03881",
          "url": "https://github.com/PyO3/pyo3/commit/fde42110814157bc32c88f2d72d70d19a2cd71c0"
        },
        "date": 1625413498106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8536354.98627104,
            "unit": "iter/sec",
            "range": "stddev: 1.5350343107463737e-8",
            "extra": "mean: 117.14601860026251 nsec\nrounds: 74622"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9989197.302502405,
            "unit": "iter/sec",
            "range": "stddev: 1.378894659160014e-8",
            "extra": "mean: 100.10814379939801 nsec\nrounds: 102031"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3596420.0772725716,
            "unit": "iter/sec",
            "range": "stddev: 4.581572010301661e-8",
            "extra": "mean: 278.054281344675 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2339713.913331298,
            "unit": "iter/sec",
            "range": "stddev: 6.437152049701896e-8",
            "extra": "mean: 427.4026812859932 nsec\nrounds: 99001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3112315.134110105,
            "unit": "iter/sec",
            "range": "stddev: 7.899866728157011e-8",
            "extra": "mean: 321.3042243182861 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1948262.6080505988,
            "unit": "iter/sec",
            "range": "stddev: 8.789024521211442e-8",
            "extra": "mean: 513.2778280850515 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1920891.525630486,
            "unit": "iter/sec",
            "range": "stddev: 7.434870408187121e-8",
            "extra": "mean: 520.5916037718639 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1662191.9227784977,
            "unit": "iter/sec",
            "range": "stddev: 7.77762702562714e-8",
            "extra": "mean: 601.6152444828977 nsec\nrounds: 75752"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1935327.4874186988,
            "unit": "iter/sec",
            "range": "stddev: 7.199360886792321e-8",
            "extra": "mean: 516.7084157596388 nsec\nrounds: 99991"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1776164.1144978271,
            "unit": "iter/sec",
            "range": "stddev: 7.916403543984828e-8",
            "extra": "mean: 563.0110370080992 nsec\nrounds: 78119"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2525748.075987501,
            "unit": "iter/sec",
            "range": "stddev: 6.902561669735472e-8",
            "extra": "mean: 395.92230496268104 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5074005.064199687,
            "unit": "iter/sec",
            "range": "stddev: 3.3640432287157484e-8",
            "extra": "mean: 197.0829723950148 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6166136.690383884,
            "unit": "iter/sec",
            "range": "stddev: 3.05141767910666e-8",
            "extra": "mean: 162.1760999167109 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8013940.162628653,
            "unit": "iter/sec",
            "range": "stddev: 1.8988446705994372e-8",
            "extra": "mean: 124.78256384582221 nsec\nrounds: 72988"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4001fdf56f7da188ba18dbdf21c5aa8c40566e50",
          "message": "Merge pull request #1716 from PyO3/release-0.14.1\n\nrelease: 0.14.1",
          "timestamp": "2021-07-04T22:23:06+01:00",
          "tree_id": "17467d1adb719ed0bd019328b9bbf00b6d376b8b",
          "url": "https://github.com/PyO3/pyo3/commit/4001fdf56f7da188ba18dbdf21c5aa8c40566e50"
        },
        "date": 1625433892766,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7714898.494604629,
            "unit": "iter/sec",
            "range": "stddev: 1.7367614223970292e-7",
            "extra": "mean: 129.61933338468813 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9950880.837447809,
            "unit": "iter/sec",
            "range": "stddev: 2.2812374534582496e-7",
            "extra": "mean: 100.49361622718897 nsec\nrounds: 114943"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3413908.713648507,
            "unit": "iter/sec",
            "range": "stddev: 4.3339497546970337e-7",
            "extra": "mean: 292.91937303514345 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2087215.5355202917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010568261197164253",
            "extra": "mean: 479.1072043033173 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2959262.6235789303,
            "unit": "iter/sec",
            "range": "stddev: 6.917126596199378e-7",
            "extra": "mean: 337.92201882783564 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1924065.7347173805,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012864188986231046",
            "extra": "mean: 519.7327627409525 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1844375.6724713244,
            "unit": "iter/sec",
            "range": "stddev: 4.6041959429318944e-7",
            "extra": "mean: 542.1888907590208 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1622902.9466151812,
            "unit": "iter/sec",
            "range": "stddev: 4.7319061676578483e-7",
            "extra": "mean: 616.1797919497312 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1782974.6432091675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011973918087570589",
            "extra": "mean: 560.8604720255187 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1581049.530277647,
            "unit": "iter/sec",
            "range": "stddev: 0.000001097098885309486",
            "extra": "mean: 632.4912539738395 nsec\nrounds: 94340"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2389645.793493506,
            "unit": "iter/sec",
            "range": "stddev: 4.239797957219997e-7",
            "extra": "mean: 418.47206088986644 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4565432.925067872,
            "unit": "iter/sec",
            "range": "stddev: 6.291535428738936e-7",
            "extra": "mean: 219.0372778251762 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6558847.201201332,
            "unit": "iter/sec",
            "range": "stddev: 1.6950128519498516e-7",
            "extra": "mean: 152.46581744076593 nsec\nrounds: 62500"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7908613.054030376,
            "unit": "iter/sec",
            "range": "stddev: 1.33718619009812e-7",
            "extra": "mean: 126.44442118588002 nsec\nrounds: 90910"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "584fc6fe42a8ec6fe7fa55ff98aec8bf8471e134",
          "message": "Merge pull request #1722 from davidhewitt/pymodule-doc-hidden\n\nmacros-backend: don't error on #[doc(hidden)]",
          "timestamp": "2021-07-09T10:41:55+08:00",
          "tree_id": "50cb1e6a505987853b900600f530c14e8ad8e5c3",
          "url": "https://github.com/PyO3/pyo3/commit/584fc6fe42a8ec6fe7fa55ff98aec8bf8471e134"
        },
        "date": 1625798607765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8783008.391109493,
            "unit": "iter/sec",
            "range": "stddev: 3.1348592358110478e-9",
            "extra": "mean: 113.85620455646432 nsec\nrounds: 85463"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10258283.679850139,
            "unit": "iter/sec",
            "range": "stddev: 3.5424314136521133e-9",
            "extra": "mean: 97.48219402080855 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3657712.405886021,
            "unit": "iter/sec",
            "range": "stddev: 1.3223926058988615e-8",
            "extra": "mean: 273.3949225722171 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2357407.200977867,
            "unit": "iter/sec",
            "range": "stddev: 1.9084837856401363e-8",
            "extra": "mean: 424.19485254214834 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3256296.454432519,
            "unit": "iter/sec",
            "range": "stddev: 1.3113443888000503e-8",
            "extra": "mean: 307.0973463238536 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2044844.4597425344,
            "unit": "iter/sec",
            "range": "stddev: 2.5685715270493603e-8",
            "extra": "mean: 489.03475041102206 nsec\nrounds: 175408"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1948892.2641103193,
            "unit": "iter/sec",
            "range": "stddev: 2.0682022175210856e-8",
            "extra": "mean: 513.1119961917219 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1648585.0787898449,
            "unit": "iter/sec",
            "range": "stddev: 2.3429934992815464e-8",
            "extra": "mean: 606.5807660559216 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1974963.6276768285,
            "unit": "iter/sec",
            "range": "stddev: 1.4327691346179972e-8",
            "extra": "mean: 506.33843883806236 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1741792.2478074555,
            "unit": "iter/sec",
            "range": "stddev: 2.2562692564438502e-8",
            "extra": "mean: 574.1212829823398 nsec\nrounds: 161265"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2613609.9024213315,
            "unit": "iter/sec",
            "range": "stddev: 1.2208364105698012e-8",
            "extra": "mean: 382.61256933301905 nsec\nrounds: 128189"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5255746.530213239,
            "unit": "iter/sec",
            "range": "stddev: 3.99817270451415e-9",
            "extra": "mean: 190.2679275438775 nsec\nrounds: 48305"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6427231.592283239,
            "unit": "iter/sec",
            "range": "stddev: 6.389924624079698e-9",
            "extra": "mean: 155.5879830442241 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8282030.106375081,
            "unit": "iter/sec",
            "range": "stddev: 4.036877267082818e-9",
            "extra": "mean: 120.7433427742757 nsec\nrounds: 78734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8107c86682093e4e52ecf07a39f369ba61030b41",
          "message": "Merge pull request #1710 from mejrs/pyt\n\nImprove Py<...> documentation",
          "timestamp": "2021-07-15T08:23:17+01:00",
          "tree_id": "3e4cacdb94e4717dc90b5c16120f1189de80c045",
          "url": "https://github.com/PyO3/pyo3/commit/8107c86682093e4e52ecf07a39f369ba61030b41"
        },
        "date": 1626333906600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7688822.735714985,
            "unit": "iter/sec",
            "range": "stddev: 3.034388407447103e-8",
            "extra": "mean: 130.05892246085102 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8341519.524584705,
            "unit": "iter/sec",
            "range": "stddev: 1.9467825354043807e-8",
            "extra": "mean: 119.8822345320654 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3313767.6758960793,
            "unit": "iter/sec",
            "range": "stddev: 6.373381252539605e-8",
            "extra": "mean: 301.7713062008335 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2068943.6423036228,
            "unit": "iter/sec",
            "range": "stddev: 7.658763331449308e-8",
            "extra": "mean: 483.33844361576587 nsec\nrounds: 100001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2962208.5957665504,
            "unit": "iter/sec",
            "range": "stddev: 6.519840255103703e-8",
            "extra": "mean: 337.58594902081353 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1875101.9848949548,
            "unit": "iter/sec",
            "range": "stddev: 1.144785194736368e-7",
            "extra": "mean: 533.3043258741958 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1742532.4650074,
            "unit": "iter/sec",
            "range": "stddev: 8.331099337372473e-8",
            "extra": "mean: 573.877399750813 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1503180.6531299364,
            "unit": "iter/sec",
            "range": "stddev: 1.0143895730824727e-7",
            "extra": "mean: 665.2560342084605 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1778829.0891143912,
            "unit": "iter/sec",
            "range": "stddev: 8.692858904920649e-8",
            "extra": "mean: 562.1675551179259 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1525915.396716695,
            "unit": "iter/sec",
            "range": "stddev: 9.442666365506213e-8",
            "extra": "mean: 655.3443278387899 nsec\nrounds: 75183"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1623956.2120664371,
            "unit": "iter/sec",
            "range": "stddev: 3.7871543762410304e-7",
            "extra": "mean: 615.7801500863924 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4465713.773054102,
            "unit": "iter/sec",
            "range": "stddev: 5.1270716784046596e-8",
            "extra": "mean: 223.92836863705736 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5337799.339385024,
            "unit": "iter/sec",
            "range": "stddev: 3.660259952207488e-8",
            "extra": "mean: 187.34312333951684 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7317001.780100142,
            "unit": "iter/sec",
            "range": "stddev: 1.8818328607110943e-8",
            "extra": "mean: 136.6680000980679 nsec\nrounds: 40817"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15a193da21a7207d7b0ffbba0ce6413903254ef1",
          "message": "Merge pull request #1726 from alex/patch-1\n\nworkaround an issue that causes function arguments to show up as if they are uncovered",
          "timestamp": "2021-07-15T20:03:59+01:00",
          "tree_id": "16d6922ab2cd97072494c0e01a278926727c4332",
          "url": "https://github.com/PyO3/pyo3/commit/15a193da21a7207d7b0ffbba0ce6413903254ef1"
        },
        "date": 1626376906266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7387794.353461919,
            "unit": "iter/sec",
            "range": "stddev: 1.1114814800913299e-7",
            "extra": "mean: 135.35839685785058 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8188665.191659622,
            "unit": "iter/sec",
            "range": "stddev: 1.2731630956064977e-7",
            "extra": "mean: 122.12002525369033 nsec\nrounds: 84739"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3083123.620502774,
            "unit": "iter/sec",
            "range": "stddev: 5.620462920186029e-7",
            "extra": "mean: 324.3463847345331 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2034003.1062803087,
            "unit": "iter/sec",
            "range": "stddev: 6.541454891554913e-7",
            "extra": "mean: 491.6413337385838 nsec\nrounds: 105253"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2810357.4624642283,
            "unit": "iter/sec",
            "range": "stddev: 6.212706252314733e-7",
            "extra": "mean: 355.8266211171014 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1797297.370917921,
            "unit": "iter/sec",
            "range": "stddev: 8.872187824201439e-7",
            "extra": "mean: 556.3909546528954 nsec\nrounds: 105253"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1677423.8543800693,
            "unit": "iter/sec",
            "range": "stddev: 5.986587557349823e-7",
            "extra": "mean: 596.1522470238423 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1443392.084885865,
            "unit": "iter/sec",
            "range": "stddev: 7.516212154582222e-7",
            "extra": "mean: 692.8124453997199 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1717253.0247556895,
            "unit": "iter/sec",
            "range": "stddev: 4.528850556088189e-7",
            "extra": "mean: 582.3253682388957 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1535894.25315533,
            "unit": "iter/sec",
            "range": "stddev: 6.707697154740253e-7",
            "extra": "mean: 651.0864911079743 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1639026.1774774357,
            "unit": "iter/sec",
            "range": "stddev: 9.571493087210222e-7",
            "extra": "mean: 610.1183823305756 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4370738.297929467,
            "unit": "iter/sec",
            "range": "stddev: 1.8299123038966807e-7",
            "extra": "mean: 228.79429785896204 nsec\nrounds: 47170"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5422867.623982617,
            "unit": "iter/sec",
            "range": "stddev: 3.2895651188002075e-7",
            "extra": "mean: 184.40428004882637 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6905370.745198217,
            "unit": "iter/sec",
            "range": "stddev: 2.7559613498156927e-7",
            "extra": "mean: 144.81481688663987 nsec\nrounds: 59881"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "068946c9787d411be8c047267cb87c8182b6ccd9",
          "message": "Merge pull request #1727 from nihaals/fix-badge\n\nFix crates.io badge",
          "timestamp": "2021-07-16T10:41:02+08:00",
          "tree_id": "ede8ea23e140dfc79698b1ec37ba717dd956fa7c",
          "url": "https://github.com/PyO3/pyo3/commit/068946c9787d411be8c047267cb87c8182b6ccd9"
        },
        "date": 1626403330265,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7824510.907960712,
            "unit": "iter/sec",
            "range": "stddev: 9.314378163976575e-8",
            "extra": "mean: 127.80351535880642 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9478082.858931711,
            "unit": "iter/sec",
            "range": "stddev: 3.8104272158955224e-8",
            "extra": "mean: 105.50656866823739 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3301653.493449889,
            "unit": "iter/sec",
            "range": "stddev: 1.5833618436935422e-7",
            "extra": "mean: 302.87854312510024 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1803599.0778256431,
            "unit": "iter/sec",
            "range": "stddev: 2.964485835878445e-7",
            "extra": "mean: 554.4469457180162 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2970257.750888879,
            "unit": "iter/sec",
            "range": "stddev: 1.716748532049368e-7",
            "extra": "mean: 336.67111876090223 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1640133.534377016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012663767027868051",
            "extra": "mean: 609.7064531883809 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1770938.2393877644,
            "unit": "iter/sec",
            "range": "stddev: 9.957193161977676e-7",
            "extra": "mean: 564.6724305556759 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1410100.9255435986,
            "unit": "iter/sec",
            "range": "stddev: 2.2982168807379945e-7",
            "extra": "mean: 709.1690969670931 nsec\nrounds: 73530"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1767526.6064022998,
            "unit": "iter/sec",
            "range": "stddev: 2.436034228365334e-7",
            "extra": "mean: 565.7623463078165 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1354101.1261514705,
            "unit": "iter/sec",
            "range": "stddev: 5.031607098854509e-7",
            "extra": "mean: 738.4972811029216 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1638325.5105869402,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013840752391952977",
            "extra": "mean: 610.3793132304604 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4488231.76361141,
            "unit": "iter/sec",
            "range": "stddev: 5.139450805044605e-7",
            "extra": "mean: 222.80489347906712 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6053013.05902533,
            "unit": "iter/sec",
            "range": "stddev: 4.623629314722338e-8",
            "extra": "mean: 165.2069787804463 nsec\nrounds: 34966"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7686678.591576672,
            "unit": "iter/sec",
            "range": "stddev: 4.821590897543282e-8",
            "extra": "mean: 130.0952014691009 nsec\nrounds: 78126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f2627aac2901dd2f384480c4ecfd46bfad0beca",
          "message": "Merge pull request #1725 from davidhewitt/build-errors\n\npyo3-build-config: improve error messaging",
          "timestamp": "2021-07-17T09:59:26+01:00",
          "tree_id": "f72d02488bc6dab09a59a68ef8b7f2f89066abe9",
          "url": "https://github.com/PyO3/pyo3/commit/5f2627aac2901dd2f384480c4ecfd46bfad0beca"
        },
        "date": 1626512477102,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7607332.5355463,
            "unit": "iter/sec",
            "range": "stddev: 1.738104460395267e-8",
            "extra": "mean: 131.45212140093895 nsec\nrounds: 71943"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 7809471.658873091,
            "unit": "iter/sec",
            "range": "stddev: 1.5378475050144552e-8",
            "extra": "mean: 128.04963558115566 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3170394.8811787195,
            "unit": "iter/sec",
            "range": "stddev: 5.949495134243467e-8",
            "extra": "mean: 315.41812218296917 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1932364.233850534,
            "unit": "iter/sec",
            "range": "stddev: 9.847786354141113e-8",
            "extra": "mean: 517.5007808992901 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2767215.283389691,
            "unit": "iter/sec",
            "range": "stddev: 9.715448936976888e-7",
            "extra": "mean: 361.3741243779959 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1783574.6119788277,
            "unit": "iter/sec",
            "range": "stddev: 9.909978643441483e-8",
            "extra": "mean: 560.671806653746 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1651304.0868311317,
            "unit": "iter/sec",
            "range": "stddev: 9.189162300066525e-8",
            "extra": "mean: 605.5819809170596 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1403096.5182698278,
            "unit": "iter/sec",
            "range": "stddev: 9.341741036698707e-8",
            "extra": "mean: 712.7093446378935 nsec\nrounds: 72464"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1677566.5926946807,
            "unit": "iter/sec",
            "range": "stddev: 7.760404400335978e-8",
            "extra": "mean: 596.1015224998079 nsec\nrounds: 80000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1430587.8038833556,
            "unit": "iter/sec",
            "range": "stddev: 1.0277659622548153e-7",
            "extra": "mean: 699.0133686901091 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1575701.7890634842,
            "unit": "iter/sec",
            "range": "stddev: 3.1285911586821304e-7",
            "extra": "mean: 634.6378527591496 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4224172.45061758,
            "unit": "iter/sec",
            "range": "stddev: 3.8204177299469864e-8",
            "extra": "mean: 236.7327593016425 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5296728.287466298,
            "unit": "iter/sec",
            "range": "stddev: 3.765248047101976e-8",
            "extra": "mean: 188.7957897265423 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7165475.872289267,
            "unit": "iter/sec",
            "range": "stddev: 1.7545730308017864e-8",
            "extra": "mean: 139.55807232111172 nsec\nrounds: 64103"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "00d2d080ed3b3c25e166a7a7344cf33d97309e89",
          "message": "Merge pull request #1731 from davidhewitt/buf_and_str\n\npyo3-pytests: remove memory leak test",
          "timestamp": "2021-07-19T18:15:48+01:00",
          "tree_id": "f498fa2344170b263a18359b7979f3b35927472c",
          "url": "https://github.com/PyO3/pyo3/commit/00d2d080ed3b3c25e166a7a7344cf33d97309e89"
        },
        "date": 1626715044530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8794696.315453565,
            "unit": "iter/sec",
            "range": "stddev: 3.861379083460619e-9",
            "extra": "mean: 113.70489260021269 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9444112.11159899,
            "unit": "iter/sec",
            "range": "stddev: 3.929484348834436e-9",
            "extra": "mean: 105.8860788799378 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3667115.5903436574,
            "unit": "iter/sec",
            "range": "stddev: 1.501730392634387e-8",
            "extra": "mean: 272.693885797458 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2204775.6403210266,
            "unit": "iter/sec",
            "range": "stddev: 1.421580158884845e-7",
            "extra": "mean: 453.5608892408474 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3296681.0644093943,
            "unit": "iter/sec",
            "range": "stddev: 1.518190364671378e-8",
            "extra": "mean: 303.33537896546363 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2090342.3750396324,
            "unit": "iter/sec",
            "range": "stddev: 3.305811503307954e-8",
            "extra": "mean: 478.39053158945467 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1946591.0750689958,
            "unit": "iter/sec",
            "range": "stddev: 2.995113638268777e-8",
            "extra": "mean: 513.7185784977224 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1451880.7471996746,
            "unit": "iter/sec",
            "range": "stddev: 3.8935799036800416e-8",
            "extra": "mean: 688.7618021858718 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1966597.20227472,
            "unit": "iter/sec",
            "range": "stddev: 1.76570290350482e-8",
            "extra": "mean: 508.49253667379304 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1703300.0281282195,
            "unit": "iter/sec",
            "range": "stddev: 2.6425415208270397e-8",
            "extra": "mean: 587.0956281842942 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1878447.6651079238,
            "unit": "iter/sec",
            "range": "stddev: 8.96123471636423e-8",
            "extra": "mean: 532.354464047603 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5273953.482561778,
            "unit": "iter/sec",
            "range": "stddev: 4.8458380017198786e-9",
            "extra": "mean: 189.61107702337785 nsec\nrounds: 48077"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6145147.778471178,
            "unit": "iter/sec",
            "range": "stddev: 7.59083314471894e-9",
            "extra": "mean: 162.73001659980403 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8331125.679318226,
            "unit": "iter/sec",
            "range": "stddev: 4.17991756053318e-9",
            "extra": "mean: 120.03179864182617 nsec\nrounds: 77514"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bac1345f4de96480265a6fb4391a98187d52ee7e",
          "message": "Merge pull request #1730 from davidhewitt/pypy-pytests\n\npyo3-pytests: cover more tests on PyPy",
          "timestamp": "2021-07-19T18:16:06+01:00",
          "tree_id": "21b8a140b58c6a1999a50e8065c070ed8ef419bd",
          "url": "https://github.com/PyO3/pyo3/commit/bac1345f4de96480265a6fb4391a98187d52ee7e"
        },
        "date": 1626715059137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8674500.247084145,
            "unit": "iter/sec",
            "range": "stddev: 3.393486344470945e-9",
            "extra": "mean: 115.2804163370389 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8878472.894197103,
            "unit": "iter/sec",
            "range": "stddev: 3.4504528027820453e-9",
            "extra": "mean: 112.63198208940285 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3619871.53263587,
            "unit": "iter/sec",
            "range": "stddev: 1.6903918519401712e-8",
            "extra": "mean: 276.25289764772043 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2251705.91434646,
            "unit": "iter/sec",
            "range": "stddev: 1.9812781685456065e-8",
            "extra": "mean: 444.10772900126716 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3245667.522224705,
            "unit": "iter/sec",
            "range": "stddev: 1.2806607556712473e-8",
            "extra": "mean: 308.10303062544176 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2044215.5436113335,
            "unit": "iter/sec",
            "range": "stddev: 2.371461301239092e-8",
            "extra": "mean: 489.1852051141311 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1944225.6938022152,
            "unit": "iter/sec",
            "range": "stddev: 2.0827743348332883e-8",
            "extra": "mean: 514.3435781081919 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1641045.90409183,
            "unit": "iter/sec",
            "range": "stddev: 1.6972547728646412e-8",
            "extra": "mean: 609.3674756484105 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1917707.5841371133,
            "unit": "iter/sec",
            "range": "stddev: 7.681295990429609e-8",
            "extra": "mean: 521.4559342995088 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1712234.7868728603,
            "unit": "iter/sec",
            "range": "stddev: 7.635046811739745e-8",
            "extra": "mean: 584.0320542876888 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1834508.119694134,
            "unit": "iter/sec",
            "range": "stddev: 8.557499888236226e-8",
            "extra": "mean: 545.1052460682099 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5039016.445986998,
            "unit": "iter/sec",
            "range": "stddev: 3.978891024772595e-9",
            "extra": "mean: 198.45142613028614 nsec\nrounds: 47394"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5827302.740174008,
            "unit": "iter/sec",
            "range": "stddev: 9.451326693371026e-9",
            "extra": "mean: 171.60598043164143 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8241330.835802825,
            "unit": "iter/sec",
            "range": "stddev: 6.593964717049797e-9",
            "extra": "mean: 121.33962583515901 nsec\nrounds: 76918"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "614fab7a15d13e68ac110ba3cc2b886eca8d4938",
          "message": "Merge pull request #1729 from davidhewitt/print-config\n\npyo3-build-config: add print-config helper",
          "timestamp": "2021-07-19T20:36:11+01:00",
          "tree_id": "eda4ca0ee426b19ed89888775022910f997770c0",
          "url": "https://github.com/PyO3/pyo3/commit/614fab7a15d13e68ac110ba3cc2b886eca8d4938"
        },
        "date": 1626723441144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7420374.59602053,
            "unit": "iter/sec",
            "range": "stddev: 3.4098739221138054e-8",
            "extra": "mean: 134.7640859715671 nsec\nrounds: 77514"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8028808.01628189,
            "unit": "iter/sec",
            "range": "stddev: 1.3660256150917859e-8",
            "extra": "mean: 124.55148983164037 nsec\nrounds: 75183"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3042117.7194549604,
            "unit": "iter/sec",
            "range": "stddev: 4.3569012700066e-8",
            "extra": "mean: 328.71837720244065 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1911185.254497036,
            "unit": "iter/sec",
            "range": "stddev: 6.349077166473213e-8",
            "extra": "mean: 523.2355145305017 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2763606.2681268775,
            "unit": "iter/sec",
            "range": "stddev: 5.540762866724055e-8",
            "extra": "mean: 361.8460457025236 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1752969.717787079,
            "unit": "iter/sec",
            "range": "stddev: 7.093231154049765e-8",
            "extra": "mean: 570.4605104427127 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1662756.7411040606,
            "unit": "iter/sec",
            "range": "stddev: 6.842194080894288e-8",
            "extra": "mean: 601.410883071393 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1371461.4766650822,
            "unit": "iter/sec",
            "range": "stddev: 6.442276292258425e-8",
            "extra": "mean: 729.1491718978934 nsec\nrounds: 67564"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1633038.027155023,
            "unit": "iter/sec",
            "range": "stddev: 5.7816472660246093e-8",
            "extra": "mean: 612.3556116704344 nsec\nrounds: 79994"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1422273.132332895,
            "unit": "iter/sec",
            "range": "stddev: 3.5618476478750556e-7",
            "extra": "mean: 703.0998317178085 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1558151.023281202,
            "unit": "iter/sec",
            "range": "stddev: 1.6522334471667127e-7",
            "extra": "mean: 641.786312788968 nsec\nrounds: 153823"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4230280.501163015,
            "unit": "iter/sec",
            "range": "stddev: 4.4260535661413726e-8",
            "extra": "mean: 236.3909437504823 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5122075.649984658,
            "unit": "iter/sec",
            "range": "stddev: 2.5343216586797665e-8",
            "extra": "mean: 195.23335232349743 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7079019.8382041445,
            "unit": "iter/sec",
            "range": "stddev: 1.50923143598834e-8",
            "extra": "mean: 141.26249436450533 nsec\nrounds: 62108"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7957521b78a48f07f9b6a67ff7a388d75494f972",
          "message": "Merge pull request #1732 from davidhewitt/no-bench-alert\n\nbench: don't alert on CI benchmark changes",
          "timestamp": "2021-07-20T08:40:37+08:00",
          "tree_id": "767d830d955ab81eeedfa6a6cf70d1e77d310934",
          "url": "https://github.com/PyO3/pyo3/commit/7957521b78a48f07f9b6a67ff7a388d75494f972"
        },
        "date": 1626741715016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6578477.091475897,
            "unit": "iter/sec",
            "range": "stddev: 4.947853411673194e-7",
            "extra": "mean: 152.01086605529085 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 7800371.388907552,
            "unit": "iter/sec",
            "range": "stddev: 2.0484988107156767e-7",
            "extra": "mean: 128.199024141571 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2999935.1652064906,
            "unit": "iter/sec",
            "range": "stddev: 8.632285820718939e-7",
            "extra": "mean: 333.3405373550371 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1577415.1606493788,
            "unit": "iter/sec",
            "range": "stddev: 8.086423005665508e-7",
            "extra": "mean: 633.948515867195 nsec\nrounds: 77520"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2792901.3947338094,
            "unit": "iter/sec",
            "range": "stddev: 4.848131801042191e-7",
            "extra": "mean: 358.0505927941045 nsec\nrounds: 43860"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1486639.258905903,
            "unit": "iter/sec",
            "range": "stddev: 7.110748927001755e-7",
            "extra": "mean: 672.6581408432094 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1626106.6895955119,
            "unit": "iter/sec",
            "range": "stddev: 8.658748872049364e-7",
            "extra": "mean: 614.9657992298578 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1367730.0739531266,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011042816792933278",
            "extra": "mean: 731.1384161567461 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1606924.3583496506,
            "unit": "iter/sec",
            "range": "stddev: 0.000001104632702415478",
            "extra": "mean: 622.3068278254866 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1318073.8069032645,
            "unit": "iter/sec",
            "range": "stddev: 0.000001569664885960106",
            "extra": "mean: 758.6828558177333 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1553641.938588536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012765796177796155",
            "extra": "mean: 643.6489484240411 nsec\nrounds: 41840"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4322478.960973164,
            "unit": "iter/sec",
            "range": "stddev: 2.3566319555912441e-7",
            "extra": "mean: 231.3487258188787 nsec\nrounds: 51021"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5603853.496375584,
            "unit": "iter/sec",
            "range": "stddev: 1.9677405396497725e-7",
            "extra": "mean: 178.44863372086596 nsec\nrounds: 65360"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6745142.738194414,
            "unit": "iter/sec",
            "range": "stddev: 2.8733076942006963e-7",
            "extra": "mean: 148.25483148599702 nsec\nrounds: 66226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f72a9657d33ff579e5d120ab13c5fe8da0643051",
          "message": "Merge pull request #1735 from davidhewitt/mdbook-0.4.10\n\nguide: bump mdbook to 0.4.10",
          "timestamp": "2021-07-21T07:52:41+01:00",
          "tree_id": "3dd2ae26a8d0d6eca84ef5755ca2133145c9c08e",
          "url": "https://github.com/PyO3/pyo3/commit/f72a9657d33ff579e5d120ab13c5fe8da0643051"
        },
        "date": 1626850471562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8775821.39416751,
            "unit": "iter/sec",
            "range": "stddev: 3.759229664480238e-9",
            "extra": "mean: 113.94944758841395 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9454187.467147177,
            "unit": "iter/sec",
            "range": "stddev: 4.444976289387024e-9",
            "extra": "mean: 105.77323577247273 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3629731.9556635763,
            "unit": "iter/sec",
            "range": "stddev: 6.731758495668371e-8",
            "extra": "mean: 275.50243715342054 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2288114.602277528,
            "unit": "iter/sec",
            "range": "stddev: 2.4719124015221276e-8",
            "extra": "mean: 437.04104637365316 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3276535.4203181462,
            "unit": "iter/sec",
            "range": "stddev: 2.0952039082695728e-8",
            "extra": "mean: 305.2004241427982 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2066156.5092474436,
            "unit": "iter/sec",
            "range": "stddev: 2.5211647242406672e-8",
            "extra": "mean: 483.9904409578744 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1917243.7741955486,
            "unit": "iter/sec",
            "range": "stddev: 4.1198868166726514e-7",
            "extra": "mean: 521.5820822890457 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1630857.2153956573,
            "unit": "iter/sec",
            "range": "stddev: 2.3634453114444218e-7",
            "extra": "mean: 613.1744646678571 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1906397.9067804217,
            "unit": "iter/sec",
            "range": "stddev: 2.7001095886585182e-8",
            "extra": "mean: 524.5494639093451 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1670290.3312057506,
            "unit": "iter/sec",
            "range": "stddev: 3.109246551839963e-8",
            "extra": "mean: 598.6983108964771 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1843142.4240409187,
            "unit": "iter/sec",
            "range": "stddev: 9.595166561839893e-8",
            "extra": "mean: 542.5516698853867 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4972234.797434035,
            "unit": "iter/sec",
            "range": "stddev: 9.693802336188249e-9",
            "extra": "mean: 201.11680979255198 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6366499.233683324,
            "unit": "iter/sec",
            "range": "stddev: 4.2440884461186e-9",
            "extra": "mean: 157.07219357057147 nsec\nrounds: 58480"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8232052.461308312,
            "unit": "iter/sec",
            "range": "stddev: 4.2470282817352555e-9",
            "extra": "mean: 121.47638814256047 nsec\nrounds: 78126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "14852634+Eric-Arellano@users.noreply.github.com",
            "name": "Eric Arellano",
            "username": "Eric-Arellano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9ab7b1fad140bd3fb7c0e0b8f620a27c9576a3b9",
          "message": "Rewrite `module.md` for clarity and add tip on code organization (#1693)\n\n* Rewrite `module.md` for clarity and add tip on code organization\r\n\r\n* Add section on how to build the guide + add workaround proposed by David\r\n\r\n* Make more clear references to #1709",
          "timestamp": "2021-07-22T08:10:32+01:00",
          "tree_id": "03cc73534200abe08a0c08965346a37ab9f43f95",
          "url": "https://github.com/PyO3/pyo3/commit/9ab7b1fad140bd3fb7c0e0b8f620a27c9576a3b9"
        },
        "date": 1626938778558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 9930162.894287031,
            "unit": "iter/sec",
            "range": "stddev: 5.439094666816156e-9",
            "extra": "mean: 100.70328257914458 nsec\nrounds: 52081"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9828637.582819682,
            "unit": "iter/sec",
            "range": "stddev: 7.840203897777968e-9",
            "extra": "mean: 101.7435012303661 nsec\nrounds: 93450"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 4071229.9808459114,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010955442420480961",
            "extra": "mean: 245.62601589775488 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2596796.0150653375,
            "unit": "iter/sec",
            "range": "stddev: 8.447323624714606e-8",
            "extra": "mean: 385.08993166965155 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3704090.2397719733,
            "unit": "iter/sec",
            "range": "stddev: 5.5664618972289665e-8",
            "extra": "mean: 269.971824460757 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2349164.5157228988,
            "unit": "iter/sec",
            "range": "stddev: 1.364199427122915e-7",
            "extra": "mean: 425.68325602882925 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 2240769.177968808,
            "unit": "iter/sec",
            "range": "stddev: 2.05752083239187e-8",
            "extra": "mean: 446.27532805818106 nsec\nrounds: 107527"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1832373.1050503263,
            "unit": "iter/sec",
            "range": "stddev: 3.283118680662031e-8",
            "extra": "mean: 545.7403829193029 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 2227408.4393211054,
            "unit": "iter/sec",
            "range": "stddev: 2.1344586924332678e-8",
            "extra": "mean: 448.9522363062346 nsec\nrounds: 109891"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1874118.9201137617,
            "unit": "iter/sec",
            "range": "stddev: 2.9878114285541663e-8",
            "extra": "mean: 533.5840694349861 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2052408.059081193,
            "unit": "iter/sec",
            "range": "stddev: 1.3452510901951116e-7",
            "extra": "mean: 487.2325440232741 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5933727.531955385,
            "unit": "iter/sec",
            "range": "stddev: 8.531547455440688e-9",
            "extra": "mean: 168.52812917579854 nsec\nrounds: 52084"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6874968.243136136,
            "unit": "iter/sec",
            "range": "stddev: 1.1435183348329506e-8",
            "extra": "mean: 145.45521733846198 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 9433711.914017301,
            "unit": "iter/sec",
            "range": "stddev: 5.451605806161115e-9",
            "extra": "mean: 106.00281300867096 nsec\nrounds: 88496"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ivan.ivancps.cn@gmail.com",
            "name": "Ivan Carvalho",
            "username": "IvanIsCoding"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd0e0d808fdc2100628a88bdcebe93c2cf366a5d",
          "message": "Add optional support for conversion from `indexmap::IndexMap` (#1728)\n\n* Add support to IndexMap\r\n\r\n* Fix indexmap version to 1.6.2\r\n\r\n* Remove code duplication by mistake\r\n\r\n* Fix ambiguity in test\r\n\r\n* Minor change for doc.rs\r\n\r\n* Add to lib.rs docstring\r\n\r\n* Add indexmap to conversion table\r\n\r\n* Add indexmap flag in docs.rs action\r\n\r\n* Add indexmap feature to CI\r\n\r\n* Add note in changelog\r\n\r\n* Use with_gil in tests\r\n\r\n* Move code to src/conversions/indexmap.rs\r\n\r\n* Add PR number to CHANGELOG\r\n\r\nCo-authored-by: David Hewitt <1939362+davidhewitt@users.noreply.github.com>\r\n\r\n* Add round trip test\r\n\r\n* Fix issue in MSRV Ubuntu build\r\n\r\n* Fix Github workflow syntax\r\n\r\n* Yet Another Attempt to Fix MSRV Ubuntu build\r\n\r\n* Specify hashbrown to avoid ambiguity in CI\r\n\r\n* Add suggestions\r\n\r\n* More flexible version for indexmap\r\n\r\n* Add documentation\r\n\r\n* Address PR comments\r\n\r\n* Export indexmap for docs\r\n\r\nCo-authored-by: David Hewitt <1939362+davidhewitt@users.noreply.github.com>",
          "timestamp": "2021-07-22T08:15:26+01:00",
          "tree_id": "1e98c7c2cf0a72aabb5a6f2ba50b0e576afb5752",
          "url": "https://github.com/PyO3/pyo3/commit/bd0e0d808fdc2100628a88bdcebe93c2cf366a5d"
        },
        "date": 1626938799014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8776784.419195248,
            "unit": "iter/sec",
            "range": "stddev: 4.165645155702166e-9",
            "extra": "mean: 113.93694458450388 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9352931.169409346,
            "unit": "iter/sec",
            "range": "stddev: 4.192145259323664e-9",
            "extra": "mean: 106.91835338962113 nsec\nrounds: 90082"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3656143.5866782675,
            "unit": "iter/sec",
            "range": "stddev: 1.4873310129380664e-8",
            "extra": "mean: 273.5122339409085 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2196540.637427807,
            "unit": "iter/sec",
            "range": "stddev: 2.7731186830505033e-8",
            "extra": "mean: 455.2613245391255 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3284741.821586166,
            "unit": "iter/sec",
            "range": "stddev: 2.1208170485570132e-8",
            "extra": "mean: 304.43792977224336 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2099863.014430445,
            "unit": "iter/sec",
            "range": "stddev: 2.9046805882670157e-8",
            "extra": "mean: 476.2215407043289 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1946725.5564217037,
            "unit": "iter/sec",
            "range": "stddev: 2.7985296048237683e-8",
            "extra": "mean: 513.6830904087525 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1635135.4248804916,
            "unit": "iter/sec",
            "range": "stddev: 2.1255965557794142e-8",
            "extra": "mean: 611.5701395638924 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1957282.2566852903,
            "unit": "iter/sec",
            "range": "stddev: 1.999680765870371e-8",
            "extra": "mean: 510.91251483239466 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1667029.6904372291,
            "unit": "iter/sec",
            "range": "stddev: 3.6731828600049905e-8",
            "extra": "mean: 599.8693399021371 nsec\nrounds: 147038"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1857740.4077409748,
            "unit": "iter/sec",
            "range": "stddev: 1.1544239044261031e-7",
            "extra": "mean: 538.2883398741415 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5024876.119558123,
            "unit": "iter/sec",
            "range": "stddev: 1.2077576760036568e-8",
            "extra": "mean: 199.0098812801041 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5999188.263010838,
            "unit": "iter/sec",
            "range": "stddev: 8.22111906985113e-9",
            "extra": "mean: 166.6892179675774 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8235251.713243447,
            "unit": "iter/sec",
            "range": "stddev: 4.317740981727966e-9",
            "extra": "mean: 121.42919668039411 nsec\nrounds: 75188"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "243e5eea13a14bd59cb76fa411492f620040d336",
          "message": "Merge pull request #1734 from davidhewitt/latest-tag\n\nguide: add latest symlink",
          "timestamp": "2021-07-24T08:38:07+01:00",
          "tree_id": "9cebdb9f037977b7b594fa792f0c1da4a5aab1a6",
          "url": "https://github.com/PyO3/pyo3/commit/243e5eea13a14bd59cb76fa411492f620040d336"
        },
        "date": 1627112379594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8792225.3149606,
            "unit": "iter/sec",
            "range": "stddev: 3.4948910886922297e-9",
            "extra": "mean: 113.73684865632293 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10017490.068439903,
            "unit": "iter/sec",
            "range": "stddev: 4.014587618006975e-9",
            "extra": "mean: 99.82540468397283 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3659833.9685408496,
            "unit": "iter/sec",
            "range": "stddev: 1.4669179108389565e-8",
            "extra": "mean: 273.2364387551372 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2312890.0179241053,
            "unit": "iter/sec",
            "range": "stddev: 2.417340451532908e-8",
            "extra": "mean: 432.3595122337597 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3298449.716068473,
            "unit": "iter/sec",
            "range": "stddev: 1.4681596116443127e-8",
            "extra": "mean: 303.17272842742267 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2107476.326654411,
            "unit": "iter/sec",
            "range": "stddev: 2.6146008050256255e-8",
            "extra": "mean: 474.5011781873893 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1955073.048416515,
            "unit": "iter/sec",
            "range": "stddev: 1.999376991218705e-8",
            "extra": "mean: 511.48983963009675 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1593350.888752508,
            "unit": "iter/sec",
            "range": "stddev: 2.8006928314094965e-8",
            "extra": "mean: 627.6081477469212 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1901398.9222603564,
            "unit": "iter/sec",
            "range": "stddev: 2.3565944915599844e-8",
            "extra": "mean: 525.9285614880434 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1722696.9516086604,
            "unit": "iter/sec",
            "range": "stddev: 1.90031865915086e-8",
            "extra": "mean: 580.485150952428 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1811176.0200058585,
            "unit": "iter/sec",
            "range": "stddev: 8.744107728549581e-8",
            "extra": "mean: 552.127451420633 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5437607.525649061,
            "unit": "iter/sec",
            "range": "stddev: 4.710504299613017e-9",
            "extra": "mean: 183.90440929822185 nsec\nrounds: 48307"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6457210.081746727,
            "unit": "iter/sec",
            "range": "stddev: 8.399780448880745e-9",
            "extra": "mean: 154.86564434811706 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8346363.472276623,
            "unit": "iter/sec",
            "range": "stddev: 3.768724069092885e-9",
            "extra": "mean: 119.81265892879505 nsec\nrounds: 77520"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1a0f46b35d2e362fb8c5baaf17b422e20f98cb1d",
          "message": "Merge pull request #1737 from davidhewitt/pypy-buffer\n\npypy: fix FFI definition of Py_Buffer",
          "timestamp": "2021-07-24T16:28:08+08:00",
          "tree_id": "d95fb16507f08984501047a53e164a65e0c97add",
          "url": "https://github.com/PyO3/pyo3/commit/1a0f46b35d2e362fb8c5baaf17b422e20f98cb1d"
        },
        "date": 1627116812105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7798469.847472495,
            "unit": "iter/sec",
            "range": "stddev: 1.992798913330446e-8",
            "extra": "mean: 128.23028357596513 nsec\nrounds: 73525"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8551865.408843232,
            "unit": "iter/sec",
            "range": "stddev: 9.552990892304766e-8",
            "extra": "mean: 116.93355217750374 nsec\nrounds: 35840"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3156008.3718798435,
            "unit": "iter/sec",
            "range": "stddev: 9.68721808236658e-8",
            "extra": "mean: 316.85594021550725 nsec\nrounds: 185151"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2050043.0026299285,
            "unit": "iter/sec",
            "range": "stddev: 4.4724468943497264e-7",
            "extra": "mean: 487.7946456327611 nsec\nrounds: 175408"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2929331.643304433,
            "unit": "iter/sec",
            "range": "stddev: 1.1888534452266684e-7",
            "extra": "mean: 341.3747986799577 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1900969.4039302391,
            "unit": "iter/sec",
            "range": "stddev: 1.2424482698951553e-7",
            "extra": "mean: 526.0473934676477 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1767798.6983249392,
            "unit": "iter/sec",
            "range": "stddev: 9.419885360133919e-8",
            "extra": "mean: 565.6752666168029 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1498776.3045819157,
            "unit": "iter/sec",
            "range": "stddev: 1.128410620925082e-7",
            "extra": "mean: 667.2109753422438 nsec\nrounds: 81961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1784759.7686795641,
            "unit": "iter/sec",
            "range": "stddev: 1.2957146981192091e-7",
            "extra": "mean: 560.2994966318765 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1565776.1065958352,
            "unit": "iter/sec",
            "range": "stddev: 9.758228520763015e-8",
            "extra": "mean: 638.6609144100554 nsec\nrounds: 71424"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1732024.643721654,
            "unit": "iter/sec",
            "range": "stddev: 3.721075567864441e-7",
            "extra": "mean: 577.3589906037766 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4944579.457142784,
            "unit": "iter/sec",
            "range": "stddev: 2.8403947051640853e-8",
            "extra": "mean: 202.24166861258553 nsec\nrounds: 50503"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5833732.232340852,
            "unit": "iter/sec",
            "range": "stddev: 2.4819122129400328e-8",
            "extra": "mean: 171.41684948380933 nsec\nrounds: 37451"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7611443.277804912,
            "unit": "iter/sec",
            "range": "stddev: 2.2052386534934276e-8",
            "extra": "mean: 131.38112753408873 nsec\nrounds: 72459"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4a71f820995b506b468067fa41cca63c885b3b35",
          "message": "Merge pull request #1724 from davidhewitt/err-new-no-gil\n\nerr: don't use with_gil internally in PyErr::new()",
          "timestamp": "2021-07-24T10:13:50+01:00",
          "tree_id": "197f2fc38b104193f9e54362115a253836375fc9",
          "url": "https://github.com/PyO3/pyo3/commit/4a71f820995b506b468067fa41cca63c885b3b35"
        },
        "date": 1627118139043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8776901.681967244,
            "unit": "iter/sec",
            "range": "stddev: 3.9058786503504315e-9",
            "extra": "mean: 113.93542234321926 nsec\nrounds: 76336"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9764934.271679256,
            "unit": "iter/sec",
            "range": "stddev: 3.503312526950861e-9",
            "extra": "mean: 102.40724332365643 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3631926.710173403,
            "unit": "iter/sec",
            "range": "stddev: 1.3707936680586325e-8",
            "extra": "mean: 275.33595245668295 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2252407.6922902926,
            "unit": "iter/sec",
            "range": "stddev: 2.510207618115255e-8",
            "extra": "mean: 443.96935928758336 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3239672.6172677698,
            "unit": "iter/sec",
            "range": "stddev: 6.75069790540957e-8",
            "extra": "mean: 308.673164896324 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2061699.0545596823,
            "unit": "iter/sec",
            "range": "stddev: 1.1813058432965613e-7",
            "extra": "mean: 485.03684268897666 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1938126.5566179128,
            "unit": "iter/sec",
            "range": "stddev: 4.093167479968918e-8",
            "extra": "mean: 515.9621783140325 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1632963.2500840363,
            "unit": "iter/sec",
            "range": "stddev: 0.000001482274762833386",
            "extra": "mean: 612.3836528156027 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1967181.1337454577,
            "unit": "iter/sec",
            "range": "stddev: 1.8041397840884415e-8",
            "extra": "mean: 508.34159744930434 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1722426.1998318983,
            "unit": "iter/sec",
            "range": "stddev: 3.0642296618150397e-8",
            "extra": "mean: 580.5763986277557 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1841639.7649292522,
            "unit": "iter/sec",
            "range": "stddev: 3.1261767676492e-7",
            "extra": "mean: 542.9943570090189 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5040179.732998305,
            "unit": "iter/sec",
            "range": "stddev: 1.2678586821879273e-8",
            "extra": "mean: 198.4056230083099 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6139644.233806977,
            "unit": "iter/sec",
            "range": "stddev: 1.0330834258499929e-8",
            "extra": "mean: 162.87588692716645 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8343543.853056419,
            "unit": "iter/sec",
            "range": "stddev: 3.864395379376273e-9",
            "extra": "mean: 119.85314844761785 nsec\nrounds: 76336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbe0e846b0d3c0500de117db83317baaace79eaf",
          "message": "Merge pull request #1738 from davidhewitt/latest-links\n\ndocs: use pyo3.rs/latest instead of pyo3.rs/main",
          "timestamp": "2021-07-24T17:57:03+01:00",
          "tree_id": "94b0d69e9b5767e0cc73a12bfd3830e925f048a2",
          "url": "https://github.com/PyO3/pyo3/commit/bbe0e846b0d3c0500de117db83317baaace79eaf"
        },
        "date": 1627145929656,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7051654.692818837,
            "unit": "iter/sec",
            "range": "stddev: 1.0746809435356856e-7",
            "extra": "mean: 141.81068749987912 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8482210.05361878,
            "unit": "iter/sec",
            "range": "stddev: 1.1626308592023277e-8",
            "extra": "mean: 117.89380287437392 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3080172.347767159,
            "unit": "iter/sec",
            "range": "stddev: 4.603054895047922e-8",
            "extra": "mean: 324.6571578129087 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1956420.6935482158,
            "unit": "iter/sec",
            "range": "stddev: 7.649519714014468e-8",
            "extra": "mean: 511.1375090734008 nsec\nrounds: 169463"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2761334.596678272,
            "unit": "iter/sec",
            "range": "stddev: 4.6616037733493e-8",
            "extra": "mean: 362.14372615414885 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1793411.3442592234,
            "unit": "iter/sec",
            "range": "stddev: 1.5208466219587218e-7",
            "extra": "mean: 557.5965621055058 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1671251.3702611981,
            "unit": "iter/sec",
            "range": "stddev: 5.489466565458452e-8",
            "extra": "mean: 598.354034464363 nsec\nrounds: 82638"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1420804.6172298493,
            "unit": "iter/sec",
            "range": "stddev: 9.733976488924568e-8",
            "extra": "mean: 703.826541576088 nsec\nrounds: 185151"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1666373.974348422,
            "unit": "iter/sec",
            "range": "stddev: 5.553828848612496e-8",
            "extra": "mean: 600.1053877421216 nsec\nrounds: 80646"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1456287.5445128395,
            "unit": "iter/sec",
            "range": "stddev: 1.0072682800095693e-7",
            "extra": "mean: 686.6775752965555 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1586113.2280471544,
            "unit": "iter/sec",
            "range": "stddev: 2.2393982305082277e-7",
            "extra": "mean: 630.4720131684511 nsec\nrounds: 135117"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4304861.010736138,
            "unit": "iter/sec",
            "range": "stddev: 2.7587818447771927e-8",
            "extra": "mean: 232.29553695320655 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5337375.008666724,
            "unit": "iter/sec",
            "range": "stddev: 2.3775688447849666e-8",
            "extra": "mean: 187.35801744795486 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6961222.819494958,
            "unit": "iter/sec",
            "range": "stddev: 1.3561027531845474e-8",
            "extra": "mean: 143.65292218481224 nsec\nrounds: 66221"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32414676c39ff3ad0552850a71a6ba969a743614",
          "message": "Merge pull request #1740 from davidhewitt/mod-tests\n\ntesting: use `mod tests` instead of `mod test`",
          "timestamp": "2021-07-26T19:31:36+01:00",
          "tree_id": "b0fb5c54c2ab9fc4d804982ecc2b3553de705979",
          "url": "https://github.com/PyO3/pyo3/commit/32414676c39ff3ad0552850a71a6ba969a743614"
        },
        "date": 1627324442215,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8423629.880167997,
            "unit": "iter/sec",
            "range": "stddev: 5.61550179094401e-9",
            "extra": "mean: 118.71366788747156 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10065670.148953963,
            "unit": "iter/sec",
            "range": "stddev: 3.129725045668046e-9",
            "extra": "mean: 99.34758294302998 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3629655.3828008734,
            "unit": "iter/sec",
            "range": "stddev: 1.1054545717357816e-8",
            "extra": "mean: 275.50824927882604 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2275397.862749444,
            "unit": "iter/sec",
            "range": "stddev: 1.0504333435574883e-7",
            "extra": "mean: 439.4835805951178 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3250023.929565837,
            "unit": "iter/sec",
            "range": "stddev: 1.2056147534467562e-8",
            "extra": "mean: 307.69004218796243 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2110555.495095741,
            "unit": "iter/sec",
            "range": "stddev: 2.065448754037791e-8",
            "extra": "mean: 473.80891065153554 nsec\nrounds: 175408"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1973479.7156693365,
            "unit": "iter/sec",
            "range": "stddev: 1.672926327395192e-8",
            "extra": "mean: 506.7191682086862 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1726623.342040313,
            "unit": "iter/sec",
            "range": "stddev: 2.386642236157098e-8",
            "extra": "mean: 579.1651112618138 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1961585.3976248985,
            "unit": "iter/sec",
            "range": "stddev: 1.7081746182664212e-8",
            "extra": "mean: 509.7917231698647 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1757274.931811985,
            "unit": "iter/sec",
            "range": "stddev: 2.8551763245082952e-8",
            "extra": "mean: 569.0629177578558 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1849877.3597445935,
            "unit": "iter/sec",
            "range": "stddev: 7.616499627024239e-8",
            "extra": "mean: 540.5763764458778 nsec\nrounds: 151493"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5349362.2117742505,
            "unit": "iter/sec",
            "range": "stddev: 9.357771228939504e-9",
            "extra": "mean: 186.93817326466146 nsec\nrounds: 48781"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6317979.890281168,
            "unit": "iter/sec",
            "range": "stddev: 7.194617757068039e-9",
            "extra": "mean: 158.27843984408398 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8345178.525786652,
            "unit": "iter/sec",
            "range": "stddev: 3.3949615082816294e-9",
            "extra": "mean: 119.82967133777215 nsec\nrounds: 72993"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6d750ae5dfe3949662064350c5c3b216c427c1d",
          "message": "Merge pull request #1745 from davidhewitt/rust-1.54\n\nrust: updates for rust & clippy 1.54",
          "timestamp": "2021-07-31T16:01:21+01:00",
          "tree_id": "2c25aa7889f3ec305dc35434d1db6c386a137e29",
          "url": "https://github.com/PyO3/pyo3/commit/e6d750ae5dfe3949662064350c5c3b216c427c1d"
        },
        "date": 1627743793270,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7447352.139613341,
            "unit": "iter/sec",
            "range": "stddev: 1.684813502021971e-8",
            "extra": "mean: 134.27591192853018 nsec\nrounds: 65356"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8045760.449893212,
            "unit": "iter/sec",
            "range": "stddev: 1.6839188686888117e-8",
            "extra": "mean: 124.2890595895385 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3062391.85750249,
            "unit": "iter/sec",
            "range": "stddev: 6.334482960207335e-8",
            "extra": "mean: 326.5421430470853 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1871769.420507509,
            "unit": "iter/sec",
            "range": "stddev: 1.049144632107321e-7",
            "extra": "mean: 534.2538397326691 nsec\nrounds: 166639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 1872982.782488371,
            "unit": "iter/sec",
            "range": "stddev: 3.00987025464288e-7",
            "extra": "mean: 533.9077376202249 nsec\nrounds: 54345"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1615372.0933282075,
            "unit": "iter/sec",
            "range": "stddev: 1.1885844034922147e-7",
            "extra": "mean: 619.052417786969 nsec\nrounds: 142837"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1675318.4823604752,
            "unit": "iter/sec",
            "range": "stddev: 2.000813991688425e-7",
            "extra": "mean: 596.9014312973077 nsec\nrounds: 86949"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1426812.5028998535,
            "unit": "iter/sec",
            "range": "stddev: 1.5300169553092132e-7",
            "extra": "mean: 700.8629360670955 nsec\nrounds: 68023"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1670736.1706904175,
            "unit": "iter/sec",
            "range": "stddev: 1.2241411589135145e-7",
            "extra": "mean: 598.5385469841955 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1373850.4986905018,
            "unit": "iter/sec",
            "range": "stddev: 1.4615905264180844e-7",
            "extra": "mean: 727.8812366796443 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1534185.7715914166,
            "unit": "iter/sec",
            "range": "stddev: 3.6564498188208725e-7",
            "extra": "mean: 651.8115462397336 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4204659.622114155,
            "unit": "iter/sec",
            "range": "stddev: 4.555360424861479e-8",
            "extra": "mean: 237.83137991498737 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 3457914.543236941,
            "unit": "iter/sec",
            "range": "stddev: 6.029249165192845e-8",
            "extra": "mean: 289.19164643807625 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6998952.859274856,
            "unit": "iter/sec",
            "range": "stddev: 1.6331831974269865e-8",
            "extra": "mean: 142.8785162733908 nsec\nrounds: 69440"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb744e169577d1b5469a28441a6e3b8e428f4674",
          "message": "Merge pull request #1743 from davidhewitt/improve-readme\n\nreadme: slightly improve getting started notes",
          "timestamp": "2021-07-31T16:51:58+01:00",
          "tree_id": "8351e25aaa611d3d0dc6e9fb9232e7edb41b7cfa",
          "url": "https://github.com/PyO3/pyo3/commit/fb744e169577d1b5469a28441a6e3b8e428f4674"
        },
        "date": 1627746795772,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7612495.248856993,
            "unit": "iter/sec",
            "range": "stddev: 1.2236098243472273e-8",
            "extra": "mean: 131.3629719703223 nsec\nrounds: 71424"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 7680107.60464465,
            "unit": "iter/sec",
            "range": "stddev: 1.4443510808782558e-8",
            "extra": "mean: 130.20650900718127 nsec\nrounds: 66663"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3155759.6351096043,
            "unit": "iter/sec",
            "range": "stddev: 3.3976712351496874e-7",
            "extra": "mean: 316.8809147799614 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2019220.0595469952,
            "unit": "iter/sec",
            "range": "stddev: 8.844365372964455e-8",
            "extra": "mean: 495.24072191760337 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2874565.1820503618,
            "unit": "iter/sec",
            "range": "stddev: 4.746375931726371e-8",
            "extra": "mean: 347.87870048811675 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1805515.5263766602,
            "unit": "iter/sec",
            "range": "stddev: 7.215538015873506e-8",
            "extra": "mean: 553.8584328918822 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1751684.8925662723,
            "unit": "iter/sec",
            "range": "stddev: 5.410161177401731e-8",
            "extra": "mean: 570.8789316182126 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1520045.1117509806,
            "unit": "iter/sec",
            "range": "stddev: 6.093358350703121e-8",
            "extra": "mean: 657.8752119060432 nsec\nrounds: 76331"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1714462.9217702926,
            "unit": "iter/sec",
            "range": "stddev: 5.6152399935505886e-8",
            "extra": "mean: 583.2730397969596 nsec\nrounds: 85463"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1501277.7994068242,
            "unit": "iter/sec",
            "range": "stddev: 6.01520126375617e-8",
            "extra": "mean: 666.0992391915277 nsec\nrounds: 75183"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1670568.9623173408,
            "unit": "iter/sec",
            "range": "stddev: 2.3782196760570684e-7",
            "extra": "mean: 598.5984551112714 nsec\nrounds: 169463"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4409868.184292483,
            "unit": "iter/sec",
            "range": "stddev: 5.8248936953784166e-8",
            "extra": "mean: 226.76414763646758 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5045992.726863283,
            "unit": "iter/sec",
            "range": "stddev: 5.000567848303804e-8",
            "extra": "mean: 198.17705932829315 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7250922.228737014,
            "unit": "iter/sec",
            "range": "stddev: 1.3962898738077742e-8",
            "extra": "mean: 137.91349134004497 nsec\nrounds: 66221"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e7737d09930ec61594eb4805393c79c8b0dd108",
          "message": "Merge pull request #1744 from davidhewitt/no-profile\n\npyo3-pytests: don't set profile in Cargo.toml",
          "timestamp": "2021-07-31T18:55:52+01:00",
          "tree_id": "ed0a1573d54007ebd3cd46de652f13fd9c1ab6eb",
          "url": "https://github.com/PyO3/pyo3/commit/8e7737d09930ec61594eb4805393c79c8b0dd108"
        },
        "date": 1627754253988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8247367.041114117,
            "unit": "iter/sec",
            "range": "stddev: 2.2078553746971862e-8",
            "extra": "mean: 121.25081799015197 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8917411.726255698,
            "unit": "iter/sec",
            "range": "stddev: 2.2742931139286953e-8",
            "extra": "mean: 112.14016249309097 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3718024.823277398,
            "unit": "iter/sec",
            "range": "stddev: 6.56800019148135e-8",
            "extra": "mean: 268.96001170794517 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2316385.630499748,
            "unit": "iter/sec",
            "range": "stddev: 1.1895923474878042e-7",
            "extra": "mean: 431.70704688923706 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3268868.1037607277,
            "unit": "iter/sec",
            "range": "stddev: 7.632686127010135e-8",
            "extra": "mean: 305.9162891428235 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2174214.7382730595,
            "unit": "iter/sec",
            "range": "stddev: 1.1961951620870587e-7",
            "extra": "mean: 459.93617023956176 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1964200.9294715184,
            "unit": "iter/sec",
            "range": "stddev: 1.3725783529697537e-7",
            "extra": "mean: 509.1128840209855 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1622178.6862878064,
            "unit": "iter/sec",
            "range": "stddev: 1.4036817566139462e-7",
            "extra": "mean: 616.454900100116 nsec\nrounds: 136987"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 2000329.5752941852,
            "unit": "iter/sec",
            "range": "stddev: 1.207129049597791e-7",
            "extra": "mean: 499.91761975186915 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1675706.7281719795,
            "unit": "iter/sec",
            "range": "stddev: 1.4293593086882532e-7",
            "extra": "mean: 596.7631347347924 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2718171.3701596903,
            "unit": "iter/sec",
            "range": "stddev: 8.168032858224601e-8",
            "extra": "mean: 367.8943906840812 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5209795.147218452,
            "unit": "iter/sec",
            "range": "stddev: 3.5605212496525216e-8",
            "extra": "mean: 191.94612681343483 nsec\nrounds: 48544"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5748977.854783164,
            "unit": "iter/sec",
            "range": "stddev: 4.804498916463976e-8",
            "extra": "mean: 173.94396452020462 nsec\nrounds: 65786"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8450859.528737592,
            "unit": "iter/sec",
            "range": "stddev: 2.2849354800720543e-8",
            "extra": "mean: 118.33115869451005 nsec\nrounds: 44248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fab135c1df3653d40d4a0e239c0093514a7f8478",
          "message": "Merge pull request #1747 from PyO3/pycell_doc\n\npycell: proofread docstrings",
          "timestamp": "2021-08-01T07:43:56+01:00",
          "tree_id": "6ed85578d7ca479ccc8392ead6f9a842ec96d0ea",
          "url": "https://github.com/PyO3/pyo3/commit/fab135c1df3653d40d4a0e239c0093514a7f8478"
        },
        "date": 1627800320901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8133179.353085262,
            "unit": "iter/sec",
            "range": "stddev: 2.3739714844134355e-8",
            "extra": "mean: 122.95314742084541 nsec\nrounds: 43291"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9216514.378329122,
            "unit": "iter/sec",
            "range": "stddev: 2.1683903114952406e-8",
            "extra": "mean: 108.50088861701498 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3779778.3640810116,
            "unit": "iter/sec",
            "range": "stddev: 6.306364539739354e-8",
            "extra": "mean: 264.5657770583211 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2090736.974349502,
            "unit": "iter/sec",
            "range": "stddev: 1.1422777782337974e-7",
            "extra": "mean: 478.3002416222921 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3261330.371297284,
            "unit": "iter/sec",
            "range": "stddev: 8.860239565727976e-8",
            "extra": "mean: 306.6233365370644 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1576801.3447476383,
            "unit": "iter/sec",
            "range": "stddev: 1.464507632785293e-7",
            "extra": "mean: 634.1952988122855 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 2021523.1120049234,
            "unit": "iter/sec",
            "range": "stddev: 1.2084174147200731e-7",
            "extra": "mean: 494.67651102365016 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1716209.785981676,
            "unit": "iter/sec",
            "range": "stddev: 1.1682748352899293e-7",
            "extra": "mean: 582.6793485086796 nsec\nrounds: 68489"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 2093668.490996715,
            "unit": "iter/sec",
            "range": "stddev: 9.723293750748935e-8",
            "extra": "mean: 477.6305342991221 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1692779.9581279256,
            "unit": "iter/sec",
            "range": "stddev: 1.3847741549265967e-7",
            "extra": "mean: 590.7442341803974 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1945020.6519784227,
            "unit": "iter/sec",
            "range": "stddev: 3.14906115633801e-7",
            "extra": "mean: 514.1333584210671 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4958815.3763188105,
            "unit": "iter/sec",
            "range": "stddev: 3.709445591157514e-8",
            "extra": "mean: 201.66106703138735 nsec\nrounds: 52632"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5269055.423982096,
            "unit": "iter/sec",
            "range": "stddev: 4.828842217399251e-8",
            "extra": "mean: 189.7873374891297 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7961549.516568441,
            "unit": "iter/sec",
            "range": "stddev: 2.2844963890045163e-8",
            "extra": "mean: 125.60369032672743 nsec\nrounds: 33558"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a69d120b47431cb97f2d9e0123c02139f1927ad",
          "message": "Merge pull request #1748 from PyO3/more_doc\n\nsome more docstring proofreading",
          "timestamp": "2021-08-01T09:40:51+01:00",
          "tree_id": "5f1366e239cb41f7ffef3bdf531cb7ce984592e7",
          "url": "https://github.com/PyO3/pyo3/commit/9a69d120b47431cb97f2d9e0123c02139f1927ad"
        },
        "date": 1627807320631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 9961672.838987187,
            "unit": "iter/sec",
            "range": "stddev: 6.267722708188648e-9",
            "extra": "mean: 100.38474623319757 nsec\nrounds: 92585"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10497579.345520025,
            "unit": "iter/sec",
            "range": "stddev: 7.739518890219227e-9",
            "extra": "mean: 95.260056350736 nsec\nrounds: 104167"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 4191250.3311226903,
            "unit": "iter/sec",
            "range": "stddev: 2.8662468178736514e-8",
            "extra": "mean: 238.59228654887656 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2522816.107090048,
            "unit": "iter/sec",
            "range": "stddev: 5.390941703606989e-8",
            "extra": "mean: 396.3824383353417 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3741233.244916293,
            "unit": "iter/sec",
            "range": "stddev: 4.1405254456233995e-8",
            "extra": "mean: 267.29154119400664 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2144090.3958916515,
            "unit": "iter/sec",
            "range": "stddev: 7.411110043456934e-8",
            "extra": "mean: 466.398246042289 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 2237588.16493403,
            "unit": "iter/sec",
            "range": "stddev: 7.889550886135185e-8",
            "extra": "mean: 446.9097645727847 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1929374.0623962672,
            "unit": "iter/sec",
            "range": "stddev: 7.59330738320809e-8",
            "extra": "mean: 518.3028109946147 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 2194092.458735304,
            "unit": "iter/sec",
            "range": "stddev: 2.6938094531063985e-8",
            "extra": "mean: 455.7693072682233 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1851968.7754717788,
            "unit": "iter/sec",
            "range": "stddev: 5.555157458938892e-8",
            "extra": "mean: 539.9659072250392 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2968390.101242739,
            "unit": "iter/sec",
            "range": "stddev: 4.0014964257880524e-8",
            "extra": "mean: 336.88294526425506 nsec\nrounds: 144907"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5968356.956605014,
            "unit": "iter/sec",
            "range": "stddev: 1.3070262570594801e-8",
            "extra": "mean: 167.55030023683454 nsec\nrounds: 55556"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4632121.112729684,
            "unit": "iter/sec",
            "range": "stddev: 2.65645847223086e-8",
            "extra": "mean: 215.88381988843628 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 9458940.041019442,
            "unit": "iter/sec",
            "range": "stddev: 9.842145664327887e-9",
            "extra": "mean: 105.7200907990924 nsec\nrounds: 85463"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5093c2939a7be57b0f7a0f60b946102a8c562a86",
          "message": "Merge pull request #1749 from davidhewitt/building-distribution-rewrite\n\nguide: rewrite \"Building and Distribution\" chapter",
          "timestamp": "2021-08-01T19:36:10+01:00",
          "tree_id": "9c146cd716de4ae8396413d0b7db621d02787c97",
          "url": "https://github.com/PyO3/pyo3/commit/5093c2939a7be57b0f7a0f60b946102a8c562a86"
        },
        "date": 1627843074529,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 9952744.932250328,
            "unit": "iter/sec",
            "range": "stddev: 3.0174121612789924e-9",
            "extra": "mean: 100.47479432134561 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10208330.139532005,
            "unit": "iter/sec",
            "range": "stddev: 3.6666942251172727e-9",
            "extra": "mean: 97.95921432121608 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 4145875.588593785,
            "unit": "iter/sec",
            "range": "stddev: 1.15194723562835e-8",
            "extra": "mean: 241.20357174950868 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2527627.6907738545,
            "unit": "iter/sec",
            "range": "stddev: 2.0361094031011573e-8",
            "extra": "mean: 395.62788604138177 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3727349.895995103,
            "unit": "iter/sec",
            "range": "stddev: 1.4167375846415461e-8",
            "extra": "mean: 268.2871283623055 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2345127.5904504927,
            "unit": "iter/sec",
            "range": "stddev: 2.7623695536926772e-8",
            "extra": "mean: 426.4160312950761 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 2196185.814689943,
            "unit": "iter/sec",
            "range": "stddev: 5.521286409783948e-8",
            "extra": "mean: 455.3348780013308 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1874789.2059571517,
            "unit": "iter/sec",
            "range": "stddev: 1.108757485602289e-7",
            "extra": "mean: 533.3932992689668 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 2179682.0482300958,
            "unit": "iter/sec",
            "range": "stddev: 2.5333740776999913e-8",
            "extra": "mean: 458.78250950097765 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1907762.7769048754,
            "unit": "iter/sec",
            "range": "stddev: 2.548625443002067e-8",
            "extra": "mean: 524.174185650913 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2941326.162857722,
            "unit": "iter/sec",
            "range": "stddev: 1.3227358896622906e-8",
            "extra": "mean: 339.9826964545966 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5847676.983770907,
            "unit": "iter/sec",
            "range": "stddev: 8.30433223078747e-9",
            "extra": "mean: 171.00807769904566 nsec\nrounds: 54055"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6311420.944062607,
            "unit": "iter/sec",
            "range": "stddev: 8.978931061487978e-9",
            "extra": "mean: 158.4429257472896 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 9460239.775346793,
            "unit": "iter/sec",
            "range": "stddev: 4.524198821733512e-9",
            "extra": "mean: 105.70556600531934 nsec\nrounds: 87720"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f3592fca8829da6af882f61e7d83558e26a6d98",
          "message": "Merge pull request #1649 from FriendRat/enhanced_extract_type_errors\n\nWIP: Enhanced extract type errors (Issue #1640)",
          "timestamp": "2021-08-02T12:22:11+01:00",
          "tree_id": "68513b449d0e9564328ac7066c493bab661c93a2",
          "url": "https://github.com/PyO3/pyo3/commit/2f3592fca8829da6af882f61e7d83558e26a6d98"
        },
        "date": 1627903426631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8673828.878003519,
            "unit": "iter/sec",
            "range": "stddev: 4.032540227707534e-9",
            "extra": "mean: 115.2893392370162 nsec\nrounds: 76336"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9361276.141833207,
            "unit": "iter/sec",
            "range": "stddev: 4.10888834452533e-9",
            "extra": "mean: 106.82304259043373 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3561355.5056063994,
            "unit": "iter/sec",
            "range": "stddev: 1.5859969666978708e-8",
            "extra": "mean: 280.791962056509 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2299996.2636150746,
            "unit": "iter/sec",
            "range": "stddev: 2.734544400648248e-8",
            "extra": "mean: 434.78331500776335 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3264938.073933667,
            "unit": "iter/sec",
            "range": "stddev: 1.5225195787438583e-8",
            "extra": "mean: 306.2845228161709 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2076091.727865911,
            "unit": "iter/sec",
            "range": "stddev: 4.021607846263141e-7",
            "extra": "mean: 481.67428566685135 nsec\nrounds: 175408"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1969930.8963063941,
            "unit": "iter/sec",
            "range": "stddev: 1.8507367508091525e-8",
            "extra": "mean: 507.6320199228442 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1703345.8636969777,
            "unit": "iter/sec",
            "range": "stddev: 2.9124830041301753e-8",
            "extra": "mean: 587.0798299471516 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1912671.3377750944,
            "unit": "iter/sec",
            "range": "stddev: 3.228137577324475e-8",
            "extra": "mean: 522.8289775927885 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1759005.086560311,
            "unit": "iter/sec",
            "range": "stddev: 2.888300547508913e-8",
            "extra": "mean: 568.5031883311397 nsec\nrounds: 156226"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1846050.0513259775,
            "unit": "iter/sec",
            "range": "stddev: 8.692963227752722e-8",
            "extra": "mean: 541.697122069752 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5275700.2438386,
            "unit": "iter/sec",
            "range": "stddev: 6.89727809228008e-8",
            "extra": "mean: 189.548297625072 nsec\nrounds: 48544"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5811006.620649054,
            "unit": "iter/sec",
            "range": "stddev: 9.102000217600902e-9",
            "extra": "mean: 172.0872243458778 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8337963.507540111,
            "unit": "iter/sec",
            "range": "stddev: 4.187147368187975e-9",
            "extra": "mean: 119.9333625165554 nsec\nrounds: 78126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61aaed711d3ec50b7b88249d202f5ffd7ad2b2d2",
          "message": "Merge pull request #1752 from mejrs/with_gil\n\nremove some of python::acquire_gil usage",
          "timestamp": "2021-08-02T19:56:21+01:00",
          "tree_id": "79a3bba88442b73354a345dcfa5104092cf9c33f",
          "url": "https://github.com/PyO3/pyo3/commit/61aaed711d3ec50b7b88249d202f5ffd7ad2b2d2"
        },
        "date": 1627930701278,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7145247.277026868,
            "unit": "iter/sec",
            "range": "stddev: 2.8867092843716507e-7",
            "extra": "mean: 139.9531690408332 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8706356.353835361,
            "unit": "iter/sec",
            "range": "stddev: 4.145837518320969e-8",
            "extra": "mean: 114.85861126734547 nsec\nrounds: 80001"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2985814.666357304,
            "unit": "iter/sec",
            "range": "stddev: 2.1614146746898147e-7",
            "extra": "mean: 334.916969652064 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1706777.5103880311,
            "unit": "iter/sec",
            "range": "stddev: 7.390053293677225e-7",
            "extra": "mean: 585.8994472997074 nsec\nrounds: 93450"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2626557.473176693,
            "unit": "iter/sec",
            "range": "stddev: 4.1040093108709427e-7",
            "extra": "mean: 380.7264871271953 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1417135.474062818,
            "unit": "iter/sec",
            "range": "stddev: 5.724928495440655e-7",
            "extra": "mean: 705.6488376045414 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1581660.1575840414,
            "unit": "iter/sec",
            "range": "stddev: 2.451622161636069e-7",
            "extra": "mean: 632.2470697670208 nsec\nrounds: 85471"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1115114.5952489234,
            "unit": "iter/sec",
            "range": "stddev: 8.842974375593235e-7",
            "extra": "mean: 896.7688202274907 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1575876.530661911,
            "unit": "iter/sec",
            "range": "stddev: 5.899460421467491e-7",
            "extra": "mean: 634.5674807279605 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1078612.253793324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010062281777443273",
            "extra": "mean: 927.117225382259 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1526459.5113573961,
            "unit": "iter/sec",
            "range": "stddev: 8.340617439761244e-7",
            "extra": "mean: 655.1107268549529 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3635653.5376679744,
            "unit": "iter/sec",
            "range": "stddev: 1.6904861151967942e-7",
            "extra": "mean: 275.0537117028639 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4995657.309961349,
            "unit": "iter/sec",
            "range": "stddev: 7.295530160707595e-7",
            "extra": "mean: 200.17385860444037 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6782120.865153896,
            "unit": "iter/sec",
            "range": "stddev: 1.862287499231798e-7",
            "extra": "mean: 147.44650233787019 nsec\nrounds: 67568"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96ce1ee30c6a4d27baa28c377d7ac05eb59e20f1",
          "message": "Merge pull request #1756 from davidhewitt/remove-pypy-workaround\n\npypy: remove workaround for 7.3.4",
          "timestamp": "2021-08-03T12:40:02+01:00",
          "tree_id": "faa4435b3aae64575559fdd0090bb8a44159c8ec",
          "url": "https://github.com/PyO3/pyo3/commit/96ce1ee30c6a4d27baa28c377d7ac05eb59e20f1"
        },
        "date": 1627990878048,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 9950607.960849611,
            "unit": "iter/sec",
            "range": "stddev: 3.927640048446505e-9",
            "extra": "mean: 100.49637207438259 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 10507582.141469067,
            "unit": "iter/sec",
            "range": "stddev: 3.792607898158231e-9",
            "extra": "mean: 95.16937260512074 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 4156436.7468199376,
            "unit": "iter/sec",
            "range": "stddev: 1.320081089186376e-8",
            "extra": "mean: 240.59069364335093 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2649543.252258098,
            "unit": "iter/sec",
            "range": "stddev: 2.2015514335816347e-8",
            "extra": "mean: 377.42354239625837 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3710405.4935481367,
            "unit": "iter/sec",
            "range": "stddev: 1.584575639070314e-8",
            "extra": "mean: 269.51232196577257 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2409198.1966520883,
            "unit": "iter/sec",
            "range": "stddev: 2.337535452311174e-8",
            "extra": "mean: 415.0758544438941 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 2241102.754171919,
            "unit": "iter/sec",
            "range": "stddev: 1.8597324487331008e-8",
            "extra": "mean: 446.20890235298936 nsec\nrounds: 108696"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1934957.1625368726,
            "unit": "iter/sec",
            "range": "stddev: 2.4867717128080835e-8",
            "extra": "mean: 516.8073068291648 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 2177454.2562600924,
            "unit": "iter/sec",
            "range": "stddev: 2.768060131406105e-8",
            "extra": "mean: 459.2518980012841 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 2010058.813714969,
            "unit": "iter/sec",
            "range": "stddev: 2.968198747735468e-8",
            "extra": "mean: 497.49788074699256 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2963113.3754066313,
            "unit": "iter/sec",
            "range": "stddev: 3.861891122982161e-8",
            "extra": "mean: 337.48286795228927 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5983253.846418367,
            "unit": "iter/sec",
            "range": "stddev: 4.19619840119062e-9",
            "extra": "mean: 167.13313953713418 nsec\nrounds: 54645"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6673755.813277092,
            "unit": "iter/sec",
            "range": "stddev: 1.1043740296665262e-8",
            "extra": "mean: 149.84066363527515 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 9461947.876663432,
            "unit": "iter/sec",
            "range": "stddev: 3.4978627178446286e-9",
            "extra": "mean: 105.68648369597915 nsec\nrounds: 86207"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7be6bdd97d715f68e080bbb03215ddb36d4079f6",
          "message": "Merge pull request #1754 from davidhewitt/sync-lib-readme-examples\n\ndocs: sync README and lib.rs examples",
          "timestamp": "2021-08-03T19:23:57+01:00",
          "tree_id": "75eacee9cbc025ea3dae01665c52ddc5014981a6",
          "url": "https://github.com/PyO3/pyo3/commit/7be6bdd97d715f68e080bbb03215ddb36d4079f6"
        },
        "date": 1628015141352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8768403.073063701,
            "unit": "iter/sec",
            "range": "stddev: 3.6156325248373033e-9",
            "extra": "mean: 114.04585209724159 nsec\nrounds: 78741"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9398969.405337075,
            "unit": "iter/sec",
            "range": "stddev: 3.4531786838517026e-9",
            "extra": "mean: 106.39464359056461 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3650456.230044446,
            "unit": "iter/sec",
            "range": "stddev: 1.2489674353989814e-8",
            "extra": "mean: 273.9383619431103 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2287006.323761422,
            "unit": "iter/sec",
            "range": "stddev: 2.4417175612362693e-8",
            "extra": "mean: 437.2528355562326 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3325155.584873259,
            "unit": "iter/sec",
            "range": "stddev: 1.2509249970683677e-8",
            "extra": "mean: 300.73780744250496 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2066725.3475404265,
            "unit": "iter/sec",
            "range": "stddev: 2.3598727616432384e-8",
            "extra": "mean: 483.8572291129767 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1953855.7858099244,
            "unit": "iter/sec",
            "range": "stddev: 2.1101566156855338e-8",
            "extra": "mean: 511.80850053640177 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1722269.7488827598,
            "unit": "iter/sec",
            "range": "stddev: 2.532091035738542e-8",
            "extra": "mean: 580.6291381758351 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1964173.959545622,
            "unit": "iter/sec",
            "range": "stddev: 1.721327538203496e-8",
            "extra": "mean: 509.11987461224624 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1765126.4172861741,
            "unit": "iter/sec",
            "range": "stddev: 1.9035171487283486e-8",
            "extra": "mean: 566.5316603992782 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1854891.7136039098,
            "unit": "iter/sec",
            "range": "stddev: 8.510796663718906e-8",
            "extra": "mean: 539.1150290154017 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5270667.219477554,
            "unit": "iter/sec",
            "range": "stddev: 4.243714668312758e-9",
            "extra": "mean: 189.72929960440652 nsec\nrounds: 48544"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5753868.383269546,
            "unit": "iter/sec",
            "range": "stddev: 7.209952439297619e-9",
            "extra": "mean: 173.7961199995348 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8350655.024516387,
            "unit": "iter/sec",
            "range": "stddev: 3.421706504147021e-9",
            "extra": "mean: 119.75108504230624 nsec\nrounds: 78126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcd35c1c3b381a61540391facc9a4ec2ae1c97ed",
          "message": "Merge pull request #1755 from davidhewitt/macos-link-args\n\nbuild: revert usage of cargo:rustc-cdylib-link-arg",
          "timestamp": "2021-08-03T22:30:52+01:00",
          "tree_id": "9f1da8e28992840c05ce93cc115b356fb15eb194",
          "url": "https://github.com/PyO3/pyo3/commit/fcd35c1c3b381a61540391facc9a4ec2ae1c97ed"
        },
        "date": 1628026351222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7439250.182936124,
            "unit": "iter/sec",
            "range": "stddev: 1.4958907776805027e-8",
            "extra": "mean: 134.42214946519965 nsec\nrounds: 68966"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 7475022.183982714,
            "unit": "iter/sec",
            "range": "stddev: 3.302552041290356e-8",
            "extra": "mean: 133.7788671910317 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3112523.991483132,
            "unit": "iter/sec",
            "range": "stddev: 5.474147159630242e-8",
            "extra": "mean: 321.28266408067196 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1990851.5898812665,
            "unit": "iter/sec",
            "range": "stddev: 9.81678608138559e-8",
            "extra": "mean: 502.2976122788644 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2755944.1741658254,
            "unit": "iter/sec",
            "range": "stddev: 6.951765458535127e-8",
            "extra": "mean: 362.85205243779 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1780943.849266129,
            "unit": "iter/sec",
            "range": "stddev: 1.1072646712977341e-7",
            "extra": "mean: 561.5000160798814 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1688163.351120453,
            "unit": "iter/sec",
            "range": "stddev: 1.0872506648725755e-7",
            "extra": "mean: 592.3597377791814 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1469705.9884231845,
            "unit": "iter/sec",
            "range": "stddev: 1.2309738380734548e-7",
            "extra": "mean: 680.4081958405823 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1706588.980915194,
            "unit": "iter/sec",
            "range": "stddev: 8.383190010598068e-8",
            "extra": "mean: 585.9641724998354 nsec\nrounds: 100000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1492905.83234678,
            "unit": "iter/sec",
            "range": "stddev: 7.829319888637263e-8",
            "extra": "mean: 669.8346126950282 nsec\nrounds: 71429"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1554320.6168934165,
            "unit": "iter/sec",
            "range": "stddev: 3.4762477773369634e-7",
            "extra": "mean: 643.3679056504288 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4383269.652807841,
            "unit": "iter/sec",
            "range": "stddev: 5.321510752999582e-8",
            "extra": "mean: 228.1401965222972 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4755814.3106608065,
            "unit": "iter/sec",
            "range": "stddev: 4.377710923600592e-8",
            "extra": "mean: 210.2689328634634 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7170194.6720206775,
            "unit": "iter/sec",
            "range": "stddev: 1.7803555800155595e-8",
            "extra": "mean: 139.46622731215356 nsec\nrounds: 66226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10cbba02d9357e8d1dd7d7a7cdc0bd0db8af2d75",
          "message": "Merge pull request #1758 from davidhewitt/config-file\n\npyo3-build-config: support \"config files\"",
          "timestamp": "2021-08-07T08:09:40+01:00",
          "tree_id": "22c82e3e5ac5dc2f0ccfa1d53e2b45d01bc856dd",
          "url": "https://github.com/PyO3/pyo3/commit/10cbba02d9357e8d1dd7d7a7cdc0bd0db8af2d75"
        },
        "date": 1628320304311,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7109459.9716494735,
            "unit": "iter/sec",
            "range": "stddev: 2.4008777530279094e-7",
            "extra": "mean: 140.65765951118556 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8025330.495317936,
            "unit": "iter/sec",
            "range": "stddev: 2.1187745544312721e-7",
            "extra": "mean: 124.6054602465508 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2926526.3566826065,
            "unit": "iter/sec",
            "range": "stddev: 8.730841658512008e-7",
            "extra": "mean: 341.70203104994226 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1880338.208371675,
            "unit": "iter/sec",
            "range": "stddev: 6.868078860333617e-7",
            "extra": "mean: 531.8192203657053 nsec\nrounds: 37736"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2601190.3222136344,
            "unit": "iter/sec",
            "range": "stddev: 7.570379098905098e-7",
            "extra": "mean: 384.4393820244596 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1682733.0109009573,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016563034110928635",
            "extra": "mean: 594.2713392568565 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1558423.6272505792,
            "unit": "iter/sec",
            "range": "stddev: 0.000001728507251015912",
            "extra": "mean: 641.674049670327 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1366110.881696409,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024536792884886594",
            "extra": "mean: 732.0050029601373 nsec\nrounds: 32051"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1613509.5440697153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011915036517656214",
            "extra": "mean: 619.7670188411986 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1421659.4678550125,
            "unit": "iter/sec",
            "range": "stddev: 7.108173490112847e-7",
            "extra": "mean: 703.4033273163669 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1667586.8899256734,
            "unit": "iter/sec",
            "range": "stddev: 0.000001164839721383842",
            "extra": "mean: 599.6689024369646 nsec\nrounds: 41151"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4349741.061987201,
            "unit": "iter/sec",
            "range": "stddev: 6.300856945086595e-7",
            "extra": "mean: 229.89874241919867 nsec\nrounds: 48307"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 3333964.4620806803,
            "unit": "iter/sec",
            "range": "stddev: 8.148250747740235e-7",
            "extra": "mean: 299.9432091655824 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7275299.397234656,
            "unit": "iter/sec",
            "range": "stddev: 2.404216450178917e-7",
            "extra": "mean: 137.45138796350437 nsec\nrounds: 73525"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9a735698df3bd1e4a26cd33eea5d7e7eca5a38f3",
          "message": "Merge pull request #1762 from deantvv/fix-compiler-warning\n\nfix compiler warning",
          "timestamp": "2021-08-07T10:51:27+01:00",
          "tree_id": "685d6b807f8605cd84a84b7d73c0385a15d854fe",
          "url": "https://github.com/PyO3/pyo3/commit/9a735698df3bd1e4a26cd33eea5d7e7eca5a38f3"
        },
        "date": 1628329960771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8527215.417778382,
            "unit": "iter/sec",
            "range": "stddev: 6.144908640674634e-9",
            "extra": "mean: 117.27157706314385 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8903638.92815268,
            "unit": "iter/sec",
            "range": "stddev: 3.1451513326349036e-9",
            "extra": "mean: 112.31362907568949 nsec\nrounds: 83327"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3650957.172333339,
            "unit": "iter/sec",
            "range": "stddev: 1.5263726349095294e-8",
            "extra": "mean: 273.90077527649555 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2300220.2513180347,
            "unit": "iter/sec",
            "range": "stddev: 2.1433083921852358e-8",
            "extra": "mean: 434.74097727270913 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3236218.780022393,
            "unit": "iter/sec",
            "range": "stddev: 1.3564961255929695e-8",
            "extra": "mean: 309.0025946864694 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2072162.654823568,
            "unit": "iter/sec",
            "range": "stddev: 2.5539284553278486e-8",
            "extra": "mean: 482.58759884041484 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1916642.2704490724,
            "unit": "iter/sec",
            "range": "stddev: 2.628798059535132e-8",
            "extra": "mean: 521.7457714553124 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1601628.1351645447,
            "unit": "iter/sec",
            "range": "stddev: 2.4875961944645833e-8",
            "extra": "mean: 624.3646562171881 nsec\nrounds: 142837"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1935799.4025575211,
            "unit": "iter/sec",
            "range": "stddev: 1.4764534401683293e-8",
            "extra": "mean: 516.5824509908999 nsec\nrounds: 95239"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1668690.936566786,
            "unit": "iter/sec",
            "range": "stddev: 2.4174977687375564e-8",
            "extra": "mean: 599.2721468588218 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1800363.4479282482,
            "unit": "iter/sec",
            "range": "stddev: 9.804073513638855e-8",
            "extra": "mean: 555.4434029144174 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4912874.711392921,
            "unit": "iter/sec",
            "range": "stddev: 8.513517625061542e-9",
            "extra": "mean: 203.54681500035574 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5408561.969964844,
            "unit": "iter/sec",
            "range": "stddev: 7.796247026978317e-9",
            "extra": "mean: 184.892029628727 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8339978.698521038,
            "unit": "iter/sec",
            "range": "stddev: 3.351628265406586e-9",
            "extra": "mean: 119.90438299049819 nsec\nrounds: 74075"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e9cccd74bfc51ad557cb6cf3b4ed79185d5b8b70",
          "message": "Merge pull request #1577 from davidhewitt/compile-errors-on-coverage\n\ncoverage: also run compile_error tests",
          "timestamp": "2021-08-08T08:47:31+01:00",
          "tree_id": "d6f5914fd911ce19f520557784c7013e67d50599",
          "url": "https://github.com/PyO3/pyo3/commit/e9cccd74bfc51ad557cb6cf3b4ed79185d5b8b70"
        },
        "date": 1628408944357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8779362.628097206,
            "unit": "iter/sec",
            "range": "stddev: 3.39962852624554e-9",
            "extra": "mean: 113.90348506614664 nsec\nrounds: 74627"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9417104.53130261,
            "unit": "iter/sec",
            "range": "stddev: 3.3856630692022748e-9",
            "extra": "mean: 106.1897525588032 nsec\nrounds: 90082"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3656583.0150309866,
            "unit": "iter/sec",
            "range": "stddev: 1.2937407630375754e-8",
            "extra": "mean: 273.4793647215936 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2222797.4208352105,
            "unit": "iter/sec",
            "range": "stddev: 2.3368571780194194e-8",
            "extra": "mean: 449.88355242247144 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3310106.284346022,
            "unit": "iter/sec",
            "range": "stddev: 1.2429494244841746e-8",
            "extra": "mean: 302.10510300813365 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1933919.0847603504,
            "unit": "iter/sec",
            "range": "stddev: 2.6864462761950837e-8",
            "extra": "mean: 517.0847156328855 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1980041.6806619817,
            "unit": "iter/sec",
            "range": "stddev: 1.5819455991907448e-8",
            "extra": "mean: 505.0398735374549 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1620149.1418625677,
            "unit": "iter/sec",
            "range": "stddev: 2.646732118130629e-8",
            "extra": "mean: 617.2271269112721 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1891598.4371470253,
            "unit": "iter/sec",
            "range": "stddev: 2.409766933133551e-8",
            "extra": "mean: 528.6534289532891 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1631620.5052341984,
            "unit": "iter/sec",
            "range": "stddev: 1.7007882555737858e-8",
            "extra": "mean: 612.8876149766893 nsec\nrounds: 79366"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2581150.0765683446,
            "unit": "iter/sec",
            "range": "stddev: 6.906281764977622e-8",
            "extra": "mean: 387.4241986461946 nsec\nrounds: 126567"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4662019.641698135,
            "unit": "iter/sec",
            "range": "stddev: 3.0796789495295935e-8",
            "extra": "mean: 214.49931078283834 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5707082.3322006455,
            "unit": "iter/sec",
            "range": "stddev: 7.58061114786749e-9",
            "extra": "mean: 175.22088201851946 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8341939.245640956,
            "unit": "iter/sec",
            "range": "stddev: 3.82373976493376e-9",
            "extra": "mean: 119.8762027093961 nsec\nrounds: 76336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3de5591534ca3e8561b7bed27e01eca40b9c1050",
          "message": "Merge pull request #1767 from indygreg/packagecontext\n\nffi: define _Py_PackageContext",
          "timestamp": "2021-08-08T19:23:18+01:00",
          "tree_id": "1afdb935e0449b2fd238e31cd365e657c3580139",
          "url": "https://github.com/PyO3/pyo3/commit/3de5591534ca3e8561b7bed27e01eca40b9c1050"
        },
        "date": 1628447983422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7014770.3034121655,
            "unit": "iter/sec",
            "range": "stddev: 3.3976938699655684e-7",
            "extra": "mean: 142.55634279471334 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8137168.949396291,
            "unit": "iter/sec",
            "range": "stddev: 1.6886600709701923e-7",
            "extra": "mean: 122.8928643633522 nsec\nrounds: 92593"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2996813.3937279717,
            "unit": "iter/sec",
            "range": "stddev: 8.258627507930013e-7",
            "extra": "mean: 333.68777718823213 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1960579.4139456556,
            "unit": "iter/sec",
            "range": "stddev: 7.469092026554676e-7",
            "extra": "mean: 510.05330000250444 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2715587.007896449,
            "unit": "iter/sec",
            "range": "stddev: 3.6879937553765065e-7",
            "extra": "mean: 368.2445073908745 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1527354.1398101614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011441124919279914",
            "extra": "mean: 654.7270039966933 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1626750.1938005462,
            "unit": "iter/sec",
            "range": "stddev: 5.761382425269863e-7",
            "extra": "mean: 614.7225331899056 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1432077.7211654978,
            "unit": "iter/sec",
            "range": "stddev: 9.20449099294556e-7",
            "extra": "mean: 698.2861231764808 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1637194.3535014447,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010378718167698997",
            "extra": "mean: 610.8010315704872 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1287366.602626789,
            "unit": "iter/sec",
            "range": "stddev: 9.046440595776915e-7",
            "extra": "mean: 776.7795109486108 nsec\nrounds: 76924"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1356629.5668549063,
            "unit": "iter/sec",
            "range": "stddev: 0.000002341132875859684",
            "extra": "mean: 737.1208946288222 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3743686.610769781,
            "unit": "iter/sec",
            "range": "stddev: 5.834743058955582e-7",
            "extra": "mean: 267.1163759070923 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4905092.57024414,
            "unit": "iter/sec",
            "range": "stddev: 3.6953047719032474e-7",
            "extra": "mean: 203.86975081088409 nsec\nrounds: 28091"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6377810.472721797,
            "unit": "iter/sec",
            "range": "stddev: 4.41499817941235e-7",
            "extra": "mean: 156.7936213026026 nsec\nrounds: 70922"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ac92b79f83b9bbaa6e03fdd4e9ea5ae396b2fc02",
          "message": "Merge pull request #1768 from indygreg/decodelocale-signature\n\nffi: fix Py_DecodeLocale() signature",
          "timestamp": "2021-08-08T23:08:45+01:00",
          "tree_id": "e7d80f364fd264e25dff3b4bce0ab3a55ef7e1ba",
          "url": "https://github.com/PyO3/pyo3/commit/ac92b79f83b9bbaa6e03fdd4e9ea5ae396b2fc02"
        },
        "date": 1628460623890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7578872.941975532,
            "unit": "iter/sec",
            "range": "stddev: 1.2891292654806513e-7",
            "extra": "mean: 131.94574017209735 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8635463.120224752,
            "unit": "iter/sec",
            "range": "stddev: 1.0672750583267788e-7",
            "extra": "mean: 115.80154834522288 nsec\nrounds: 101011"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3096065.5656021317,
            "unit": "iter/sec",
            "range": "stddev: 7.117358459797278e-7",
            "extra": "mean: 322.9905758814353 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1967607.4393466657,
            "unit": "iter/sec",
            "range": "stddev: 6.120514585278554e-7",
            "extra": "mean: 508.2314591837991 nsec\nrounds: 43860"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2788510.068929274,
            "unit": "iter/sec",
            "range": "stddev: 6.917366377073538e-7",
            "extra": "mean: 358.6144483186974 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1619239.0529423284,
            "unit": "iter/sec",
            "range": "stddev: 4.74283918568569e-7",
            "extra": "mean: 617.5740377450257 nsec\nrounds: 75188"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1676250.9163574064,
            "unit": "iter/sec",
            "range": "stddev: 7.329297091859666e-7",
            "extra": "mean: 596.5693979592172 nsec\nrounds: 98049"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1428318.66980789,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013391235579804519",
            "extra": "mean: 700.1238737111285 nsec\nrounds: 90918"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1687290.8966024702,
            "unit": "iter/sec",
            "range": "stddev: 5.030768691525952e-7",
            "extra": "mean: 592.6660316923403 nsec\nrounds: 106383"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1353839.5109946232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012289340814838607",
            "extra": "mean: 738.6399878855347 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1456839.6916973444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020858004233087964",
            "extra": "mean: 686.4173221659779 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4166224.8972243895,
            "unit": "iter/sec",
            "range": "stddev: 3.3176247413761525e-7",
            "extra": "mean: 240.02544861806635 nsec\nrounds: 47847"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5415702.850228131,
            "unit": "iter/sec",
            "range": "stddev: 1.7341788182895847e-7",
            "extra": "mean: 184.64824006320939 nsec\nrounds: 63292"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7167157.829765569,
            "unit": "iter/sec",
            "range": "stddev: 1.9239441706373317e-7",
            "extra": "mean: 139.5253214387171 nsec\nrounds: 89286"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "473cd5cc4f64fc2c6f4620703bb0158c2a27395d",
          "message": "Merge pull request #1765 from indygreg/frozen-public\n\nffi: make _frozen fields public",
          "timestamp": "2021-08-08T23:09:00+01:00",
          "tree_id": "fdec1fb436c8a5f3bdfd37aa92ef546d3357a98c",
          "url": "https://github.com/PyO3/pyo3/commit/473cd5cc4f64fc2c6f4620703bb0158c2a27395d"
        },
        "date": 1628460630835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7045133.785906578,
            "unit": "iter/sec",
            "range": "stddev: 2.813511214705588e-7",
            "extra": "mean: 141.94194608479688 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8255036.922761913,
            "unit": "iter/sec",
            "range": "stddev: 4.601016251100329e-7",
            "extra": "mean: 121.13816199203333 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2983143.97148428,
            "unit": "iter/sec",
            "range": "stddev: 2.624405219244461e-7",
            "extra": "mean: 335.21680802510843 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1903882.5920772648,
            "unit": "iter/sec",
            "range": "stddev: 9.523012904099718e-7",
            "extra": "mean: 525.2424724934763 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2731295.966940531,
            "unit": "iter/sec",
            "range": "stddev: 2.7942979072401903e-7",
            "extra": "mean: 366.1265612016759 nsec\nrounds: 44643"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1811103.0682235446,
            "unit": "iter/sec",
            "range": "stddev: 3.6676194542653524e-7",
            "extra": "mean: 552.1496912822415 nsec\nrounds: 36765"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1637644.983519464,
            "unit": "iter/sec",
            "range": "stddev: 4.76816804282809e-7",
            "extra": "mean: 610.6329577310261 nsec\nrounds: 83334"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1445704.1360060433,
            "unit": "iter/sec",
            "range": "stddev: 8.237758658418772e-7",
            "extra": "mean: 691.7044608883235 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1545069.233351899,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014229521719178837",
            "extra": "mean: 647.2201882051405 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1498576.360484745,
            "unit": "iter/sec",
            "range": "stddev: 5.801414943703293e-7",
            "extra": "mean: 667.2999964288557 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1495221.9115166094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037195024290772057",
            "extra": "mean: 668.7970476473931 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4235023.33013588,
            "unit": "iter/sec",
            "range": "stddev: 1.3488253197675842e-7",
            "extra": "mean: 236.12620806221094 nsec\nrounds: 7123"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5310737.072909183,
            "unit": "iter/sec",
            "range": "stddev: 1.376792225052354e-7",
            "extra": "mean: 188.297779813125 nsec\nrounds: 61729"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6855059.082011107,
            "unit": "iter/sec",
            "range": "stddev: 1.2281998949067732e-7",
            "extra": "mean: 145.87766320265087 nsec\nrounds: 72993"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edec1f12d6ca90a43db3bc7d03fed59844e3ca00",
          "message": "Merge pull request #1763 from deantvv/ffi-cleanup\n\nclean up ffi from pyframe to pyhash",
          "timestamp": "2021-08-08T23:09:19+01:00",
          "tree_id": "dce21304dee3ddd755f1a30611fd913084b4163f",
          "url": "https://github.com/PyO3/pyo3/commit/edec1f12d6ca90a43db3bc7d03fed59844e3ca00"
        },
        "date": 1628460647712,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7086279.316716415,
            "unit": "iter/sec",
            "range": "stddev: 4.2247956834655084e-8",
            "extra": "mean: 141.11777920479608 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 6773046.186166739,
            "unit": "iter/sec",
            "range": "stddev: 3.413172556830355e-8",
            "extra": "mean: 147.64405446407818 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3116647.1291478486,
            "unit": "iter/sec",
            "range": "stddev: 5.6101735610199193e-8",
            "extra": "mean: 320.85762634072057 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1899853.967290503,
            "unit": "iter/sec",
            "range": "stddev: 1.1466010478166219e-7",
            "extra": "mean: 526.3562448572266 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2800400.2101222486,
            "unit": "iter/sec",
            "range": "stddev: 4.812071096652548e-8",
            "extra": "mean: 357.09181722891685 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1721206.0446454596,
            "unit": "iter/sec",
            "range": "stddev: 1.5703588493904037e-7",
            "extra": "mean: 580.9879666129666 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1673478.5633294533,
            "unit": "iter/sec",
            "range": "stddev: 5.502111375143664e-8",
            "extra": "mean: 597.5576992215206 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1387350.6510844843,
            "unit": "iter/sec",
            "range": "stddev: 6.90983412123827e-8",
            "extra": "mean: 720.7983066272972 nsec\nrounds: 72459"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1661318.8641380817,
            "unit": "iter/sec",
            "range": "stddev: 6.421901746300157e-8",
            "extra": "mean: 601.9314061777159 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1396863.2007789426,
            "unit": "iter/sec",
            "range": "stddev: 1.5778130449554203e-7",
            "extra": "mean: 715.8897159306844 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1542940.248359197,
            "unit": "iter/sec",
            "range": "stddev: 2.008475327359848e-7",
            "extra": "mean: 648.1132377377712 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 3847137.270168494,
            "unit": "iter/sec",
            "range": "stddev: 4.372295578493387e-8",
            "extra": "mean: 259.93353753057005 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4242704.1083586905,
            "unit": "iter/sec",
            "range": "stddev: 3.576377956283224e-8",
            "extra": "mean: 235.69873704607343 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7066760.058304418,
            "unit": "iter/sec",
            "range": "stddev: 1.3843069656020957e-8",
            "extra": "mean: 141.50756382692384 nsec\nrounds: 69445"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91615338aea839bc8b4b130a73b9f99170d9f264",
          "message": "Merge pull request #1764 from awestlake87/master\n\nUpdated async-await guide for pyo3-asyncio 0.14",
          "timestamp": "2021-08-08T23:14:43+01:00",
          "tree_id": "b888caf2b025a1bee555051e57b3cf76b932a572",
          "url": "https://github.com/PyO3/pyo3/commit/91615338aea839bc8b4b130a73b9f99170d9f264"
        },
        "date": 1628461891927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8718532.524255157,
            "unit": "iter/sec",
            "range": "stddev: 2.4813951063429037e-7",
            "extra": "mean: 114.69820147116116 nsec\nrounds: 78125"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8566017.405150099,
            "unit": "iter/sec",
            "range": "stddev: 3.872952987562153e-9",
            "extra": "mean: 116.74036517820883 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3661646.72311875,
            "unit": "iter/sec",
            "range": "stddev: 1.359039443449265e-8",
            "extra": "mean: 273.1011688498957 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2178982.535039331,
            "unit": "iter/sec",
            "range": "stddev: 2.6603852597391278e-8",
            "extra": "mean: 458.92979127601444 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3266811.4896561094,
            "unit": "iter/sec",
            "range": "stddev: 1.5486535955491895e-8",
            "extra": "mean: 306.10887808049563 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2041738.7578028287,
            "unit": "iter/sec",
            "range": "stddev: 2.4443482762597964e-8",
            "extra": "mean: 489.778624311497 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1955978.6784579633,
            "unit": "iter/sec",
            "range": "stddev: 3.291043381188466e-8",
            "extra": "mean: 511.25301671952474 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1640912.2757616094,
            "unit": "iter/sec",
            "range": "stddev: 4.858527600749137e-8",
            "extra": "mean: 609.4170997264005 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1942144.6447510675,
            "unit": "iter/sec",
            "range": "stddev: 4.233518974955798e-8",
            "extra": "mean: 514.8947081276107 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1699680.579357283,
            "unit": "iter/sec",
            "range": "stddev: 2.3048808762787495e-8",
            "extra": "mean: 588.3458410628602 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2548747.339980086,
            "unit": "iter/sec",
            "range": "stddev: 1.6787983203397445e-8",
            "extra": "mean: 392.3496002579231 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4499984.38564939,
            "unit": "iter/sec",
            "range": "stddev: 1.1147807342938752e-8",
            "extra": "mean: 222.22299330438176 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5009582.503247216,
            "unit": "iter/sec",
            "range": "stddev: 3.8630612642189754e-8",
            "extra": "mean: 199.61743305983364 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8300300.737241981,
            "unit": "iter/sec",
            "range": "stddev: 2.0123055904834166e-8",
            "extra": "mean: 120.47756239877215 nsec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "575c44834576533d75456d43c6d9c8a3b3dc6765",
          "message": "Merge pull request #1769 from indygreg/force-acquire-gil\n\ngil: add unsafe variation for obtaining GILGuard without checks",
          "timestamp": "2021-08-09T07:49:06+01:00",
          "tree_id": "cec2d96b256f5d05226992ebe69c822a4cd0a9ac",
          "url": "https://github.com/PyO3/pyo3/commit/575c44834576533d75456d43c6d9c8a3b3dc6765"
        },
        "date": 1628491823883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8672427.412342576,
            "unit": "iter/sec",
            "range": "stddev: 3.3374039370956426e-9",
            "extra": "mean: 115.30797001273692 nsec\nrounds: 81301"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9484148.142602604,
            "unit": "iter/sec",
            "range": "stddev: 3.6095785627283924e-9",
            "extra": "mean: 105.43909531607967 nsec\nrounds: 93458"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3626923.8056148244,
            "unit": "iter/sec",
            "range": "stddev: 1.1948327738619158e-8",
            "extra": "mean: 275.71574524128994 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2108016.247420486,
            "unit": "iter/sec",
            "range": "stddev: 2.45556811090717e-8",
            "extra": "mean: 474.37964542392416 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3255039.5370886032,
            "unit": "iter/sec",
            "range": "stddev: 4.1249204238702024e-8",
            "extra": "mean: 307.21593043799743 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1919153.1205817505,
            "unit": "iter/sec",
            "range": "stddev: 1.1894148177771496e-7",
            "extra": "mean: 521.0631654522164 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1958534.8995512559,
            "unit": "iter/sec",
            "range": "stddev: 1.9539506027410204e-8",
            "extra": "mean: 510.5857445934177 nsec\nrounds: 98040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1605202.565164595,
            "unit": "iter/sec",
            "range": "stddev: 5.524649035883992e-8",
            "extra": "mean: 622.974334643392 nsec\nrounds: 142858"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1930416.701587503,
            "unit": "iter/sec",
            "range": "stddev: 2.2050457188358732e-8",
            "extra": "mean: 518.0228699717188 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1693931.3347593315,
            "unit": "iter/sec",
            "range": "stddev: 2.017442773908164e-8",
            "extra": "mean: 590.342701312362 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1803644.9561973244,
            "unit": "iter/sec",
            "range": "stddev: 1.0826804753735115e-7",
            "extra": "mean: 554.4328425414325 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4334309.655039155,
            "unit": "iter/sec",
            "range": "stddev: 1.7353215058604558e-8",
            "extra": "mean: 230.71724901766086 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4201478.336116667,
            "unit": "iter/sec",
            "range": "stddev: 9.605480445259291e-9",
            "extra": "mean: 238.01146168108886 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8335803.26854943,
            "unit": "iter/sec",
            "range": "stddev: 3.3755981959485455e-9",
            "extra": "mean: 119.96444347151638 nsec\nrounds: 72988"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ccdc26f971b70ab1c296416bfa0a79cc90a02b11",
          "message": "Merge pull request #1760 from PyO3/release-0.14.2\n\nrelease: 0.14.2",
          "timestamp": "2021-08-09T09:03:51+01:00",
          "tree_id": "37d41cee123f3a5e50b35eb83b51b6e73df96acf",
          "url": "https://github.com/PyO3/pyo3/commit/ccdc26f971b70ab1c296416bfa0a79cc90a02b11"
        },
        "date": 1628496331521,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8701536.579810932,
            "unit": "iter/sec",
            "range": "stddev: 3.6696775641829084e-9",
            "extra": "mean: 114.92223135855166 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9364026.881842604,
            "unit": "iter/sec",
            "range": "stddev: 3.5095703726202395e-9",
            "extra": "mean: 106.79166267011408 nsec\nrounds: 91744"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3647320.237942815,
            "unit": "iter/sec",
            "range": "stddev: 1.4576442372279581e-8",
            "extra": "mean: 274.1738961116072 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2290312.143171572,
            "unit": "iter/sec",
            "range": "stddev: 2.507794063915996e-8",
            "extra": "mean: 436.6217080851644 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3267318.24756511,
            "unit": "iter/sec",
            "range": "stddev: 7.267463364962992e-8",
            "extra": "mean: 306.06140088948496 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2031218.538975483,
            "unit": "iter/sec",
            "range": "stddev: 6.256038621479707e-8",
            "extra": "mean: 492.31531753531584 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1967822.2485274947,
            "unit": "iter/sec",
            "range": "stddev: 1.780188912066734e-8",
            "extra": "mean: 508.1759801978768 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1705005.3531827899,
            "unit": "iter/sec",
            "range": "stddev: 2.7369684982877856e-8",
            "extra": "mean: 586.5084224714024 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1972442.2570831457,
            "unit": "iter/sec",
            "range": "stddev: 1.614073173668861e-8",
            "extra": "mean: 506.9856906631828 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1686444.6140253681,
            "unit": "iter/sec",
            "range": "stddev: 3.725156547479096e-8",
            "extra": "mean: 592.9634401770329 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2601177.157073129,
            "unit": "iter/sec",
            "range": "stddev: 9.44079249621871e-8",
            "extra": "mean: 384.4413277585847 nsec\nrounds: 124985"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5245956.483899159,
            "unit": "iter/sec",
            "range": "stddev: 4.645807974619494e-9",
            "extra": "mean: 190.6230070852893 nsec\nrounds: 47847"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5588033.681244148,
            "unit": "iter/sec",
            "range": "stddev: 8.110895961937483e-9",
            "extra": "mean: 178.95382473408952 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8317897.500565052,
            "unit": "iter/sec",
            "range": "stddev: 3.699396062100797e-9",
            "extra": "mean: 120.22268847770106 nsec\nrounds: 78126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a9ef543c1d7b288cad569d97fc1f5499533d4ff",
          "message": "Merge pull request #1771 from awestlake87/master\n\nProblems with the new Async/Await guide",
          "timestamp": "2021-08-10T07:48:58+01:00",
          "tree_id": "decda3b03d50d3db1947c8436dda437cd194a2ee",
          "url": "https://github.com/PyO3/pyo3/commit/6a9ef543c1d7b288cad569d97fc1f5499533d4ff"
        },
        "date": 1628578256477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7040365.86310293,
            "unit": "iter/sec",
            "range": "stddev: 4.1438241345912676e-8",
            "extra": "mean: 142.038072942002 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8465704.032389907,
            "unit": "iter/sec",
            "range": "stddev: 4.266292659475268e-8",
            "extra": "mean: 118.12366652243065 nsec\nrounds: 78734"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3038913.4613342476,
            "unit": "iter/sec",
            "range": "stddev: 1.9301188196930716e-8",
            "extra": "mean: 329.06498086357016 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1957680.615352481,
            "unit": "iter/sec",
            "range": "stddev: 9.56078952396221e-8",
            "extra": "mean: 510.80855179223175 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2875331.4111976717,
            "unit": "iter/sec",
            "range": "stddev: 7.040568997519016e-8",
            "extra": "mean: 347.7859964613626 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1687991.9192837146,
            "unit": "iter/sec",
            "range": "stddev: 5.35642400248918e-8",
            "extra": "mean: 592.4198976165644 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1616860.804698162,
            "unit": "iter/sec",
            "range": "stddev: 2.4958642333108416e-8",
            "extra": "mean: 618.4824303331882 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1453740.1817595907,
            "unit": "iter/sec",
            "range": "stddev: 8.776483677541656e-8",
            "extra": "mean: 687.8808280512382 nsec\nrounds: 70418"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1716590.307942606,
            "unit": "iter/sec",
            "range": "stddev: 8.32971458301939e-8",
            "extra": "mean: 582.5501841487068 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1463199.9635821024,
            "unit": "iter/sec",
            "range": "stddev: 9.826263389847481e-8",
            "extra": "mean: 683.433587266998 nsec\nrounds: 72459"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1631138.8920682876,
            "unit": "iter/sec",
            "range": "stddev: 3.2670944377627455e-7",
            "extra": "mean: 613.0685773373951 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4181315.6293360377,
            "unit": "iter/sec",
            "range": "stddev: 2.636945880948938e-8",
            "extra": "mean: 239.15917587852277 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5434719.147980019,
            "unit": "iter/sec",
            "range": "stddev: 2.2437466881106423e-8",
            "extra": "mean: 184.0021485511702 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7148535.238262373,
            "unit": "iter/sec",
            "range": "stddev: 1.533217353088988e-8",
            "extra": "mean: 139.8887977284852 nsec\nrounds: 64927"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "140c090504c98a84dc7b67af440e27993139abce",
          "message": "Merge pull request #1780 from davidhewitt/pin-trybuild\n\nci: downgrade trybuild to 1.0.43",
          "timestamp": "2021-08-11T09:26:41+01:00",
          "tree_id": "ec9db58ffc076468a5a73d65992922fb1b7dce2c",
          "url": "https://github.com/PyO3/pyo3/commit/140c090504c98a84dc7b67af440e27993139abce"
        },
        "date": 1628670532323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6824947.375224449,
            "unit": "iter/sec",
            "range": "stddev: 1.597797158279149e-7",
            "extra": "mean: 146.5212762856522 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8816525.445849279,
            "unit": "iter/sec",
            "range": "stddev: 1.2777938442041682e-7",
            "extra": "mean: 113.42336685147826 nsec\nrounds: 84034"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 2942796.631297096,
            "unit": "iter/sec",
            "range": "stddev: 6.252491124825713e-7",
            "extra": "mean: 339.8128125353579 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1863343.1345506157,
            "unit": "iter/sec",
            "range": "stddev: 9.642528635336028e-7",
            "extra": "mean: 536.6698067879819 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2797360.4529000344,
            "unit": "iter/sec",
            "range": "stddev: 3.9009397958395436e-7",
            "extra": "mean: 357.4798517523938 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1806267.7671746043,
            "unit": "iter/sec",
            "range": "stddev: 3.873214639131326e-7",
            "extra": "mean: 553.6277722347562 nsec\nrounds: 95230"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1649666.756379992,
            "unit": "iter/sec",
            "range": "stddev: 0.000001189925402586927",
            "extra": "mean: 606.183034320225 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1369328.1959799344,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011093234296643204",
            "extra": "mean: 730.2851156762813 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1647514.9785967125,
            "unit": "iter/sec",
            "range": "stddev: 6.695191693736696e-7",
            "extra": "mean: 606.9747547011125 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1452943.1469190675,
            "unit": "iter/sec",
            "range": "stddev: 0.000002807050462976378",
            "extra": "mean: 688.2581759103768 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1611906.7997617319,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012919977515938725",
            "extra": "mean: 620.3832629453623 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4862321.777280426,
            "unit": "iter/sec",
            "range": "stddev: 6.3913754134818e-8",
            "extra": "mean: 205.66306505524693 nsec\nrounds: 48544"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6214353.644764698,
            "unit": "iter/sec",
            "range": "stddev: 1.5155332894368764e-7",
            "extra": "mean: 160.9177811827925 nsec\nrounds: 64931"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7309055.166565719,
            "unit": "iter/sec",
            "range": "stddev: 2.6239541745487625e-7",
            "extra": "mean: 136.81658945113918 nsec\nrounds: 78741"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdad08ce6af8218a3db79f4046619e1a0ac5a9c2",
          "message": "Merge pull request #1717 from messense/pyerr-fetch\n\nChange `PyErr::fetch` to return an `Option<PyErr>`",
          "timestamp": "2021-08-12T00:24:15+01:00",
          "tree_id": "e11d5171de82c9bece6fb5e954039f0b16a3ac3e",
          "url": "https://github.com/PyO3/pyo3/commit/bdad08ce6af8218a3db79f4046619e1a0ac5a9c2"
        },
        "date": 1628725950250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 10178555.900323061,
            "unit": "iter/sec",
            "range": "stddev: 1.2979125657821622e-8",
            "extra": "mean: 98.2457639171274 nsec\nrounds: 86207"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 11122762.635157226,
            "unit": "iter/sec",
            "range": "stddev: 1.2250513043732927e-8",
            "extra": "mean: 89.90572151917786 nsec\nrounds: 105264"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 4249481.5861211885,
            "unit": "iter/sec",
            "range": "stddev: 5.8702960835793747e-8",
            "extra": "mean: 235.32282226271576 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2706814.167076721,
            "unit": "iter/sec",
            "range": "stddev: 7.742764846800326e-8",
            "extra": "mean: 369.43799547204867 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3856325.6315754075,
            "unit": "iter/sec",
            "range": "stddev: 4.7475185056569766e-8",
            "extra": "mean: 259.3142010133066 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2490299.7246064097,
            "unit": "iter/sec",
            "range": "stddev: 7.221208227645193e-8",
            "extra": "mean: 401.55808962232794 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 2273478.2667284603,
            "unit": "iter/sec",
            "range": "stddev: 7.870737358040036e-8",
            "extra": "mean: 439.85465558863297 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1931498.8946180157,
            "unit": "iter/sec",
            "range": "stddev: 9.135966918104295e-8",
            "extra": "mean: 517.7326286779872 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 2236603.1055285074,
            "unit": "iter/sec",
            "range": "stddev: 9.038049174525707e-8",
            "extra": "mean: 447.10659550117526 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1987636.1455452656,
            "unit": "iter/sec",
            "range": "stddev: 9.672116063596039e-8",
            "extra": "mean: 503.1101905855535 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 3000868.3187261987,
            "unit": "iter/sec",
            "range": "stddev: 6.348802029754998e-8",
            "extra": "mean: 333.23688139138983 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 6140678.28699011,
            "unit": "iter/sec",
            "range": "stddev: 1.800491666693731e-8",
            "extra": "mean: 162.848459610507 nsec\nrounds: 54642"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 6817476.222613237,
            "unit": "iter/sec",
            "range": "stddev: 2.9146284616690043e-8",
            "extra": "mean: 146.68184638211545 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 9639018.264210343,
            "unit": "iter/sec",
            "range": "stddev: 1.3930872566281529e-8",
            "extra": "mean: 103.74500520582757 nsec\nrounds: 85471"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d197357478618ebabc36079466656d9c97f15d1b",
          "message": "Merge pull request #1785 from davidhewitt/pin-bitflags\n\nci: pin bitflags for MSRV job",
          "timestamp": "2021-08-12T10:31:13+08:00",
          "tree_id": "dada4d46bccfd93cd89d11cc87b72599bbb06ef0",
          "url": "https://github.com/PyO3/pyo3/commit/d197357478618ebabc36079466656d9c97f15d1b"
        },
        "date": 1628735555997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7252312.865248305,
            "unit": "iter/sec",
            "range": "stddev: 3.391276829301981e-7",
            "extra": "mean: 137.8870463231194 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8580041.364440382,
            "unit": "iter/sec",
            "range": "stddev: 1.6190785225170462e-7",
            "extra": "mean: 116.54955466111036 nsec\nrounds: 77514"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3103171.4874324924,
            "unit": "iter/sec",
            "range": "stddev: 5.96642396462353e-7",
            "extra": "mean: 322.25096294171567 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1929480.6913872014,
            "unit": "iter/sec",
            "range": "stddev: 0.000001346952258384087",
            "extra": "mean: 518.2741679994435 nsec\nrounds: 100000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2807557.4182118224,
            "unit": "iter/sec",
            "range": "stddev: 9.835111953777977e-7",
            "extra": "mean: 356.18149552800963 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1786021.2289558456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010744700312873488",
            "extra": "mean: 559.9037591423081 nsec\nrounds: 41153"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1708949.5631146727,
            "unit": "iter/sec",
            "range": "stddev: 7.275689023421891e-7",
            "extra": "mean: 585.1547767024007 nsec\nrounds: 90910"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 993617.7287815247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014684612595369591",
            "extra": "mean: 1.006423266246174 usec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1722258.3006498427,
            "unit": "iter/sec",
            "range": "stddev: 6.091894366589573e-7",
            "extra": "mean: 580.632997746419 nsec\nrounds: 90091"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 903019.5218889414,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027223515779158717",
            "extra": "mean: 1.1073957713657003 usec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1572316.0675669864,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035028795138416484",
            "extra": "mean: 636.0044399644198 nsec\nrounds: 135136"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4628545.171789123,
            "unit": "iter/sec",
            "range": "stddev: 1.8559856606981733e-7",
            "extra": "mean: 216.05060831957297 nsec\nrounds: 46949"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5649176.556909725,
            "unit": "iter/sec",
            "range": "stddev: 4.296624902162742e-7",
            "extra": "mean: 177.016949271448 nsec\nrounds: 61346"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7337854.981394838,
            "unit": "iter/sec",
            "range": "stddev: 1.3073690707989704e-7",
            "extra": "mean: 136.27960794201854 nsec\nrounds: 77514"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a7c4f495bd8fe04c643a67284a70067673d656c",
          "message": "Merge pull request #1784 from davidhewitt/gh-actions-pages-v3\n\nguide: allow using newer gh-actions-pages version",
          "timestamp": "2021-08-12T10:32:35+08:00",
          "tree_id": "0ef0f5881e4b7e04f55cfb4c4f09ef6638fe6f9f",
          "url": "https://github.com/PyO3/pyo3/commit/2a7c4f495bd8fe04c643a67284a70067673d656c"
        },
        "date": 1628736495084,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 6869060.458797316,
            "unit": "iter/sec",
            "range": "stddev: 1.2256000338173294e-7",
            "extra": "mean: 145.5803171337197 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 6971259.782435016,
            "unit": "iter/sec",
            "range": "stddev: 9.863224220613184e-7",
            "extra": "mean: 143.44609600122737 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3028265.4531126535,
            "unit": "iter/sec",
            "range": "stddev: 2.064480822040634e-8",
            "extra": "mean: 330.22204145675295 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 1932657.260085354,
            "unit": "iter/sec",
            "range": "stddev: 3.097952127872262e-8",
            "extra": "mean: 517.4223183038288 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2725757.4226950323,
            "unit": "iter/sec",
            "range": "stddev: 1.7996413147781637e-8",
            "extra": "mean: 366.87050420354325 nsec\nrounds: 192271"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1784666.2989344753,
            "unit": "iter/sec",
            "range": "stddev: 2.7687678503400865e-8",
            "extra": "mean: 560.3288416427457 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1655480.734020102,
            "unit": "iter/sec",
            "range": "stddev: 2.0716760878704577e-8",
            "extra": "mean: 604.0541453910304 nsec\nrounds: 81295"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1451850.0485091612,
            "unit": "iter/sec",
            "range": "stddev: 2.5945233558614106e-8",
            "extra": "mean: 688.7763657318524 nsec\nrounds: 69926"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1647585.6639949149,
            "unit": "iter/sec",
            "range": "stddev: 2.009405019173241e-8",
            "extra": "mean: 606.9487140202483 nsec\nrounds: 80639"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1471673.717806678,
            "unit": "iter/sec",
            "range": "stddev: 2.4495998159010232e-8",
            "extra": "mean: 679.4984430993935 nsec\nrounds: 71938"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1535902.5153340367,
            "unit": "iter/sec",
            "range": "stddev: 1.1111187936138338e-7",
            "extra": "mean: 651.0829886768656 nsec\nrounds: 172385"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4229972.121856725,
            "unit": "iter/sec",
            "range": "stddev: 1.3133031984888823e-8",
            "extra": "mean: 236.40817745165245 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 4800779.614947388,
            "unit": "iter/sec",
            "range": "stddev: 1.2468122114616892e-8",
            "extra": "mean: 208.29950137401534 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 6944030.861585646,
            "unit": "iter/sec",
            "range": "stddev: 5.283363967251748e-9",
            "extra": "mean: 144.00857656497573 nsec\nrounds: 63691"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "messense@icloud.com",
            "name": "messense",
            "username": "messense"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c734ef72a57dba0786d38693a927d9b8b10d475",
          "message": "Merge pull request #1783 from PyO3/davidhewitt-patch-1\n\nchangelog: fix missing PR number",
          "timestamp": "2021-08-12T10:33:10+08:00",
          "tree_id": "f56e99f6ddb7749a6019caf2ae2c63194aa859be",
          "url": "https://github.com/PyO3/pyo3/commit/4c734ef72a57dba0786d38693a927d9b8b10d475"
        },
        "date": 1628736532915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8755398.664290205,
            "unit": "iter/sec",
            "range": "stddev: 4.225746118427945e-9",
            "extra": "mean: 114.21524459854346 nsec\nrounds: 69931"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9483098.535055121,
            "unit": "iter/sec",
            "range": "stddev: 4.402881410636704e-9",
            "extra": "mean: 105.45076551753108 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3432603.9420489455,
            "unit": "iter/sec",
            "range": "stddev: 1.671214650135278e-8",
            "extra": "mean: 291.3240259820521 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2162922.4593012594,
            "unit": "iter/sec",
            "range": "stddev: 2.894748607894174e-8",
            "extra": "mean: 462.33742485758347 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3295975.1023207684,
            "unit": "iter/sec",
            "range": "stddev: 1.864164073571718e-8",
            "extra": "mean: 303.4003501109168 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1976565.2384649217,
            "unit": "iter/sec",
            "range": "stddev: 2.8028949776952283e-8",
            "extra": "mean: 505.92815280752484 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1947086.1041546687,
            "unit": "iter/sec",
            "range": "stddev: 2.911310023459763e-8",
            "extra": "mean: 513.587970181112 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1650934.5214162094,
            "unit": "iter/sec",
            "range": "stddev: 2.9896749067016594e-8",
            "extra": "mean: 605.7175418089657 nsec\nrounds: 149232"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1927640.073952478,
            "unit": "iter/sec",
            "range": "stddev: 2.9237621138749633e-8",
            "extra": "mean: 518.7690448611135 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1657304.6274726698,
            "unit": "iter/sec",
            "range": "stddev: 3.299341403731196e-8",
            "extra": "mean: 603.3893729752522 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1784429.9420072304,
            "unit": "iter/sec",
            "range": "stddev: 1.1136991474017957e-7",
            "extra": "mean: 560.4030600804322 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5283364.48737511,
            "unit": "iter/sec",
            "range": "stddev: 8.93280564246529e-8",
            "extra": "mean: 189.27333186825183 nsec\nrounds: 47847"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5766842.712117711,
            "unit": "iter/sec",
            "range": "stddev: 5.233515642885969e-9",
            "extra": "mean: 173.40511089351153 nsec\nrounds: 56180"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8329856.856200732,
            "unit": "iter/sec",
            "range": "stddev: 4.21438853012905e-9",
            "extra": "mean: 120.05008216379672 nsec\nrounds: 81301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0b269c4d3d64ea2effb2c687493b05ff3520e502",
          "message": "Merge pull request #1678 from sansyrox/main\n\nAdd documentation to call async python from rust",
          "timestamp": "2021-08-12T08:58:46+01:00",
          "tree_id": "a5dbadda5e0bda4e15bca77d095992d390026a07",
          "url": "https://github.com/PyO3/pyo3/commit/0b269c4d3d64ea2effb2c687493b05ff3520e502"
        },
        "date": 1628755241074,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8781072.086830216,
            "unit": "iter/sec",
            "range": "stddev: 3.0722558423331485e-9",
            "extra": "mean: 113.88131085948558 nsec\nrounds: 77514"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9242506.549603766,
            "unit": "iter/sec",
            "range": "stddev: 3.981499097333492e-9",
            "extra": "mean: 108.19575778857502 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3654713.07244783,
            "unit": "iter/sec",
            "range": "stddev: 1.1675655867437657e-8",
            "extra": "mean: 273.61929108468803 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2259150.9997771103,
            "unit": "iter/sec",
            "range": "stddev: 3.482723856218485e-7",
            "extra": "mean: 442.64416150066666 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3283814.08061001,
            "unit": "iter/sec",
            "range": "stddev: 1.3210269276127452e-8",
            "extra": "mean: 304.5239393742527 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1975437.7286295127,
            "unit": "iter/sec",
            "range": "stddev: 2.3999802257761658e-8",
            "extra": "mean: 506.21691866426556 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1947806.2511614491,
            "unit": "iter/sec",
            "range": "stddev: 2.737596512531883e-8",
            "extra": "mean: 513.3980853609851 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1726932.9979398998,
            "unit": "iter/sec",
            "range": "stddev: 3.849652982393253e-8",
            "extra": "mean: 579.0612613188574 nsec\nrounds: 153823"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1966077.511604145,
            "unit": "iter/sec",
            "range": "stddev: 1.4689693224415011e-8",
            "extra": "mean: 508.6269458341011 nsec\nrounds: 96154"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1722788.995613993,
            "unit": "iter/sec",
            "range": "stddev: 2.3999205840284058e-8",
            "extra": "mean: 580.4541371846469 nsec\nrounds: 149232"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 2607189.0515904664,
            "unit": "iter/sec",
            "range": "stddev: 1.141410178774023e-8",
            "extra": "mean: 383.55484785036634 nsec\nrounds: 31055"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 5310862.824236293,
            "unit": "iter/sec",
            "range": "stddev: 4.208810499870486e-9",
            "extra": "mean: 188.2933212728197 nsec\nrounds: 49749"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5452985.278854624,
            "unit": "iter/sec",
            "range": "stddev: 1.2099172020637569e-8",
            "extra": "mean: 183.38578757544573 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8148040.790341597,
            "unit": "iter/sec",
            "range": "stddev: 6.5268116373747115e-9",
            "extra": "mean: 122.72888977005725 nsec\nrounds: 78119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "874e7e5cab2985a58958975c652d7d169b90acb1",
          "message": "Merge pull request #1787 from davidhewitt/ffi-pystate\n\nffi: cleanup pystate",
          "timestamp": "2021-08-13T12:36:37+01:00",
          "tree_id": "4d62ce03aa0e008c25704e15947026d363041eb9",
          "url": "https://github.com/PyO3/pyo3/commit/874e7e5cab2985a58958975c652d7d169b90acb1"
        },
        "date": 1628854683113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7199688.484127749,
            "unit": "iter/sec",
            "range": "stddev: 4.840434802303613e-7",
            "extra": "mean: 138.89489832843594 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9074158.876090994,
            "unit": "iter/sec",
            "range": "stddev: 7.406281522070523e-8",
            "extra": "mean: 110.2030517269773 nsec\nrounds: 82645"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3327227.151976365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010667127506125998",
            "extra": "mean: 300.5505648768112 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2073395.6019792517,
            "unit": "iter/sec",
            "range": "stddev: 3.9329368231764436e-7",
            "extra": "mean: 482.30062755282205 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2921262.2508185124,
            "unit": "iter/sec",
            "range": "stddev: 4.981776752903469e-7",
            "extra": "mean: 342.31777709094706 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1853055.8544355852,
            "unit": "iter/sec",
            "range": "stddev: 5.004940762297626e-7",
            "extra": "mean: 539.6491409614239 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1847551.7756270168,
            "unit": "iter/sec",
            "range": "stddev: 2.84282611556498e-7",
            "extra": "mean: 541.2568206166176 nsec\nrounds: 97088"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1461730.5169590346,
            "unit": "iter/sec",
            "range": "stddev: 5.742405498305489e-7",
            "extra": "mean: 684.1206285275849 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1763666.7589054115,
            "unit": "iter/sec",
            "range": "stddev: 5.260802173135206e-7",
            "extra": "mean: 567.0005373469376 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1533507.1733477267,
            "unit": "iter/sec",
            "range": "stddev: 6.681747315346949e-7",
            "extra": "mean: 652.0999819107122 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1667680.534853045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016737037309504749",
            "extra": "mean: 599.635229350518 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4785780.560671593,
            "unit": "iter/sec",
            "range": "stddev: 8.42062881728787e-8",
            "extra": "mean: 208.95233020453736 nsec\nrounds: 53476"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5978132.339265239,
            "unit": "iter/sec",
            "range": "stddev: 2.9223469889654135e-7",
            "extra": "mean: 167.27632364908902 nsec\nrounds: 66226"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7859675.071140098,
            "unit": "iter/sec",
            "range": "stddev: 6.239399263054568e-8",
            "extra": "mean: 127.23172280646482 nsec\nrounds: 85471"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "388c2552f8c8a0b1629564c44d41480892407fb1",
          "message": "Merge pull request #1786 from mejrs/with_gil2\n\ntests: switch to python_with_gil",
          "timestamp": "2021-08-13T12:39:17+01:00",
          "tree_id": "90b5411557f3b4d39105a908349603b8259be5cd",
          "url": "https://github.com/PyO3/pyo3/commit/388c2552f8c8a0b1629564c44d41480892407fb1"
        },
        "date": 1628856199399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7295069.41274737,
            "unit": "iter/sec",
            "range": "stddev: 2.8885174026134146e-8",
            "extra": "mean: 137.0788875911214 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8217772.962201427,
            "unit": "iter/sec",
            "range": "stddev: 2.3901644631260674e-8",
            "extra": "mean: 121.68746990203856 nsec\nrounds: 69440"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3142879.905974165,
            "unit": "iter/sec",
            "range": "stddev: 6.492524489585747e-8",
            "extra": "mean: 318.179513667521 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2017984.4667687002,
            "unit": "iter/sec",
            "range": "stddev: 1.000389597791935e-7",
            "extra": "mean: 495.54395312112916 nsec\nrounds: 161265"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2849721.9966557985,
            "unit": "iter/sec",
            "range": "stddev: 7.413174365302749e-8",
            "extra": "mean: 350.91142264875964 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1823604.3791137,
            "unit": "iter/sec",
            "range": "stddev: 1.2062278102094615e-7",
            "extra": "mean: 548.3645528893942 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1723821.1317749708,
            "unit": "iter/sec",
            "range": "stddev: 8.668696973910048e-8",
            "extra": "mean: 580.1065908562783 nsec\nrounds: 87720"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1477052.512651247,
            "unit": "iter/sec",
            "range": "stddev: 9.002005427029367e-8",
            "extra": "mean: 677.023999779827 nsec\nrounds: 72459"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1683761.6455285694,
            "unit": "iter/sec",
            "range": "stddev: 8.698898000499333e-8",
            "extra": "mean: 593.9082901999894 nsec\nrounds: 87712"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1544345.133188729,
            "unit": "iter/sec",
            "range": "stddev: 9.240012405151774e-8",
            "extra": "mean: 647.5236516175362 nsec\nrounds: 71938"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1613574.881989218,
            "unit": "iter/sec",
            "range": "stddev: 3.626925932085066e-7",
            "extra": "mean: 619.7419228336017 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4438540.983741305,
            "unit": "iter/sec",
            "range": "stddev: 4.4956613712107536e-8",
            "extra": "mean: 225.29926019912094 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5006715.476655166,
            "unit": "iter/sec",
            "range": "stddev: 4.4500223336712606e-8",
            "extra": "mean: 199.7317412309173 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7155965.26459638,
            "unit": "iter/sec",
            "range": "stddev: 1.795266662503229e-8",
            "extra": "mean: 139.74355143224062 nsec\nrounds: 64512"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e44920ef9ced41072f415b29de156b1cb6e518f9",
          "message": "Merge pull request #1790 from PyO3/davidhewitt-patch-1\n\nffi: fix PyPy symbols for `cpython/pystate.rs`",
          "timestamp": "2021-08-13T15:07:29+01:00",
          "tree_id": "b9469eef63f1caaca1b12ab6251a6f272822bd46",
          "url": "https://github.com/PyO3/pyo3/commit/e44920ef9ced41072f415b29de156b1cb6e518f9"
        },
        "date": 1628863776272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 7051016.37073657,
            "unit": "iter/sec",
            "range": "stddev: 7.00625364789641e-7",
            "extra": "mean: 141.82352549204663 nsec\nrounds: 21787"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 8871403.227482308,
            "unit": "iter/sec",
            "range": "stddev: 1.798988664564462e-7",
            "extra": "mean: 112.72173909330827 nsec\nrounds: 81968"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3230257.1332056294,
            "unit": "iter/sec",
            "range": "stddev: 8.451676572540764e-7",
            "extra": "mean: 309.57287880254916 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2011304.8107962275,
            "unit": "iter/sec",
            "range": "stddev: 7.934016706977641e-7",
            "extra": "mean: 497.18968235549613 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 2888549.1196974595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014134894524858413",
            "extra": "mean: 346.1945629313336 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 1707026.2648388348,
            "unit": "iter/sec",
            "range": "stddev: 8.019958692284561e-7",
            "extra": "mean: 585.8140677727548 nsec\nrounds: 99010"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1586195.0062281408,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012915946646519356",
            "extra": "mean: 630.4395084298271 nsec\nrounds: 89286"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1549026.308061431,
            "unit": "iter/sec",
            "range": "stddev: 8.674814081411882e-7",
            "extra": "mean: 645.5668278814476 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1708475.5579405574,
            "unit": "iter/sec",
            "range": "stddev: 8.066504508746826e-7",
            "extra": "mean: 585.3171240011209 nsec\nrounds: 102041"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1587676.0334668318,
            "unit": "iter/sec",
            "range": "stddev: 8.439429530068021e-7",
            "extra": "mean: 629.8514173679248 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1621237.7606818583,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075327698538831664",
            "extra": "mean: 616.8126750140715 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4690941.108057124,
            "unit": "iter/sec",
            "range": "stddev: 2.6554454413133e-7",
            "extra": "mean: 213.17683956475364 nsec\nrounds: 50762"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5694232.547477415,
            "unit": "iter/sec",
            "range": "stddev: 3.346228117461637e-7",
            "extra": "mean: 175.6162909856954 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 7566594.039355212,
            "unit": "iter/sec",
            "range": "stddev: 1.1001050195799598e-7",
            "extra": "mean: 132.1598588213534 nsec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1939362+davidhewitt@users.noreply.github.com",
            "name": "David Hewitt",
            "username": "davidhewitt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "254ea53f3f30cd40354bdb1654826266502b159a",
          "message": "Merge pull request #1789 from davidhewitt/example-word-count\n\nexamples: make `word-count` example comparison fairer",
          "timestamp": "2021-08-13T15:08:16+01:00",
          "tree_id": "156ea2411f777961284528c2407cc35a1b85ba13",
          "url": "https://github.com/PyO3/pyo3/commit/254ea53f3f30cd40354bdb1654826266502b159a"
        },
        "date": 1628863795617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_none_py",
            "value": 8750763.973549739,
            "unit": "iter/sec",
            "range": "stddev: 4.280200801705069e-9",
            "extra": "mean: 114.2757367267879 nsec\nrounds: 71424"
          },
          {
            "name": "tests/test_benchmarks.py::test_none_rs",
            "value": 9310801.375093542,
            "unit": "iter/sec",
            "range": "stddev: 4.26796478413623e-9",
            "extra": "mean: 107.40214077328478 nsec\nrounds: 88496"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_py",
            "value": 3612826.877564684,
            "unit": "iter/sec",
            "range": "stddev: 1.0417724474630823e-7",
            "extra": "mean: 276.79156347314483 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_rs",
            "value": 2266597.2336463397,
            "unit": "iter/sec",
            "range": "stddev: 2.8244225471977777e-8",
            "extra": "mean: 441.1899852147168 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_py",
            "value": 3245755.836138726,
            "unit": "iter/sec",
            "range": "stddev: 7.137079111922184e-8",
            "extra": "mean: 308.0946474364621 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_rs",
            "value": 2094021.1896937224,
            "unit": "iter/sec",
            "range": "stddev: 3.6119803171264194e-7",
            "extra": "mean: 477.55008637020904 nsec\nrounds: 181786"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_py",
            "value": 1932914.0009206927,
            "unit": "iter/sec",
            "range": "stddev: 4.672578556799024e-8",
            "extra": "mean: 517.3535912742858 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_kwargs_rs",
            "value": 1769103.1784683391,
            "unit": "iter/sec",
            "range": "stddev: 1.982262434468625e-8",
            "extra": "mean: 565.2581557544058 nsec\nrounds: 86957"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_py",
            "value": 1922832.50414083,
            "unit": "iter/sec",
            "range": "stddev: 2.2736285596818743e-7",
            "extra": "mean: 520.0660992816042 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmarks.py::test_simple_args_kwargs_rs",
            "value": 1737024.5655470912,
            "unit": "iter/sec",
            "range": "stddev: 9.091497434823392e-8",
            "extra": "mean: 575.6970971133594 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_py",
            "value": 1744343.89079265,
            "unit": "iter/sec",
            "range": "stddev: 1.0816295083267521e-7",
            "extra": "mean: 573.2814528593834 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_args_kwargs_rs",
            "value": 4985820.374505428,
            "unit": "iter/sec",
            "range": "stddev: 9.279343043448226e-9",
            "extra": "mean: 200.5687980887863 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init",
            "value": 5944245.367253698,
            "unit": "iter/sec",
            "range": "stddev: 4.525249278626618e-9",
            "extra": "mean: 168.2299330220116 nsec\nrounds: 54943"
          },
          {
            "name": "tests/test_benchmarks.py::test_empty_class_init_py",
            "value": 8342158.370223034,
            "unit": "iter/sec",
            "range": "stddev: 4.636718193049341e-9",
            "extra": "mean: 119.87305390521361 nsec\nrounds: 82645"
          }
        ]
      }
    ]
  }
}