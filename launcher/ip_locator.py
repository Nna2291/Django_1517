import subprocess


def locate():
    x = subprocess.run(['ipconfig', 'getifaddr', 'en0'], capture_output=True)
    x = str(x.stdout)
    return x[2:len(x) - 3]
