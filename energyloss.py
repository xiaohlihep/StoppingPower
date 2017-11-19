from math import sqrt, log,pow
import matplotlib.pyplot as plt
import numpy as np
import pylab
import sys

def computeStoppingPower(m, q, E, ro, Z, A, I):
    G =0 #gamma
    B=0 #beta^2
    t=0  
    k = 0.307075
    g = 1 + (E/m)
    G = g
    b2 = 1 - (1/(g*g))
    B = b2
    T = (1.022*b2*g*g) / (1 + 2*g*(0.511/m) + pow(0.511/m,2) )
    t = T
    SP = ((ro*k*q*q*Z)/(A*b2))*(0.5*log( (1.022*b2*g*g*T) / (I*I) ) - b2)
    return G,B, t, SP

def transport(thickness,step, m, q, E, ro, Z, A, I):
    '''
    Thickness: (cm)
    Step size (cm)
    A: mass number
    ro: density in units of g/cm3
    E: initial energy in units of MeV
    q: charge in units of (e+)
    Z: atomic number
    I can be found at
    http://geant4.web.cern.ch/geant4/workAreaUserDocKA/Backup/Docbook_UsersGuides_beta/ForApplicationDeveloper/html/apas08.html
    '''
    distance=0
    totalSP=0
    nsteps=1
    T=0
    while distance<thickness and E>0:
        nsteps+=1
        G=0
        B=0
        G,B,T,SP = computeStoppingPower(m, q, E, ro, Z, A, I)
        totalSP+= SP;
        E = E - SP*step;
        distance+= step;
    return totalSP/nsteps,E, distance,nsteps,T


def reverseTransport(thickness,step, m, q, E0, ro, Z, A, I):
    '''
    Thickness: (cm)
    Step size (cm)
    A: mass number
    ro: density in units of g/cm3
    E: initial energy in units of MeV
    q: charge in units of (e+)
    Z: atomic number
    I can be found at
    http://geant4.web.cern.ch/geant4/workAreaUserDocKA/Backup/Docbook_UsersGuides_beta/ForApplicationDeveloper/html/apas08.html
    '''
    distance=0
    totalSP=0
    nsteps=1
    T=0
    while distance<thickness :
        nsteps+=1
        G=0
        B=0
        G,B,T,SP = computeStoppingPower(m, q, E0, ro, Z, A, I)
        totalSP+= SP;
        E0 = E0 + SP*step;
        distance+= step;
    return totalSP/nsteps,E0, distance,nsteps,T


def computeRange(step,m,q, E,ro,Z,A,I):
    distance=0
    totalSP=0
    nsteps=1
    T=0
    while E>0:
        nsteps+=1
        G=0
        B=0
        G,B,T,SP = computeStoppingPower(m, q, E, ro, Z, A, I)
        totalSP+= SP;
        E = E - SP*step
        distance+= step
    return distance




def transportProtonInCopper(E, thickness):
    m=938.0
    ro=8.96
    I=322e-6
    Z=29.0
    A=63.5
    step= 1e-3 # 10 um
    q=1.0
    return transport(thickness,step, m, q,E, ro, Z, A, I)

def drawStoppingPower(E):

    x,y=computeStoppingPowerVsCopperThickness(E)
    print 'thickness (mm), Exit energy'
    for i in range(0,len(x)):
        print x[i],y[i]

    plt.plot(x,y,'ro-')
    plt.xlabel("Thickness(mm) ")
    plt.ylabel("Exit Energy (MeV) ")
    plt.title( " Exit energy vs. Cu thickness ")
    pylab.show()



def computeStoppingPowerVsCopperThickness(E):
    x=[]
    y=[]
    for thickness in np.arange(0,7,0.05):
        res=transportProtonInCopper(E,thickness)
        if res[1]<0:
            break
        x.append(thickness*10)
        y.append(res[1])
    return x, y




def computeCopperThickness(E0,E):
    Llst,Elst=computeStoppingPowerVsCopperThickness(E0)
    Lok=Llst[0]
    Eok=Elst[0]
    closest=E0
    for i in range(0,len(Llst)):
        if abs(Elst[i]-E)<closest:
            Lok=Llst[i]
            Eok=Elst[i]
            closest=abs(Elst[i]-E)

    return Eok,Lok

     


if __name__=='__main__':
    if len(sys.argv)==1:
        print('Stopping power of Copper for protons  calculation') 
        print('''Usage: 
                StoppingPower <Ep (MeV)>   
                StoppingPower <Ep (MeV)>   [Thickness (mm)]
                StoppingPower <Ep (MeV)>   <Eexit> Exit
                ''')

    elif len(sys.argv)==2:
        E=float(sys.argv[1])
        drawStoppingPower(E)
    elif len(sys.argv)==3: 
        E=float(sys.argv[1])
        thickness=float(sys.argv[2])*0.1
        res=transportProtonInCopper(E,thickness)
        print('Proton initial energy (MeV): %f\n'%E +
                'Copper thickness (cm): %f\n'%thickness +
                'Exit energy (MeV):%f\n'%res[1]+
                'Mean stopping power(MeV/cm):%f\n'%res[0]+
                'Proton range(cm):%f\n'%res[2]+
                'Steps:%f\n'%res[3]+
                'Maximum transferred energy in a single collision (MeV):%f\n'%res[4])

    else:
        E0=float(sys.argv[1])
        E=float(sys.argv[2])
        thickness,Ec=computeCopperThickness(E0,E)
        print ('Closest Energy: %.1f\n Degrader thickness:%.1f\n'%(thickness,Ec))




